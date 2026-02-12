# ECA Landing Page

Production-ready landing page for Extended Cellular Analyzer (ECA).

## 🚀 Features

- **Modern Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design with optimized layouts
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

1. **Hero** - Main value proposition with CTA
2. **Features** - 12 key features with icons
3. **How It Works** - 4-step process guide
4. **Use Cases** - Target personas and workflows
5. **Tech Stack** - Technology overview
6. **Comparison** - ECA vs competitors
7. **FAQ** - Common questions
8. **CTA** - Final conversion section
9. **Footer** - Links and legal

## 🎯 Key Highlights

- Professional design matching ECA's brand
- Conversion-optimized CTAs
- Trust signals and social proof
- Mobile-responsive navigation
- Smooth animations and transitions
- Dark mode ready (optional)

## 📝 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette.

### Content
All content is in component files under `src/components/sections/`.

### Images
Add screenshots and logos to `public/` directory and update references.

## 🔧 Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📊 Analytics

To add analytics, include tracking scripts in `_document.tsx`:

```tsx
<Script src="https://analytics.example.com/script.js" />
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

## 📄 License

MIT License - Same as ECA project

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

---

Built with ❤️ for the ECA community
