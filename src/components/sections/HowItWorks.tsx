import { Smartphone, Cable, Play, BarChart } from 'lucide-react'
import Container from '../ui/Container'

const steps = [
  { number: '01', icon: Smartphone, title: 'Connect Your Device', description: 'Connect Android phones via USB with ADB debugging enabled. ECA auto-detects available devices.' },
  { number: '02', icon: Cable, title: 'Choose Capture Method', description: 'Select ADB logcat, Qualcomm DIAG mode, or upload existing PCAP files for offline analysis.' },
  { number: '03', icon: Play, title: 'Start Monitoring', description: 'Begin live capture with GPS tracking. Watch real-time KPIs, RF measurements, and protocol messages.' },
  { number: '04', icon: BarChart, title: 'Analyze & Export', description: 'Visualize data on maps, generate reports, export to CSV/Excel, and compare across sessions.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-16">
      <Container>
        <div className="reveal text-center mb-10 md:mb-12 space-y-4">
          <p className="section-label">How It Works</p>
          <h2 className="heading-lg dark:text-gray-100">Get started in four simple steps</h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            From installation to analysis — ECA is designed for quick setup and intuitive workflow.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-card-border dark:border-gray-700 p-6 space-y-4 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-accent dark:text-[#8BADB9]">{step.number}</span>
                <step.icon className="w-5 h-5 text-primary/20 dark:text-gray-600" />
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-heading-sm">{step.title}</h3>
                <p className="text-xs text-muted dark:text-gray-400 mt-2 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-xs text-muted dark:text-gray-400 mt-10">Average setup time: less than 5 minutes</p>
      </Container>
    </section>
  )
}
