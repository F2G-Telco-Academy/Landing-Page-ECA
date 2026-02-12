'use client'

import { Check, X } from 'lucide-react'
import Container from '../ui/Container'

const features = [
  { name: 'Real-time capture', eca: true, qxdm: true, xcal: true },
  { name: 'GPS mapping', eca: true, qxdm: false, xcal: true },
  { name: 'PCAP export', eca: true, qxdm: true, xcal: false },
  { name: 'Multi-device support', eca: true, qxdm: false, xcal: false },
  { name: 'Offline analysis', eca: true, qxdm: true, xcal: true },
  { name: '5G NR support', eca: true, qxdm: true, xcal: true },
  { name: 'Professional support', eca: true, qxdm: true, xcal: true },
  { name: 'Enterprise features', eca: true, qxdm: true, xcal: true },
  { name: 'Windows support', eca: true, qxdm: true, xcal: true },
  { name: 'Customizable dashboards', eca: true, qxdm: false, xcal: false },
]

export default function Comparison() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How Does ECA Compare?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional features without the enterprise price tag
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold gradient-text">F2G ECA</span>
                      <span className="text-xs text-gray-500 mt-1">Professional</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">QXDM</span>
                      <span className="text-xs text-gray-500 mt-1">$$$</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Xcal</span>
                      <span className="text-xs text-gray-500 mt-1">$$$</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {feature.eca ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                          <X className="w-4 h-4 text-red-600" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.qxdm ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                          <X className="w-4 h-4 text-red-600" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.xcal ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                          <X className="w-4 h-4 text-red-600" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 px-6 py-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-gray-900 dark:text-white mb-1">Ready to try F2G ECA?</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Contact us for a demo</div>
              </div>
              <button className="px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium" onClick={() => window.location.href = '#contact'}>
                Request Demo
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          * Comparison based on publicly available information. Feature availability may vary by version.
        </p>
      </Container>
    </section>
  )
}
