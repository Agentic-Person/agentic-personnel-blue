'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { handleSectionClick } from '@/lib/scroll';

export default function Footer() {
  return (
    <footer 
      className="transition-colors duration-300 border-t"
      style={{ 
        backgroundColor: 'var(--background)',
        borderColor: 'var(--border)',
        color: 'var(--text-primary)'
      }}
    >
      <Container>
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            
            {/* Left: Logo and Tagline */}
            <div className="flex flex-col">
              <Link href="/" className="flex items-center mb-3">
                <Image
                  src="/aps-logo.png"
                  alt="Agentic Personnel"
                  width={40}
                  height={40}
                  className="mr-3"
                />
                <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Agentic Personnel
                </span>
              </Link>
              <p className="text-sm" style={{ color: 'var(--text-body)', opacity: 0.9 }}>
                Intelligent Systems. Built for Humans. Powered by AI.
              </p>
            </div>

            {/* Center/Right: Navigation Links */}
            <nav className="flex flex-wrap items-center gap-6 lg:gap-8">
              <a
                href="#solutions"
                onClick={(e) => handleSectionClick(e, 'solutions')}
                className="text-sm font-medium transition-colors hover:brightness-125 cursor-pointer"
                style={{ color: 'var(--text-body)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4e8ad3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-body)';
                }}
              >
                Solutions
              </a>
              
              <a
                href="#workflow"
                onClick={(e) => handleSectionClick(e, 'workflow')}
                className="text-sm font-medium transition-colors hover:brightness-125 cursor-pointer"
                style={{ color: 'var(--text-body)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4e8ad3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-body)';
                }}
              >
                How We Work
              </a>
              
              <a
                href="#team"
                onClick={(e) => handleSectionClick(e, 'team')}
                className="text-sm font-medium transition-colors hover:brightness-125 cursor-pointer"
                style={{ color: 'var(--text-body)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4e8ad3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-body)';
                }}
              >
                Team
              </a>
              
              <Link
                href="/blog"
                className="text-sm font-medium transition-colors hover:brightness-125 flex items-center gap-1"
                style={{ color: 'var(--text-body)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4e8ad3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-body)';
                }}
              >
                Blog
                <span className="text-xs opacity-70">(soon)</span>
              </Link>
              
              <a
                href="#cta"
                onClick={(e) => handleSectionClick(e, 'cta')}
                className="text-sm font-medium transition-colors hover:brightness-125 cursor-pointer"
                style={{ color: 'var(--text-body)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4e8ad3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-body)';
                }}
              >
                Contact
              </a>
              
              {/* Admin link - subtle placement */}
              <Link
                href="/admin"
                className="text-xs opacity-60 transition-opacity hover:opacity-100"
                style={{ color: 'var(--text-body)' }}
              >
                Admin
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: 'var(--text-body)', opacity: 0.8 }}>
              © 2025 Agentic Personnel Solutions. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link 
                href="/privacy" 
                className="text-xs transition-colors hover:brightness-125"
                style={{ color: 'var(--text-body)', opacity: 0.8 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4e8ad3';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-body)';
                  e.currentTarget.style.opacity = '0.8';
                }}
              >
                Privacy Policy
              </Link>
              
              <Link 
                href="/terms" 
                className="text-xs transition-colors hover:brightness-125"
                style={{ color: 'var(--text-body)', opacity: 0.8 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4e8ad3';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-body)';
                  e.currentTarget.style.opacity = '0.8';
                }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}