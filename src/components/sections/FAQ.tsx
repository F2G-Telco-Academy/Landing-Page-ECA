'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../ui/Container'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What devices are supported?',
    answer: 'ECA supports Android devices with ADB debugging enabled, Qualcomm-based devices with DIAG mode, and can process offline PCAP files from any source.',
  },
  {
    question: 'What are the licensing options?',
    answer: 'ECA is a professional solution by F2G-SOLUTIONS. Contact us for pricing and licensing options tailored to your organization\u2019s needs.',
  },
  {
    question: 'What networks does it support?',
    answer: 'ECA supports 5G NR (SA/NSA), LTE (FDD/TDD), WCDMA/HSPA+, and GSM networks. It decodes Layer 3 RRC and NAS messages for all technologies.',
  },
  {
    question: 'Do I need Wireshark installed?',
    answer: 'Yes, TShark (part of Wireshark) is required for protocol decoding. You also need Npcap for live capture on Windows.',
  },
  {
    question: 'Can I use ECA for commercial projects?',
    answer: 'Yes. ECA is designed for professional and commercial use. Contact F2G-SOLUTIONS for enterprise licensing and support options.',
  },
  {
    question: 'How is data stored?',
    answer: 'All data is stored locally on your computer in SQLite databases and CSV files. ECA is an offline-first desktop application — no cloud sync, complete privacy.',
  },
  {
    question: 'Can I compare multiple devices?',
    answer: 'Yes. ECA supports up to 4 simultaneous device connections and includes session comparison tools for benchmarking.',
  },
  {
    question: 'What platforms are supported?',
    answer: 'Currently optimized for Windows 10/11. Mac and Linux support is planned for future releases.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-card-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-1 text-left flex items-center justify-between gap-4 group"
      >
        <span className="text-[15px] font-medium text-primary tracking-heading-sm">{question}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-muted flex-shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div className={cn('overflow-hidden transition-all duration-200', isOpen ? 'max-h-60 pb-5' : 'max-h-0')}>
        <p className="text-xs text-muted leading-relaxed px-1">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <p className="section-label">FAQ</p>
            <h2 className="heading-lg">Frequently asked questions</h2>
            <p className="text-body">
              Need help?{' '}
              <a href="mailto:contact@f2g-solutions.com" className="text-accent hover:underline">
                Contact us
              </a>
            </p>
          </div>

          <div>
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
