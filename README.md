# FLUX - 3D Motion Design Course Landing Page

## 📋 Architecture Overview

This refactored version splits the monolithic HTML into a modular, component-based architecture with proper separation of concerns.

### File Structure
```
flux/
├── index.html                 # Main HTML entry point (semantic, lightweight)
├── css/
│   └── global.css            # Design tokens & base styles
├── js/
│   ├── main.js               # App initialization & orchestration
│   ├── components/
│   │   └── navbar.js         # Navigation component
│   │   └── carousel.js       # Reusable carousel class
│   └── sections/
│       ├── hero.js           # Hero section
│       ├── modules.js        # Course modules grid
│       ├── feature.js        # Feature carousel
│       ├── features-grid.js  # Bento grid features
│       ├── mentors.js        # Mentors section
│       ├── showcase.js       # Student showcase
│       ├── pricing.js        # Pricing plans with toggle
│       └── footer.js         # Footer component
```

## 🎯 Key Improvements

### 1. **Semantic HTML**
- Proper semantic elements (`<main>`, `<section>`, `<article>`, `<figure>`)
- ARIA roles and labels for accessibility
- Clear document structure for screen readers

### 2. **Component Architecture**
- Modular JavaScript functions (one function = one section)
- Reusable `Carousel` class for carousel instances
- Isolated component logic with no global state pollution

### 3. **Accessibility (A11y)**
- ✓ `role` attributes on interactive elements
- ✓ `aria-label` and `aria-labelledby` for context
- ✓ Keyboard navigation (Escape to close mobile menu)
- ✓ Focus management and `:focus-visible` styles
- ✓ Image `alt` text and `loading="lazy"` attributes
- ✓ Tab list pattern for pricing toggle (`role="tablist"`)
- ✓ Live regions ready for dynamic content updates

### 4. **Clean Code**
- No inline scripts in HTML (all in separate `.js` files)
- CSS organized with design tokens (`:root` variables)
- Consistent naming conventions
- DRY principle (data stored in constants, not repeated HTML)

### 5. **Performance**
- Lazy-loaded images (`loading="lazy"`)
- CSS utilities via Tailwind (no duplicated styles)
- Modular imports (load only what's needed)
- Minimal inline styles

---

## 🚀 Setup & Usage

### Installation
```bash
# Clone or download the project
cd flux/

# Serve locally (requires a local web server)
npx http-server
# or
python -m http.server 8000
```

### Development
Each section is independent and can be edited separately:

**To modify the Hero section:**
Edit `js/sections/hero.js` - The function automatically updates the DOM element with id `hero`

**To modify styling:**
Update `css/global.css` or use Tailwind classes in component HTML

**To add a new feature:**
1. Create `js/sections/my-feature.js`
2. Export an async function: `export async function renderMyFeature() { ... }`
3. Import it in `js/main.js`
4. Call it in `initApp()`

---

## 🔧 Component API

### Navbar Component
```javascript
renderNavbar()
// Auto-initializes mobile menu with:
// - Mobile toggle button
// - Escape key to close
// - Link click to close
```

### Carousel Class
```javascript
import { Carousel } from './components/carousel.js';

const carousel = new Carousel('container-id', {
    visibleSlides: 3,
    gap: 32 // pixels
});

carousel.next();
carousel.prev();
carousel.goToSlide(2);
```

### Section Rendering
```javascript
import { renderHero } from './sections/hero.js';

// Call to populate the #hero element
await renderHero();
```

---

## ♿ Accessibility Checklist

- [x] Semantic HTML structure
- [x] ARIA labels on all interactive elements
- [x] Keyboard navigation (Tab, Escape, Enter)
- [x] Focus visible styles
- [x] Image alt text
- [x] Color contrast (WCAG AA)
- [x] Mobile responsive
- [x] Form labels and input validation
- [x] Screen reader friendly

**Testing:**
```bash
# Test with keyboard only (Tab through all elements)
# Test with screen reader (NVDA, JAWS, VoiceOver)
# Test with browser devtools accessibility audit
```

---

## 📱 Responsive Design

All components use Tailwind's responsive prefixes:
- `hidden md:flex` - Hide on mobile, show on desktop
- `text-4xl md:text-6xl` - Scale typography
- `grid-cols-1 md:grid-cols-3` - Responsive grids

---

## 🎨 Customization

### Colors
Edit `:root` variables in `css/global.css`:
```css
:root {
    --accent-orange: #fb923c;
    /* ... other tokens ... */
}
```

### Fonts
Change in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet">
```

### Content
Data is stored in constants at the top of each section file:
```javascript
// js/sections/modules.js
const MODULES = [
    { id: 1, label: 'Module 01', title: 'Foundations', ... }
];
```

---

## 🐛 Debugging

**Console Logs:**
The app logs when sections initialize:
```
Initializing FLUX Application...
✓ Application initialized
```

**Inspect Elements:**
Open DevTools (F12) to see the semantic HTML structure and verify ARIA attributes.

**Performance:**
Chrome DevTools > Performance tab to profile load times.

---

## 📊 Browser Support

- Chrome/Edge: ✓ Full support
- Firefox: ✓ Full support
- Safari: ✓ Full support (ES2020+)
- IE11: ✗ Not supported (uses ES modules)

To support older browsers, add a build step with Babel.

---

## 🔗 Resources

- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Semantic HTML5](https://html.spec.whatwg.org/multipage/sections.html)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 📝 License

Created as a refactored template. Customize and use freely.
