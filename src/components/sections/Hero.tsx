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
          {/* Heading — all lowercase like Echelon */}
          <h1 className="heading-xl">
            <span className="text-hero-faded">professional cellular</span>
            {' '}network analysis made simple
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

        {/* Product screenshot — perspective tilt for modern feel */}
        <div className="mt-16 flex justify-center" style={{ perspective: '1200px' }}>
          <div
            className="w-full max-w-[1000px] rounded-2xl overflow-hidden border border-card-border shadow-2xl"
            style={{
              transform: 'rotateX(4deg) rotateY(-2deg)',
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/ECA Interface Preview.jpeg"
              alt="ECA Interface — Real-time cellular analysis dashboard"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-14 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-medium tracking-heading-lg text-primary">65+</div>
            <div className="text-xs text-muted mt-1">KPIs tracked</div>
          </div>
          <div>
            <div className="text-2xl font-medium tracking-heading-lg text-primary">4</div>
            <div className="text-xs text-muted mt-1">technologies</div>
          </div>
          <div>
            <div className="text-2xl font-medium tracking-heading-lg text-primary">real-time</div>
            <div className="text-xs text-muted mt-1">monitoring</div>
          </div>
        </div>
      </Container>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  )
}
