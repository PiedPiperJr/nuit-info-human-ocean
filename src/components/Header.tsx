'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Accueil', 
      href: '/',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: 'Explorer', 
      href: '/explorer',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    { 
      name: 'Blog', 
      href: '/blog',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
        </svg>
      )
    },
    { 
      name: 'Mon Profil', 
      href: '/eco-profile',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled || pathname !== '/' 
            ? 'bg-white/90 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-20 h-20  ">
              <Image 
                src="/logoApp2.png" 
                alt="Human Ocean Logo" 
                width={80} 
                height={80} 
                className="rounded-full"
              />
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled || pathname !== '/' ? 'text-gray-900' : 'text-white'
              } group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent`}>
                Human Ocean
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative group px-4 py-2 rounded-full transition-all duration-300 ease-in-out flex items-center space-x-2 ${
                      isScrolled || pathname !== '/' 
                        ? isActive
                          ? 'bg-blue-50 text-blue-600 ring-2 ring-blue-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:ring-2 hover:ring-gray-200'
                        : isActive
                          ? 'bg-white/20 text-white ring-2 ring-white'
                          : 'text-white hover:bg-white/10 hover:ring-2 hover:ring-white/30'
                    }`}
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Action Button */}
            <div className="hidden md:flex items-center">
              <button className={`
                px-6 py-2.5 rounded-full font-medium transition-all duration-300
                ${isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }
                transform hover:scale-105 active:scale-95
              `}>
                Agir maintenant
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled || pathname !== '/' 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 transition-all duration-300 ${
                  isScrolled || pathname !== '/' 
                    ? 'bg-gray-600' 
                    : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`} />
                <span className={`block w-5 h-0.5 transition-all duration-300 ${
                  isScrolled || pathname !== '/' 
                    ? 'bg-gray-600' 
                    : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block w-5 h-0.5 transition-all duration-300 ${
                  isScrolled || pathname !== '/' 
                    ? 'bg-gray-600' 
                    : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col space-y-2 pb-6">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isScrolled || pathname !== '/' 
                        ? isActive
                          ? 'bg-blue-50 text-blue-600 ring-2 ring-blue-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:ring-2 hover:ring-gray-200'
                        : isActive
                          ? 'bg-white/20 text-white ring-2 ring-white'
                          : 'text-white hover:bg-white/10 hover:ring-2 hover:ring-white/30'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <button className={`
                mt-4 w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 ring-2
                ${isScrolled || pathname !== '/' 
                  ? 'bg-blue-600 text-white ring-blue-600 hover:bg-blue-700 hover:ring-blue-700'
                  : 'bg-white/20 text-white ring-white/50 hover:bg-white/30 hover:ring-white'
                }
              `}>
                Agir maintenant
              </button>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Overlay for mobile menu */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}