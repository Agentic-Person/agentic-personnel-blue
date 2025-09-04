import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Linkedin, Mail, Globe, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: "Jimmy Davidson",
    role: "AI Agentech Orchestrator & Full-Stack Solutions Developer",
    image: "/jimmy.png",
    description: "Blending the precision of a full-stack developer with the imagination of a game designer, Jimmy is at the forefront of AI-driven automation. He architects intelligent, scalable solutions that turn complexity into clarity—seamlessly connecting systems, automating workflows, and creating modern web experiences that just work.\n\nJimmy specializes in advanced automation, real-time information retrieval, orchestrating and building robust, user-centric platforms that bridge the gap between creativity and technology.\n\nAs the founder of Agentic Personnel, he thrives on transforming bold ideas and ambitious requirements into practical, future-ready solutions.\n\nWhether it's designing whimsical interfaces, streamlining business operations, or pioneering new frontiers in AI, Jimmy brings technical mastery, creative problem-solving, and a collaborative spirit to every project.",
    links: {
      email: "jimmy@agenticpersonnel.com",
      linkedin: "https://linkedin.com/in/jimmydavidson",
      website: "https://agenticpersonnel.com",
      phone: ""
    }
  },
  {
    name: "Matthew Snow",
    role: "AI Engineer, Automation Architect",
    image: "/mattsnow.png",
    description: "Founder of Me, Myself Plus AI, Matthew transforms ideas into intelligent systems. With deep expertise in agentic workflows, LLM integrations, and voice-driven automation, Matthew brings a sharp, hands-on approach to solving complex business challenges.\n\nHis portfolio spans everything from n8n-powered orchestration to real-time data tools for marketing, healthcare, and automotive performance.\n\nEqual parts technical strategist and creative builder, Matthew isn't just chasing the future of AI - he's engineering it one agent at a time.",
    links: {
      email: "matthew@agenticpersonnel.com",
      linkedin: "https://www.linkedin.com/in/matthew-s-aa4b4220/",
      website: "https://memyselfplusai.com",
      phone: ""
    }
  },
  {
    name: "Sarah",
    role: "AI Communications Concierge",
    image: "/avatar/ai-agent.png",
    description: "Sarah is the digital heartbeat of Agentic Personnel's client experience. Natural, friendly, and remarkably intuitive, this advanced AI agent handles all inbound and outbound communications—phone calls, SMS, and email—ensuring every inquiry is met with prompt, professional, and genuinely human conversation.\n\nBuilt atop industry-leading AI, n8n workflow orchestration, and real-time information retrieval, Sarah doesn't just answer phones; she understands context, routes calls, schedules appointments, answers FAQs, gathers key information, and seamlessly hands off complex issues to human team members when needed.\n\nWhether engaging with clients, candidates, or partners, Sarah ensures Agentic Personnel's communications are always natural, reliable, and available 24/7. By streamlining routine processes and eliminating wait times, she empowers our team to focus on building great relationships and delivering exceptional solutions.",
    links: {
      email: "hello@agenticpersonnel.com",
      linkedin: "",
      website: "",
      phone: "(320) 318-6778"
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
                  
                  {member.links.phone ? (
                    <a 
                      href={`tel:${member.links.phone}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-full transition-all hover:scale-105 hover:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--card-background)',
                        border: '1px solid var(--border)'
                      }}
                      aria-label={`Call ${member.name}`}
                    >
                      <Phone size={18} style={{ color: 'var(--primary)' }} />
                      <span style={{ color: 'var(--primary)', fontSize: '14px' }}>{member.links.phone}</span>
                    </a>
                  ) : member.links.website ? (
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
                  ) : null}
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