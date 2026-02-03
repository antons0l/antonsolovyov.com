import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { resumeData } from '@/data/resume';

interface CheckFitRequest {
  jobDescription: string;
}

interface CheckFitAnalysis {
  matchScore: number;
  summary: string;
  strengths: string[];
  gaps: string[];
}

interface CheckFitResponse {
  success: boolean;
  message: string;
  resumeLoaded: boolean;
  analysis?: CheckFitAnalysis;
}

const CV_TEXT = `
Anton Solovyov 
         github.com/antons0l  •  antonsolovyov@gmail.com  •  linkedin.com/in/anton-solovyov   

SUMMARY 
Senior Full-Stack Software Engineer with extensive expertise in developing software solutions for Big Tech and 
startups. Skilled in exploring and integrating technologies to build products on both the back-end and front-end. 
Product-oriented, dedicated to contributing to cross-functional teams and leveraging Agile practices. Passionate 
about driving team success through effective communication and impactful innovation. 
 
● TypeScript, JavaScript, Go, Python, Java, Scala, SQL 
● React, Angular, NextJS, Node.js, Express, Tailwind CSS, NestJS, Nx 
● API architecture (SOAP/REST/GraphQL/tRPC), microservices, serverless, lambda 
● Docker, Kubernetes, Terraform, DevOps, CI/CD, KSH, Bash, Unix, SEO 
● PostgreSQL, MongoDB, Oracle DB, MySQL, Vercel, Firebase, Google Cloud, AWS, ORM (Prisma, Sequelize) 
● Git, Jira, Linear, Perforce, Jenkins, Github, GitKraken, Bitbucket, Sourcetree 
 
 
PROFESSIONAL EXPERIENCE 
Tea.xyz (Remote) - Open-Source Software startup, 1.5M users    Mar 2024 – Present 
Senior Full-Stack Developer 
● Worked with third-party vendors to integrate the latest tech solutions to meet product requirements. 
● Completed a full overhaul of the app’s front-end. 
● Rebuilt the backend APIs to optimize transaction cost. 
● Implemented a voting system that allows users to vote on proposals. 
 
Productfy (Remote) - B2B fintech platform for corporate card management  Jan 2023 – Feb 2024 
Senior Full-Stack Software Engineer 
● Developed the MVP of a digital bank web application for 10k users, utilizing Next.js for the front-end and a 
Golang API for the back-end. 
● Partnered with the risk management team to automate the intake of financial transaction data with Unit21 API. 
● Deployed batch jobs on AWS Lambda as part of the effort to remove legacy code. 
 
Rainmaker Games (Remote) - Gamers social platform startup     Feb 2022 – Jan 2023 
Lead Software Developer 
● Worked with the CTO to build the gaming portal MVP using React/Tailwind. 
● Built a Discord bot to collect and analyze user statistics and improve user engagement. 
● Increased daily user traffic by 30% through improving the website’s SEO. 
 
Rally (Montreal, QC) - Monetization platform for creators, 100k users   Jan 2020 – Jan 2022 
Senior Software Developer 
● Launched Public/OAuth API gateway project with the Swagger documentation and led a team of 3 developers. 
● Achieved API downtime of less than 0.1% by configuring Datadog production monitoring and alerts. 
● Increased sales by 90% through implementing the Coinbase wallet as the website’s payment method. 
● Hired and onboarded new developers, led knowledge-transfer sessions, and conducted peer reviews. 
 
Amdocs (Montreal, QC) - Multinational B2B company     Mar 2011 – Aug 2019 
Software Developer 
● Developed, customized and maintained software products for large telecom operators in Canada and LATAM. 
● Gained experience working with corporate clients to address their specific business needs. 
● Analyzed and investigated production failures while improving the performance of key system components. 
 
EDUCATION 
Technion – Israel Institute of Technology, Haifa, Israel     Sep 2006 – Aug 2010 
B.Sc. in Computer Science 
`;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * CheckFit API Endpoint
 *
 * This endpoint compares a job description against a provided CV
 * and returns a structured fit analysis.
 */
export async function POST(request: NextRequest): Promise<NextResponse<CheckFitResponse>> {
  try {
    const body: CheckFitRequest = await request.json();
    const { jobDescription } = body;

    if (!jobDescription || typeof jobDescription !== 'string') {
      return NextResponse.json(
        {
          success: false,
          message: 'Job description is required',
          resumeLoaded: false,
        },
        { status: 400 }
      );
    }

    // Verify resume data is available
    const hasResumeData = !!(
      resumeData.name &&
      resumeData.experience.length > 0 &&
      resumeData.skillCategories.length > 0
    );

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: 'OpenAI API key is not configured',
          resumeLoaded: hasResumeData,
        },
        { status: 500 }
      );
    }

    const systemPrompt = [
      'You are an expert technical recruiter and hiring manager.',
      'Evaluate how well the candidate matches the role.',
      'Return ONLY valid JSON with these keys:',
      'matchScore (0-100 number), summary (1-2 sentences),',
      'strengths (3-6 short bullet phrases),',
      'gaps (2-5 short bullet phrases).',
      'IMPORTANT: if job description is non-informative, you must act accordingly by giving it a very low matchScore and listing no strengths. Use your judgment.',
      'No markdown, no extra text.',
    ].join(' ');

    const userPrompt = [
      'Candidate CV:',
      CV_TEXT,
      '',
      'Job description:',
      jobDescription,
    ].join('\n');

    const response = await openai.responses.create({
      model: 'gpt-4.1-mini',
      input: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.2,
    });

    const outputText = response.output_text?.trim() ?? '';
    let analysis: CheckFitAnalysis | null = null;

    try {
      analysis = JSON.parse(outputText) as CheckFitAnalysis;
    } catch (parseError) {
      console.error('CheckFit API parse error:', parseError);
    }

    if (!analysis) {
      return NextResponse.json(
        {
          success: false,
          message: 'AI response could not be parsed',
          resumeLoaded: hasResumeData,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Fit analysis generated',
      resumeLoaded: hasResumeData,
      analysis,
    });
  } catch (error) {
    console.error('CheckFit API error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred processing the request',
        resumeLoaded: false,
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method for health check
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: 'ok',
    endpoint: 'CheckFit API',
    version: '1.0.0',
    resumeDataAvailable: !!resumeData,
  });
}
