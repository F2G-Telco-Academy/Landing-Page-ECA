'use client'

import { PlayCircle } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient -z-10" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40 -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              v2.1.0 - Production Ready
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Professional Cellular Network Analysis
                <span className="gradient-text block mt-2">Made Simple</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Real-time LTE, 5G NR, and WCDMA monitoring and analysis. Drive testing, 
                KPI extraction, and protocol debugging - powered by F2G-SOLUTIONS.
              </p>
            </div>

            {/* Key highlights */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>Real-time Capture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>GPS Mapping</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>65+ KPIs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>Professional Solution</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => window.location.href = '#contact'}>
                <PlayCircle className="w-5 h-5" />
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => window.location.href = '#features'}>
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className="text-3xl font-bold text-primary-600">90+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">KPIs Tracked</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Professional</div>
              </div>
            </div>
          </div>

          {/* Right column - App preview */}
          <div className="relative animate-fade-in">
            {/* Main screenshot with shadow and border */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800 bg-white dark:bg-gray-800">
              <img 
                src="/ECA Interface Preview.jpeg" 
                alt="ECA Interface Preview - Real-time cellular analysis dashboard"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card 1 - Top right */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 hidden lg:block animate-pulse-slow">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Live Signal</div>
              <div className="text-2xl font-bold text-green-600">-75 dBm</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">RSRP</div>
            </div>

            {/* Floating card 2 - Bottom left */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 hidden lg:block">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Technology</div>
              <div className="text-xl font-bold text-primary-600">5G NR</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">Connected</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
