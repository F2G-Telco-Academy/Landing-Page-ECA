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

  // Prevent flash of wrong theme - show placeholder while mounting
  if (!mounted) {
    return (
      <button 
        className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"
        disabled
        aria-label="Loading theme toggle"
      />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun icon - visible in dark mode (indicating you can switch to light) */}
      <Sun 
        className="w-5 h-5 text-yellow-500 dark:text-yellow-400 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" 
        aria-hidden="true"
      />
      
      {/* Moon icon - visible in light mode (indicating you can switch to dark) */}
      <Moon 
        className="w-5 h-5 text-gray-600 dark:text-gray-200 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" 
        aria-hidden="true"
      />
      
      {/* Tooltip on hover */}
      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </span>
    </button>
  )
}

export default ThemeToggle
