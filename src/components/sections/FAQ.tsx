'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../ui/Container'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What devices are supported?',
    answer: 'ECA supports Android devices with ADB debugging enabled, Qualcomm-based devices with DIAG mode, and can process offline PCAP files from any source. For real-time capture, you need USB debugging enabled and proper drivers installed.',
  },
  {
    question: 'Is ECA really free?',
    answer: 'ECA is a professional solution by F2G-SOLUTIONS. Contact us for pricing and licensing options tailored to your organization.',
  },
  {
    question: 'What networks does it support?',
    answer: 'ECA supports 5G NR (SA/NSA), LTE (FDD/TDD), WCDMA/HSPA+, and GSM networks. It can decode Layer 3 RRC and NAS messages for all these technologies using TShark dissectors and SCAT parsers.',
  },
  {
    question: 'Do I need Wireshark installed?',
    answer: 'Yes, you need TShark (part of Wireshark) for protocol decoding. ECA uses TShark as the backend decoder for PCAP analysis. You also need Npcap for live capture on Windows.',
  },
  {
    question: 'Can I use ECA for commercial projects?',
    answer: 'Yes! ECA is designed for professional and commercial use. Contact F2G-SOLUTIONS for enterprise licensing and support options.',
  },
  {
    question: 'How is data stored?',
    answer: 'All data is stored locally on your computer in SQLite databases and CSV files. ECA is an offline-first desktop application - no cloud sync, no data uploads, complete privacy.',
  },
  {
    question: 'Can I compare multiple devices or sessions?',
    answer: 'Yes! ECA supports up to 4 simultaneous device connections and includes session comparison tools. You can benchmark different devices, operators, or locations side-by-side.',
  },
  {
    question: 'What KPIs can I track?',
    answer: 'Over 90 KPIs including: RRC success rates, attach/detach events, handover statistics, TAU/RAU, bearer setup, call metrics, RF measurements (RSRP/RSRQ/SINR), throughput, latency, and more.',
  },
  {
    question: 'Does it work on Mac or Linux?',
    answer: 'Currently, ECA is optimized for Windows 10/11. Mac and Linux support is planned for future releases. The backend Python services can run on any platform, but the Tauri frontend is Windows-only at the moment.',
  },
  {
    question: 'How do I report bugs or request features?',
    answer: 'Contact F2G-SOLUTIONS support team directly. We provide professional support and actively maintain the product with regular updates.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="font-semibold text-gray-900 dark:text-white">{question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-200 dark:border-gray-700">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Frequently Asked
            <span className="gradient-text block mt-2">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about ECA
          </p>
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Still have questions?</p>
          <button className="text-primary-600 hover:text-primary-700 font-medium" onClick={() => window.location.href = '#contact'}>
            Contact F2G-SOLUTIONS →
          </button>
        </div>
      </Container>
    </section>
  )
}
