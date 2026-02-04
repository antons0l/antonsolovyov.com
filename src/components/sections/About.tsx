export default function About() {
  return (
    <section id="about" className="mb-[120px] scroll-mt-24">
      <p className="mb-5 text-text-primary text-4xl font-bold">Hey, I&apos;m Anton!</p>
      <h2 className="flex items-center gap-3 text-[28px] font-bold text-text-primary mb-2 max-sm:text-[22px]">
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
      <div className="mt-6 rounded-2xl bg-bg-secondary p-5 flex flex-col text-center">
        <p className="text-[15px] text-text-secondary leading-[1.6]">
          If you have a job opportunity, check how it matches my profile.
        </p>
        <div className="mt-3">
          <a
            href="/check-fit"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-accent-primary text-bg-primary text-md font-semibold transition-all duration-150 hover:brightness-110 cursor-pointer"
          >
            See if it&apos;s a match
          </a>
        </div>
      </div>
    </section>
  );
}
