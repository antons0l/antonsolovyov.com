'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Spinner } from '@/components/icons';

interface CheckFitAnalysis {
  matchScore: number;
  summary: string;
  strengths: string[];
  gaps: string[];
}

interface CheckFitResponse {
  success: boolean;
  message: string;
  analysis?: CheckFitAnalysis;
}

type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

export default function CheckFitCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [jobDescription, setJobDescription] = useState('');
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<CheckFitAnalysis | null>(null);

  const getMatchScoreBadgeClass = (score: number) => {
    if (score <= 30) return 'border-red-400/40 bg-red-400/30 text-red-400';
    if (score <= 70) return 'border-yellow-400/40 bg-yellow-400/30 text-yellow-300';
    return 'border-green-400/40 bg-green-400/30 text-green-300';
  };

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    setJobDescription('');
    setStatus('idle');
    setError(null);
    setAnalysis(null);
    document.body.style.overflow = '';
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  const handleSubmit = async () => {
    const trimmed = jobDescription.trim();
    if (!trimmed) {
      setStatus('error');
      setError('Paste a job description to evaluate fit.');
      return;
    }

    try {
      setStatus('loading');
      setError(null);
      setAnalysis(null);

      const response = await fetch('/api/check-fit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription: trimmed }),
      });

      const data: CheckFitResponse = await response.json();

      if (!response.ok || !data.success || !data.analysis) {
        throw new Error(data.message || 'Unable to generate fit analysis.');
      }

      setAnalysis(data.analysis);
      setStatus('success');
    } catch (submitError) {
      setStatus('error');
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Something went wrong while checking fit.'
      );
    }
  };

  const modalContent = isOpen ? (
    <div 
      className="fixed inset-0 z-9999 flex items-center justify-center px-6 bg-black/60 backdrop-blur-sm"
      onKeyDown={handleKeyDown}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Candidate fit check"
        className="relative w-full max-w-2xl rounded-2xl border border-border bg-bg-card p-6"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-text-secondary mb-2">
              For HR&apos;s and recruiters
            </p>
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              How does your job description match my profile?
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Matching skills, requirements, career trajectory and personal preferences.
            </p>

          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-text-muted transition-colors duration-150 hover:text-text-primary cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <textarea
          id="job-description"
          rows={6}
          value={jobDescription}
          onChange={(event) => setJobDescription(event.target.value)}
          placeholder="Paste the job description here..."
          className="w-full rounded-xl border border-slate-600 bg-bg-secondary/60 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/60"
        />

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="min-w-28 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent-primary text-bg-primary text-xs font-semibold uppercase tracking-widest transition-all duration-150 hover:brightness-110 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
          >            
            {status === 'loading' ? <Spinner className="animate-spin h-4 w-4" /> : 'Check fit'}
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="text-xs font-semibold uppercase tracking-widest text-text-muted transition-colors duration-150 hover:text-text-primary cursor-pointer"
          >
            Close
          </button>
          {error ? (
            <span className="text-xs text-error">{error}</span>
          ) : null}
        </div>

        {analysis ? (
          <div className="mt-6 rounded-xl border border-slate-600 bg-bg-secondary/40 p-4">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xl uppercase tracking-widest text-text-primary">
                Match score
              </span>
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold ${getMatchScoreBadgeClass(
                  analysis.matchScore
                )}`}
              >
                {Math.round(analysis.matchScore)}%
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-4">{analysis.summary}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-text-secondary mb-2">
                  Strengths
                </p>
                <ul className="space-y-1 text-sm text-text-primary">
                  {analysis.strengths.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-text-secondary mb-2">
                  Gaps
                </p>
                <ul className="space-y-1 text-sm text-text-primary">
                  {analysis.gaps.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-accent-primary text-bg-primary text-xs font-semibold uppercase tracking-widest transition-all duration-150 hover:brightness-110 cursor-pointer"
      >
        Job Description Match
      </button>

      {typeof window !== 'undefined' && modalContent
        ? createPortal(modalContent, document.body)
        : null}
    </>
  );
}
