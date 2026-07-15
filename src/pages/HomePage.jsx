import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const processSteps = [
  {
    num: 1,
    title: 'Automated Blow Room',
    sub: 'Contamination Detection & Gentle Opening',
    bullets: [
      'Advanced automated blending with minimal fiber damage.',
      'High-precision vision sensors detect and eliminate foreign fibers.',
      'Micro-dust removal system for pure raw cotton base.',
    ],
    img: '/2.webp',
    reverse: false,
  },
  {
    num: 2,
    title: 'High-Precision Carding',
    sub: 'The Foundation of Yarn Uniformity',
    bullets: [
      'Optimised cylinder-to-flat action to eliminate neps and seed-coats.',
      'Achieves excellent fiber parallelisation.',
      'Converts raw tufts into defect-free, consistent sliver.',
    ],
    img: '/3.webp',
    reverse: true,
  },
  {
    num: 3,
    title: 'Drawing & Premium Combing',
    sub: 'Maximising Tensile Strength',
    bullets: [
      'Advanced systems ensure unmatched mass variations (U% & CVM).',
      'Extracts short fibers to improve the Short Fiber Index (SFI).',
      'Delivers high structural uniformity and high tensile strength.',
    ],
    img: '/4.webp',
    reverse: false,
  },
  {
    num: 4,
    title: 'Ring Frame & Compact Spinning',
    sub: 'Core Production Facility',
    bullets: [
      'Premium compact tech for ultra-low yarn hairiness.',
      'Stable twist factors engineered for global knitting and weaving.',
      'Synchronised spindle speed for consistent CV% of count.',
    ],
    img: '/5.webp',
    reverse: true,
  },
  {
    num: 5,
    title: 'Automated Winding (EYC)',
    sub: '100% Export-Ready Knotless Packages',
    bullets: [
      'Electronically cleaned 100% online scanning for thin, thick, and foreign faults.',
      'Automatic pneumatic splicing ensures flawless performance.',
      'Cones engineered for high-speed weaving looms.',
    ],
    img: '/6.webp',
    reverse: false,
  },
];

function useReveal() {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove('opacity-0', 'translate-y-8');
          e.target.classList.add('opacity-100', 'translate-y-0');
        }
      }),
      { threshold: 0.1 }
    );
    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };
}

export default function HomePage() {
  const navigate = useNavigate();
  const reveal = useReveal();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[700px] md:h-[700px] overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: "url('/1.webp')" }}
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 px-4 md:px-margin-desktop py-24 md:py-0 md:h-full flex flex-col justify-center max-w-container-max mx-auto text-on-primary">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] mb-4 text-secondary-fixed">Global Engineering Standards</span>
          <h1 className="text-3xl md:text-display-lg font-bold max-w-3xl mb-6 leading-tight">
            Advanced Textile Manufacturing: From Raw Cotton to Premium Export Yarn
          </h1>
          <p className="font-body-lg text-body-lg max-w-xl mb-8 text-surface-variant opacity-90">
            Precision-engineered processes utilizing world-class Rieter and LMW technology to deliver unmatched quality in the global textile market.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/quality')}
              className="bg-secondary text-white px-8 py-4 rounded-lg font-label-sm text-label-sm hover:brightness-110 transition-all flex items-center gap-2"
            >
              EXPLORE TECHNOLOGY <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button
              onClick={() => navigate('/about')}
              className="border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-lg font-label-sm text-label-sm hover:bg-white/10 transition-all"
            >
              OUR FOOTPRINT
            </button>
          </div>
        </div>
      </section>

      {/* Manufacturing Lifecycle */}
      <section className="py-24 bg-white">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16" ref={reveal}>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Our Engineering Core</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-2 mb-4">Precision Manufacturing Lifecycle</h2>
            <div className="h-1 w-20 bg-secondary mx-auto"></div>
          </div>
          <div className="space-y-12">
            {processSteps.map((step) => (
              <div
                key={step.num}
                ref={reveal}
                className={`flex flex-col ${step.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:shadow-xl transition-all group opacity-0 translate-y-8 duration-700`}
              >
                <div className="w-full md:w-2/5 h-64 rounded-lg overflow-hidden bg-surface-dim shrink-0">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${step.img}')` }}
                  />
                </div>
                <div className="w-full md:w-3/5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">{step.num}</span>
                    <h3 className="font-headline-md text-headline-md text-primary">{step.title}</h3>
                  </div>
                  <h4 className="font-body-lg font-semibold text-secondary mb-4 ml-13">{step.sub}</h4>
                  <div className="space-y-3 text-on-surface-variant">
                    {step.bullets.map((b, i) => (
                      <p key={i} className="flex items-start gap-2">
                        <span className="text-secondary text-lg shrink-0">✔</span>
                        <span>{b}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars Bento */}
      <section className="bg-surface-container py-24">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16" ref={reveal}>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Why Partners Choose Us</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-2">Our Foundation of Reliability</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[280px]">
            <div className="md:col-span-8 bg-white p-8 border border-outline-variant rounded-lg flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow card-ambient-shadow" ref={reveal}>
              <div className="max-w-md">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">public</span>
                <h3 className="font-headline-md text-headline-md mb-2 text-primary">Global Reliability</h3>
                <p className="text-on-surface-variant">Consistent delivery of export-quality yarn to textile hubs across five continents, meeting stringent international standards.</p>
              </div>
              <div className="flex items-center gap-2 text-secondary font-bold text-sm cursor-pointer" onClick={() => navigate('/about')}>
                LEARN MORE <span className="material-symbols-outlined">trending_flat</span>
              </div>
            </div>
            <div className="md:col-span-4 bg-primary-container p-8 border border-outline-variant rounded-lg flex flex-col justify-center text-white relative overflow-hidden group" ref={reveal}>
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Latest Tech</h3>
              <p className="opacity-80">Equipped with state-of-the-art Rieter and LMW machinery for 100% automated precision.</p>
            </div>
            <div className="md:col-span-4 bg-white p-8 border border-outline-variant rounded-lg flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow card-ambient-shadow" ref={reveal}>
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">verified</span>
                <h3 className="font-headline-md text-headline-md mb-2 text-primary">Zero Defect</h3>
                <p className="text-on-surface-variant text-sm">Rigorous quality control at every micron to ensure absolute yarn integrity.</p>
              </div>
            </div>
            <div className="md:col-span-8 bg-surface-bright p-8 border border-outline-variant rounded-lg flex flex-col md:flex-row gap-8 items-center" ref={reveal}>
              <div className="w-full md:w-1/2 h-full rounded-lg overflow-hidden min-h-[120px]">
                <div
                  className="w-full h-full bg-cover bg-center min-h-[120px]"
                  style={{ backgroundImage: "url('/7.webp')" }}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-headline-md text-headline-md mb-2 text-primary">Ethical Sourcing</h3>
                <p className="text-on-surface-variant text-sm">Sustainable procurement practices that support local farmers while ensuring premium raw material grade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-primary overflow-hidden">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative" ref={reveal}>
              <div className="relative z-10 w-full h-64 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/8.webp')" }}
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-8 border-white/10 -z-0"></div>
            </div>
            <div className="w-full md:w-1/2" ref={reveal}>
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/10 rounded-full">
                      <span className="material-symbols-outlined text-white">visibility</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-white">Our Vision</h2>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    To be the global benchmark for spinning excellence, integrating innovative technology with sustainable practices to empower the textile fashion industry worldwide.
                  </p>
                </div>
                <div className="h-px bg-white/20"></div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/10 rounded-full">
                      <span className="material-symbols-outlined text-white">rocket_launch</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-white">Our Mission</h2>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Delivering superior quality yarn products through relentless focus on R&D, operational efficiency, and creating long-term value for our global stakeholders and local communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-24 bg-white">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div ref={reveal}>
              <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">Global Footprint</h2>
              <p className="text-on-surface-variant mb-12 max-w-lg">
                From our headquarters in Gujarat, we export premium cotton yarn across global textile markets. Our quality certifications stand as a testament to our industrial rigor.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="text-4xl font-bold text-secondary block">16,416</span>
                  <span className="text-sm text-on-surface-variant">Active Spindles</span>
                </div>
                <div>
                  <span className="text-4xl font-bold text-secondary block">5,150+</span>
                  <span className="text-sm text-on-surface-variant">MT / Year</span>
                </div>
                <div>
                  <span className="text-4xl font-bold text-secondary block">2021</span>
                  <span className="text-sm text-on-surface-variant">Incorporated</span>
                </div>
                <div>
                  <span className="text-4xl font-bold text-secondary block">100%</span>
                  <span className="text-sm text-on-surface-variant">Online QC</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-10 rounded-xl border border-outline-variant" ref={reveal}>
              <h3 className="font-headline-md text-headline-md text-primary mb-8">Certified Excellence</h3>
              <div className="flex flex-wrap gap-8">
                {['ISO 9001', 'OEKO-TEX', 'BCI', 'GOTS'].map(cert => (
                  <div key={cert} className="w-20 h-20 bg-primary text-on-primary rounded flex items-center justify-center font-bold text-xs text-center p-2">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
