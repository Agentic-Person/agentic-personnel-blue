'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Success
      setSubmitStatus('success');
      setStatusMessage('Thank you! Your message has been sent to Jimmy.');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/jimmy-agenticpersonnel/30min?month=2025-09', '_blank');
  };

  return (
    <section id="cta" className="py-24" style={{ backgroundColor: 'var(--background)' }}>
      <Container>
        <ScrollReveal direction="up" className="max-w-7xl mx-auto">
          {/* Main Card Container */}
          <div 
            className="rounded-2xl shadow-2xl overflow-hidden"
            style={{ 
              backgroundColor: '#001d39',
              border: '1px solid rgba(78, 138, 211, 0.2)'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              
              {/* Left Section - Profile & Contact (2/5) */}
              <div className="lg:col-span-2 p-8 lg:p-10 border-r border-opacity-20" style={{ borderColor: 'var(--border)' }}>
                <div className="flex flex-col h-full">
                  {/* Profile Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/avatar/jimmy3d.png"
                        alt="Jimmy"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                        Let&apos;s Chat
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-body)', opacity: 0.9 }}>
                    Ready to automate your business and focus on what matters most? 
                    Let&apos;s discuss how we can help you save time and increase revenue. 
                    We will create a Mind-Flow visual map of our conversation and give us something to build upon.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-3 mb-8">
                    <a 
                      href="mailto:jimmy@agenticpersonnel.com" 
                      className="flex items-center gap-3 text-sm hover:brightness-125 transition-all"
                      style={{ color: '#4e8ad3' }}
                    >
                      <Mail size={18} />
                      <span>jimmy@agenticpersonnel.com</span>
                    </a>
                    
                    <a 
                      href="tel:+13203186778" 
                      className="flex items-center gap-3 text-sm hover:brightness-125 transition-all"
                      style={{ color: '#4e8ad3' }}
                    >
                      <Phone size={18} />
                      <span>(320) 318-6778</span>
                    </a>
                    
                    <div 
                      className="flex items-center gap-3 text-sm"
                      style={{ color: '#4e8ad3' }}
                    >
                      <MapPin size={18} />
                      <span>Minnesota, USA</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={handleBookCall}
                    className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <Calendar size={20} />
                    Book a Free 30-Min Call
                  </button>
                </div>
              </div>

              {/* Right Section - Contact Form (3/5) */}
              <div className="lg:col-span-3 p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="h-full flex flex-col">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium mb-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-colors"
                        style={{
                          backgroundColor: 'rgba(0, 29, 57, 0.7)',
                          border: '1px solid rgba(78, 138, 211, 0.2)',
                          color: 'var(--text-primary)',
                        }}
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium mb-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-colors"
                        style={{
                          backgroundColor: 'rgba(0, 29, 57, 0.7)',
                          border: '1px solid rgba(78, 138, 211, 0.2)',
                          color: 'var(--text-primary)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div className="mb-6">
                    <label 
                      htmlFor="company" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg transition-colors"
                      style={{
                        backgroundColor: 'rgba(0, 29, 57, 0.7)',
                        border: '1px solid rgba(78, 138, 211, 0.2)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="mb-6 flex-1">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Describe anything that you want to talk about
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg transition-colors resize-none"
                      style={{
                        backgroundColor: 'rgba(0, 29, 57, 0.7)',
                        border: '1px solid rgba(78, 138, 211, 0.2)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                    style={{
                      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Email to Jimmy
                        <Send size={20} />
                      </>
                    )}
                  </button>
                  
                  {/* Status Message */}
                  {submitStatus !== 'idle' && (
                    <div 
                      className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                          : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <CheckCircle size={20} />
                      ) : (
                        <AlertCircle size={20} />
                      )}
                      <span>{statusMessage}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}