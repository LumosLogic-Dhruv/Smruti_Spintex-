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

const products = [
  {
    title: '100% Combed Cotton Yarn',
    tag: 'Export Ready',
    tagColor: 'bg-primary text-on-primary',
    count: '20s – 40s',
    process: 'Combed',
    tensile: 'High',
    hairiness: 'Low',
    desc: 'Superior quality yarn with short fibers removed for extra smoothness, strength, and luster. Ideal for premium apparel, shirting, and hosiery.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApIDGVQXyEbbzRtn7WTmnYbxZh-EnCb3QlvYpgStE4Cyml2BFFyflq1w2d5W_NjkcPRszUc_3nuysCiUjB4ZhISYAMBMJGA_wejBtv1yMy2zwh91I0O_wBC4dLmaTj_0Hsld9eOOGXEQw3CMlS_EYP1c9ntpCe4pTjNMe7MbicpQOtYCPDBwosUGgt7U_Kl8mtAju4TwtniPdFaphOVWOBtKLHwQCbvKblTDrq8Yp4crYNHONivi1v',
  },
  {
    title: 'Carded Cotton Yarn',
    tag: 'Best Seller',
    tagColor: 'bg-secondary text-on-secondary',
    count: '16s – 34s',
    process: 'Carded',
    tensile: 'Medium-High',
    hairiness: 'Standard',
    desc: 'High-performance yarn suitable for a wide range of weaving and knitting applications requiring durability and comfort.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARAqW21TjWZBZRZGLntnNis1MV7x8Y8T4Cs_AQCb6bcIBrTAozCP0f6OBaByLwiXOv343dpZ5mNhm7r57FDNiUDeE3OpQnqpVj7cfiX-orFUkXfuztx-7aMxTubCDveIvfOfnAKUXkokX-Lz9W4bX9I31Tmksrwjj66QlO1sE-WI8NokxnbmRFQgBunvWYiM44AA9jTW70PwwMoqSM80iONJ0bNwHTWV2uWptJ8HryChLKtVv_bCkJ',
  },
  {
    title: 'Compact Yarn (K-Compact)',
    tag: 'Premium',
    tagColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    count: '30s – 60s',
    process: 'K-Compact',
    tensile: 'Very High',
    hairiness: 'Ultra Low',
    desc: 'Premium compact technology for ultra-low yarn hairiness and maximum tensile strength. Ideal for luxury woven fabrics.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCgm4r7KvZh1ku3oysQZZuwT2etYeKL2X-9jHyyIuj6utrEmHCoaYFY9JfHUaJewHEB5zKHhDQh8aY62Kg2_j2D66W0R05R_CoJiWc9-WaLY0sSIs2e-zNTFbp2sebOwQC2n0toWS5S5DgIWaUEHaWIUxb3xdjoOqlsFe0O47_1-9P16Z3_wEq8_uwTdqLeVZXte0hZk1C-dYivwawnIWxdZU9NjGDuhGdpQaphcy24owMaC2SbQA0',
  },
  {
    title: 'Organic Combed Cotton',
    tag: 'Sustainable',
    tagColor: 'bg-secondary/10 text-secondary border border-secondary',
    count: '24s – 40s',
    process: 'GOTS Certified',
    tensile: 'High',
    hairiness: 'Low',
    desc: 'GOTS-certified organic yarn for eco-conscious brands. Same premium quality without compromise on sustainability.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Pi8roH8CQwZNo3mpIjJByXeXQEyfNbnx61if_-NkmkL4OHnDXYJyK0zW5pbbjEJ06XVUoPBzapN4qrlIiu6HGc9giL4GaTrJtfYZTSU97p0NynroVbORZZv4pXsuU0mk46IfVzJTNtE0nFOATWcygRr3fDspHkCNGXiXTGVd9VIouN-MIoqFt05dz8oeCLbVEdooYT6hPlALUkg_iIeY6PWkHpfiE8q0tnWF26ohMt1OPj1W0J92',
  },
];

export default function ProductsPage() {
  const navigate = useNavigate();
  const reveal = useReveal();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 md:px-margin-desktop bg-primary-container overflow-hidden">
        <div className="max-w-container-max mx-auto relative z-10 text-on-primary-container" ref={reveal}>
          <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full mb-6">PRODUCT CATALOGUE</span>
          <h1 className="font-display-lg text-display-lg mb-6 max-w-3xl">Premium Cotton Yarn for Every Application</h1>
          <p className="font-body-lg text-body-lg opacity-90 max-w-2xl">
            Engineered for diverse textile applications from high-fashion apparel to industrial fabrics. Every count, every process — precisely controlled.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-4 md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto">
          <div className="space-y-16">
            {products.map((p, i) => (
              <div
                key={i}
                ref={reveal}
                className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:shadow-xl transition-all group opacity-0 translate-y-8 duration-700`}
              >
                <div className="w-full md:w-2/5 h-72 rounded-lg overflow-hidden shrink-0">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-3/5">
                  <span className={`inline-block px-3 py-1 rounded font-label-sm text-label-sm mb-4 ${p.tagColor}`}>{p.tag}</span>
                  <h3 className="font-headline-lg text-headline-lg text-primary mb-4">{p.title}</h3>
                  <p className="text-on-surface-variant mb-8 font-body-md text-body-md">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-4 border-t border-outline-variant pt-6">
                    {[
                      { label: 'Count Range', val: p.count },
                      { label: 'Process', val: p.process },
                      { label: 'Tensile Strength', val: p.tensile },
                      { label: 'Hairiness', val: p.hairiness },
                    ].map(({ label, val }) => (
                      <div key={label}>
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">{label}</span>
                        <p className="font-headline-md text-headline-md text-primary mt-1">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-margin-desktop bg-surface-container">
        <div className="max-w-container-max mx-auto bg-primary text-on-primary p-16 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="font-display-lg text-display-lg mb-6">Need a Custom Specification?</h2>
            <p className="font-body-lg text-body-lg opacity-80">
              Our technical team can engineer yarn to your exact count, twist, and hairiness requirements. Contact us for a detailed quotation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <button onClick={() => navigate('/contact')} className="bg-white text-primary px-10 py-4 rounded-lg font-headline-md text-headline-md hover:bg-surface-container transition-all">Get a Quote</button>
            <button onClick={() => navigate('/quality')} className="border-2 border-white text-white px-10 py-4 rounded-lg font-headline-md text-headline-md hover:bg-white/10 transition-all">View Quality</button>
          </div>
        </div>
      </section>
    </main>
  );
}
