'use client'

import { useState, useEffect } from 'react'
import { 
  HomeIcon, 
  UserIcon, 
  BriefcaseIcon, 
  EnvelopeIcon,
  Squares2X2Icon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
      setPastHero(scrollPosition > window.innerHeight - 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#hero', icon: HomeIcon },
    { name: 'About', href: '#about', icon: UserIcon },
    { name: 'Experience', href: '#experience', icon: BriefcaseIcon },
    { name: 'Projects', href: '#projects', icon: Squares2X2Icon },
    { name: 'Contact', href: '#contact', icon: EnvelopeIcon },
  ]

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Top navbar - visible on hero section */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        pastHero ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className={`flex items-center justify-center gap-2 bg-gray-900/20 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-700/30 transition-all duration-300 ${
            scrolled ? 'scale-95' : 'scale-100'
          }`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center gap-2 px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Left sidebar - visible after hero section on very large screens only */}
      <nav className={`hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
        pastHero ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl py-6 px-4 shadow-2xl border border-gray-700/50">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                title={item.name}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-base font-medium whitespace-nowrap">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Burger menu - bottom left for screens below xl */}
      <div className={`xl:hidden fixed bottom-8 left-8 z-50 transition-all duration-500 ${
        pastHero ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-14 h-14 bg-gray-900/80 backdrop-blur-md rounded-full shadow-2xl border border-gray-700/50 flex items-center justify-center text-white hover:bg-gray-800/80 transition-all duration-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute bottom-20 left-0 bg-gray-900/95 backdrop-blur-md rounded-3xl py-4 px-2 shadow-2xl border border-gray-700/50 min-w-[200px]">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
