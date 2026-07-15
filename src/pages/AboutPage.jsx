import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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

const pillars = [
  { icon: 'public', title: 'Global Reliability', desc: 'Trusted export-quality yarn standards.', bg: 'bg-secondary-container', color: 'text-on-secondary-container' },
  { icon: 'precision_manufacturing', title: 'Latest Technology', desc: 'Powered by world-class machinery.', bg: 'bg-tertiary-fixed', color: 'text-on-tertiary-fixed' },
  { icon: 'verified', title: 'Quality Manufacturing', desc: '100% online defect-monitoring systems.', bg: 'bg-primary-container', color: 'text-on-primary-container' },
  { icon: 'groups', title: 'Experienced Team', desc: 'Backed by textile industry veterans.', bg: 'bg-surface-container-high', color: 'text-primary' },
];

const timeline = [
  { icon: 'foundation', label: 'FOUNDATION', title: 'Company Founded', desc: 'Visionary foundation to establish a premier cotton spinning hub in Gujarat.' },
  { icon: 'factory', label: 'PLANT SETUP', title: 'State-of-the-Art Facility', desc: 'Installation of high-end European spinning lines (Rieter K 48) in Dhrangadhra.' },
  { icon: 'trending_up', label: 'PRODUCTION', title: 'Commercial Operations', desc: 'Launching full-scale production of premium cotton yarn for global export and domestic markets.' },
  { icon: 'analytics', label: 'FUTURE', title: 'Planned Expansion', desc: 'Strategic scaling to double our capacity with next-generation compact spinning technologies.', active: true },
];

export default function AboutPage() {
  const navigate = useNavigate();
  const reveal = useReveal();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 md:px-margin-desktop bg-surface-bright overflow-hidden">
        <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="space-y-8" ref={reveal}>
            <span className="text-secondary font-label-sm text-label-sm tracking-widest uppercase">Global Textile Excellence</span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary max-w-xl">
              A modern spinning mill built on technology, precision, and trust.
            </h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-lg">
              Smruti Spintex Pvt. Ltd. is a next-generation cotton spinning enterprise located in Dhrangadhra, the heart of Gujarat's premium cotton belt. We integrate advanced level machinery with rigorous process control and a deeply experienced management team. Our mission is to manufacture consistent, export-grade cotton yarn tailored for the global weaving, knitting, and specialty textile industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate('/contact')} className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-sm text-label-sm hover:shadow-lg transition-all">Get in Touch</button>
              <button onClick={() => navigate('/quality')} className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-label-sm text-label-sm hover:bg-secondary/5 transition-all">View Quality</button>
            </div>
          </div>
          <div className="relative" ref={reveal}>
            <div className="rounded-xl overflow-hidden card-ambient-shadow border border-outline-variant">
              <img
                className="w-full h-64 md:h-[500px] object-cover"
                src="/9.webp"
                alt="Smruti Spintex spinning mill"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-on-primary p-8 rounded-xl shadow-xl hidden md:block">
              <div className="font-display-lg text-display-lg leading-none">16,416</div>
              <div className="font-label-sm text-label-sm opacity-80 mt-2">Active Spindles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-16 px-4 md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {pillars.map((p, i) => (
              <div
                key={i}
                ref={reveal}
                className="p-8 bg-white rounded-xl border border-outline-variant card-ambient-shadow group hover:-translate-y-1 transition-transform opacity-0 translate-y-8 duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 ${p.bg} rounded-lg flex items-center justify-center mb-6 ${p.color}`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{p.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">{p.title}</h3>
                <p className="text-on-surface-variant">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-20" ref={reveal}>
            <h2 className="font-headline-lg text-headline-lg text-primary">Our Journey of Excellence</h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto">Milestones that define our commitment to industrial leadership.</p>
          </div>
          <div className="relative">
            <div className="absolute top-8 left-0 w-full h-[2px] timeline-line-h -translate-y-1/2 hidden md:block" style={{ top: '32px' }}></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {timeline.map((t, i) => (
                <div key={i} className="flex flex-col items-center text-center" ref={reveal}>
                  <div className={`w-16 h-16 ${t.active ? 'bg-primary border-primary' : 'bg-white border-secondary'} border-4 rounded-full flex items-center justify-center mb-6 shadow-lg z-20`}>
                    <span className={`material-symbols-outlined ${t.active ? 'text-white' : 'text-secondary'}`}>{t.icon}</span>
                  </div>
                  <div className="font-headline-md text-headline-md text-primary mb-2">{t.label}</div>
                  <h4 className="font-label-sm text-label-sm text-secondary uppercase mb-3">{t.title}</h4>
                  <p className="text-on-surface-variant px-4">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 md:px-margin-desktop bg-surface-container-highest">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-primary-container p-8 md:p-12 rounded-2xl text-on-primary-container relative overflow-hidden group" ref={reveal}>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[120px]">visibility</span>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-on-primary-container/20 rounded-xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg mb-6">Our Vision</h2>
              <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
                To be a globally recognized benchmark in textile spinning, delivering premium-grade yarn through sustainable and innovative manufacturing practices.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-outline-variant card-ambient-shadow relative overflow-hidden group" ref={reveal}>
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[120px] text-primary">rocket_launch</span>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Our Mission</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                To empower global fabric manufacturers with consistent yarn quality, competitive efficiency, and transparent long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
