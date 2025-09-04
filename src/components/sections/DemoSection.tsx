'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, Maximize, Loader2, PlayCircle, Clock, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Demo {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  thumbnail?: string;
  duration?: string;
}

const demos: Demo[] = [
  {
    id: 'demo-1',
    title: 'Smart Customer Support',
    description: 'See how AI agents handle complex customer inquiries, route tickets, and provide instant resolutions 24/7.',
    duration: '2:30',
    videoUrl: 'https://youtu.be/0IIZU_Mp9HI',
    thumbnail: '/api/placeholder/600/400'
  },
  {
    id: 'demo-2',
    title: 'Coming Soon',
    description: 'Our next demo is currently in production. Stay tuned for more automation solutions.',
    duration: '',
    videoUrl: '',
    thumbnail: '/api/placeholder/600/400'
  }
];

export default function DemoSection() {
  const [activeDemo, setActiveDemo] = useState<Demo>(demos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleDemoSelect = (demo: Demo) => {
    if (demo.id !== activeDemo.id) {
      setIsLoading(true);
      setIsPlaying(false);
      setShowOverlay(true);
      setTimeout(() => {
        setActiveDemo(demo);
        setIsLoading(false);
      }, 300);
    }
  };

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
    setShowOverlay(false);
  };

  return (
    <section id="demos" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background particles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[\#4e8ad3] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[\#4e8ad3]/70 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1500"></div>
      </div>

      <Container>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            DEMOS
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-body)' }}>
            See our AI solutions in action. Select a demo below to watch how we transform businesses.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 items-start">
          {/* Left Column - Demo List */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card 
                  className={`group cursor-pointer transition-all duration-300 border overflow-hidden ${
                    activeDemo.id === demo.id 
                      ? 'border-[\#4e8ad3]/60' 
                      : 'border-[\#4e8ad3]/20 hover:border-[\#4e8ad3]/40'
                  }`}
                  style={{ backgroundColor: activeDemo.id === demo.id ? '#001d39' : 'var(--card-background)' }}
                  onClick={() => handleDemoSelect(demo)}
                >
                  <CardContent className="p-0">
                    <div className="flex items-stretch">
                      {/* Thumbnail Section */}
                      <div className="relative w-48 h-32 flex-shrink-0 bg-gradient-to-br from-[\#1a3a5c] to-[\#0f2744] overflow-hidden">
                        {demo.videoUrl ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <PlayCircle className="w-12 h-12 text-[\#4e8ad3] opacity-80 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-medium text-[\#4e8ad3] uppercase tracking-wider">Coming Soon</span>
                          </div>
                        )}
                        
                        {/* Number Badge */}
                        <div className="absolute top-3 left-3">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
                            style={{ 
                              backgroundColor: activeDemo.id === demo.id ? '#4e8ad3' : '#1a3a5c',
                              color: 'white'
                            }}
                          >
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold" style={{ color: activeDemo.id === demo.id ? '#4e8ad3' : 'var(--text-primary)' }}>
                              {demo.title}
                            </h3>
                            {activeDemo.id === demo.id && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center text-xs font-medium px-2 py-1 rounded-full bg-[\#4e8ad3]/10 text-[\#4e8ad3]"
                              >
                                <span>Active</span>
                              </motion.div>
                            )}
                          </div>
                          <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--text-body)' }}>
                            {demo.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          {demo.duration ? (
                            <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
                              <Clock className="w-3 h-3" />
                              <span>{demo.duration}</span>
                            </div>
                          ) : (
                            <div></div>
                          )}
                          <ChevronRight className={`w-4 h-4 transition-all duration-200 ${
                            activeDemo.id === demo.id ? 'text-[\#4e8ad3] translate-x-1' : 'text-[\#4e8ad3]/40 group-hover:text-[\#4e8ad3]/60 group-hover:translate-x-0.5'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Video Player */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden border border-[\#4e8ad3]/30">
              {/* If we have a video URL, show the embed, otherwise show placeholder */}
              {activeDemo.videoUrl ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDemo.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[\#001529]"
                  >
                    {isLoading ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-[\#001529]">
                        <Loader2 className="w-12 h-12 text-[\#4e8ad3] animate-spin" />
                      </div>
                    ) : (
                      <>
                        <iframe
                          src={`${activeDemo.videoUrl.includes('youtu')
                            ? `https://www.youtube.com/embed/${activeDemo.videoUrl.split('/').pop()}?modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&color=white&controls=1&disablekb=1&fs=0&autoplay=${showOverlay ? 0 : 1}`
                            : activeDemo.videoUrl.replace('share', 'embed')}`}
                          className="w-full h-full"
                          frameBorder="0"
                          allowFullScreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                        
                        {/* Custom Play Overlay */}
                        {showOverlay && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-br from-[\#001d39]/95 to-[\#001529]/95 flex items-center justify-center cursor-pointer group z-10"
                            onClick={handlePlayToggle}
                          >
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="relative"
                            >
                              {/* Outer ring */}
                              <div className="absolute inset-0 rounded-full bg-[\#4e8ad3]/20 blur-xl scale-150"></div>
                              
                              {/* Main button */}
                              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[\#4e8ad3] to-[\#3a6fb0] flex items-center justify-center shadow-2xl group-hover:shadow-[\#4e8ad3]/30">
                                <svg
                                  className="w-8 h-8 text-white ml-1"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                              
                              {/* Pulse animation */}
                              <div className="absolute inset-0 rounded-full bg-[\#4e8ad3]/30 animate-ping"></div>
                            </motion.div>
                            
                            <div className="absolute bottom-8 left-0 right-0 text-center">
                              <p className="text-white/80 text-sm font-medium">Click to play demo</p>
                            </div>
                          </motion.div>
                        )}
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              ) : (
                /* Placeholder for demos without videos */
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDemo.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[\#001d39] to-[\#001529]"
                  >
                    <div className="text-center px-8">
                      <div className="mb-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-[\#4e8ad3]/10 flex items-center justify-center">
                          <PlayCircle className="w-10 h-10 text-[\#4e8ad3]/50" />
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">{activeDemo.title}</h4>
                      <p className="text-base text-[\#9ab6e0] mb-4 max-w-md mx-auto">{activeDemo.description}</p>
                      <p className="text-sm text-[\#4e8ad3] font-medium">Video coming soon</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}