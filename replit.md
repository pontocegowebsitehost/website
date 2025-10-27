# PontoCego Security Website

## Project Overview

A fully static, modern, bilingual (Portuguese/English) cybersecurity company website for PontoCego Security. Built with pure HTML, CSS, and JavaScript - no frameworks or build tools required. Ready for GitHub Pages deployment.

**Company Name:** PontoCego Security  
**Tagline:** Cibersegurança sem pontos cegos / Cybersecurity without blind spots  
**Services:** Penetration Testing, Vulnerability Assessment, Cybersecurity Consulting, Phishing Awareness Platform (coming soon)

## Recent Changes

- **2025-10-25**: Initial website creation
  - Created complete static website structure with 6 pages
  - Implemented bilingual support (PT/EN) with dynamic language toggle
  - Added comprehensive CSS animations (hover, scroll, loading)
  - Set up page loader with logo animation on every page navigation
  - Organized all assets (logos, images) properly
  - Configured workflow to serve static website on port 5000

## Project Architecture

### Structure
```
/
├── index.html          # Home page with hero, services preview, why choose us
├── services.html       # Detailed services page
├── about.html          # Company info, mission, values
├── team.html          # Team members page
├── contact.html       # Contact form and info
├── privacy.html       # Privacy policy
├── assets/            # All images and media
│   ├── PontoCego.png           # Logo (transparent, for loader)
│   ├── PontoCego-logo.png      # Logo icon only
│   ├── PontoCego-full.png      # Logo with text
│   ├── herobg.jpg              # Hero background
│   ├── Cezar.jpg               # Team member photo
│   ├── hehe.jpg                # Security concept image
│   └── pc.jpg                  # Services page image
├── styles/
│   └── styles.css     # All CSS including animations
└── scripts/
    ├── translations.js # Bilingual support system
    ├── loader.js      # Page loading animations
    └── animations.js  # Scroll animations and interactions
```

### Key Features

1. **Bilingual Support**: Portuguese (default) and English with seamless toggle
2. **Animations**:
   - Full-screen logo loader on every page load/navigation
   - Hover animations on buttons, cards, links, navbar logo
   - Scroll-triggered fade-in/slide-in animations
   - Smooth scroll for anchor links
3. **Responsive Design**: Mobile-first approach with responsive grid layouts
4. **SEO Optimized**: Meta tags, Open Graph tags, favicon on all pages
5. **Modern Design**: Gradient color scheme (#0B2E4F → #1E4E7E), clean typography

### Color Scheme

- Primary Gradient: #0B2E4F → #1E4E7E
- Accent: #3A7BC8 (bright blue)
- White: #FAFAFA
- Gray: #909191
- Dark Gray: #737373

### Typography

- Primary Font: Inter
- Secondary Font: Poppins
- Modern sans-serif fallbacks

## User Preferences

- Static website (no frameworks)
- GitHub Pages ready
- Fully bilingual (Portuguese/English)
- Modern, professional, slightly hacker-inspired design
- Comprehensive animations

## Deployment to GitHub Pages

1. **Create GitHub Repository**
2. **Push all files to the repository**
3. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main (or master)
   - Folder: / (root)
4. **Your site will be live at**: `https://yourusername.github.io/repository-name/`

## Customization Guide

### Replace Formspree Endpoint
In `contact.html`, line ~70:
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" method="POST">
```
Replace `YOUR_FORMSPREE_ENDPOINT` with your actual Formspree form ID.

### Update Social Media Links
Update these placeholders in all HTML files:
- LinkedIn: `https://linkedin.com/company/pontocegosecurity`
- Instagram: `https://instagram.com/pontocegosecurity`
- GitHub: `https://github.com/pontocegosec`

### Replace Hero Background
Replace `assets/herobg.jpg` with your own cybersecurity-themed image.

### Add Real Team Photos
Replace the three instances of `assets/Cezar.jpg` in `team.html` with actual team member photos.

## Development

**Local Development**: The project is configured with a Python HTTP server workflow serving on port 5000.

To run locally:
```bash
python3 -m http.server 5000
```

Then open `http://localhost:5000` in your browser.

## Contact Information

- **Email**: pontocegosec@proton.me
- **LinkedIn**: linkedin.com/company/pontocegosecurity
- **Instagram**: @pontocegosecurity

---

Last Updated: October 25, 2025
