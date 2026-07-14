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

const milestones = [
  {
    year: '2021',
    title: 'The Genesis',
    desc: 'Inauguration of Smruti Spintex Private Limited in Dhrangadhra, Gujarat, with a commitment to quality and timely delivery.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq8CJQ7_dEoLxQatS6wCqoB3osPDjKpSyFkxxL5p4kx2x5EDt2N62egRbqnb9nFILs3C5GfyPFqPJLEuvWR7WdpPLDdUA6FP8VxgDGOhIUt7Zrx4qUcwrqap1ZRdygWsNAmMdXjFA4CAknRBmQ52QWxh-1UHveIlzthYLxNBDmSK4ydo-fV8hbFbm9KrkzNPiF8acwGZ2CSNJULerla0G5Tf8ohbtOjFb2DZKksBkXrUNF6x2pFffZvA',
    reverse: false,
  },
  {
    year: '2022',
    title: 'Plant Commissioning',
    desc: 'Installation of high-end European Rieter K 48 spinning lines and full-scale production commencement with 16,416 active spindles.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-eIjW9C2LASRfeUajA2ub7wLgXZHzXRN-3ItQp0YpmCiH8xT5DGHH1wkFJaaxWxQa-Vwe09tP4lDwHjeXDhybGWXA70-5LeGo3kg90Y7Nzck1lzTVo0BKFzgPZZN1gHOE52FCuN6v7ZUX8MTgSqwi275AwtqdI_NSe_5SXaL3c_1unSskKKSUYYB9UF3yUM95iSdY0h601So1V7gj6RNWoD67WyGkvWaO2yxXjaDBNCkbi3McNNNf7g',
    reverse: true,
  },
  {
    year: '2026',
    title: 'Global Horizon',
    desc: 'Transitioning into a fully automated digital manufacturing ecosystem, delivering world-class yarn to international markets.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiLmUeoexsinNs5H1XNY1cCQf3F1P81dt5jDO_6UI6Na6PNv0UEtRIFwELxjABs5Sr0VELMI1hUHWNh4YXYb_hj7CHxXfexZwxn3DY6cvBxHvdrHeXnzBpU3F_b2yS3w57uvBdhpcxi29pzX-xzR1J9SyN7tIRppMmZQxsm4Rfuv494BTFDHfGSDokoI_ER-jFjaB2BqLuVMYhoA-w',
    reverse: false,
  },
];

export default function OurStoryPage() {
  const navigate = useNavigate();
  const reveal = useReveal();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 md:px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="space-y-6" ref={reveal}>
            <span className="inline-block px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm rounded-full">ESTABLISHED 2021</span>
            <h1 className="font-display-lg text-display-lg text-primary leading-tight">
              Crafting the Future of <span className="text-secondary">Textile Engineering</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              At Smruti Spintex, we translate raw nature into industrial excellence. Our journey is one of relentless precision, where traditional cotton heritage meets avant-garde spinning technology.
            </p>
          </div>
          <div className="hidden md:block relative group" ref={reveal}>
            <div className="absolute -inset-4 bg-primary-container/10 blur-2xl rounded-full transition-transform group-hover:scale-110"></div>
            <img
              className="relative z-10 w-full aspect-square object-cover rounded-xl shadow-lg border border-outline-variant/30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApdUzPVtlKqkcVI8WqjFlGhP7glumVsLvsxNkyN6bHdc-kObytiWSNnMvbNEm39YRsejNwDjXy2mR976YZ9ZCSqFYlRxb01oMZL7TbjpiUlzVPWJ0FmWfOmyezBxEeJeXW21-t5chYc6smb3I0RVqB2zYv9NIY1JxeMPl5ds4KTvkPngXyOXgoaOZBoDWY81xheSfldSexc7lZ33Zd-JkBpuScnptTpGZPoIWt7tWzYNzDV11OyMpJkw"
              alt="Smruti Spintex manufacturing"
            />
          </div>
        </div>
      </section>

      {/* Story Bento */}
      <section className="py-16 px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="md:col-span-2 glass-card p-12 rounded-xl flex flex-col justify-center gap-6" ref={reveal}>
            <h2 className="font-headline-lg text-headline-lg text-primary">From Cotton to Clothes</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Smruti Spintex Pvt. Ltd. was founded with a singular vision: to redefine the quality standards of the Indian spinning industry. What started as a passion for textiles in 2021 has evolved into a powerhouse of innovation. We don't just spin yarn; we weave trust into every thread, ensuring our global clientele receives nothing short of perfection.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              CIN: U17299GJ2021PTC120364 | Dhrangadhra, Surendranagar District, Gujarat
            </p>
            <div className="grid grid-cols-2 gap-gutter pt-8 border-t border-outline-variant">
              <div>
                <p className="font-display-lg text-display-lg text-secondary">16,416</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">ACTIVE SPINDLES</p>
              </div>
              <div>
                <p className="font-display-lg text-display-lg text-secondary">Global</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">SUPPLY NETWORK</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-gutter" ref={reveal}>
            <div className="h-48 rounded-xl overflow-hidden shadow-sm border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXs5A7bhN_Oh1uVHTpngWJRn_S7I8WXetA9Rbnm9leYn7XWfLXVAi0IhtkNzxKbCBT3DIoFilvmzXtdad8aezJyWEO1FpaGxlBMtxXt1Jh7YvuI3Tmr0xbjdtUuR820boGkVHaNck1r__ZtqRzQnrKPCuo-K402O2D8HOdB6W_gmJHz-tjf7nQqVEXi-16gCB4Cb3IVcKzNMqZCxgryphKxLqRh1SmJk4QMEIw_Z6K5iLmJXpjrL6EVA"
                alt="Cotton yarn detail"
              />
            </div>
            <div className="flex-1 bg-primary-container p-8 rounded-xl flex flex-col justify-end text-on-primary">
              <span className="material-symbols-outlined text-4xl mb-4">precision_manufacturing</span>
              <h3 className="font-headline-md text-headline-md mb-2">Technological Core</h3>
              <p className="font-body-md text-body-md opacity-80">Helmed by industry professionals with deep technical proficiency in textile engineering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="py-16 bg-surface-container-low overflow-hidden">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16" ref={reveal}>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Milestones of Excellence</h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 timeline-line-v hidden md:block"></div>
            {milestones.map((m, i) => (
              <div
                key={i}
                ref={reveal}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 ${i < milestones.length - 1 ? 'mb-24' : ''} items-center opacity-0 translate-y-8 duration-700`}
              >
                <div className={`${m.reverse ? '' : 'md:text-right md:pr-16'} ${m.reverse ? 'md:pl-16' : ''} order-2 ${m.reverse ? 'md:order-1' : 'md:order-1'}`}>
                  <span className="inline-block px-4 py-1 bg-primary text-on-primary font-bold rounded mb-4">{m.year}</span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">{m.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{m.desc}</p>
                </div>
                <div className={`relative flex justify-center order-1 ${m.reverse ? 'md:order-2' : 'md:order-2'}`}>
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-secondary rounded-full z-10 hidden md:block"></div>
                  <img
                    className="w-full max-w-md rounded-lg shadow-md border border-outline-variant"
                    src={m.img}
                    alt={m.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="mx-0 md:mx-0 bg-primary-container rounded-3xl p-16 text-center text-on-primary relative overflow-hidden" ref={reveal}>
            <div className="relative z-10 space-y-8">
              <h2 className="font-display-lg text-display-lg">Ready to weave growth stories together?</h2>
              <p className="font-body-lg text-body-lg opacity-80 max-w-2xl mx-auto">Join the ranks of global brands who trust Smruti Spintex for their premium yarn requirements.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={() => navigate('/contact')} className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded font-bold hover:scale-105 transition-transform">Get a Technical Quote</button>
                <button onClick={() => navigate('/about')} className="border-2 border-on-primary text-on-primary px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">Learn About Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
