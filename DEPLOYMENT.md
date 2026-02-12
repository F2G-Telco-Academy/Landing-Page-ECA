# ECA Landing Page - Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Local Development
```bash
# 1. Navigate to the landing page directory
cd Landing_page

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000 in your browser
```

## 📦 Production Build

### Static Export (Recommended)
```bash
# Build and export static files
npm run build
npm run export

# Output will be in /out directory
# Upload to any static hosting service
```

## 🌐 Deployment Options

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js config
4. Deploy with one click

### Option 2: Netlify
```bash
# Build command
npm run build && npm run export

# Publish directory
out
```

### Option 3: GitHub Pages
```bash
# 1. Build static site
npm run export

# 2. Deploy to gh-pages
npx gh-pages -d out
```

### Option 4: AWS S3 + CloudFront
```bash
# 1. Build static site
npm run export

# 2. Upload to S3
aws s3 sync out/ s3://your-bucket-name

# 3. Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Option 5: Custom Server (Nginx)
```bash
# 1. Build static site
npm run export

# 2. Copy to web root
cp -r out/* /var/www/html/

# 3. Nginx config
server {
    listen 80;
    server_name eca-analyzer.dev;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ $uri.html =404;
    }
}
```

## 🔧 Configuration

### Environment Variables (Optional)
Create `.env.local` for custom settings:

```env
NEXT_PUBLIC_API_URL=https://api.eca-analyzer.dev
NEXT_PUBLIC_ANALYTICS_ID=GA-XXXXXXXXX
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-repo
```

### Custom Domain
1. Build and deploy
2. Configure DNS A/CNAME records
3. Enable HTTPS via hosting provider

## ✅ Pre-Deployment Checklist

- [ ] Update GitHub links in components
- [ ] Add real download URLs
- [ ] Replace placeholder images
- [ ] Test all CTAs and navigation
- [ ] Verify responsive design on mobile
- [ ] Check SEO meta tags
- [ ] Test page load speed
- [ ] Enable analytics tracking
- [ ] Configure error tracking (Sentry, etc.)
- [ ] Set up CDN for assets

## 📊 Performance Optimization

### Image Optimization
```bash
# Install sharp for Next.js image optimization
npm install sharp
```

### Bundle Analysis
```bash
# Analyze bundle size
npm install @next/bundle-analyzer
```

### Lighthouse Score Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## 🔒 Security Headers

Add to your hosting platform:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 📈 Monitoring

### Recommended Tools
- **Analytics**: Google Analytics, Plausible
- **Error Tracking**: Sentry
- **Performance**: Vercel Analytics, Google PageSpeed
- **Uptime**: UptimeRobot, Pingdom

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Static Export Issues
- Ensure all links use `href` (not `push`)
- No dynamic API routes in static export
- Images must use `unoptimized: true` in config

## 📞 Support

For deployment issues:
1. Check build logs
2. Review [Next.js deployment docs](https://nextjs.org/docs/deployment)
3. Open issue on GitHub

---

**Last Updated**: 2026-02-12
