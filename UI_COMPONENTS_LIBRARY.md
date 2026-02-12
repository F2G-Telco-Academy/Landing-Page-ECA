# 🎨 UI Components Library - Modern, Clean Examples

## 📋 Purpose

Ready-to-use, copy-paste component examples with modern, clean aesthetics optimized for conversion.

---

## 🎴 **FEATURE CARDS**

### **Modern Feature Card with Hover**

```tsx
import { Smartphone, Check } from 'lucide-react';

const FeatureCard = () => (
  <div className="group bg-white rounded-xl shadow-md border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    {/* Icon Container with Gradient Background */}
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-primary-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Smartphone className="w-7 h-7 text-white" />
    </div>
    
    {/* Content */}
    <h3 className="text-xl font-semibold text-gray-900 mb-3">
      Finish Drive Tests 4x Faster
    </h3>
    <p className="text-gray-600 leading-relaxed mb-4">
      Test four networks simultaneously instead of sequentially. 
      Deliver results the same day instead of the same week.
    </p>
    
    {/* Benefits List */}
    <ul className="space-y-2">
      <li className="flex items-start gap-2 text-sm text-gray-700">
        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
        <span>Compare operators in real-time</span>
      </li>
      <li className="flex items-start gap-2 text-sm text-gray-700">
        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
        <span>4x more projects possible</span>
      </li>
      <li className="flex items-start gap-2 text-sm text-gray-700">
        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
        <span>Higher profit margins</span>
      </li>
    </ul>
  </div>
);
```

---

### **Minimal Feature Card**

```tsx
const MinimalFeature = ({ icon: Icon, title, description }) => (
  <div className="space-y-4">
    {/* Icon */}
    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    
    {/* Content */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);
```

---

### **Glassmorphism Card**

```tsx
const GlassCard = () => (
  <div className="relative">
    {/* Blur background */}
    <div className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl" />
    
    {/* Content */}
    <div className="relative p-8">
      <h3 className="text-2xl font-bold mb-4">Premium Feature</h3>
      <p className="text-gray-700">
        Modern glassmorphism effect for standout sections.
      </p>
    </div>
  </div>
);
```

---

## 🔘 **BUTTON VARIANTS**

### **Primary CTA with Icon**

```tsx
import { Download } from 'lucide-react';

<button className="group relative px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:bg-primary-700 hover:shadow-xl hover:scale-105">
  {/* Shine effect on hover */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
  
  {/* Content */}
  <span className="relative flex items-center gap-2">
    <Download className="w-5 h-5" />
    Download Free for Windows
  </span>
</button>
```

---

### **Ghost Button with Hover Fill**

```tsx
<button className="px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg transition-all duration-300 hover:bg-primary-600 hover:text-white hover:shadow-lg">
  Watch Demo
</button>
```

---

### **Gradient Button**

```tsx
<button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
  Get Started Free
</button>
```

---

### **Button with Loading State**

```tsx
const LoadingButton = ({ loading, children }) => (
  <button 
    disabled={loading}
    className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
  >
    {loading ? (
      <span className="flex items-center gap-2">
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        Downloading...
      </span>
    ) : children}
  </button>
);
```

---

## 📊 **STAT CARDS**

### **Modern Stat Display**

```tsx
const StatCard = ({ number, label, sublabel, trend }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200">
    <div className="flex items-start justify-between mb-2">
      <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
        {number}
      </div>
      {trend && (
        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
          +{trend}%
        </span>
      )}
    </div>
    <div className="text-sm font-medium text-gray-900">{label}</div>
    <div className="text-xs text-gray-500">{sublabel}</div>
  </div>
);

// Usage
<StatCard 
  number="65+" 
  label="KPI Metrics" 
  sublabel="Across all technologies"
  trend={12}
/>
```

---

### **Minimal Stat Block**

```tsx
<div className="text-center">
  <div className="text-5xl font-bold text-primary-600 mb-2">65+</div>
  <div className="text-gray-600">KPIs Tracked</div>
  <div className="text-sm text-gray-500 mt-1">2G through 5G</div>
</div>
```

---

## 🏷️ **BADGES & TAGS**

### **Status Badge**

```tsx
const Badge = ({ status, children }) => {
  const variants = {
    success: 'bg-green-100 text-green-700',
    warning: 'bg-orange-100 text-orange-700',
    info: 'bg-blue-100 text-blue-700',
    default: 'bg-gray-100 text-gray-700'
  };
  
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${variants[status] || variants.default}`}>
      {children}
    </span>
  );
};

// Usage
<Badge status="success">
  <span className="w-2 h-2 rounded-full bg-green-500" />
  v2.1.0 - Production Ready
</Badge>
```

---

### **Pulse Badge (Live Indicator)**

```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
  </span>
  Live Now
</div>
```

---

## 📋 **TESTIMONIAL CARDS**

### **Modern Testimonial**

```tsx
const Testimonial = ({ quote, author, role, company }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 relative">
    {/* Quote mark */}
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
      <span className="text-3xl text-white">"</span>
    </div>
    
    {/* Content */}
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed italic">
        {quote}
      </p>
      
      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-blue-600 flex items-center justify-center text-white font-bold">
          {author[0]}
        </div>
        
        {/* Author info */}
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{role} at {company}</div>
        </div>
      </div>
    </div>
  </div>
);

// Usage
<Testimonial 
  quote="What used to take me 4 days now takes 1. I can serve 4x as many clients with ECA's multi-device testing."
  author="John Smith"
  role="RF Engineer"
  company="Network Solutions Inc"
/>
```

---

## 🎯 **CTA SECTIONS**

### **Hero CTA Block**

```tsx
<div className="space-y-6">
  {/* Headline */}
  <h2 className="text-3xl font-bold text-center">
    Ready to Stop Paying $5,000 for Network Tools?
  </h2>
  
  {/* Subheadline */}
  <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
    Join hundreds of RF engineers worldwide. Professional analysis, zero cost.
  </p>
  
  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all">
      Download Free for Windows
    </button>
    <button className="px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all">
      View on GitHub
    </button>
  </div>
  
  {/* Trust signals */}
  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
    <span className="flex items-center gap-1">
      <Check className="w-4 h-4 text-green-500" />
      No signup required
    </span>
    <span className="flex items-center gap-1">
      <Check className="w-4 h-4 text-green-500" />
      Free forever
    </span>
    <span className="flex items-center gap-1">
      <Check className="w-4 h-4 text-green-500" />
      5-minute setup
    </span>
  </div>
</div>
```

---

### **Sticky Mobile CTA**

```tsx
const StickyMobileCTA = () => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!show) return null;
  
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden animate-slide-up">
      <div className="bg-white rounded-full shadow-2xl border-2 border-primary-600 p-2 flex items-center gap-3">
        <button className="flex-1 bg-primary-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-primary-700 transition-all">
          Download Free
        </button>
        <button 
          onClick={() => setShow(false)}
          className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
```

---

## 📑 **COMPARISON TABLES**

### **Modern Comparison Table**

```tsx
const ComparisonTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
        <tr>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
            Feature
          </th>
          <th className="px-6 py-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                ECA
              </span>
              <span className="text-xs text-green-600 font-semibold">FREE</span>
            </div>
          </th>
          <th className="px-6 py-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold text-gray-700">QXDM</span>
              <span className="text-xs text-gray-500">$5,000+</span>
            </div>
          </th>
          <th className="px-6 py-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold text-gray-700">Xcal</span>
              <span className="text-xs text-gray-500">$3,000+</span>
            </div>
          </th>
        </tr>
      </thead>
      
      {/* Body */}
      <tbody className="divide-y divide-gray-200">
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="px-6 py-4 text-sm text-gray-900">Multi-device testing</td>
          <td className="px-6 py-4 text-center">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
              <Check className="w-5 h-5 text-green-600" />
            </div>
          </td>
          <td className="px-6 py-4 text-center">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
              <X className="w-5 h-5 text-red-600" />
            </div>
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-xs text-gray-500">Limited</span>
          </td>
        </tr>
        {/* More rows... */}
      </tbody>
    </table>
  </div>
);
```

---

## 🎪 **PRICING CARDS**

### **Pricing Comparison**

```tsx
const PricingCard = ({ name, price, features, highlighted }) => (
  <div className={`rounded-2xl p-8 ${highlighted ? 'bg-gradient-to-br from-primary-600 to-blue-600 text-white shadow-2xl scale-105' : 'bg-white border-2 border-gray-200'}`}>
    {/* Header */}
    <div className="text-center mb-6">
      <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
        {name}
      </h3>
      <div className="flex items-baseline justify-center gap-2">
        <span className={`text-5xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
          ${price}
        </span>
        {price === 0 && (
          <span className={`text-sm ${highlighted ? 'text-white/80' : 'text-gray-500'}`}>
            forever
          </span>
        )}
      </div>
    </div>
    
    {/* Features */}
    <ul className="space-y-3 mb-8">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <Check className={`w-5 h-5 flex-shrink-0 ${highlighted ? 'text-white' : 'text-green-500'}`} />
          <span className={highlighted ? 'text-white/90' : 'text-gray-600'}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
    
    {/* CTA */}
    <button className={`w-full py-3 rounded-lg font-semibold transition-all ${highlighted ? 'bg-white text-primary-600 hover:bg-gray-100' : 'bg-primary-600 text-white hover:bg-primary-700'}`}>
      {price === 0 ? 'Download Free' : 'Contact Sales'}
    </button>
  </div>
);
```

---

## 🌟 **SPECIAL EFFECTS**

### **Floating Animation**

```tsx
<div className="animate-float">
  <div className="bg-white rounded-lg shadow-xl p-4">
    Floating card
  </div>
</div>

/* Add to tailwind.config.ts */
animation: {
  float: 'float 3s ease-in-out infinite',
}
keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  }
}
```

---

### **Shimmer Loading Effect**

```tsx
<div className="relative overflow-hidden bg-gray-200 rounded-lg h-64">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
</div>

/* Tailwind config */
animation: {
  shimmer: 'shimmer 2s infinite',
}
keyframes: {
  shimmer: {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
  }
}
```

---

### **Gradient Border Animation**

```tsx
<div className="relative p-8 rounded-2xl">
  {/* Animated gradient border */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600 via-blue-600 to-primary-600 animate-gradient-x" />
  
  {/* Content */}
  <div className="relative bg-white rounded-xl p-6">
    Premium content with animated border
  </div>
</div>

/* Tailwind config */
animation: {
  'gradient-x': 'gradient-x 3s ease infinite',
}
keyframes: {
  'gradient-x': {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  }
}
```

---

## 📱 **MOBILE-SPECIFIC COMPONENTS**

### **Mobile Navigation Menu**

```tsx
const MobileMenu = ({ isOpen, onClose }) => (
  <>
    {/* Backdrop */}
    <div 
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    />
    
    {/* Menu */}
    <div className={`fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-2xl transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <span className="text-lg font-bold">Menu</span>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="w-6 h-6" />
        </button>
      </div>
      
      {/* Nav items */}
      <nav className="p-6 space-y-2">
        <a href="#features" className="block px-4 py-3 rounded-lg hover:bg-gray-100 font-medium">
          Features
        </a>
        <a href="#pricing" className="block px-4 py-3 rounded-lg hover:bg-gray-100 font-medium">
          Pricing
        </a>
        <a href="#docs" className="block px-4 py-3 rounded-lg hover:bg-gray-100 font-medium">
          Docs
        </a>
      </nav>
      
      {/* CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
        <button className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg">
          Download Free
        </button>
      </div>
    </div>
  </>
);
```

---

This covers the essential UI components! Would you like me to create more specific components or provide implementation examples for the landing page sections?

