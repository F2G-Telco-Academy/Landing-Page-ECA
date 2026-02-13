'use client'

import { useState } from 'react'
import { PlayCircle } from 'lucide-react'
import Image from 'next/image'
import Button from '../ui/Button'
import Container from '../ui/Container'
import VideoModal from '../ui/VideoModal'

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="pt-32 pb-20">
      <Container>
        <div className="max-w-[900px] mx-auto text-center space-y-6">
          {/* Main heading */}
          <h1 className="heading-xl">
            <span className="text-hero-faded">Professional cellular</span>
            {' '}network analysis made simple
          </h1>

          {/* Subtitle */}
          <p className="text-body max-w-2xl mx-auto">
            Real-time LTE, 5G NR, WCDMA, and GSM monitoring. Drive testing,
            KPI extraction, and protocol debugging — powered by F2G-SOLUTIONS.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button size="lg" onClick={() => setIsVideoOpen(true)} className="gap-2">
              <PlayCircle className="w-4 h-4" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = '#features'}>
              Learn More
            </Button>
          </div>
        </div>

        {/* Product screenshot */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-card-border shadow-xl">
          <Image
            src="/ECA Interface Preview.jpeg"
            alt="ECA Interface — Real-time cellular analysis dashboard"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-medium tracking-heading-lg text-primary">65+</div>
            <div className="text-xs text-muted mt-1">KPIs Tracked</div>
          </div>
          <div>
            <div className="text-2xl font-medium tracking-heading-lg text-primary">4</div>
            <div className="text-xs text-muted mt-1">Technologies</div>
          </div>
          <div>
            <div className="text-2xl font-medium tracking-heading-lg text-primary">Real-time</div>
            <div className="text-xs text-muted mt-1">Monitoring</div>
          </div>
        </div>
      </Container>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  )
}
