# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Agentic Personnel Solutions website, a Next.js application showcasing smart automation systems for small and medium-sized businesses (SMBs). The website emphasizes human-centric design while leveraging AI-powered automation to simplify workflows and manage repetitive tasks.

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── ParticleSystem_02.tsx - Dual particle system with convergence points
│   │   ├── Flipbook.tsx - Image flipbook component
│   │   └── [other UI components]
│   ├── sections/
│   │   ├── HeroSection.tsx - Hero with particle systems and tagline
│   │   ├── WorkflowSection.tsx - 5-step process with alternating layout
│   │   ├── DemoSection.tsx - YouTube video demonstrations
│   │   └── [other sections]
│   └── animations/ - Framer Motion animation components
├── app/ - Next.js 15 app router pages
└── styles/ - Global CSS and Tailwind styles

docs/
├── ParticleSystem.md - Complete particle system documentation
└── [other documentation]

public/
├── aps-logo.png - Company logo
└── [workflow images and assets]

tailwind.config.ts - Animation keyframes and custom styles
```

## Company Information

**Company Name**: Agentic Personnel Solutions

**Core Business**: Smart automation systems for SMBs
- Target: Small and medium-sized businesses
- Approach: Human-centric design with AI automation
- Philosophy: "Intelligent Systems. Built for Humans. Powered by AI."

**Key Messaging**:
- Tagline: "We build smart systems that manage repetitive tasks, simplify workflows, and lighten the load for SMBs"
- CTA: "Let's Chat!"
- Focus: Workflow simplification and task automation

## Development Guidelines

### Working with This Repository

**Development Server**:
- Run on port 3001: `npm run dev`
- Build: `npm run build`
- Production: `npm start`

### Important Components

**Particle System** (`ParticleSystem_02.tsx`):
- Dual systems with convergence at (70%, 35%) and (85%, 35%)
- 16 animation variants total
- ~720 particles running at 60fps
- See `docs/ParticleSystem.md` for complete reference

**Workflow Section** (`WorkflowSection.tsx`):
- Alternating image-text layout
- Perfect center alignment with 120px gaps
- 16:9 aspect ratio images (480x270px)
- 5 steps: Discover → Design → Develop → Deploy → Deliver

**Hero Section** (`HeroSection.tsx`):
- Contains dual particle systems
- Flipbook component integration
- Main tagline and messaging

### Design System

**Color Palette**:
- Background: #002246 (dark blue)
- Card Background: #001d39
- Primary Accent: #4e8ad3 (blue)
- Text Primary: #FFFFFF
- Text Secondary: #9ab6e0

**Typography**:
- Headings: Bold, large sizes
- Body: Regular weight, good line height
- CTAs: Medium weight with hover effects

### Animation Guidelines

**Framer Motion**:
- Scroll-triggered animations throughout
- Smooth transitions (0.3-0.6s duration)
- Scale effects on hover (1.05x)
- Viewport-based triggers with margins

**Particle System**:
- DO NOT modify keyframes without checking ParticleSystem.md
- Maintain 60fps performance target
- Test on multiple screen sizes

## Best Practices

### Code Style
- Use TypeScript strict mode
- Maintain component modularity
- Follow existing patterns in codebase
- Keep animations performant

### Performance
- Optimize images with Next.js Image component
- Use lazy loading where appropriate
- Monitor bundle size
- Test on mobile devices

### Accessibility
- Maintain WCAG 2.1 compliance
- Provide alt text for images
- Ensure keyboard navigation works
- Test with screen readers

## Repository Information

**GitHub**: https://github.com/Agentic-Person/agentic-personnel-blue
**Branch**: main (primary development branch)

## Key Documentation

- `README.md` - Project overview and setup instructions
- `TODO.md` - Development progress and feature tracking
- `docs/ParticleSystem.md` - Particle system technical reference
- This file (`CLAUDE.md`) - AI assistant guidance

## Important Notes

1. This is NOT "The AI CEO" website - this is Agentic Personnel Solutions
2. Always use "Agentic Personnel" or "Agentic Personnel Solutions" for branding
3. The logo is `/aps-logo.png` in the public folder
4. Development server runs on port 3001, not 3000
5. The workflow section uses an alternating layout pattern - maintain this design
6. Particle system is performance-critical - test any changes thoroughly

When making changes, ensure alignment with the company's focus on smart automation for SMBs and maintain the human-centric design philosophy.