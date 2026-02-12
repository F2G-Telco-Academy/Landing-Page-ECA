#!/bin/bash

# ECA Landing Page - Setup Script
# This script automates the setup process for the landing page

set -e

echo "🚀 ECA Landing Page Setup"
echo "========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Node.js version $NODE_VERSION detected"
    echo "Please upgrade to Node.js 18+ for best compatibility"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Run 'npm run dev' to start development server"
echo "  2. Open http://localhost:3000 in your browser"
echo "  3. Customize content in src/components/sections/"
echo "  4. Add images to public/images/"
echo "  5. Review CHECKLIST.md before launch"
echo ""
echo "Documentation:"
echo "  - START_HERE.md - Quick start guide"
echo "  - CUSTOMIZATION.md - How to customize"
echo "  - DEPLOYMENT.md - Deployment options"
echo "  - CHECKLIST.md - Pre-launch checklist"
echo ""
echo "Happy building! 🎉"
