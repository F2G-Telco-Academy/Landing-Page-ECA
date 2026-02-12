'use client'

import { Users, Building2, GraduationCap, Wrench } from 'lucide-react'
import Container from '../ui/Container'
import Card from '../ui/Card'

const useCases = [
  {
    icon: Users,
    title: 'RF Engineers',
    description: 'Drive testing, coverage mapping, and KPI monitoring for network optimization projects.',
    features: [
      'Real-time signal quality tracking',
      'Handover performance analysis',
      'Coverage gap identification',
      'Multi-operator benchmarking',
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Building2,
    title: 'Telecom Operators',
    description: 'Network troubleshooting, quality assurance, and performance validation for RAN teams.',
    features: [
      'Protocol debugging & analysis',
      'Call drop investigation',
      'Attach/detach failure detection',
      'CSFB scenario monitoring',
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: GraduationCap,
    title: 'Researchers & Students',
    description: 'Academic research, protocol learning, and cellular technology education.',
    features: [
      'Layer 3 message inspection',
      '3GPP protocol visualization',
      'Free alternative to QXDM/Xcal',
      'Offline PCAP analysis',
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Wrench,
    title: 'Device Developers',
    description: 'Modem testing, device certification, and cellular stack development.',
    features: [
      'Multi-device comparison',
      'RAT selection analysis',
      'Bearer establishment tracking',
      'NAS/RRC message logs',
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-white">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Built for
            <span className="gradient-text block mt-2">Telecom Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're optimizing networks, researching protocols, or developing devices, 
            ECA adapts to your workflow.
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, idx) => (
            <Card key={idx} hover className="group">
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${useCase.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className={`w-6 h-6 ${useCase.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2 pl-16">
                  {useCase.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${useCase.color.replace('text', 'bg')} flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
