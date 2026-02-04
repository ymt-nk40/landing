// js/sections/pricing.js

const PRICING_DATA = {
    monthly: {
        Independent: '$49',
        Cohort: '$99',
        Mentorship: '$249'
    },
    yearly: {
        Independent: '$499',
        Cohort: '$999',
        Mentorship: '$2,499'
    }
};

export async function renderPricing() {
    const pricingEl = document.getElementById('pricing');
    
    const html = `
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] blur-[120px] rounded-full pointer-events-none mix-blend-screen bg-orange-900/10"></div>

        <div class="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div class="max-w-2xl">
                    <h2 class="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6">
                        Invest in your creative future
                    </h2>
                    <p class="text-lg text-slate-400 leading-relaxed max-w-md">
                        Choose the learning path that fits your schedule. All plans include lifetime access to course materials and project files.
                    </p>
                </div>

                <!-- Plan Toggle -->
                <div class="flex bg-white/5 border border-white/5 rounded-full p-1 backdrop-blur-sm items-center relative" role="tablist" aria-label="Billing period selection">
                    <div id="active-pill" class="absolute top-1 bottom-1 left-1 w-32 bg-white/10 rounded-full transition-transform duration-300 z-0" style="transform: translateX(0%)"></div>
                    <button 
                        id="btn-monthly" 
                        role="tab" 
                        aria-selected="true" 
                        aria-controls="monthly-plans"
                        class="relative z-10 w-32 py-2.5 text-xs font-semibold tracking-widest uppercase text-white transition-colors duration-300"
                        onclick="window.switchPlan('monthly')"
                    >
                        Monthly
                    </button>
                    <button 
                        id="btn-yearly" 
                        role="tab" 
                        aria-selected="false" 
                        aria-controls="yearly-plans"
                        class="relative z-10 w-32 py-2.5 text-xs font-medium tracking-widest uppercase text-slate-400 hover:text-white transition-colors duration-300"
                        onclick="window.switchPlan('yearly')"
                    >
                        Yearly
                    </button>
                </div>
            </div>

            <!-- Pricing Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" id="pricing-grid">
                <!-- Independent -->
                <div class="p-8 bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 border border-white/5 rounded-lg hover:bg-white/5 transition-colors duration-300 flex flex-col" data-plan="independent">
                    <div class="mb-8">
                        <span class="text-xs font-semibold tracking-widest text-slate-500 uppercase">Independent</span>
                        <div class="flex items-baseline gap-1 mt-4">
                            <span class="text-4xl font-medium text-white price-amount">$49</span>
                            <span class="text-sm text-slate-500 font-medium price-period">/mo</span>
                        </div>
                    </div>

                    <p class="text-sm text-slate-400 mb-8 pb-8 border-b border-white/5">
                        Perfect for self-driven learners who want to master the curriculum at their own pace.
                    </p>

                    <ul class="flex flex-col gap-4 mb-10 flex-1">
                        <li class="flex items-start gap-3 text-sm text-slate-300">
                            <span class="text-orange-400 mt-0.5">✓</span>
                            <span>Full 12-Week Curriculum</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-300">
                            <span class="text-orange-400 mt-0.5">✓</span>
                            <span>Project Files & Assets</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-300">
                            <span class="text-orange-400 mt-0.5">✓</span>
                            <span>Lifetime Updates</span>
                        </li>
                    </ul>

                    <button class="uppercase hover:bg-slate-800 transition-colors text-xs font-semibold text-white tracking-widest w-full border border-white/10 py-4">
                        Start Learning
                    </button>
                </div>

                <!-- Cohort (Featured) -->
                <div class="p-8 bg-orange-950/10 border border-orange-500/30 rounded-lg relative flex flex-col" data-plan="cohort">
                    <div class="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                        Popular
                    </div>

                    <div class="mb-8">
                        <span class="text-xs font-semibold tracking-widest text-orange-400 uppercase">Live Cohort</span>
                        <div class="flex items-baseline gap-1 mt-4">
                            <span class="text-4xl font-medium text-white price-amount">$99</span>
                            <span class="text-sm text-slate-400 font-medium price-period">/mo</span>
                        </div>
                    </div>

                    <p class="text-sm text-orange-100/70 mb-8 pb-8 border-b border-orange-500/20">
                        The complete experience. Join a global class of artists with weekly live sessions and reviews.
                    </p>

                    <ul class="flex flex-col gap-4 mb-10 flex-1">
                        <li class="flex items-start gap-3 text-sm text-white">
                            <span class="text-orange-400 mt-0.5">✓</span>
                            <span>Everything in Independent</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-white">
                            <span class="text-orange-400 mt-0.5">✓</span>
                            <span>Weekly Live Q&A Sessions</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-white">
                            <span class="text-orange-400 mt-0.5">✓</span>
                            <span>Professional Assignment Review</span>
                        </li>
                    </ul>

                    <button class="text-white uppercase py-4 px-8 text-xs font-semibold tracking-widest w-full bg-orange-600 hover:bg-orange-500 transition-colors rounded">
                        Secure Your Spot
                    </button>
                </div>

                <!-- Mentorship -->
                <div class="p-8 bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 border border-white/5 rounded-lg hover:bg-white/5 transition-colors duration-300 flex flex-col" data-plan="mentorship">
                    <div class="mb-8">
                        <span class="text-xs font-semibold tracking-widest text-slate-500 uppercase">Mentorship</span>
                        <div class="flex items-baseline gap-1 mt-4">
                            <span class="text-4xl font-medium text-white price-amount">$249</span>
                            <span class="text-sm text-slate-500 font-medium price-period">/mo</span>
                        </div>
                    </div>

                    <p class="text-sm text-slate-400 mb-8 pb-8 border-b border-white/5">
                        Direct 1-on-1 guidance for professionals looking to fast-track their career growth.
                    </p>

                    <ul class="flex flex-col gap-4 mb-10 flex-1">
                        <li class="flex items-start gap-3 text-sm text-slate-300">
                            <span class="text-orange-400 mt-0.5">✓</span>
                            <span>Everything in Cohort</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-300">
                            <span class="text-orange-400 mt-0.5">✓</span>
                            <span>4x 1-on-1 Strategy Calls</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-300">
                            <span class="text-orange-400 mt-0.5">✓</span>
                            <span>Portfolio Direction</span>
                        </li>
                    </ul>

                    <button class="uppercase hover:bg-slate-800 transition-colors text-xs font-semibold text-white tracking-widest w-full border border-white/10 py-4">
                        Apply for Mentorship
                    </button>
                </div>
            </div>
        </div>
    `;

    if (pricingEl) {
        pricingEl.innerHTML = html;
        window.switchPlan = switchPlan; // Make available globally
    }
}

function switchPlan(plan) {
    const btnMonthly = document.getElementById('btn-monthly');
    const btnYearly = document.getElementById('btn-yearly');
    const activePill = document.getElementById('active-pill');
    const cards = document.querySelectorAll('[data-plan]');

    // Update button states
    if (plan === 'monthly') {
        activePill.style.transform = 'translateX(0%)';
        btnMonthly?.classList.add('text-white', 'font-semibold');
        btnMonthly?.classList.remove('text-slate-400', 'font-medium');
        btnYearly?.classList.add('text-slate-400', 'font-medium');
        btnYearly?.classList.remove('text-white', 'font-semibold');
        btnMonthly?.setAttribute('aria-selected', 'true');
        btnYearly?.setAttribute('aria-selected', 'false');
    } else {
        activePill.style.transform = 'translateX(100%)';
        btnYearly?.classList.add('text-white', 'font-semibold');
        btnYearly?.classList.remove('text-slate-400', 'font-medium');
        btnMonthly?.classList.add('text-slate-400', 'font-medium');
        btnMonthly?.classList.remove('text-white', 'font-semibold');
        btnYearly?.setAttribute('aria-selected', 'true');
        btnMonthly?.setAttribute('aria-selected', 'false');
    }

    // Update prices with fade transition
    cards.forEach(card => {
        const planType = card.getAttribute('data-plan').charAt(0).toUpperCase() + card.getAttribute('data-plan').slice(1);
        const amount = card.querySelector('.price-amount');
        const period = card.querySelector('.price-period');

        amount?.classList.add('opacity-0');
        setTimeout(() => {
            amount.textContent = PRICING_DATA[plan][planType];
            period.textContent = plan === 'monthly' ? '/mo' : '/year';
            amount?.classList.remove('opacity-0');
        }, 300);
    });
}