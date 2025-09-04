import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Linkedin, Mail, Globe } from 'lucide-react';

const teamMembers = [
  {
    name: "Jimmy Davidson",
    role: "AI Agentech Orchestrator & Full-Stack Solutions Developer",
    image: "/jimmy.png",
    description: "Blending the precision of a full-stack developer with the imagination of a game designer, Jimmy is at the forefront of AI-driven automation. Since 2024, he has architected intelligent, scalable solutions for clients - leveraging the power of n8n workflows, Node.js, React, Tailwind CSS, Supabase, and NeonDB to deliver seamless, modern web applications.\n\nJimmy specializes in building advanced backend automations with n8n, integrating vectorized databases for real-time information retrieval, and orchestrating robust, user-centric platforms that bridge the gap between creativity and technology. As founder of Agentic Personnel, he thrives on transforming bold ideas and complex requirements into practical, future-ready systems.\n\nWhether it's designing playful interfaces, streamlining business processes, or pioneering new possibilities in AI and automation, Jimmy brings technical mastery, creative problem-solving, and a collaborative spirit to every project.",
    links: {
      email: "jimmy@agenticpersonnel.com",
      linkedin: "https://linkedin.com/in/jimmydavidson",
      website: "https://agenticpersonnel.com"
    }
  },
  {
    name: "Matthew Snow",
    role: "AI Engineer, Automation Architect",
    image: "/mattsnow.png",
    description: "Founder of Me, Myself Plus AI, Matthew transforms ideas into intelligent systems. With deep expertise in agentic workflows, LLM integrations, and voice-driven automation, Matthew brings a sharp, hands-on approach to solving complex business challenges. His portfolio spans everything from n8n-powered orchestration to real-time data tools for marketing, healthcare, and automotive performance. Equal parts technical strategist and creative builder, Matthew isn't just chasing the future of AI - he's engineering it one agent at a time.",
    links: {
      email: "matt@memyselfplusai.com",
      linkedin: "https://linkedin.com/in/matthewsnow",
      website: "https://memyselfplusai.com"
    }
  },
  {
    name: "Sarah",
    role: "AI Communications Concierge",
    image: "/avatar/ai-agent.png",
    description: "The AI Communications Concierge is the digital heartbeat of Agentic Personnel's client experience. This advanced, fully automated system manages all inbound and outbound communications - including phone calls, SMS, and email - ensuring every inquiry is handled promptly, professionally, and with a personal touch.\n\nBuilt atop industry-leading AI, n8n workflow orchestration, and real-time information retrieval from vectorized databases, our concierge doesn't just answer phones; it intelligently routes calls, schedules appointments, answers FAQs, gathers key information, and seamlessly hands off complex issues to human team members when needed.\n\nWhether engaging with clients, candidates, or partners, the AI Communications Concierge ensures Agentic Personnel's communications are always consistent, reliable, and available 24/7. By streamlining routine processes and eliminating wait times, it empowers our team to focus on what matters most: building great relationships and delivering exceptional solutions.",
    links: {
      email: "hello@agenticpersonnel.com",
      linkedin: "",
      website: "https://agenticpersonnel.com"
    }
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24" style={{ backgroundColor: 'var(--background)' }}>
      <Container>
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Meet The Team
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-4" style={{ color: 'var(--text-body)' }}>
            Combining creative minds and intelligent automation to reimagine what&apos;s possible.
          </p>
        </ScrollReveal>

        {/* Team Members Grid - Optimized for 3 cards in a row */}
        <StaggerReveal 
          staggerDelay={0.3}
          direction="up"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:scale-105 w-full"
              style={{ 
                minHeight: '500px',
                border: '2px solid rgba(78, 138, 211, 0.3)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(78, 138, 211, 0.2)'
              }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Circular Profile Image */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-white ring-opacity-90">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      priority={index === 0}
                    />
                  </div>
                </div>
                
                {/* Centered Name and Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--primary)' }}>
                    {member.role}
                  </p>
                </div>
                
                {/* Left-aligned Description */}
                <div className="flex-grow mb-4">
                  <div className="text-xs leading-relaxed text-left space-y-2" style={{ color: '#FFFFFF', opacity: 0.95 }}>
                    {member.description.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                {/* Contact Links - Centered at bottom */}
                <div className="flex justify-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <a 
                    href={`mailto:${member.links.email}`}
                    className="p-2.5 rounded-full transition-all hover:scale-110 hover:shadow-lg"
                    style={{ 
                      backgroundColor: 'var(--card-background)',
                      border: '1px solid var(--border)'
                    }}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} style={{ color: 'var(--primary)' }} />
                  </a>
                  
                  {member.links.linkedin && (
                    <a 
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full transition-all hover:scale-110 hover:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--card-background)',
                        border: '1px solid var(--border)'
                      }}
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={18} style={{ color: 'var(--primary)' }} />
                    </a>
                  )}
                  
                  <a 
                    href={member.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full transition-all hover:scale-110 hover:shadow-lg"
                    style={{ 
                      backgroundColor: 'var(--card-background)',
                      border: '1px solid var(--border)'
                    }}
                    aria-label={`${member.name} Website`}
                  >
                    <Globe size={18} style={{ color: 'var(--primary)' }} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggerReveal>

        {/* Our Values */}
        <ScrollReveal direction="up" delay={0.3}>
          <div 
            className="text-center max-w-4xl mx-auto" 
            style={{ 
              backgroundColor: 'var(--card-background)', 
              borderRadius: '1rem', 
              padding: '2rem',
              border: '2px solid rgba(78, 138, 211, 0.3)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(78, 138, 211, 0.2)'
            }}>
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Generous Value First",
              "Transparent Results", 
              "Security First",
              "Human-Centered AI",
              "Long-term Partnership",
              "SMB-Focused Approach"
            ].map((value, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--text-primary)' }}></div>
                <span className="font-medium" style={{ color: 'var(--text-body)' }}>{value}</span>
              </div>
            ))}
          </div>
          </div>
        </ScrollReveal>

      </Container>
    </section>
  );
}