import React, { useState, useEffect, useRef } from 'react';

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

export default function ContactPage() {
  const reveal = useReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <main className="pt-32 pb-0 px-4 md:px-margin-desktop max-w-container-max mx-auto">
      {/* Hero */}
      <section className="mb-16" ref={reveal}>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-4 md:mb-6">Get in touch with our experts.</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Whether you have technical queries about our spinning processes or need a global supply quote, our team is ready to provide precise solutions for your textile requirements.
        </p>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Form */}
        <div
          ref={reveal}
          className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 border border-outline-variant rounded-xl bento-shadow opacity-0 translate-y-8 duration-700"
        >
          <h2 className="font-headline-md text-headline-md mb-8 text-primary">Inquiry Form</h2>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
              <span className="material-symbols-outlined text-secondary text-[64px]">check_circle</span>
              <h3 className="font-headline-md text-headline-md text-primary">Message Sent!</h3>
              <p className="text-on-surface-variant">Our team will reach out to you within 24 hours.</p>
            </div>
          ) : (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant">FULL NAME</label>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="bg-surface-container border border-outline-variant p-4 rounded-lg font-body-md focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant">EMAIL ADDRESS</label>
                <input
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="bg-surface-container border border-outline-variant p-4 rounded-lg font-body-md focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant">PHONE NUMBER</label>
                <input
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="bg-surface-container border border-outline-variant p-4 rounded-lg font-body-md focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                  placeholder="+91 00000 00000"
                  type="tel"
                />
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant">MESSAGE</label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="bg-surface-container border border-outline-variant p-4 rounded-lg font-body-md focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                  placeholder="Tell us about your requirements..."
                  rows={5}
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-primary text-on-primary w-full md:w-auto px-12 py-4 rounded-lg font-label-sm text-label-sm hover:bg-primary-container transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>SEND MESSAGE</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Info Cards */}
        <div className="lg:col-span-5 space-y-gutter">
          <div ref={reveal} className="bg-primary-container text-on-primary-container p-8 border border-outline-variant rounded-xl card-ambient-shadow opacity-0 translate-y-8 duration-700">
            <div className="flex items-start space-x-4">
              <div className="bg-on-primary-container/10 p-3 rounded-lg">
                <span className="material-symbols-outlined text-on-primary-container">factory</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Registered Plant</h3>
                <p className="font-body-md text-body-md opacity-90 leading-relaxed">
                  LS No 1279/P2/P2, 1280, 1557/P217, 1557/P218,<br />
                  Near Kuda Road, Opposite Bala Hanuman,<br />
                  Dhrangadhra, Surendranagar District,<br />
                  Gujarat, India — 363310
                </p>
              </div>
            </div>
          </div>

          <div ref={reveal} className="bg-surface-container-lowest p-8 border border-outline-variant rounded-xl card-ambient-shadow opacity-0 translate-y-8 duration-700" style={{ transitionDelay: '100ms' }}>
            <div className="flex items-start space-x-4">
              <div className="bg-secondary/10 p-3 rounded-lg">
                <span className="material-symbols-outlined text-secondary">support_agent</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md mb-4 text-primary">Direct Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                    <a href="mailto:ptpatel.smrutispintex@gmail.com" className="font-body-md hover:text-primary transition-colors">
                      ptpatel.smrutispintex@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                    <span className="font-body-md">Mon – Sat: 09:00 AM – 06:00 PM IST</span>
                  </div>
                  <div className="flex items-center space-x-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]">badge</span>
                    <span className="font-body-md">CIN: U17299GJ2021PTC120364</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={reveal} className="bg-surface-container-high p-8 border border-outline-variant rounded-xl card-ambient-shadow opacity-0 translate-y-8 duration-700" style={{ transitionDelay: '200ms' }}>
            <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-6 uppercase tracking-widest">Connect with us</h3>
            <div className="flex space-x-4">
              <a className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-on-primary hover:bg-secondary transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-on-primary hover:bg-secondary transition-colors" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-on-primary hover:bg-secondary transition-colors" href="#">
                <span className="material-symbols-outlined">hub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <section className="mt-gutter mb-16">
        <div className="relative w-full h-[450px] bg-surface-container rounded-xl overflow-hidden border border-outline-variant card-ambient-shadow">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center z-10 px-6">
              <span className="material-symbols-outlined text-primary text-[48px] mb-4 block">location_on</span>
              <h4 className="font-headline-md text-headline-md text-primary mb-2">Find Us in Dhrangadhra, Gujarat</h4>
              <p className="font-body-md text-on-surface-variant mb-6">Our state-of-the-art spinning facility in Gujarat's premium cotton belt.</p>
              <a
                href="https://maps.google.com/?q=Dhrangadhra,+Surendranagar,+Gujarat,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-sm text-label-sm hover:bg-secondary transition-colors inline-block"
              >
                OPEN IN GOOGLE MAPS
              </a>
            </div>
            <div
              className="absolute inset-0 opacity-40 bg-cover bg-center grayscale contrast-125"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDjmwTKvfhpn_LGn-N9RTql37FCZYKPyF4wtjizzNVEz3IZd7v5k7hfPI1sOOdQBIJVzOZOGTNlWhJL8NtvYmzdC0fWRB0eyjR8ZbonWBSl9TtjYveKw1fI62r2wuIyz25r-x4ZMZxwF0FdfE1wE2qoYEVstqMxPu__TBO6OgOWwATZe3YSic8Xf_UCtCWUQ8prESzJwIlgvoO0bPscjws9VneUbR_9fsLL6INqvLdhu2UmDcg')" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
