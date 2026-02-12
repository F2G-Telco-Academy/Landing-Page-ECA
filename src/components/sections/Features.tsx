'use client'

import { 
  Radio, Map, BarChart3, Wifi, Activity, Zap, 
  FileText, Globe, Lock, Smartphone, Database, LineChart 
} from 'lucide-react'
import Container from '../ui/Container'
import Card from '../ui/Card'

const features = [
  {
    icon: Radio,
    title: 'Real-time Capture',
    description: 'Live monitoring from Android devices via ADB or Qualcomm DIAG ports. Stream cellular data directly to your desktop.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Map,
    title: 'GPS Drive Testing',
    description: 'Interactive maps with real-time GPS tracking, signal heatmaps, and geospatial clustering for coverage analysis.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: BarChart3,
    title: '90+ KPI Metrics',
    description: 'Comprehensive KPI extraction: RRC success rates, handover stats, attach/detach events, throughput, and more.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Wifi,
    title: 'Multi-Technology Support',
    description: 'Full protocol support for 5G NR, LTE, WCDMA, and GSM networks with Layer 3 message decoding.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Activity,
    title: 'Live RF Measurements',
    description: 'Real-time RSRP, RSRQ, SINR, PCI tracking with historical trends and quality distributions.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: Zap,
    title: 'Anomaly Detection',
    description: 'Automated detection of connection failures, handover issues, RLF events, and CSFB scenarios.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: FileText,
    title: 'PCAP Post-Processing',
    description: 'Convert and analyze offline PCAP files, SCAT logs, and Qualcomm DM traces with TShark integration.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: Globe,
    title: 'Advanced Visualization',
    description: 'Time-series charts, protocol stack viewer, signaling message browser, and customizable dashboards.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: Database,
    title: 'Session Management',
    description: 'Organize multiple capture sessions, compare devices, export data to CSV/Excel for further analysis.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Smartphone,
    title: 'Multi-Device Support',
    description: 'Connect up to 4 devices simultaneously. Monitor multiple drive test routes in parallel.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
  },
  {
    icon: LineChart,
    title: 'Benchmarking Tools',
    description: 'Compare network performance across sessions, operators, and locations with statistical analysis.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
  },
  {
    icon: Lock,
    title: 'Offline First',
    description: 'Desktop application - your data stays local. No cloud dependencies, no subscriptions, no data sharing.',
    color: 'text-gray-700',
    bgColor: 'bg-gray-50',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything You Need for
            <span className="gradient-text block mt-2">Professional Network Analysis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From real-time monitoring to offline analysis, ECA provides all the tools RF engineers need 
            for comprehensive cellular network testing and troubleshooting.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} hover className="group">
              <div className="space-y-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md text-sm text-gray-700">
            <span className="font-semibold">And much more...</span>
            <span className="text-gray-400">→</span>
            <span>Check out the full documentation</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
