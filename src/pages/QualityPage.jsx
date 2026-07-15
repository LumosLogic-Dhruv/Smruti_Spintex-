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

const steps = [
  { num: '01', icon: 'factory', title: 'Blow Room', metric: '99.8% Impurity Removal', desc: 'Automated opening and cleaning of cotton bales. Advanced metal and heavy-part separators ensure raw material purity before the carding stage.' },
  { num: '02', icon: 'layers', title: 'Carding Process', metric: 'Micronaire Precision', desc: 'Cotton fibers are individualized and parallelized. High-speed carding machines eliminate neps and short fibers, creating a high-quality sliver.' },
  { num: '03', icon: 'straighten', title: 'Drawing & Roving', metric: 'CV% < 2.5', desc: 'Multiple slivers are blended and drawn to achieve uniform density. Roving machines then twist the sliver into a thin strand ready for ring spinning.' },
  { num: '04', icon: 'rebase_edit', title: 'Ring Spinning', metric: 'RPM 20,000+', desc: 'The final yarn creation phase. Individual rovings are spun into high-tensile yarn with consistent TPI (Twist Per Inch) control.' },
  { num: '05', icon: 'settings_backup_restore', title: 'Auto Winding', metric: 'Zero Fault Package', desc: 'Yarn is transferred to cones. Electronic clearers (Uster Quantum) detect and remove any remaining imperfections, ensuring a knotless, smooth finish.' },
];

const certifications = [
  { icon: 'eco', title: 'GOTS', desc: 'Global Organic Textile Standard. Certified for organic fibers, processing, and social criteria throughout the supply chain.' },
  { icon: 'shield_with_heart', title: 'BCI', desc: 'Better Cotton Initiative. Member supporting sustainable cotton production globally and reducing environmental impact.' },
  { icon: 'verified', title: 'ISO 9001:2015', desc: 'International Quality Management standard. Evidence of our ability to consistently provide high-quality textile products.' },
];

export default function QualityPage() {
  const navigate = useNavigate();
  const reveal = useReveal();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-primary-container overflow-hidden">
        <div className="relative px-4 md:px-margin-desktop max-w-container-max mx-auto text-center" ref={reveal}>
          <span className="inline-block px-4 py-1 bg-white text-primary font-label-sm text-label-sm rounded-full mb-6">UNCOMPROMISING STANDARDS</span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-primary mb-6">Engineering Precision in Every Thread</h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto opacity-90">
            At Smruti Spintex, quality isn't just a department — it's the core of our manufacturing DNA. We utilize state-of-the-art online monitoring systems to ensure global consistency.
          </p>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-24 px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-gutter">
          {/* Left info */}
          <div className="md:w-1/3" ref={reveal}>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">The Manufacturing Journey</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Our 5-step automated spinning process represents the pinnacle of industrial efficiency. Each stage is monitored by real-time precision sensors to maintain the highest USTER standards.
            </p>
            <div className="p-8 bg-surface-container rounded-xl border border-outline-variant">
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Online Monitoring</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Every machine is equipped with intelligent sensors tracking:</p>
              <ul className="space-y-3">
                {['Uster Statistics (5% percentile)', 'Real-time Nep Count Monitoring', 'Automated Yarn Clearing Efficiency'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    <span className="font-label-sm text-label-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline steps */}
          <div className="md:w-2/3 space-y-0 relative">
            <div className="absolute left-[39px] top-8 bottom-8 w-0.5 timeline-line-v hidden md:block"></div>
            {steps.map((step, i) => (
              <div
                key={i}
                ref={reveal}
                className="relative flex gap-4 md:gap-8 pb-12 group opacity-0 translate-y-8 duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="z-10 w-12 h-12 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center rounded-full bg-white border-2 border-secondary text-secondary card-ambient-shadow transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                </div>
                <div className="bg-white p-5 md:p-8 rounded-xl card-ambient-shadow border border-outline-variant flex-grow">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <h4 className="font-headline-md text-headline-md text-primary">{step.num}. {step.title}</h4>
                    <span className="text-secondary font-bold text-sm">{step.metric}</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-surface-container py-24">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto text-center mb-16" ref={reveal}>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Global Certifications</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Our commitment to excellence is validated by international regulatory bodies, ensuring our products meet the highest ethical and quality standards.
          </p>
        </div>
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {certifications.map((cert, i) => (
            <div
              key={i}
              ref={reveal}
              className="bg-white p-10 rounded-xl card-ambient-shadow border border-outline-variant text-center hover:-translate-y-2 transition-transform duration-300 opacity-0 translate-y-8 duration-700"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-surface-container">
                <span className="material-symbols-outlined text-secondary text-5xl">{cert.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">{cert.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="bg-primary text-on-primary p-8 md:p-16 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12" ref={reveal}>
          <div className="max-w-xl">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-4 md:mb-6">Excellence is not an act, but a habit.</h2>
            <p className="font-body-lg text-body-lg opacity-80">Experience the difference of industrial precision. Connect with our quality team for detailed technical reports or customized spinning requests.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <button onClick={() => navigate('/contact')} className="bg-white text-primary px-10 py-4 rounded-lg font-headline-md text-headline-md hover:bg-surface-container transition-all">Get a Quote</button>
            <button onClick={() => navigate('/products')} className="border-2 border-white text-white px-10 py-4 rounded-lg font-headline-md text-headline-md hover:bg-white/10 transition-all">Our Products</button>
          </div>
        </div>
      </section>
    </main>
  );
}
