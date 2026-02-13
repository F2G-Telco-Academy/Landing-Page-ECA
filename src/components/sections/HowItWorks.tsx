'use client'

import { Smartphone, Cable, Play, BarChart } from 'lucide-react'
import Container from '../ui/Container'

const steps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Connect Your Device',
    description: 'Connect Android phones via USB with ADB debugging enabled. ECA auto-detects available devices.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: Cable,
    title: 'Choose Capture Method',
    description: 'Select ADB logcat, Qualcomm DIAG mode, or upload existing PCAP files for offline analysis.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    icon: Play,
    title: 'Start Monitoring',
    description: 'Begin live capture with GPS tracking. Watch real-time KPIs, RF measurements, and protocol messages.',
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    icon: BarChart,
    title: 'Analyze & Export',
    description: 'Visualize data on maps, generate reports, export to CSV/Excel, and compare across sessions.',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Get Started in
            <span className="gradient-text block mt-2">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From installation to analysis - ECA is designed for quick setup and intuitive workflow.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 dark:from-blue-900 dark:via-purple-900 dark:to-green-900 -translate-y-1/2 -z-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Step card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg transition-all duration-300 group">
                  {/* Step number */}
                  <div className={`absolute -top-4 left-6 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`mt-4 mb-4 w-14 h-14 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            ⚡ Average setup time: <span className="font-semibold text-gray-700">Less than 5 minutes</span>
          </p>
        </div>
      </Container>
    </section>
  )
}
