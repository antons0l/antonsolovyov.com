import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-[120px] sm:text-[160px] font-bold text-text-primary leading-none">
          404
        </h1>
        <h2 className="text-xl font-semibold text-text-primary mt-6 mb-2">
          Page Not Found
        </h2>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent-primary text-accent-primary rounded-lg text-sm font-semibold transition-colors duration-150 hover:bg-accent-primary hover:text-bg-primary"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
