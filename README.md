# PontoCego Security Website

![PontoCego Security](./assets/PontoCego-full.png)

**Cibersegurança sem pontos cegos | Cybersecurity without blind spots**

A modern, fully static, bilingual (Portuguese/English) website for PontoCego Security - a cybersecurity company specializing in penetration testing, vulnerability assessment, and security consulting.

## 🌟 Features

- ✅ **Fully Static**: Pure HTML, CSS, and JavaScript - no frameworks or build tools
- 🌍 **Bilingual**: Seamless Portuguese/English language toggle
- 🎨 **Modern Design**: Gradient color scheme with professional cybersecurity aesthetic
- ✨ **Rich Animations**: Page loader, hover effects, and scroll-triggered animations
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🚀 **GitHub Pages Ready**: Deploy directly without any configuration
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and proper semantic HTML

## 📁 Project Structure

```
├── index.html          # Home page
├── services.html       # Services details
├── about.html          # Company information
├── team.html          # Team members
├── contact.html       # Contact form
├── privacy.html       # Privacy policy
├── assets/            # Images and media
├── styles/            # CSS stylesheets
└── scripts/           # JavaScript files
```

## 🚀 Quick Start

### Local Development

Simply open `index.html` in your browser, or run a local server:

```bash
# Python 3
python3 -m http.server 5000

# Node.js
npx serve

# PHP
php -S localhost:5000
```

Then visit `http://localhost:5000`

### Deploy to GitHub Pages

1. **Create a new repository** on GitHub
2. **Push all files** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/repository-name.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/` (root)
   - Click Save

Your site will be live at: `https://yourusername.github.io/repository-name/`

## ⚙️ Customization

### 1. Update Contact Form

In `contact.html`, replace the Formspree endpoint:

```html
<form action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" method="POST">
```

Get your free endpoint at [formspree.io](https://formspree.io)

### 2. Update Social Links

Replace these in all HTML files:
- LinkedIn: `https://linkedin.com/company/pontocegosecurity`
- Instagram: `https://instagram.com/pontocegosecurity`
- GitHub: `https://github.com/pontocegosec`

### 3. Replace Images

- **Hero Background**: Replace `assets/herobg.jpg` with your own image
- **Team Photos**: Replace instances of `assets/Cezar.jpg` in `team.html`
- **Logo**: Use your own logo files if needed

### 4. Edit Content

All content uses the translation system in `scripts/translations.js`. Edit the translations object to update text in both languages:

```javascript
const translations = {
  pt: { heroTitle: "Your Title" },
  en: { heroTitle: "Your Title" }
};
```

## 🎨 Design

**Color Scheme:**
- Primary Gradient: `#0B2E4F` → `#1E4E7E`
- Accent: `#3A7BC8`
- Text: `#FAFAFA`, `#909191`, `#737373`

**Typography:**
- Primary: Inter
- Secondary: Poppins

## 📄 Pages

1. **Home** (`index.html`) - Hero section, services preview, why choose us
2. **Services** (`services.html`) - Detailed service descriptions
3. **About** (`about.html`) - Company mission, values, and information
4. **Team** (`team.html`) - Team member profiles
5. **Contact** (`contact.html`) - Contact form and information
6. **Privacy** (`privacy.html`) - Privacy policy

## 🌍 Bilingual Support

The website defaults to Portuguese but includes full English translations. Users can toggle between languages using the "PT | ENG" switch in the navigation bar. The selected language is saved to localStorage for persistence.

## ✨ Animations

- **Page Loader**: Full-screen logo animation on every page load
- **Hover Effects**: All buttons, cards, and links have smooth hover animations
- **Scroll Animations**: Sections fade in and slide in as you scroll
- **Smooth Scrolling**: Internal anchor links scroll smoothly

## 📧 Contact

- **Email**: pontocegosec@proton.me
- **LinkedIn**: [linkedin.com/company/pontocegosecurity](https://linkedin.com/company/pontocegosecurity)
- **Instagram**: [@pontocegosecurity](https://instagram.com/pontocegosecurity)

## 📝 License

This website is proprietary to PontoCego Security.

---

**Built with ❤️ for cybersecurity**

© 2025 PontoCego Security. All rights reserved.
