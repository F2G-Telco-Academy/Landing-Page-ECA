# 🌓 Dark Mode Implementation Guide

## 📋 Purpose

Complete dark mode system with light/dark toggle, smooth transitions, and persistent user preference. Modern, accessible, and production-ready.

---

## 🎨 **DARK MODE COLOR SYSTEM**

### **Light Mode Palette** (Current)

```css
/* Light Mode - Already implemented */
--background: #ffffff;
--foreground: #0f172a;
--card: #ffffff;
--card-foreground: #0f172a;
--border: #e2e8f0;
--input: #e2e8f0;
--ring: #2563eb;

--primary: #2563eb;
--primary-foreground: #ffffff;
--secondary: #f1f5f9;
--secondary-foreground: #1e293b;
--muted: #f8fafc;
--muted-foreground: #64748b;
--accent: #f1f5f9;
--accent-foreground: #1e293b;
```

---

### **Dark Mode Palette** (New)

```css
/* Dark Mode */
.dark {
  --background: #0f172a;
  --foreground: #f8fafc;
  --card: #1e293b;
  --card-foreground: #f8fafc;
  --border: #334155;
  --input: #334155;
  --ring: #3b82f6;

  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --secondary: #1e293b;
  --secondary-foreground: #f8fafc;
  --muted: #1e293b;
  --muted-foreground: #94a3b8;
  --accent: #334155;
  --accent-foreground: #f8fafc;
}
```

---

## 🎛️ **THEME TOGGLE COMPONENT**

### **Modern Theme Toggle with Icon**

```tsx
// src/components/ui/ThemeToggle.tsx
'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Only run on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    // Get saved theme or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {/* Sun icon - visible in dark mode */}
      <Sun className="w-5 h-5 text-gray-800 dark:text-yellow-400 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" />
      
      {/* Moon icon - visible in light mode */}
      <Moon className="w-5 h-5 text-gray-600 dark:text-gray-200 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" />
    </button>
  )
}
```

---

### **Animated Toggle Switch**

```tsx
// Alternative: iOS-style toggle switch
export function ThemeToggleSwitch() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-blue-600 transition-colors"
      role="switch"
      aria-checked={theme === 'dark'}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}
```

---

### **Dropdown Menu Toggle**

```tsx
// Premium option: Dropdown with Light/Dark/System
export function ThemeMenu() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
    setTheme(savedTheme || 'system')
    applyTheme(savedTheme || 'system')
  }, [])

  const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
    let actualTheme: 'light' | 'dark'
    
    if (newTheme === 'system') {
      actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } else {
      actualTheme = newTheme
    }
    
    document.documentElement.classList.toggle('dark', actualTheme === 'dark')
  }

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) return null

  return (
    <div className="relative group">
      <button className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center">
        {theme === 'light' && <Sun className="w-5 h-5" />}
        {theme === 'dark' && <Moon className="w-5 h-5" />}
        {theme === 'system' && <span className="text-xs">Auto</span>}
      </button>
      
      <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <button
          onClick={() => handleThemeChange('light')}
          className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 rounded-t-lg"
        >
          <Sun className="w-4 h-4" />
          Light
        </button>
        <button
          onClick={() => handleThemeChange('dark')}
          className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
        >
          <Moon className="w-4 h-4" />
          Dark
        </button>
        <button
          onClick={() => handleThemeChange('system')}
          className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 rounded-b-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          System
        </button>
      </div>
    </div>
  )
}
```

---

## 🎨 **TAILWIND DARK MODE SETUP**

### **Update tailwind.config.ts**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  // Enable dark mode with class strategy
  darkMode: 'class',
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      colors: {
        // Light mode colors (existing)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        // Card
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        
        // Primary
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        
        // Add more semantic colors...
      },
    },
  },
  
  plugins: [],
}

export default config
```

---

### **Update globals.css**

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Variables for both themes */
@layer base {
  :root {
    /* Light mode (default) */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
  }

  .dark {
    /* Dark mode */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 217.2 32.6% 17.5%;
    --card-foreground: 210 40% 98%;
    --border: 217.2 32.6% 27.5%;
    --input: 217.2 32.6% 27.5%;
    --ring: 224.3 76.3% 48%;
    
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 27.5%;
    --accent-foreground: 210 40% 98%;
  }
}

/* Smooth transitions between themes */
* {
  @apply transition-colors duration-200;
}

/* Prevent flash of unstyled content */
html {
  color-scheme: light;
}

html.dark {
  color-scheme: dark;
}

/* Base styles */
body {
  @apply bg-background text-foreground;
}
```

---

## 🔧 **SCRIPT TO PREVENT FLASH**

### **Inline Script for Instant Theme**

```tsx
// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const activeTheme = theme || systemTheme;
                if (activeTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

---

## 🎨 **DARK MODE COMPONENT EXAMPLES**

### **Hero Section with Dark Mode**

```tsx
<section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div className="max-w-7xl mx-auto px-4">
    <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
      Professional Cellular Network Analysis
      <span className="block mt-2 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
        Made Simple
      </span>
    </h1>
    
    <p className="text-xl text-gray-600 dark:text-gray-300">
      Real-time monitoring and analysis for all cellular technologies.
    </p>
  </div>
</section>
```

---

### **Feature Card with Dark Mode**

```tsx
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl dark:hover:shadow-primary-500/20 transition-all">
  {/* Icon */}
  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  </div>
  
  {/* Content */}
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">
    Feature Title
  </h3>
  <p className="text-gray-600 dark:text-gray-400 text-sm">
    Feature description with proper contrast in both modes.
  </p>
</div>
```

---

### **Button with Dark Mode**

```tsx
{/* Primary button */}
<button className="px-8 py-4 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all">
  Download Free
</button>

{/* Secondary button */}
<button className="px-8 py-4 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all">
  Watch Demo
</button>

{/* Ghost button */}
<button className="px-6 py-3 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
  Learn More
</button>
```

---

### **Stat Card with Dark Mode**

```tsx
<div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
  <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
    65+
  </div>
  <div className="text-sm font-medium text-gray-900 dark:text-white">
    KPI Metrics
  </div>
  <div className="text-xs text-gray-500 dark:text-gray-400">
    Across all technologies
  </div>
</div>
```

---

## 📱 **HEADER WITH THEME TOGGLE**

### **Updated Header Component**

```tsx
// src/components/layout/Header.tsx
'use client'

import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'
import Button from '../ui/Button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md dark:shadow-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
              📡
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900 dark:text-white">
                ECA
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                Extended Cellular Analyzer
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
              FAQ
            </a>
          </nav>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>

          {/* Mobile: Theme Toggle + Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav className="px-4 py-4 space-y-2">
            <a href="#features" className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
              Features
            </a>
            {/* More nav items... */}
            <div className="pt-2">
              <Button className="w-full gap-2">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
```

---

## 🎨 **DARK MODE BEST PRACTICES**

### **Color Contrast**

```css
/* Ensure proper contrast in both modes */

/* Light mode */
.light {
  --text-primary: #0f172a;    /* Very dark on white */
  --text-secondary: #64748b;  /* Medium gray */
  --text-tertiary: #94a3b8;   /* Light gray */
}

/* Dark mode */
.dark {
  --text-primary: #f8fafc;    /* Very light on dark */
  --text-secondary: #cbd5e1;  /* Medium light */
  --text-tertiary: #94a3b8;   /* Gray */
}
```

---

### **Image Handling**

```tsx
{/* Images that work in both modes */}
<img 
  src="/logo-light.svg" 
  alt="Logo"
  className="block dark:hidden"
/>
<img 
  src="/logo-dark.svg" 
  alt="Logo"
  className="hidden dark:block"
/>

{/* Or use CSS filter */}
<img 
  src="/logo.svg" 
  alt="Logo"
  className="dark:invert dark:brightness-0 dark:contrast-200"
/>
```

---

### **Gradient Adjustments**

```tsx
{/* Adjust gradient brightness for dark mode */}
<div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700">
  Gradient background
</div>

{/* Gradient text */}
<h1 className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
  Gradient Text
</h1>
```

---

## 📋 **IMPLEMENTATION CHECKLIST**

### **Setup**:
- [ ] Add `darkMode: 'class'` to tailwind.config.ts
- [ ] Update globals.css with CSS variables
- [ ] Add theme prevention script to _document.tsx
- [ ] Create ThemeToggle component

### **Components**:
- [ ] Update Hero with dark mode classes
- [ ] Update Features cards
- [ ] Update Buttons
- [ ] Update Header/Footer
- [ ] Update all sections

### **Testing**:
- [ ] Test toggle functionality
- [ ] Test persistence (localStorage)
- [ ] Test system preference detection
- [ ] Test no flash on page load
- [ ] Test all components in both modes
- [ ] Test contrast ratios (WCAG AA)

---

## 🚀 **QUICK START**

### **Add to Existing Landing Page**:

1. **Create ThemeToggle component** (copy from above)
2. **Update tailwind.config.ts** (add darkMode: 'class')
3. **Update globals.css** (add CSS variables)
4. **Update _document.tsx** (add prevention script)
5. **Add toggle to Header** (see example above)
6. **Add dark: classes** to all components

---

This is a complete dark mode implementation! Would you like me to create the actual component files or show more specific examples?

