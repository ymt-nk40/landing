// components/navbar.js
export function renderNavbar() {
    const navContainer = document.getElementById('navbar');
    
    const navHTML = `
        <!-- Logo & Desktop Nav -->
        <div class="flex items-center gap-12">
            <a href="/" aria-label="FLUX Home" class="text-xl font-semibold tracking-tight text-white hover:opacity-80 transition-opacity">
                FLUX
            </a>
            <nav class="hidden md:flex gap-8 items-center" role="navigation" aria-label="Main Navigation">
                <a href="#curriculum" class="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                    Curriculum
                </a>
                <a href="#workshops" class="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                    Workshops
                </a>
                <a href="#mentors" class="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                    Mentors
                </a>
                <a href="#community" class="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                    Community
                </a>
            </nav>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-6">
            <a href="/login" class="hidden md:block text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                Log In
            </a>

            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-toggle" class="md:hidden text-white p-2 -mr-2 hover:text-orange-400 transition-colors focus:outline-none" aria-label="Toggle Navigation Menu" aria-expanded="false" aria-controls="mobile-menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden fixed top-16 left-0 right-0 bottom-0 z-40 bg-[#000000] md:hidden" role="navigation" aria-label="Mobile Navigation" aria-hidden="true">
            <nav class="flex flex-col p-6">
                <a href="#curriculum" class="py-3 text-lg font-medium text-white border-b border-white/5 hover:text-orange-400 transition-colors">
                    Curriculum
                </a>
                <a href="#workshops" class="py-3 text-lg font-medium text-white border-b border-white/5 hover:text-orange-400 transition-colors">
                    Workshops
                </a>
                <a href="#mentors" class="py-3 text-lg font-medium text-white border-b border-white/5 hover:text-orange-400 transition-colors">
                    Mentors
                </a>
                <a href="#community" class="py-3 text-lg font-medium text-white border-b border-white/5 hover:text-orange-400 transition-colors">
                    Community
                </a>
                <a href="/login" class="mt-6 py-3 px-6 text-center text-xs font-semibold uppercase tracking-widest bg-white text-black hover:bg-slate-200 transition-colors rounded-full">
                    Log In
                </a>
            </nav>
        </div>
    `;

    navContainer.innerHTML = navHTML;
    initMobileMenu();
}

function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    let isOpen = false;

    toggleBtn?.addEventListener('click', () => {
        isOpen = !isOpen;
        toggleBtn.setAttribute('aria-expanded', isOpen);
        menu?.classList.toggle('hidden');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when link clicked
    menu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            isOpen = false;
            toggleBtn.setAttribute('aria-expanded', 'false');
            menu.classList.add('hidden');
            document.body.style.overflow = '';
        });
    });
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', renderNavbar);
