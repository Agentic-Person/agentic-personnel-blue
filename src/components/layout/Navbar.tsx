'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NavigationItem } from '@/types';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ThemeToggle } from '@/components/ThemeToggle';
import { handleSectionClick } from '@/lib/scroll';
import ShimmerButton from '@/components/ui/ShimmerButton';

const navigationItems: NavigationItem[] = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Team', href: '#team' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Check which section is currently in view
      const sections = ['solutions', 'workflow', 'team'];
      const scrollPosition = window.scrollY + 100; // Account for navbar height
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      
      // Clear active section if at the top of the page
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    // Entrance animation trigger - more dramatic
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-out',
        'transform',
        isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95',
        isScrolled ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
      style={{
        backgroundColor: isScrolled ? 'rgba(0, 29, 57, 0.95)' : 'transparent',
      }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/aps-logo.png" 
              alt="Agentic Personnel Logo" 
              width={40} 
              height={40}
              className="rounded-lg"
            />
            <span className="ml-2 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Agentic Personnel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleSectionClick(e, sectionId);
                    setActiveSection(sectionId);
                  }}
                  className="relative font-medium transition-all duration-300 hover:brightness-110 cursor-pointer pb-1"
                  style={{ 
                    color: isActive ? '#4e8ad3' : 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }
                  }}
                >
                  {item.label}
                  {/* Active indicator underscore */}
                  <span 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-300"
                    style={{
                      width: isActive ? '100%' : '0%',
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                </a>
              );
            })}
          </div>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <ShimmerButton href="https://calendly.com/jimmy-agenticpersonnel/30min?month=2025-09">
              Chat with Our AI
            </ShimmerButton>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-md transition-colors duration-300"
              style={{ 
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--card-background)'
              }}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}