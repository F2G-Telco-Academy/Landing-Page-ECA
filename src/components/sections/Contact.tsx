'use client'

import { useState } from 'react'
import { PlayCircle, Mail } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import VideoModal from '../ui/VideoModal'

export default function Contact() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  return (
    <section id="contact" className="py-16 md:py-20">
      <Container>
        <div className="reveal max-w-2xl mx-auto text-center space-y-6">
          <p className="section-label">Get Started</p>
          <h2 className="heading-lg dark:text-gray-100">Ready to transform your network analysis workflow?</h2>
          <p className="text-body dark:text-gray-300">
            Join RF engineers already using ECA for professional cellular network testing.
            Watch our demo or get in touch to learn more.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button size="lg" onClick={() => setIsVideoOpen(true)} className="gap-2">
              <PlayCircle className="w-4 h-4" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = 'http://www.f2gsolutions.com/'} className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Us
            </Button>
          </div>
          <p className="text-xs text-muted dark:text-gray-400 pt-4">Requires Windows 10/11 · Python 3.11+ · TShark/Wireshark · 16GB RAM minimum</p>
        </div>
      </Container>
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  )
}
