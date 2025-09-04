'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

interface SolutionPillar {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const solutionPillars: SolutionPillar[] = [
  {
    title: "Understand First",
    description: "We start with a deep dive into YOUR processes, challenges, and goals. No cookie-cutter solutions.",
    features: [
      "Free 15-minute assessment",
      "Custom opportunity analysis",
      "Industry-specific recommendations",
      "ROI projections for your business"
    ],
    image: "/images/understand-first.png"
  },
  {
    title: "Build Custom", 
    description: "Every solution is built specifically for your business, integrating seamlessly with your existing workflows.",
    features: [
      "Tailored AI tools and agents",
      "Secure, private implementations",
      "Integration with your current systems",
      "Scalable architecture for growth"
    ],
    image: "/images/build-custom.png"
  },
  {
    title: "Support Always",
    description: "We're your AI success partners, providing ongoing optimization and support as your business grows.",
    features: [
      "Dedicated success manager",
      "Regular performance reviews",
      "Continuous optimization",
      "24/7 technical support"
    ],
    image: "/images/support-always.png"
  }
];

export default function SolutionSection() {
  return (
    <section id="solutions" className="py-24" style={{ backgroundColor: 'var(--background)' }}>
      <Container>
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            We Build AI Solutions That Simply Work
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Our proven three-pillar approach ensures your AI implementation delivers 
            real results, not just impressive demos.
          </p>
        </ScrollReveal>

        <StaggerReveal 
          staggerDelay={0.2} 
          direction="up" 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {solutionPillars.map((pillar, index) => (
            <Card key={index} className="h-full relative overflow-hidden group hover:shadow-xl transition-shadow min-h-[500px]">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-6">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    width={240}
                    height={240}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-2xl mb-4 text-center">
                  {pillar.title}
                </CardTitle>
                <p className="leading-relaxed text-left" style={{ color: 'var(--text-secondary)' }}>
                  {pillar.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pillar.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center" 
                           style={{ backgroundColor: 'var(--card-background)' }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                      </div>
                      <span style={{ color: 'var(--text-body)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" 
                   style={{ background: 'linear-gradient(to right, rgba(255, 196, 79, 0.05), rgba(255, 196, 79, 0.1))' }}></div>
            </Card>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}