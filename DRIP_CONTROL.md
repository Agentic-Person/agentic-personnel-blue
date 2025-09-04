# Drip Control Settings

This document contains all configurable parameters for the workflow arrow water droplet effects, including particle emission and audio settings.

## Audio Settings

### Location
`src/components/sections/WorkflowSection.tsx` - Lines 173-175 and 192-193

### Current Settings
- **Audio Enabled**: OFF (set to 0)
- **First Tone Volume**: 0.05 (range: 0-1)
- **Second Tone Volume**: 0.03 (range: 0-1)

### To Enable/Disable Audio
```javascript
// Line 174 - First tone volume
gainNode.gain.setValueAtTime(0, audioContext.currentTime);  // 0 = OFF, 0.05 = quiet, 0.3 = normal

// Line 192 - Second tone volume  
gainNode2.gain.setValueAtTime(0, audioContext.currentTime);  // 0 = OFF, 0.03 = quiet, 0.15 = normal
```

### Audio Frequencies
- **First Tone**: 800Hz dropping to 400Hz over 0.1s
- **Second Tone**: 600Hz dropping to 250Hz over 0.05s (plays 50ms after first)

## Particle Emitter Settings

### Location
`src/components/ui/WaterDropParticles.tsx`

### Current Settings
- **Number of Particles**: 10 (Line 13)
- **Particle Size**: 6-14px random (Line 15)
- **Initial Spread**: ±30px horizontal, ±10px vertical (Lines 17-18)
- **Horizontal Velocity**: ±1 px/frame (Line 20)
- **Vertical Velocity**: 8-10 px/frame (Line 21)
- **Animation Duration**: 1.875s (Lines 26 & 44)
- **Starting Opacity**: 0.8 (Line 52)

### Quick Adjustments

#### Change Number of Particles
```javascript
// Line 13
Array.from({ length: 10 }, (_, i) => ({  // Change 10 to desired count
```

#### Adjust Particle Velocity
```javascript
// Lines 20-21
vx: (Math.random() - 0.5) * 1,      // Horizontal drift multiplier
vy: Math.random() * 2 + 8,          // Base velocity + random variance
```

#### Modify Initial Spread (Shower Head Width)
```javascript
// Lines 17-18
startX: (Math.random() - 0.5) * 30,  // Horizontal spread (±30px)
startY: (Math.random() - 0.5) * 10,  // Vertical spread (±10px)
```

#### Change Particle Size Range
```javascript
// Line 15
size: Math.random() * 8 + 6,  // Results in 6-14px (random * range + minimum)
```

## Trigger Settings

### Location
`src/components/sections/WorkflowSection.tsx` - Lines 91-154

### Current Settings
- **Trigger Direction**: Particles only when scrolling DOWN, audio both directions
- **Trigger Threshold**: 50px from viewport center (Line 114)
- **Debounce Delay**: 100ms between triggers (Line 146)
- **Active Arrows**: All 5 workflow steps

### Scroll Detection Adjustments

#### Change Trigger Threshold
```javascript
// Line 114
const threshold = 50; // pixels tolerance for triggering (smaller = more precise)
```

#### Modify Debounce Timing
```javascript
// Line 146
setTimeout(() => {
  isProcessing = false;
}, 100);  // Milliseconds between possible triggers
```

## Visual Settings

### Arrow Appearance
- **Background**: Transparent (rgba(0, 0, 0, 0))
- **Icon Color**: #9ab6e0 (light blue)
- **Icon Size**: 24x24px (desktop), 20x20px (mobile)
- **Hover Effect**: Scale 1.1x
- **Pulse Animation**: Active on current step

### Particle Appearance
- **Color**: #4e8ad3 (medium blue)
- **Shadow**: 0 2px 4px rgba(78, 138, 211, 0.5)
- **Shape**: Circle (rounded-full)
- **Fade**: Linear opacity from 0.8 to 0

## Common Presets

### Quiet Rain
```javascript
// Audio: 0.05 / 0.03
// Particles: 10
// Velocity: vy = 4-5
// Spread: ±30px
```

### Heavy Shower
```javascript
// Audio: 0.1 / 0.06
// Particles: 20
// Velocity: vy = 10-15
// Spread: ±50px
```

### Silent Mode (Current)
```javascript
// Audio: 0 / 0 (OFF)
// Particles: 10
// Velocity: vy = 8-10
// Spread: ±30px
```

### Gentle Drip
```javascript
// Audio: 0.03 / 0.02
// Particles: 5
// Velocity: vy = 3-4
// Spread: ±15px
```

## Usage

To modify any setting:
1. Open the specified file
2. Navigate to the line number indicated
3. Adjust the value
4. Save and the dev server will hot reload

## Notes
- All particle animations use CSS-in-JS for unique trajectories
- Audio is generated programmatically (no audio files needed)
- Particles auto-cleanup after animation completes
- System respects user's scroll direction for particle emission