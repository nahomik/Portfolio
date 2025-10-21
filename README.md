# Portfolio Website

A modern, responsive portfolio website built with Vue 3, Vite, and Tailwind CSS.

## Features

- 🎨 **Gruvbox Theme** - Beautiful color scheme with light/dark mode support
- ⚡ **Vue 3 + Vite** - Fast development and optimized production builds
- 🎭 **Smooth Animations** - Floating elements, hover effects, and transitions
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🧭 **Fixed Sidebar Navigation** - Elegant sidebar with active section tracking
  - Responsive design (collapses to icon-only on mobile)
  - Social media links integrated
  - Theme toggle button
  - Auto-highlights current section while scrolling
- 🎯 **Sections Included**:
  - Hero section with call-to-action
  - About section
  - Work experience timeline
  - Featured projects showcase
  - Education & certifications
  - Skills & technologies grid
  - Contact section with social links

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview the production build
npm run preview
```

## Customization

### Update Personal Information

Edit `src/App.vue` to customize:
- Your name and title in the hero section
- About section content
- Projects (add/remove/modify the `projects` array)
- Skills (update the `skills` array)
- Contact information and social links

### Theme Colors

The Gruvbox color scheme is defined in `src/style.css`. You can customize:
- Light mode colors in the `:root` section
- Dark mode colors in the `.dark` section

### Fonts

The site uses the Figtree font from Google Fonts. To change it:
1. Update the Google Fonts link in `index.html`
2. Modify the font family in `tailwind.config.js`

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Gruvbox Theme** - Retro groove color scheme

## License

MIT License - feel free to use this template for your own portfolio!
