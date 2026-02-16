'use client'

import { useState, useEffect, useRef } from 'react'
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Button from '../ui/Button'
import Container from '../ui/Container'
import VideoModal from '../ui/VideoModal'

const showcaseImages = [
  { src: '/ECA_interface_preview.png', alt: 'ECA Interface — Real-time cellular analysis dashboard' },
  { src: '/live_signaling.png', alt: 'Live signaling messages and protocol analysis' },
  { src: '/map_live_report.png', alt: 'GPS mapping with live network reports' },
  { src: '/lte_status_info.png', alt: 'LTE status and connection information' },
  { src: '/post_process_map.png', alt: 'Post-processing map analysis' },
  { src: '/post_process_map_live.png', alt: 'Live post-processing map view' },
  { src: '/post_process_map_report.png', alt: 'Detailed map reports and analytics' },
  { src: '/post_process_map_satelite.png', alt: 'Satellite view with network overlay' },
  { src: '/visualize.png', alt: 'Data visualization and charts' },
  { src: '/visualize1.png', alt: 'Advanced visualization tools' },
  { src: '/initial_map.png', alt: 'Initial map setup and configuration' },
  { src: '/convert.png', alt: 'Data conversion and export tools' },
  { src: '/post_process_map_dark.png', alt: 'Dark mode map interface' },
  { src: '/post_process_map_light.png', alt: 'Light mode map interface' },
]

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const extendedImages = [...showcaseImages, ...showcaseImages]

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        goToNext()
      }, 2000)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, currentIndex])

  const goToNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const goToPrev = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const handleTransitionEnd = () => {
    if (currentIndex >= showcaseImages.length) {
      setIsTransitioning(false)
      setCurrentIndex(0)
    } else if (currentIndex < 0) {
      setIsTransitioning(false)
      setCurrentIndex(showcaseImages.length - 1)
    }
  }

  return (
    <section className="pt-28 pb-12 md:pb-16">
      <Container>
        <div className="reveal max-w-[900px] mx-auto text-center space-y-6">
          <h1 className="heading-xl">
            Professional Cellular Network Analysis Made Simple
          </h1>

          <p className="text-body dark:text-gray-300 max-w-2xl mx-auto">
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

        <div 
          className="reveal mt-16 group" 
          style={{ perspective: '2000px' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className="rounded-2xl overflow-hidden border border-card-border dark:border-gray-700 shadow-2xl relative"
            style={{ transform: 'rotateX(4deg)', transformOrigin: 'center bottom' }}
          >
            <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <div 
                className="absolute inset-0 flex"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none'
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedImages.map((image, idx) => (
                  <div key={idx} className="w-full h-full flex-shrink-0 relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={idx < 3}
                      quality={90}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-card-border dark:border-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-gray-900 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-primary dark:text-gray-100" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-card-border dark:border-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-gray-900 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-primary dark:text-gray-100" />
            </button>
          </div>
        </div>

        <div className="reveal flex justify-center gap-12 mt-14">
          <div className="text-center">
            <div className="text-2xl font-medium tracking-heading-lg text-primary dark:text-gray-100">65+</div>
            <div className="text-xs text-muted dark:text-gray-400 mt-1">KPIs Tracked</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium tracking-heading-lg text-primary dark:text-gray-100">4</div>
            <div className="text-xs text-muted dark:text-gray-400 mt-1">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium tracking-heading-lg text-primary dark:text-gray-100">Real-Time</div>
            <div className="text-xs text-muted dark:text-gray-400 mt-1">Monitoring</div>
          </div>
        </div>
      </Container>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  )
}
