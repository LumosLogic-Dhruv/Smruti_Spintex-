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

const contactDetails = [
  {
    icon: 'location_on',
    label: 'Our Plant',
    value: 'LS No 1279/P2/P2, 1280, Near Kuda Road, Opposite Bala Hanuman, Dhrangadhra, Surendranagar District, Gujarat — 363310',
    bg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: 'mail',
    label: 'Email Us',
    value: 'ptpatel.smrutispintex@gmail.com',
    href: 'mailto:ptpatel.smrutispintex@gmail.com',
    bg: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    icon: 'schedule',
    label: 'Working Hours',
    value: 'Mon – Sat: 09:00 AM – 06:00 PM IST',
    bg: 'bg-tertiary-fixed/40',
    iconColor: 'text-on-tertiary-fixed-variant',
  },
  {
    icon: 'badge',
    label: 'Company ID',
    value: 'CIN: U17299GJ2021PTC120364',
    bg: 'bg-surface-container-high',
    iconColor: 'text-on-surface-variant',
  },
];

export default function ContactPage() {
  const reveal = useReveal();
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', company: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary-container pt-36 pb-28 px-4 md:px-margin-desktop relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-12 right-12 w-80 h-80 rounded-full border-[6px] border-white/5"></div>
          <div className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full border-4 border-white/5"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white/3"></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10" ref={reveal}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white font-label-sm text-label-sm rounded-full mb-6 uppercase tracking-widest">
            <span className="material-symbols-outlined text-[14px]">support_agent</span>
            Contact Us
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white max-w-3xl mb-6 leading-tight">
            Let's Build Something <span className="text-secondary-fixed">Together.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-white/70 max-w-2xl">
            Whether you need a custom yarn specification or want to explore a long-term supply partnership — our technical team is ready to respond within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { icon: 'verified', text: 'ISO 9001 Certified' },
              { icon: 'public', text: 'Global Supply Ready' },
              { icon: 'speed', text: '24-Hour Response' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">{icon}</span>
                <span className="font-label-sm text-label-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-surface-container-low py-24 px-4 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

          {/* Left — Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div ref={reveal} className="mb-4 opacity-0 translate-y-8 duration-700">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Reach Us</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-2">Contact Information</h2>
            </div>

            {contactDetails.map((d, i) => (
              <div
                key={i}
                ref={reveal}
                className="bg-white rounded-xl p-6 border border-outline-variant card-ambient-shadow flex gap-4 items-start opacity-0 translate-y-8 duration-700 hover:-translate-y-0.5 transition-transform"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`${d.bg} rounded-lg w-11 h-11 flex items-center justify-center shrink-0 mt-0.5`}>
                  <span className={`material-symbols-outlined ${d.iconColor} text-[20px]`} style={{ fontVariationSettings: "'FILL' 1" }}>{d.icon}</span>
                </div>
                <div className="min-w-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block mb-1">{d.label}</span>
                  {d.href ? (
                    <a href={d.href} className="font-body-md text-body-md text-primary hover:text-secondary transition-colors break-all">{d.value}</a>
                  ) : (
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">{d.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div
              ref={reveal}
              className="bg-primary-container rounded-xl p-6 mt-2 opacity-0 translate-y-8 duration-700"
              style={{ transitionDelay: '320ms' }}
            >
              <span className="font-label-sm text-label-sm text-white/60 uppercase tracking-widest block mb-4">Connect With Us</span>
              <div className="flex gap-3">
                {[
                  { icon: 'public', label: 'Website' },
                  { icon: 'share', label: 'Share' },
                  { icon: 'hub', label: 'Network' },
                ].map(({ icon, label }) => (
                  <a
                    key={icon}
                    href="#"
                    aria-label={label}
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            ref={reveal}
            className="lg:col-span-8 bg-white p-8 md:p-12 rounded-xl border border-outline-variant card-ambient-shadow opacity-0 translate-y-8 duration-700"
          >
            <div className="mb-8 pb-6 border-b border-outline-variant">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Send a Message</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-2">Inquiry Form</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Fill in your details and our team will reach out with a tailored response.</p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
                <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-secondary text-[52px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary">Message Sent!</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">Our technical team will reach out to you within 24 business hours.</p>
              </div>
            ) : (
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Full Name <span className="text-error">*</span></label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="bg-surface-container border border-outline-variant p-4 rounded-lg font-body-md text-body-md focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Company Name</label>
                  <input
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className="bg-surface-container border border-outline-variant p-4 rounded-lg font-body-md text-body-md focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                    placeholder="Your Company Ltd."
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Email Address <span className="text-error">*</span></label>
                  <input
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="bg-surface-container border border-outline-variant p-4 rounded-lg font-body-md text-body-md focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Phone Number</label>
                  <input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="bg-surface-container border border-outline-variant p-4 rounded-lg font-body-md text-body-md focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                    placeholder="+91 00000 00000"
                    type="tel"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Your Message <span className="text-error">*</span></label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="bg-surface-container border border-outline-variant p-4 rounded-lg font-body-md text-body-md focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none"
                    placeholder="Tell us about your yarn requirements — count range, quantity, delivery schedule, quality standards..."
                    rows={6}
                  />
                </div>
                <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="bg-primary text-on-primary px-12 py-4 rounded-lg font-label-sm text-label-sm hover:bg-primary-container transition-all flex items-center gap-2 group uppercase tracking-widest"
                  >
                    Send Message
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
                  </button>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">We respond within 24 business hours</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 md:px-margin-desktop pb-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div ref={reveal} className="rounded-xl overflow-hidden border border-outline-variant card-ambient-shadow opacity-0 translate-y-8 duration-700">
            <div className="bg-primary px-8 py-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-white/60 uppercase tracking-widest">Plant Location</p>
                <p className="font-body-md text-body-md text-white">Dhrangadhra, Surendranagar District, Gujarat — 363310</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0151318021626!2d71.45088311100231!3d23.023216616217088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395963c049b26905%3A0x1e71283d56169f49!2sSMRUTI%20SPINTEX.%20PVT.LTD.!5e0!3m2!1sen!2sin!4v1784107466385!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Smruti Spintex Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
