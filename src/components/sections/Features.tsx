import {
  Radio, Map, BarChart3, Wifi, Activity, Zap,
  FileText, Globe, Database, Smartphone, LineChart, Lock
} from 'lucide-react'
import Container from '../ui/Container'

const features = [
  { icon: Radio, title: 'Real-time Capture', description: 'Live monitoring from Android devices via ADB or Qualcomm DIAG ports.' },
  { icon: Map, title: 'GPS Drive Testing', description: 'Interactive maps with real-time GPS tracking and signal heatmaps.' },
  { icon: BarChart3, title: '65+ KPI Metrics', description: 'RRC success rates, handover stats, attach/detach events, throughput, and more.' },
  { icon: Wifi, title: 'Multi-Technology', description: 'Full protocol support for 5G NR, LTE, WCDMA, and GSM with L3 decoding.' },
  { icon: Activity, title: 'Live RF Measurements', description: 'Real-time RSRP, RSRQ, SINR, PCI tracking with historical trends.' },
  { icon: Zap, title: 'Anomaly Detection', description: 'Automated detection of connection failures, handover issues, and RLF events.' },
  { icon: FileText, title: 'PCAP Post-Processing', description: 'Analyze offline PCAP files, SCAT logs, and Qualcomm DM traces.' },
  { icon: Globe, title: 'Advanced Visualization', description: 'Time-series charts, protocol stack viewer, and signaling message browser.' },
  { icon: Database, title: 'Session Management', description: 'Organize capture sessions, compare devices, export to CSV/Excel.' },
  { icon: Smartphone, title: 'Device Support', description: 'Currently supports 1 device. Multi-device support (up to 4 devices) coming in future updates.' },
  { icon: LineChart, title: 'Benchmarking Tools', description: 'Compare performance across sessions, operators, and locations.' },
  { icon: Lock, title: 'Enterprise Security', description: 'Desktop application with enterprise-grade security. Your data stays local.' },
]

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-16">
      <Container>
        <div className="reveal text-center mb-10 md:mb-12 space-y-4">
          <p className="section-label">Features & Benefits</p>
          <h2 className="heading-lg max-w-2xl mx-auto dark:text-gray-100">
            Everything you need for professional network analysis
          </h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            From real-time monitoring to offline analysis, ECA provides all the tools
            RF engineers need for comprehensive cellular network testing.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-5 flex flex-col justify-end gap-3 h-[220px] border border-card-border/50 dark:border-gray-700/50 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300"
            >
              <feature.icon className="w-5 h-5 text-accent dark:text-[#8BADB9]" />
              <div>
                <h3 className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-heading-sm">{feature.title}</h3>
                <p className="text-xs text-muted dark:text-gray-400 mt-1 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
