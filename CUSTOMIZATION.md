# Customization Guide

## 🎨 Branding

### Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#1e40af',  // Change your brand color here
    50: '#eff6ff',
    // ... other shades
  }
}
```

### Logo
Replace emoji icon in `Header.tsx` and `Footer.tsx`:

```tsx
// Current: 📡 emoji
// Replace with:
<Image src="/logo.svg" alt="ECA" width={40} height={40} />
```

### Typography
Update font family in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

## 📝 Content Updates

### Hero Section
File: `src/components/sections/Hero.tsx`

```tsx
// Update main heading
<h1>Your Custom Title</h1>

// Update description
<p>Your custom description...</p>

// Update stats
<div className="text-3xl">90+</div> // Change numbers
```

### Features
File: `src/components/sections/Features.tsx`

Add/remove features from the `features` array:

```tsx
const features = [
  {
    icon: YourIcon,
    title: 'Your Feature',
    description: 'Description...',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  // ...
]
```

### FAQ
File: `src/components/sections/FAQ.tsx`

Edit the `faqs` array:

```tsx
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer...',
  },
]
```

## 🖼️ Images & Media

### Add Screenshots
1. Place images in `public/images/`
2. Update Hero component:

```tsx
<img 
  src="/images/screenshot.png" 
  alt="ECA Dashboard"
  className="w-full rounded-xl"
/>
```

### Add Demo Video
```tsx
<video 
  src="/videos/demo.mp4" 
  controls 
  className="w-full rounded-xl"
/>
```

## 🔗 Links & CTAs

### Download Links
Update in `Hero.tsx`, `CTA.tsx`, `Header.tsx`:

```tsx
<Button 
  onClick={() => window.location.href = 'https://github.com/releases/latest'}
>
  Download
</Button>
```

### GitHub Repository
Find and replace all GitHub URLs:
- `Header.tsx` - Navigation
- `Footer.tsx` - Social links
- `CTA.tsx` - CTA button

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Example usage:
```tsx
<div className="text-2xl lg:text-4xl">
  {/* Small on mobile, large on desktop */}
</div>
```

## 🎭 Animations

### Add Custom Animation
In `tailwind.config.ts`:

```typescript
animation: {
  'custom': 'customAnim 1s ease-in-out',
},
keyframes: {
  customAnim: {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' },
  }
}
```

Use in component:
```tsx
<div className="animate-custom">Content</div>
```

## 🌐 Internationalization (i18n)

To add multiple languages:

1. Install next-i18next:
```bash
npm install next-i18next
```

2. Create translation files:
```
/public/locales/en/common.json
/public/locales/fr/common.json
```

3. Wrap components with translation hooks

## 📊 Analytics Integration

### Google Analytics
Add to `_document.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

### Track Events
```tsx
const trackDownload = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'download', {
      event_category: 'engagement',
      event_label: 'windows_installer',
    })
  }
}
```

## 🎨 Design Tokens

### Spacing
```tsx
// Consistent spacing scale
p-2  // 0.5rem (8px)
p-4  // 1rem (16px)
p-6  // 1.5rem (24px)
p-8  // 2rem (32px)
```

### Border Radius
```tsx
rounded-lg   // 0.5rem
rounded-xl   // 0.75rem
rounded-2xl  // 1rem
```

## 🔧 Advanced Customization

### Add New Section
1. Create file: `src/components/sections/YourSection.tsx`
2. Build component with Container wrapper
3. Import and add to `index.tsx`

### Custom Hooks
Create in `src/hooks/`:

```tsx
// src/hooks/useScrollSpy.ts
export function useScrollSpy() {
  // Your hook logic
}
```

### Utility Functions
Add to `src/lib/utils.ts`:

```typescript
export function formatNumber(num: number) {
  return new Intl.NumberFormat().format(num)
}
```

## 📦 Adding Dependencies

```bash
# UI Components
npm install @radix-ui/react-dialog

# Animations
npm install framer-motion

# Forms
npm install react-hook-form zod
```

## 🎯 SEO Customization

Edit meta tags in `index.tsx`:

```tsx
<Head>
  <title>Your Custom Title</title>
  <meta name="description" content="Your description" />
  <meta property="og:image" content="/your-og-image.png" />
</Head>
```

---

**Questions?** Check the README or open an issue!
