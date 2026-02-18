# ECA Landing Page - F2G-SOLUTIONS

Professional landing page for Extended Cellular Analyzer (ECA) by F2G-SOLUTIONS.

## 🚀 Features

- **Modern Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design with optimized layouts
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Auto-Rotating Showcase**: 11 ECA interface screenshots with smooth transitions
- **Active Navigation**: Section highlighting based on scroll position
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Performance**: Static export, optimized images, lazy loading
- **Accessible**: WCAG 2.1 AA compliant
- **Production Ready**: Error boundaries, analytics ready, CDN friendly

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

## 🎨 Sections

1. **Hero** - Main value proposition with CTA and auto-rotating image showcase (11 images, 2s interval, seamless loop)
2. **Features** - 12 key features with icons in responsive grid
3. **How It Works** - 4-step process guide
4. **Use Cases** - Target personas and workflows
5. **FAQ** - Common questions with accordion
6. **Contact** - Final conversion section
7. **Footer** - Links and legal information

## 🎯 Key Highlights

### Design & UX
- Professional design inspired by Echelon style (light, minimal aesthetic)
- Auto-rotating image showcase with navigation controls
- Active section highlighting in header navigation
- Smooth animations and transitions
- Dark mode support with system preference detection
- Mobile-responsive navigation with hamburger menu

### Product Accuracy
- Single device support (accurately represented)
- 16GB RAM minimum requirement
- Clear system requirements (Windows 10/11, Python 3.11+, TShark/Wireshark)
- Transparent about current capabilities and future roadmap

### Technical Excellence
- Reduced section spacing for tighter, professional layout
- Seamless infinite carousel (no jump-back effect)
- Previous/Next navigation buttons (visible on hover)
- Full image visibility with proper borders (object-contain)
- Clean, minimal code implementation

## 🎨 Design System

### Color Palette
```css
--primary: #1E1E1E        /* Headings, body text */
--muted: #818293          /* Descriptions, secondary text */
--accent: #698D9C         /* Section labels, active states */
--dark: #0F0F11           /* Footer, dark sections */
--card-border: #E5E5E5    /* Subtle borders */
```

### Typography
- **Font Family**: Inter (all weights)
- **Hero Title**: 78px, weight 400, tight letter-spacing (-0.07em)
- **Section Headings**: 32px, weight 500, letter-spacing (-0.05em)
- **Body Text**: 16px, weight 400, line-height 1.5
- **Section Labels**: 12px, weight 500, uppercase, letter-spacing 0.05em

### Layout
- **Max Width**: 1100px
- **Hero Max Width**: 900px
- **Section Padding**: 48px - 80px (responsive)
- **Card Gap**: 20px
- **Border Radius**: 12px (cards), 999px (buttons)

## 🔧 Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge
- **Image Optimization**: Next.js Image component

## 📝 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
```typescript
colors: {
  primary: '#1E1E1E',
  muted: '#818293',
  accent: '#698D9C',
  dark: '#0F0F11',
  'card-border': '#E5E5E5',
}
```

### Content
All content is in component files under `src/components/sections/`:
- `Hero.tsx` - Main hero section with carousel
- `Features.tsx` - Feature grid
- `HowItWorks.tsx` - Process steps
- `UseCases.tsx` - Target personas
- `FAQ.tsx` - Accordion questions
- `Contact.tsx` - CTA section
- `Footer.tsx` - Footer links

### Images
Add screenshots to `public/` directory and update references in `Hero.tsx`:
```typescript
const showcaseImages = [
  { src: '/your-image.png', alt: 'Description' },
  // ...
]
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Static Export
```bash
npm run export
# Upload /out directory to any static host
```

### GitHub Pages
```bash
npm run export
# Deploy /out directory to gh-pages branch
```

## 🎯 Key Implementation Details

### Auto-Rotating Carousel
- **Interval**: 2 seconds between slides
- **Transition**: 700ms smooth slide (left-to-right)
- **Images**: 11 curated ECA interface screenshots
- **Navigation**: Previous/Next buttons (visible on hover)
- **Infinite Loop**: Seamless with duplicated array technique
- **Pause**: On hover (desktop) or touch (mobile)
- **Display**: object-contain for full image visibility

### Dark Mode
- **Toggle**: Moon/Sun icon in header
- **Storage**: localStorage persistence
- **Default**: Light mode (no system preference)
- **Transition**: Smooth 300ms
- **Coverage**: All sections, components, and UI elements
- **Contrast**: WCAG AA compliant in both modes

### Active Navigation
- **Detection**: Scroll position + 100px offset
- **Highlight**: Bold black (light) or white (dark) with semibold weight
- **Smooth**: Transitions between active states
- **Mobile**: Works in hamburger menu with background highlight

### Responsive Design
- **Desktop (1440px+)**: Full experience with all features
- **Laptop (1024px)**: Optimized spacing and layout
- **Tablet (768px)**: Touch-friendly interactions
- **Mobile (390px)**: Compact view with hamburger menu

## 📊 Performance

- **First Load JS**: ~100 kB
- **Build Time**: ~3-5 seconds
- **Image Optimization**: Next.js automatic optimization
- **Static Export**: Full static HTML/CSS/JS
- **CDN Ready**: All assets in public/ directory

## ♿ Accessibility

- **WCAG 2.1 AA**: Compliant contrast ratios
- **Keyboard Navigation**: Full support with focus states
- **Screen Readers**: Semantic HTML and ARIA labels
- **Alt Text**: Descriptive for all images
- **Focus Indicators**: Visible ring outlines

## 🔄 Recent Updates

### Product Accuracy
- Updated device support to reflect single device capability
- Increased RAM requirement to 16GB minimum
- Removed Technology section for streamlined UX
- Accurate representation of current features vs. roadmap

### Design Improvements
- Simplified hero title to solid black color
- Reduced section spacing for tighter layout
- Changed carousel to left-to-right slide transition
- Added seamless infinite loop (no jump-back)
- Implemented active section highlighting

### Technical Enhancements
- Added dark/light mode toggle with persistence
- Implemented auto-rotating image showcase
- Added navigation controls to carousel
- Changed image display to object-contain
- Full dark mode support across all components

## 📄 License

Proprietary - F2G-SOLUTIONS

## 🏢 Company

Built by F2G-SOLUTIONS for professional cellular network analysis.

**Contact**: contact@f2g-solutions.com  
**Website**: http://www.f2gsolutions.com/

---

© 2024 F2G-SOLUTIONS. All rights reserved.
