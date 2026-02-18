import type { Metadata } from 'next';
import PageContainer from '@/components/layout/PageContainer';
import CheckFitForm from '@/components/features/CheckFitForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Check Fit | Anton Solovyov',
  description:
    'Compare a job description to Anton Solovyov’s profile and get a quick fit analysis.',
};

export default function CheckFitPage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-text-muted transition-colors duration-150 hover:border-accent-primary/40 hover:text-accent-primary"
        >
          ← Back
        </Link>
        <CheckFitForm />
        <p className="text-sm text-text-secondary max-w-2xl">
          Want to discuss the results or next steps? Reach out via the contact links.
        </p>
      </div>
    </PageContainer>
  );
}
