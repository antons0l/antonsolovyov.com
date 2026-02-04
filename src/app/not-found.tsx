import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-[150px] sm:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 leading-none">
            404
          </h1>
          <div className="absolute inset-0 text-[150px] sm:text-[200px] font-bold text-purple-500/10 blur-2xl leading-none">
            404
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-4 mb-2">
          Page Not Found
        </h2>
        <p className="text-slate-400 text-lg max-w-md mx-auto mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Back Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
        >
          <svg
            className="w-5 h-5"
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

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <p className="text-slate-500 text-sm mb-4">Or check out these links:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/#about" className="text-slate-400 hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="/#experience" className="text-slate-400 hover:text-purple-400 transition-colors">
              Experience
            </Link>
            <Link href="/#projects" className="text-slate-400 hover:text-purple-400 transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="text-slate-400 hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
