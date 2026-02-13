'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Button from '../ui/Button'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={cn(
          'flex items-center justify-between w-full max-w-[1100px] h-[56px] px-4 rounded-full transition-all duration-300',
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border border-card-border'
            : 'bg-gradient-to-b from-white to-nav-gradient-end border border-card-border'
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image src="/f2g_logo.png" alt="F2G Logo" width={32} height={32} className="object-contain" />
          </div>
          <span className="font-medium text-sm text-primary">ECA</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-primary/70 hover:text-primary tracking-nav transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button size="sm" onClick={() => window.location.href = '#contact'}>
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-primary" />
          ) : (
            <Menu className="w-5 h-5 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'lg:hidden absolute top-[72px] left-4 right-4 bg-white rounded-2xl border border-card-border shadow-lg transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm text-primary/70 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 px-4">
            <Button size="sm" className="w-full" onClick={() => { setIsMobileMenuOpen(false); window.location.href = '#contact' }}>
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
