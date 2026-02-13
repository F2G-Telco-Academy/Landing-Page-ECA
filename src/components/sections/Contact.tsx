'use client'

import { useState } from 'react'
import { PlayCircle, BookOpen, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import VideoModal from '../ui/VideoModal'

export default function Contact() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary-600 via-blue-600 to-primary-700 dark:bg-gray-800 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 text-white relative overflow-hidden border-t border-gray-200 dark:border-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      
      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Revolutionize Your
              <br />
              Network Analysis Workflow?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join hundreds of RF engineers already using ECA for professional cellular network testing.
              Watch our demo to see ECA in action.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl gap-2 min-w-[200px]" onClick={() => setIsVideoOpen(true)}>
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 gap-2 min-w-[200px]" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:contact@f2g-solutions.com" className="text-blue-100 hover:text-white text-sm">
                contact@f2g-solutions.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-blue-100 text-sm">Coming soon</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-blue-100 text-sm">Global</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="grid md:grid-cols-2 gap-4 pt-8 max-w-2xl mx-auto">
            <a href="#features" className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Learn More</span>
            </a>
            <a href="mailto:contact@f2g-solutions.com" className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Contact Support</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 max-w-xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-1">1K+</div>
              <div className="text-sm text-blue-100">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-sm text-blue-100">Contributors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">F2G</div>
              <div className="text-sm text-blue-100">Solutions</div>
            </div>
          </div>

          {/* System requirements note */}
          <p className="text-xs text-blue-200 pt-4">
            Requires Windows 10/11 • Python 3.11+ • TShark/Wireshark • 4GB RAM minimum
          </p>
        </div>
      </Container>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  )
}
