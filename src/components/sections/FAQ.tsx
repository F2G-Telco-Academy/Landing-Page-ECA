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
    answer: 'Yes! ECA is 100% free and open source under the MIT license. There are no hidden fees, subscriptions, or premium tiers. All features are available to everyone.',
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
    answer: 'Absolutely! The MIT license allows commercial use without restrictions. Many RF consultants and network operators use ECA for professional drive testing and optimization projects.',
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
    answer: 'Use the built-in bug report button (🐛) in the app, or open an issue on GitHub. We actively maintain the project and welcome community contributions.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200',
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
        <div className="px-6 py-4 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Frequently Asked
            <span className="gradient-text block mt-2">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            Join our community on GitHub Discussions →
          </button>
        </div>
      </Container>
    </section>
  )
}
