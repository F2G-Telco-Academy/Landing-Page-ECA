'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../ui/Container'
import { cn } from '@/lib/utils'

const faqs = [
  { question: 'What devices are supported?', answer: 'ECA currently supports 1 Android device with ADB debugging enabled or Qualcomm-based devices with DIAG mode. Multi-device support (up to 4 devices) is planned for future updates. ECA can also process offline PCAP files from any source.' },
  { question: 'What are the licensing options?', answer: 'ECA is a professional solution by F2G-SOLUTIONS. Contact us for pricing and licensing options tailored to your organization\'s needs.' },
  { question: 'What networks does it support?', answer: 'ECA supports 5G NR (SA/NSA), LTE (FDD/TDD), WCDMA/HSPA+, and GSM networks. It decodes Layer 3 RRC and NAS messages for all technologies.' },
  { question: 'Do I need Wireshark installed?', answer: 'Yes, TShark (part of Wireshark) is required for protocol decoding. You also need Npcap for live capture on Windows.' },
  { question: 'Can I use ECA for commercial projects?', answer: 'Yes. ECA is designed for professional and commercial use. Contact F2G-SOLUTIONS for enterprise licensing and support options.' },
  { question: 'How is data stored?', answer: 'All data is stored locally on your computer in SQLite databases and CSV files. ECA is an offline-first desktop application — no cloud sync, complete privacy.' },
  { question: 'Can I compare multiple devices?', answer: 'Currently, ECA supports 1 device at a time. Multi-device support (up to 4 simultaneous connections) and session comparison tools are planned for future releases.' },
  { question: 'What platforms are supported?', answer: 'Currently optimized for Windows 10/11. Mac and Linux support is planned for future releases.' },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-card-border dark:border-gray-700">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-5 px-1 text-left flex items-center justify-between gap-4">
        <span className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-heading-sm">{question}</span>
        <ChevronDown className={cn('w-4 h-4 text-muted dark:text-gray-400 flex-shrink-0 transition-transform duration-300', isOpen && 'rotate-180')} />
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-60 pb-5' : 'max-h-0')}>
        <p className="text-xs text-muted dark:text-gray-400 leading-relaxed px-1">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="reveal text-center mb-8 md:mb-10 space-y-4">
            <p className="section-label">FAQ</p>
            <h2 className="heading-lg dark:text-gray-100">Frequently Asked Questions</h2>
            <p className="text-body dark:text-gray-300">
              Need help?{' '}
              <a href="mailto:contact@f2g-solutions.com" className="text-accent dark:text-[#8BADB9] hover:underline">Contact us</a>
            </p>
          </div>
          <div className="reveal">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
