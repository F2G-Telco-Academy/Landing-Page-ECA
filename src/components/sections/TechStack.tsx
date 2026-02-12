'use client'

import { Code2, Database, Layers, Terminal } from 'lucide-react'
import Container from '../ui/Container'

const technologies = [
  {
    category: 'Frontend',
    icon: Code2,
    stack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Tauri Desktop'],
  },
  {
    category: 'Backend',
    icon: Database,
    stack: ['Python FastAPI', 'SQLite', 'Zustand State', 'RESTful APIs'],
  },
  {
    category: 'Analysis Tools',
    icon: Layers,
    stack: ['TShark', 'SCAT', 'Wireshark Dissectors', 'GSMTAP Decoder'],
  },
  {
    category: 'Protocols',
    icon: Terminal,
    stack: ['5G NR-RRC/NAS', 'LTE-RRC/NAS', 'WCDMA-RRC', 'GSM Layer 3'],
  },
]

export default function TechStack() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Built on Modern, <span className="text-primary-400">Production-Grade</span> Technology
          </h2>
          <p className="text-gray-400 text-lg">
            Combining the best of desktop performance with web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:bg-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <tech.icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="font-semibold text-lg">{tech.category}</h3>
              </div>
              <ul className="space-y-2">
                {tech.stack.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Open source badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-2xl">💚</span>
            <span className="text-sm">
              <span className="font-semibold">100% Open Source</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-400">Licensed under MIT</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
