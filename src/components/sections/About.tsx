export default function About() {
  return (
    <section id="about" className="mb-[120px] scroll-mt-24">
      <h2 className="text-2xl font-semibold text-text-primary mb-6 max-sm:text-xl">
        About Me
      </h2>
      <div>
        <p className="mb-5 text-base">
          I&apos;m a backend-leaning full-stack software engineer with expertise in building scalable web applications
          in web3 and fintech.
        </p>
        <p className="mb-5 text-base">
          My journey in tech has taken me through diverse environments, from early-stage startups to
          big tech. I specialize in creating intuitive user interfaces paired with robust server-side architectures
          that can scale to millions of users.
        </p>
        <p className="mb-5 text-base">
          When I&apos;m not coding, you can find me exploring the latest tech, going to conferences and meetups, or participating in hackathons.
        </p>
      </div>
      <div className="mt-8 pl-5 border-l-2 border-accent-primary">
        <p className="text-sm text-text-secondary mb-3">
          Have a job opportunity? Check how it matches my profile.
        </p>
        <a
          href="/check-fit"
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent-primary transition-colors duration-150 hover:underline"
        >
          See if it&apos;s a match &rarr;
        </a>
      </div>
    </section>
  );
}
