export default function About() {
  return (
    <section id="about" className="mb-[120px] scroll-mt-24">
      <p className="mb-4 text-text-primary text-4xl font-bold tracking-tight">Hey, I&apos;m Anton.</p>
      <h2 className="section-title">About me</h2>

      <div className="space-y-4 text-base">
        <p>
          I&apos;m a backend-leaning full-stack software engineer with expertise in building scalable web
          applications in web3 and fintech.
        </p>
        <p>
          My journey in tech has taken me through diverse environments, from early-stage startups to big tech.
          I specialize in creating intuitive user interfaces paired with robust server-side architectures that can
          scale to millions of users.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring the latest tech, going to conferences and meetups,
          or participating in hackathons.
        </p>
      </div>

      <div className="mt-8 content-card glass-panel p-6 text-center">
        <p className="text-[15px] text-text-secondary leading-[1.6]">
          If you have a job opportunity, check how it matches my profile.
        </p>
        <div className="mt-4">
          <a href="/check-fit" className="btn-primary text-sm">
            See if it&apos;s a match
          </a>
        </div>
      </div>
    </section>
  );
}
