// js/main.js
import { renderNavbar } from './components/navbar.js';
import { renderHero } from './sections/hero.js';
import { renderModules } from './sections/modules.js';
import { renderFeature } from './sections/feature.js';
import { renderFeatures } from './sections/features-grid.js';
import { renderMentors } from './sections/mentors.js';
import { renderShowcase } from './sections/showcase.js';
import { renderPricing } from './sections/pricing.js';
import { renderFooter } from './sections/footer.js';

// Initialize all sections
async function initApp() {
    console.log('Initializing FLUX Application...');
    
    // Render navbar first (header)
    renderNavbar();
    
    // Then render sections in sequence
    await Promise.all([
        renderHero(),
        renderModules(),
        renderFeature(),
        renderFeatures(),
        renderMentors(),
        renderShowcase(),
        renderPricing(),
        renderFooter()
    ]);
    
    console.log('✓ Application initialized');
    setupAccessibilityEnhancements();
}

// Accessibility enhancements
function setupAccessibilityEnhancements() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('mobile-menu')?.classList.add('hidden');
            const toggle = document.getElementById('mobile-menu-toggle');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
