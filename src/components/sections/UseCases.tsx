import { Users, Building2, GraduationCap, Wrench } from 'lucide-react'
import Container from '../ui/Container'

const useCases = [
  { icon: Users, title: 'RF Engineers', description: 'Drive testing, coverage mapping, and KPI monitoring for network optimization projects.', features: ['Real-time signal quality tracking', 'Handover performance analysis', 'Coverage gap identification', 'Multi-operator benchmarking'] },
  { icon: Building2, title: 'Telecom Operators', description: 'Network troubleshooting, quality assurance, and performance validation for RAN teams.', features: ['Protocol debugging & analysis', 'Call drop investigation', 'Attach/detach failure detection', 'CSFB scenario monitoring'] },
  { icon: GraduationCap, title: 'Researchers & Students', description: 'Academic research, protocol learning, and cellular technology education.', features: ['Layer 3 message inspection', '3GPP protocol visualization', 'Offline PCAP analysis', 'Multi-technology support'] },
  { icon: Wrench, title: 'Device Developers', description: 'Modem testing, device certification, and cellular stack development.', features: ['Single device analysis', 'RAT selection analysis', 'Bearer establishment tracking', 'NAS/RRC message logs'] },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-12 md:py-16">
      <Container>
        <div className="reveal text-center mb-10 md:mb-12 space-y-4">
          <p className="section-label">Use Cases</p>
          <h2 className="heading-lg dark:text-gray-100">Built for telecom professionals</h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            Whether you&apos;re optimizing networks, researching protocols, or developing devices, ECA adapts to your workflow.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 gap-5">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-card-border dark:border-gray-700 p-6 space-y-4 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center flex-shrink-0 border border-card-border dark:border-gray-700">
                  <useCase.icon className="w-5 h-5 text-accent dark:text-[#8BADB9]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-heading-sm">{useCase.title}</h3>
                  <p className="text-xs text-muted dark:text-gray-400 mt-1">{useCase.description}</p>
                </div>
              </div>
              <ul className="space-y-2 pl-14">
                {useCase.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs text-muted dark:text-gray-400">
                    <span className="w-1 h-1 rounded-full bg-accent dark:bg-[#8BADB9] flex-shrink-0" />
                    {feature}
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
