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
    <section className="pt-28 pb-20">
      <Container>
        <div className="reveal max-w-[900px] mx-auto text-center space-y-6">
          <h1 className="heading-xl">
            <span className="text-hero-faded">Professional Cellular</span>{' '}
            Network Analysis Made Simple
          </h1>

          <p className="text-body max-w-2xl mx-auto">
            Real-time LTE, 5G NR, WCDMA, and GSM monitoring. Drive testing,
            KPI extraction, and protocol debugging — powered by F2G-SOLUTIONS.
          </p>

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

        <div className="reveal mt-16" style={{ perspective: '2000px' }}>
          <div
            className="rounded-2xl overflow-hidden border border-card-border shadow-2xl"
            style={{ transform: 'rotateX(4deg)', transformOrigin: 'center bottom' }}
          >
            <Image
              src="/ECA Interface Preview.jpeg"
              alt="ECA Interface — Real-time cellular analysis dashboard"
              width={1920}
              height={1080}
              className="w-full h-auto block"
              priority
            />
          </div>
        </div>

        <div className="reveal flex justify-center gap-12 mt-14">
          <div className="text-center">
            <div className="text-2xl font-medium tracking-heading-lg text-primary">65+</div>
            <div className="text-xs text-muted mt-1">KPIs Tracked</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium tracking-heading-lg text-primary">4</div>
            <div className="text-xs text-muted mt-1">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium tracking-heading-lg text-primary">Real-Time</div>
            <div className="text-xs text-muted mt-1">Monitoring</div>
          </div>
        </div>
      </Container>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  )
}
