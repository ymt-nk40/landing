// js/sections/hero.js

export async function renderHero() {
    const heroEl = document.getElementById('hero');
    
    const heroHTML = `
        <div class="max-w-7xl mx-auto px-6 relative">
            <div class="max-w-3xl">
                <!-- Badge -->
                <div class="flex items-center gap-3 mb-6">
                    <span class="inline-flex w-2 h-2 rounded-full bg-orange-500 animate-pulse" aria-hidden="true"></span>
                    <span class="text-xs font-medium tracking-widest uppercase text-orange-300">
                        Next Cohort: Oct 12, 2024
                    </span>
                </div>

                <!-- Heading -->
                <h1 class="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-white mb-8 text-glow">
                    Advanced<br>Kinetic<br>Systems 3D
                </h1>

                <!-- Description -->
                <p class="text-lg text-slate-400 max-w-md leading-relaxed mb-10">
                    Master procedural modeling and kinetic animation techniques. A 12-week deep dive into the future of motion design.
                </p>
            </div>

            <!-- Hero Image -->
            <figure class="absolute top-1/2 -right-20 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block" role="img" aria-label="3D sphere visualization">
                <img 
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6add742-6a55-445d-b07d-92ef48d3c652_1600w.jpg" 
                    alt="Metallic 3D sphere with gradient lighting"
                    class="opacity-90 w-full h-full object-contain rounded-full drop-shadow-2xl"
                    loading="lazy"
                    width="600"
                    height="600"
                >
            </figure>
        </div>
    `;

    if (heroEl) {
        heroEl.innerHTML = heroHTML;
    }
}
