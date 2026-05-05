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
Senior Full-Stack Software Engineer with a background in Web3 and fintech. Strong full-stack delivery across React/Next.js
front-end and TypeScript/Go/Java back-end systems, with hands-on ownership of API architecture and serverless
pipelines. Product-oriented engineering leader focused on team performance, delivery execution, and scalability.
 
● TypeScript, JavaScript, Go, Solidity, Java, Scala, Python 
● React, Next.js, Node.js, Express, web3.js, Safe, ethers.js, Alchemy, Web3Auth, Tailwind CSS, NestJS, Nx 
● API design (RESTful, GraphQL, tRPC), microservices, serverless, Lambda, blockchain, Web3, dApp, EVM L2 
● Docker, Kubernetes, Terraform, Git, Jira, DevOps, CI/CD, KSH, Bash, Unix, SEO 
● PostgreSQL, MongoDB, Oracle DB, MySQL, Vercel, Firebase, Google Cloud, AWS, ORM (Prisma, Sequelize) 
● Agentic Engineering, Generative AI, Cursor, Claude Code, OpenAI API
 
 
PROFESSIONAL EXPERIENCE 
Tea.xyz (Remote) - Open-Source Software Web3 startup, 1M users    Mar 2024 – Present 
Lead Software Engineer 
● Implemented ERC-4337 Account Abstraction to onboard Web2 users and sponsor gas fees. 
● Integrated custom smart contracts into the frontend. 
● Led spam detection initiative using zkPass KYC attestations and FingerprintJS. 
● Owned delivery of DAO governance functionality using the Tally API, coordinating across stakeholders. 
● Mentored engineers and set technical direction across frontend and backend systems.
 
Productfy (Remote) - B2B fintech platform for corporate card management  Jan 2023 – Feb 2024 
Senior Full-Stack Software Engineer 
● Developed the MVP of a digital banking web application for 10K users, utilizing Next.js for the front-end and a 
Golang API for the backend. 
● Partnered with the risk management team to automate the intake of financial transaction data with Unit21 API. 
 
Prism (Remote) - Web3 startup    Feb 2022 – Jan 2023 
Lead Software Developer 
● Collaborated with the CTO to define the technical roadmap and lead MVP delivery. 
● Implemented data scraping with OpenSea, 0x, and Rarible APIs for the NFT marketplace. 
● Built a Discord bot to collect and analyze user statistics and improve user engagement. 
 
Rally (Montreal, QC) - Web3 startup, creator monetization platform, 100K users   Jan 2020 – Jan 2022 
Senior Backend Software Engineer 
● Launched the Public API gateway project with Swagger documentation and led a team of 3 engineers. 
● Maintained API uptime above 99.9% by setting up Datadog production monitoring and alerts. 
● Increased sales by implementing Coinbase API payments. 
● Hired and onboarded new engineers, led knowledge transfer sessions, and conducted peer reviews. 
 
Amdocs (Montreal, QC) - Multinational telecom B2B company     Mar 2011 – Aug 2019 
Software Developer 
● Developed, customized, and maintained software solutions for large telecom operators in Canada and LATAM. 
● Worked closely with enterprise clients to address complex business and technical requirements. 
 
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
