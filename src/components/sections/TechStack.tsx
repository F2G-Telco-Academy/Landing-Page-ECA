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
    <section className="py-24 bg-gray-50/50">
      <Container>
        <div className="text-center mb-12 space-y-4">
          <p className="section-label">Technology</p>
          <h2 className="heading-lg">
            Built on production-grade technology
          </h2>
          <p className="text-body max-w-xl mx-auto">
            Combining the best of desktop performance with modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologies.map((tech, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-card-border p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                  <tech.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-sm font-medium text-primary">{tech.category}</h3>
              </div>
              <ul className="space-y-2">
                {tech.stack.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2 text-xs text-muted">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
