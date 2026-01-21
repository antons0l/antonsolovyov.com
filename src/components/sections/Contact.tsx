'use client';

import { useState, useCallback, type Dispatch, type SetStateAction } from 'react';
import { resumeData } from '@/data/resume';
import { ArrowRight, Copy, Check, Close, Mail, Linkedin } from '@/components/icons';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  const triggerCopiedState = useCallback((setter: Dispatch<SetStateAction<boolean>>) => {
    setter(true);
    setTimeout(() => setter(false), 2000);
  }, []);

  const copyToClipboard = useCallback(async (text: string, onCopied: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      onCopied();
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      onCopied();
    }
  }, []);

  const handleCopyEmail = useCallback(() => {
    void copyToClipboard(resumeData.email, () => triggerCopiedState(setCopiedEmail));
  }, [copyToClipboard, triggerCopiedState]);

  const handleCopyLinkedin = useCallback(() => {
    void copyToClipboard(resumeData.social.linkedin, () => triggerCopiedState(setCopiedLinkedin));
  }, [copyToClipboard, triggerCopiedState]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setCopiedEmail(false);
    setCopiedLinkedin(false);
  }, []);

  return (
    <>
      <section id="contact" className="mb-[120px] scroll-mt-24">
        <h2 className="flex items-center gap-3 text-[28px] font-bold text-text-primary mb-8 max-sm:text-[22px]">          
          Contact
        </h2>
        <div className="text-center max-w-[500px] mx-auto">
          <p className="text-base text-text-secondary mb-8 leading-[1.8]">
            I&apos;m open to new opportunities and collaborations. Whether you have 
            an open role, a project idea, or just want to say hi, I&apos;m always open to chat.
            Will do my best to get back to you!
          </p>
          <button 
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-accent-primary rounded-lg text-accent-primary text-base font-semibold no-underline transition-all duration-300 overflow-hidden contact-button-bg hover:text-bg-primary max-sm:w-full max-sm:justify-center group cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="relative z-10">Get in touch</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[1000] animate-[fadeIn_0.2s_ease]"
          onClick={closeModal}
        >
          <div 
            className="relative bg-bg-secondary border border-border rounded-2xl p-8 max-w-[420px] w-[90%] animate-[slideUp_0.3s_ease] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 bg-transparent border-none text-text-muted cursor-pointer p-2 rounded-lg transition-all duration-150 flex items-center justify-center hover:bg-bg-hover hover:text-text-primary"
              onClick={closeModal}
            >
              <Close className="w-5 h-5" />
            </button>
            
            <h3 className="text-lg font-semibold text-text-primary mb-6">Get in touch</h3>
            
            <div className="space-y-3">
              {/* Email row */}
              <div className="flex items-center gap-3 px-4 py-3 bg-bg-primary border border-border rounded-lg">
                <Mail className="w-5 h-5 text-accent-primary shrink-0" />
                <span className="font-mono text-sm text-text-secondary truncate flex-1">{resumeData.email}</span>
                <div className="relative group">
                  <button
                    onClick={handleCopyEmail}
                    className={`p-1.5 rounded-md transition-all duration-150 cursor-pointer ${
                      copiedEmail 
                        ? 'bg-success/20 text-success' 
                        : 'bg-transparent text-text-muted hover:bg-bg-hover hover:text-text-primary'
                    }`}
                  >
                    {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-text-primary bg-bg-tertiary border border-border rounded whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150">
                    {copiedEmail ? 'Copied!' : 'Copy to clipboard'}
                  </span>
                </div>
              </div>

              {/* LinkedIn row */}
              <div className="flex items-center gap-3 px-4 py-3 bg-bg-primary border border-border rounded-lg">
                <Linkedin className="w-5 h-5 text-accent-primary shrink-0" />
                <span className="font-mono text-sm text-text-secondary truncate flex-1">{resumeData.social.linkedin}</span>
                <div className="relative group">
                  <button
                    onClick={handleCopyLinkedin}
                    className={`p-1.5 rounded-md transition-all duration-150 cursor-pointer ${
                      copiedLinkedin 
                        ? 'bg-success/20 text-success' 
                        : 'bg-transparent text-text-muted hover:bg-bg-hover hover:text-text-primary'
                    }`}
                  >
                    {copiedLinkedin ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-text-primary bg-bg-tertiary border border-border rounded whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150">
                    {copiedLinkedin ? 'Copied!' : 'Copy to clipboard'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="text-center py-12 border-t border-border mt-12">
      <p className="text-sm text-text-muted mb-2">Designed & Built by {resumeData.name}</p>
    </footer>
  );
}
