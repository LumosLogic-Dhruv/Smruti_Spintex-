import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu, Leaf, ShieldCheck, Users, Award, Building2, Handshake, Truck, MapPin, Mail,
  Share2, Network, Globe, ChevronDown, FlaskConical, Send, Menu, X, Check, Eye, Target
} from 'lucide-react';

const Logo = ({ className = "", invert = false }) => (
  <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" className={`${className} h-12 w-auto`}>
    <path d="M20 15C20 10 25 5 35 5C45 5 50 10 50 15C50 25 20 35 20 45C20 50 25 55 35 55C45 55 50 50 50 45" stroke={invert ? "#ffffff" : "#0F3D56"} strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M25 25C25 20 30 15 35 15C40 15 45 20 45 25C45 35 25 40 25 45" stroke="#D8A84E" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <text x="65" y="38" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="22" fill={invert ? "#ffffff" : "#0F3D56"}>SMRUTI</text>
    <text x="65" y="52" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="400" fontSize="12" letterSpacing="2" fill={invert ? "#D8A84E" : "#2B6E73"}>SPINTEX</text>
  </svg>
);

const heroSlides = [
  {
    heading: "Automated Blow Room",
    subheading: "Contamination Detection & Gentle Opening",
    bullets: [
      "Advanced automated blending with minimal fiber damage",
      "High-precision vision sensors detect and eliminate foreign fibers",
      "Micro-dust removal system for pure raw cotton base"
    ],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_fvkSIBYjO3-3hCKJzm-TcWUfkD4kan5cSYj8BLA18AdI_sqCIkiWoO9udNae3HrAy7L-6169DXQpCGHlMSIyxS7etYMNyS09qg80XQUUBeIMgzXpvU-BnqIzym6hY_PLBn5mKETMOOjGwQB2Rzt0wMel-H9DeXZJOEktkwdaUXt3XGsDlXK1MhCB-KSvNAen5H-cHxQD-PLCKiaFTPFmScX1Z3AH7fBxkoOE01BuTQphfaDqx_I1"
  },
  {
    heading: "High-Precision Carding",
    subheading: "The Foundation of Yarn Uniformity",
    bullets: [
      "Optimised cylinder-to-flat action to eliminate neps and seed-coats",
      "Achieves excellent fiber parallelisation",
      "Converts raw tufts into defect-free, consistent sliver"
    ],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3_4yJByNiNtYGdvIG7Llc83_SmjqGt7e9k-0jb-m8RsHxbhBeDojI3IkVg8J1wHfXGbX-N83BWdM2Kvmy2KSjmk2GDr_Dom98WIFv7UUvwpAxSfk9Uf2GiZ_KYuFl2zgpgtcGnN52zAP11sUSdbz75pGPOoalexDwV0pjkJ1F_i26Jyf10vcjgzIixoq7Q9rb0hjBLbIMleXFI4jhUsFL8_dG_cSNQfgj5s630WMemdKZU9khrdZpO"
  },
  {
    heading: "Drawing & Premium Combing",
    subheading: "Maximising Tensile Strength",
    bullets: [
      "Advanced systems ensure unmatched mass variations (U% & CVM)",
      "Extracts short fibers to improve the Short Fiber Index (SFI)",
      "Delivers high structural uniformity and high tensile strength"
    ],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1S4Dt0rszZIexB_pLKDc6wZY_iFVYkSQG7v_8zJwAifj-cX2AfIsF4Vo_egngBw8jG1B8FVTdUBYz17pqeQ1ioMSYAixntaaZM_K6EEIwAGjbc3LQZglvVgdaGn9OQL6SWF8g8kNU7Sf9yANha6aLXTVHpELdjzGrZOX3HcGGj-HOolVFbdmqE_c2yA2ZBmrBTrpknnz_9ggQZcaMpxpeP1UWn4n_OINFuzQeFmCq92S77lsRECAX"
  },
  {
    heading: "Ring Frame & Compact Spinning",
    subheading: "Core Production Facility",
    bullets: [
      "Premium compact tech for ultra-low yarn hairiness",
      "Stable twist factors engineered for global knitting and weaving",
      "Synchronised spindle speed for consistent CV% of count"
    ],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqcVfi6Z1HwA7Rv214A3cHajRs6b-gg9QBnCZZFz_U0WLusRPhyi6aVzE69dfC1P3jHmdlBv7bkTw795Uy-fnXdiSfvy1se0hajt6f_O5eXMmA7v9WN0exAKRF5t5RqOAugpA1zYOeg4upY30zNwnsXx86dmXU-9qKuFyuQ7xaTjMRwLQ-HD55JctEAzPg_8gIfYFbY7MaCyrtMnYEc-ExxntpZMwIu9U0oWC0pxQZA8civaRKdb4K"
  },
  {
    heading: "Automated Winding (EYC)",
    subheading: "100% Export-Ready Knotless Packages",
    bullets: [
      "Electronically cleaned 100% online scanning for thin, thick, and foreign faults",
      "Automatic pneumatic splicing ensures flawless performance",
      "Cones engineered for high-speed weaving looms"
    ],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHfdro0umCWTZ1qPisyaiXPfY6Ovzjii_XRFKp9fWDFLCVkKlJHD28En_S9Q1Wb7ngMjC_5vL3x7pJhtHtJS47u8x04uS93WiEQCQSxaegcGVLwFY08omrtrS3cKcGbzZ41YbPxg8yWfi9atsnt8qnm-jSB_lydVzgrcV3yQWSGz6VD_Khr56kzhzfjKvCPXS66RlPCk_YkfQh38GK0TrcePzHpLsnUw7TwES7Iw2ajunp882OCstM"
  }
];

const timelineMilestones = [
  {
    label: "FOUNDATION",
    heading: "Company Founded",
    text: "Visionary foundation to establish a premier cotton spinning hub in Gujarat.",
    color: "bg-primary"
  },
  {
    label: "PLANT SETUP",
    heading: "State-of-the-Art Facility",
    text: "Installation of high-end European spinning lines (Rieter K 48) in Dhrangadhra.",
    color: "bg-gold-accent"
  },
  {
    label: "PRODUCTION",
    heading: "Commercial Operations",
    text: "Launching full-scale production of premium cotton yarn for global export and domestic markets.",
    color: "bg-primary"
  },
  {
    label: "FUTURE",
    heading: "Planned Expansion",
    text: "Strategic scaling to double our capacity with next-generation compact spinning technologies.",
    color: "bg-gold-accent"
  }
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: 'Product Inquiry', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'infrastructure', 'sustainability'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setContactForm({ name: '', email: '', subject: 'Product Inquiry', message: '' });
      setIsQuoteModalOpen(false);
    }, 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const menuVariants = {
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md selection:bg-secondary-container selection:text-secondary">

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-margin-desktop py-4 bg-surface/80 backdrop-blur-xl border-b border-black/5 shadow-sm">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
        <div className="hidden md:flex gap-8">
          {['home', 'about', 'products', 'infrastructure', 'sustainability'].map((item) => (
            <a
              key={item}
              className={`font-label-md text-label-md capitalize font-bold pb-1 transition-colors duration-300 ${
                activeSection === item
                  ? 'text-secondary border-b-2 border-secondary'
                  : 'text-on-surface-variant hover:text-secondary border-b-2 border-transparent'
              }`}
              href={`#${item}`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-primary hover:bg-industrial-blue text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md transition-all duration-200 active:scale-95 cursor-pointer hover:shadow-md"
          >
            Request Quote
          </button>
        </div>
        <button
          className="md:hidden text-on-surface-variant p-2 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden border-b border-outline-variant/30 bg-surface px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full left-0 top-full"
            >
              {['home', 'about', 'products', 'infrastructure', 'sustainability'].map((item) => (
                <a
                  key={item}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-label-md font-bold capitalize transition-colors py-2 ${
                    activeSection === item ? 'text-secondary' : 'text-on-surface-variant'
                  }`}
                  href={`#${item}`}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => { setIsMobileMenuOpen(false); setIsQuoteModalOpen(true); }}
                className="bg-primary text-on-primary w-full py-3 rounded-full font-bold transition-all active:scale-95"
              >
                Request Quote
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero — Section-wise Slideshow */}
      <section className="relative h-screen flex items-center overflow-hidden" id="home">
        {/* Background images — CSS crossfade */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: idx === currentSlide ? 1 : 0 }}
              aria-hidden={idx !== currentSlide}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.img}')` }}
              />
              <div className="absolute inset-0 bg-primary/55" />
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full px-6 md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center max-w-[1440px] mx-auto">
          {/* Slide Text — animated per slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.65 }}
              className="text-left"
            >
              <span className="inline-block bg-gold-accent/20 border border-gold-accent/50 text-gold-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-5">
                {heroSlides[currentSlide].subheading}
              </span>
              <h1 className="font-display-lg text-[34px] md:text-[52px] text-white mb-6 leading-tight font-bold">
                {heroSlides[currentSlide].heading}
              </h1>
              <ul className="space-y-3 mb-8">
                {heroSlides[currentSlide].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <Check className="h-5 w-5 text-gold-accent flex-shrink-0 mt-0.5" />
                    <span className="text-base leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#infrastructure"
                  className="bg-gold-accent text-primary px-8 py-4 rounded-full font-label-md text-label-md font-bold hover:bg-white hover:text-primary transition-all shadow-xl text-center"
                >
                  Explore Infrastructure
                </a>
                <a
                  href="#products"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-label-md text-label-md font-bold hover:bg-white/10 transition-all text-center"
                >
                  Our Products
                </a>
              </div>
              {/* Slide dots */}
              <div className="flex gap-2 items-center">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentSlide ? 'bg-gold-accent w-8' : 'bg-white/40 w-2 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stat Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4"
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300">
              <Cpu className="text-4xl text-industrial-blue mb-2 h-10 w-10" />
              <h3 className="font-headline-md text-headline-md text-industrial-blue font-bold">16,416</h3>
              <p className="font-label-md text-label-md text-on-surface-variant">Active Spindles</p>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300">
              <Cpu className="text-4xl text-industrial-blue mb-2 h-10 w-10" />
              <h3 className="font-headline-md text-headline-md text-industrial-blue font-bold">Rieter K 48</h3>
              <p className="font-label-md text-label-md text-on-surface-variant">Equipment</p>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300">
              <Leaf className="text-4xl text-industrial-blue mb-2 h-10 w-10" />
              <h3 className="font-headline-md text-headline-md text-industrial-blue font-bold">Premium</h3>
              <p className="font-label-md text-label-md text-on-surface-variant">Cotton Yarn</p>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300">
              <ShieldCheck className="text-4xl text-industrial-blue mb-2 h-10 w-10" />
              <h3 className="font-headline-md text-headline-md text-industrial-blue font-bold">Global</h3>
              <p className="font-label-md text-label-md text-on-surface-variant">Quality Standards</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="text-white h-8 w-8" />
        </div>
      </section>

      {/* About Us */}
      <section className="py-section-gap px-6 md:px-margin-desktop bg-white overflow-hidden" id="about">
        <div className="max-w-[1440px] mx-auto">

          {/* Two-column: image + intro text */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] md:h-[580px]">
                <img
                  className="w-full h-full object-cover"
                  alt="Premium spinning mill factory floor with clean machinery rows in Dhrangadhra, Gujarat"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMgYEV--M5mKL5fYIX0x8sy2Znz6Hv8W_BQ40oNPCyE1WTmY7fADhEjGoFdRk5ZK0s4gNfSRYODHZ-39SnK0FedNV12x7zwzHkcGODX1lw_jizE5MQGdqPyq8Xa0mxloPKyP6O2niy7J4Qbs731GA8p5YFeGj93O7amfr7kK41j5rS6P5Qg0IwVMw4jD8i4wjI5J2pnJoaMKavYhV4vCdXQFovuabIFoJPnveiQjI_ZvjwpJ1RpbtO"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold-accent rounded-3xl -z-10 opacity-20"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <span className="text-gold-accent font-bold tracking-widest uppercase mb-4 block text-sm">Legacy of Quality</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-7 leading-tight">
                A modern spinning mill built on technology, precision, and trust.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Smruti Spintex Pvt. Ltd. is a next-generation cotton spinning enterprise located in Dhrangadhra, the heart of Gujarat's premium cotton belt. We integrate advanced level machinery with rigorous process control and a deeply experienced management team. Our mission is to manufacture consistent, export-grade cotton yarn tailored for the global weaving, knitting, and specialty textile industries.
              </p>
            </motion.div>
          </div>

          {/* 4 Core Pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20"
          >
            {[
              { title: "Global Reliability", desc: "Trusted export-quality yarn standards.", icon: Globe },
              { title: "Latest Technology", desc: "Powered by world-class machinery.", icon: Cpu },
              { title: "Quality Manufacturing", desc: "100% online defect-monitoring systems.", icon: ShieldCheck },
              { title: "Experienced Team", desc: "Backed by textile industry veterans.", icon: Users }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 md:p-8 text-center group hover:bg-primary hover:border-primary transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-colors duration-300">
                  <pillar.icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-primary group-hover:text-white mb-2 transition-colors duration-300 text-sm md:text-base">{pillar.title}</h4>
                <p className="text-xs md:text-sm text-on-surface-variant group-hover:text-white/80 transition-colors duration-300 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Company Timeline */}
          <div className="mb-20">
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-10 text-center">Our Journey</h3>
            <div className="relative pl-8 max-w-2xl mx-auto">
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-surface-container-high"></div>
              <div className="space-y-10">
                {timelineMilestones.map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <div className={`w-4 h-4 rounded-full ${milestone.color} flex-shrink-0 z-10 border-2 border-white shadow-lg mt-1.5`}></div>
                    <div>
                      <span className="text-xs font-bold tracking-widest uppercase text-gold-accent mb-1 block">{milestone.label}</span>
                      <h4 className="font-bold text-primary text-lg mb-1">{milestone.heading}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{milestone.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <Eye className="h-10 w-10 text-gold-accent mb-6" />
              <h3 className="font-headline-md text-headline-md font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-white/85 leading-relaxed text-base md:text-lg">
                "To be a globally recognized benchmark in textile spinning, delivering premium-grade yarn through sustainable and innovative manufacturing practices."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-gold-accent/10 border-2 border-gold-accent/30 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <Target className="h-10 w-10 text-gold-accent mb-6" />
              <h3 className="font-headline-md text-headline-md font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                "To empower global fabric manufacturers with consistent yarn quality, competitive efficiency, and transparent long-term partnerships."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Why Smruti Spintex</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Commitment to excellence at every stage of production ensures our partners receive only the finest textile inputs.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
          >
            {[
              { title: "Advanced Tech", desc: "Equipped with the latest machinery from global leaders like Rieter and LMW.", icon: Cpu },
              { title: "Skilled Workforce", desc: "Highly trained professionals managing precision operations around the clock.", icon: Users },
              { title: "Yarn Quality", desc: "Superior strength, low imperfection, and consistent hairiness parameters.", icon: Award },
              { title: "Infrastructure", desc: "Vast manufacturing floors with temperature-controlled environments for optimal fiber.", icon: Building2 },
              { title: "Ethical Mfg", desc: "Following fair labor practices and high safety standards for all employees.", icon: Handshake },
              { title: "Timely Delivery", desc: "Robust logistics network ensuring on-time delivery across domestic and global ports.", icon: Truck }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 group transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4 font-bold">{item.title}</h3>
                <p className="text-on-surface-variant">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-section-gap px-6 md:px-margin-desktop bg-industrial-blue text-white" id="infrastructure">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-gold-accent font-bold tracking-widest uppercase mb-4 block text-sm">Core Strength</span>
              <h2 className="font-headline-lg text-headline-lg text-white mb-4">Our Infrastructure</h2>
            </div>
            <p className="text-on-primary-container max-w-md md:text-right opacity-80 text-sm md:text-base">
              Leveraging cutting-edge European technology to process premium Shankar-6 cotton into high-quality yarn.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"
          >
            {[
              { title: "Blow Room", desc: "Advanced lint cleaning and automated bale openers for optimal fiber opening.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_fvkSIBYjO3-3hCKJzm-TcWUfkD4kan5cSYj8BLA18AdI_sqCIkiWoO9udNae3HrAy7L-6169DXQpCGHlMSIyxS7etYMNyS09qg80XQUUBeIMgzXpvU-BnqIzym6hY_PLBn5mKETMOOjGwQB2Rzt0wMel-H9DeXZJOEktkwdaUXt3XGsDlXK1MhCB-KSvNAen5H-cHxQD-PLCKiaFTPFmScX1Z3AH7fBxkoOE01BuTQphfaDqx_I1" },
              { title: "Carding", desc: "High-production cards ensuring uniform fiber orientation and neps reduction.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3_4yJByNiNtYGdvIG7Llc83_SmjqGt7e9k-0jb-m8RsHxbhBeDojI3IkVg8J1wHfXGbX-N83BWdM2Kvmy2KSjmk2GDr_Dom98WIFv7UUvwpAxSfk9Uf2GiZ_KYuFl2zgpgtcGnN52zAP11sUSdbz75pGPOoalexDwV0pjkJ1F_i26Jyf10vcjgzIixoq7Q9rb0hjBLbIMleXFI4jhUsFL8_dG_cSNQfgj5s630WMemdKZU9khrdZpO" },
              { title: "Ring Frame", desc: "Long frame ring spinning for superior twist consistency and yarn strength.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqcVfi6Z1HwA7Rv214A3cHajRs6b-gg9QBnCZZFz_U0WLusRPhyi6aVzE69dfC1P3jHmdlBv7bkTw795Uy-fnXdiSfvy1se0hajt6f_O5eXMmA7v9WN0exAKRF5t5RqOAugpA1zYOeg4upY30zNwnsXx86dmXU-9qKuFyuQ7xaTjMRwLQ-HD55JctEAzPg_8gIfYFbY7MaCyrtMnYEc-ExxntpZMwIu9U0oWC0pxQZA8civaRKdb4K" },
              { title: "Quality Lab", desc: "USTECH and Premier testing equipment for 24/7 monitoring of yarn parameters.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtStwwGmBUStSOG7I4X1wGGG3-9lr_dQTZY0P-M4RI_PKMTGokO24PZHcCeZf4dtPZEuw_cmyKnzKXjt60zGpR_IpZXOtiMuPzftYoDJ7fbcorg-2N4M8qHRILQbVcukdsviz3-ZDxT5tLKlCxBUNG_ELVY5pwhyfezSjxtEWf-oFvUoMDiJfNsiFwC70fAyJY78E9KgE_p_8Uvte3fUhllBhZLDUgZDUGIPhRfp_2uLl2F0tthB9N" },
              { title: "Auto Coner", desc: "Automatic winding with high-speed splicing for knotless, premium yarn packages.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHfdro0umCWTZ1qPisyaiXPfY6Ovzjii_XRFKp9fWDFLCVkKlJHD28En_S9Q1Wb7ngMjC_5vL3x7pJhtHtJS47u8x04uS93WiEQCQSxaegcGVLwFY08omrtrS3cKcGbzZ41YbPxg8yWfi9atsnt8qnm-jSB_lydVzgrcV3yQWSGz6VD_Khr56kzhzfjKvCPXS66RlPCk_YkfQh38GK0TrcePzHpLsnUw7TwES7Iw2ajunp882OCstM" },
              { title: "Combing", desc: "Precision combing to remove short fibers and impurities for luxury-grade yarn.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1S4Dt0rszZIexB_pLKDc6wZY_iFVYkSQG7v_8zJwAifj-cX2AfIsF4Vo_egngBw8jG1B8FVTdUBYz17pqeQ1ioMSYAixntaaZM_K6EEIwAGjbc3LQZglvVgdaGn9OQL6SWF8g8kNU7Sf9yANha6aLXTVHpELdjzGrZOX3HcGGj-HOolVFbdmqE_c2yA2ZBmrBTrpknnz_9ggQZcaMpxpeP1UWn4n_OINFuzQeFmCq92S77lsRECAX" }
            ].map((infra, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative shadow-md">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={infra.title}
                    src={infra.img}
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold mb-2 text-white">{infra.title}</h3>
                <p className="text-on-primary-container text-sm leading-relaxed opacity-85">{infra.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-section-gap overflow-hidden bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-margin-desktop mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary">Manufacturing Process</h2>
          <div className="w-24 h-1.5 bg-gold-accent mt-4"></div>
        </div>
        <div className="relative overflow-x-auto no-scrollbar pb-10">
          <div className="flex px-6 md:px-margin-desktop min-w-[2200px] relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-high -z-10 translate-y-[-50%]"></div>
            {[
              { id: 1, title: "Cotton Procurement", desc: "Sourcing best quality Shankar-6 and other premium cotton bales." },
              { id: 2, title: "Cleaning", desc: "Automated removal of foreign matters and trash." },
              { id: 3, title: "Carding", desc: "Fiber individualization and dust extraction." },
              { id: 4, title: "Drawing", desc: "Improving sliver uniformity and parallelization." },
              { id: 5, title: "Combing", desc: "Removal of short fibers for superior strength." },
              { id: 6, title: "Spinning", desc: "Converting roving into high-quality yarn cones." },
              { id: 7, title: "Winding", desc: "Packaging yarn onto cones with knotless splicing." },
              { id: 8, title: "Quality Check", desc: "Rigorous lab testing for every batch." },
              { id: 9, title: "Packing", desc: "Moisture controlled palletizing for transport." },
              { id: 10, title: "Dispatch", desc: "Global shipping to textile hubs worldwide." }
            ].map((step) => (
              <div key={step.id} className="flex-shrink-0 w-64 text-center group">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 font-bold cursor-pointer hover:shadow-lg transition-shadow"
                >
                  {step.id}
                </motion.div>
                <h4 className="font-bold text-primary mb-2 px-4">{step.title}</h4>
                <p className="text-xs text-on-surface-variant px-6 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-lowest" id="products">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4 font-bold">Our Premium Yarn Products</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Engineered for diverse textile applications from high-fashion apparel to industrial fabrics.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "100% Cotton", tag: "Export Ready", count: "20s - 40s", proc: "Combed", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApIDGVQXyEbbzRtn7WTmnYbxZh-EnCb3QlvYpgStE4Cyml2BFFyflq1w2d5W_NjkcPRszUc_3nuysCiUjB4ZhISYAMBMJGA_wejBtv1yMy2zwh91I0O_wBC4dLmaTj_0Hsld9eOOGXEQw3CMlS_EYP1c9ntpCe4pTjNMe7MbicpQOtYCPDBwosUGgt7U_Kl8mtAju4TwtniPdFaphOVWOBtKLHwQCbvKblTDrq8Yp4crYNHONivi1v" },
              { title: "Carded Yarn", tag: "Best Seller", count: "16s - 34s", proc: "Carded", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARAqW21TjWZBZRZGLntnNis1MV7x8Y8T4Cs_AQCb6bcIBrTAozCP0f6OBaByLwiXOv343dpZ5mNhm7r57FDNiUDeE3OpQnqpVj7cfiX-orFUkXfuztx-7aMxTubCDveIvfOfnAKUXkokX-Lz9W4bX9I31Tmksrwjj66QlO1sE-WI8NokxnbmRFQgBunvWYiM44AA9jTW70PwwMoqSM80iONJ0bNwHTWV2uWptJ8HryChLKtVv_bCkJ" },
              { title: "Compact Yarn", tag: "Premium", count: "30s - 60s", proc: "K-Compact", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCgm4r7KvZh1ku3oysQZZuwT2etYeKL2X-9jHyyIuj6utrEmHCoaYFY9JfHUaJewHEB5zKHhDQh8aY62Kg2_j2D66W0R05R_CoJiWc9-WaLY0sSIs2e-zNTFbp2sebOwQC2n0toWS5S5DgIWaUEHaWIUxb3xdjoOqlsFe0O47_1-9P16Z3_wEq8_uwTdqLeVZXte0hZk1C-dYivwawnIWxdZU9NjGDuhGdpQaphcy24owMaC2SbQA0" },
              { title: "Organic Combed", tag: "Sustainable", count: "24s - 40s", proc: "GOTS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7Pi8roH8CQwZNo3mpIjJByXeXQEyfNbnx61if_-NkmkL4OHnDXYJyK0zW5pbbjEJ06XVUoPBzapN4qrlIiu6HGc9giL4GaTrJtfYZTSU97p0NynroVbORZZv4pXsuU0mk46IfVzJTNtE0nFOATWcygRr3fDspHkCNGXiXTGVd9VIouN-MIoqFt05dz8oeCLbVEdooYT6hPlALUkg_iIeY6PWkHpfiE8q0tnWF26ohMt1OPj1W0J92" }
            ].map((prod, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-black/5 transition-all duration-300"
              >
                <div className="h-64 relative">
                  <img className="w-full h-full object-cover" alt={prod.title} src={prod.img} />
                  <span className="absolute top-4 right-4 bg-primary text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-md">
                    {prod.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-headline-md text-[20px] font-bold text-primary mb-4">{prod.title}</h3>
                  <table className="w-full text-sm text-on-surface-variant border-t border-black/5">
                    <tbody>
                      <tr className="border-b border-black/5">
                        <td className="py-3 text-on-surface-variant/80 font-medium">Count Range</td>
                        <td className="py-3 font-bold text-right text-primary">{prod.count}</td>
                      </tr>
                      <tr className="border-b border-black/5">
                        <td className="py-3 text-on-surface-variant/80 font-medium">Process</td>
                        <td className="py-3 font-bold text-right text-primary">{prod.proc}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability & Quality */}
      <section className="py-section-gap" id="sustainability">
        <div className="grid md:grid-cols-2 max-w-[1920px] mx-auto">
          <div className="relative min-h-[500px] flex items-center px-6 md:px-margin-desktop py-12 bg-primary text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-35"
                alt="Solar panels on the factory roof"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF2Ht7BEc81OG_qZoMy62HU1kV1s2_Agrf7HtzgN-D4Djd6JbWxqbr2xuPbKD7eyeasLiJM8V6mrZWLRR8QNRWnBzAJtMtg4uYZ7Zk7GwzcB5JPXikoWmSb8iQ_j-n_-79fcp_mSy3sGSD90eqp_0fTK0pke4XXap1uSFcBOaGw5LWmfyQT9xekPpfyu7Di-JpjW1LTZg-kE4BXdxdaga9cp8GjqB5zYUHFRUGhAt_MphSc36PQ1gR"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-lg"
            >
              <h2 className="font-headline-lg text-headline-lg text-white mb-6 font-bold">Sustainability</h2>
              <p className="font-body-lg text-body-lg mb-8 leading-relaxed opacity-90">
                We are committed to reducing our carbon footprint through solar energy integration and zero-waste water management systems. Every cone of yarn is produced with respect for our planet.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><ShieldCheck className="text-gold-accent h-5 w-5 flex-shrink-0" /> Solar Powered Plant</li>
                <li className="flex items-center gap-3"><ShieldCheck className="text-gold-accent h-5 w-5 flex-shrink-0" /> Recycled Packaging</li>
                <li className="flex items-center gap-3"><ShieldCheck className="text-gold-accent h-5 w-5 flex-shrink-0" /> Effluent Treatment System</li>
              </ul>
            </motion.div>
          </div>
          <div className="relative min-h-[500px] flex items-center px-6 md:px-margin-desktop py-12 bg-surface-container-low overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-25"
                alt="Technician testing yarn quality with sensors"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvNXI4qG1sWRB8fJJ0-wxVacd_YXmuaSJgJWmtDjtmXmaSZdgPBY7Zq_WLi_0r7s9TUAuLutRjI-HS5oVM4bJ3ZXi8M4A8XzRsucWeuXWalUzntxUcaC9Bg2sIe12gr5khCKELn03NgzmKBEBLUjY0-lVr56AFOa7RsVi4yl5PWVYmorH9bvMydv838Ivx5TQTvpJBt5JFENCRVDIL6lT_IvNim-ECjA8ot94fykwrTFe67JQP8DG4"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-lg"
            >
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6 font-bold">Uncompromising Quality</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Our in-house quality assurance center operates 24/7, testing every single spindle's output to ensure it meets the stringent global benchmarks for textile manufacturing.
              </p>
              <ul className="space-y-4 text-on-surface-variant font-bold">
                <li className="flex items-center gap-3"><FlaskConical className="text-primary h-5 w-5 flex-shrink-0" /> ISO 9001:2015 Certified</li>
                <li className="flex items-center gap-3"><FlaskConical className="text-primary h-5 w-5 flex-shrink-0" /> Oeko-Tex Standard 100</li>
                <li className="flex items-center gap-3"><FlaskConical className="text-primary h-5 w-5 flex-shrink-0" /> High-Precision Lab Testing</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facts & Figures */}
      <section className="py-24 bg-white px-6 md:px-margin-desktop border-y border-black/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-gold-accent font-display-lg text-[48px] md:text-[56px] font-bold leading-tight">16,416</p>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Spindles</p>
          </div>
          <div>
            <p className="text-gold-accent font-display-lg text-[48px] md:text-[56px] font-bold leading-tight">5,150+</p>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">MT / Year</p>
          </div>
          <div>
            <p className="text-gold-accent font-display-lg text-[48px] md:text-[56px] font-bold leading-tight">2021</p>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Incorporated</p>
          </div>
          <div>
            <p className="text-gold-accent font-display-lg text-[48px] md:text-[56px] font-bold leading-tight">100%</p>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Online QC</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-section-gap px-6 md:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Visual Tour</h2>
            <button className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors cursor-pointer">
              View Full Gallery
            </button>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { delay: 0, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_NcbLfZDo57SJT7MAiROYsTHVgKbLxYYZ9Tk0aiwg2gnqLidkjA03m6f-bVKW2uOoB0zOCg4WEHr7-aVrvfvaMc49QFsFB7UZpehh2GDbkX15dgP5OiGd-pI1KIoLEDui4qHLPSc_u1aEafD3jouzkunC4Zyk0MS90bofXbrs4CZ01WCde3TOOzBKcb6fOiqbzgh0FekZdGxx6_4fzppjPtKkbbVFhojdzbvjuIQhL5DVcy-fj7jm", alt: "Factory exterior lighting" },
              { delay: 100, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHKFUk1cHZFJsIXrltTYCS7UzHMfGB7cQcIKyLo4kg6lQp45ZZ_gvuv9mxjSCHKEgnSLGDxXRBTeGKpNfLP2N_Nfyyo4MOqNwtWQ29Et9yLUqoXSHGqOS-zAm3k5rQNLGmjKr7N2as6vyMkvOWKH1tr8w7IY_fT-ZGuSOEEty7oQp26WwRr9Q_0RHLN2vVOvP_6wa8glIzi1xfdpNkLjKkebvqULWge2YZIASiSI6vQVd3i8GMSfN0", alt: "Workers in uniform spinning machine interaction" },
              { delay: 200, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcJ08IrSGQsUTK3eRPjmeNroEf0eMqxKwUKRosa0Vg80clHwT8_BZqDv3GgWZ84xorKgvPj1fTRFieAT8zgMUlJ_A6jY3rcE8LE9vHCmIFhPi2WZBTvs4MnGwhc1msMKndQe4G44W17Q5G7g1eAyAsTOxyhFoE9dkh0bs1tqBLC1WQkl1f2elc0AgQQR2l2oaZPfyWNc2vxL2mEZbopbNvRWnOCsZ-tzCH0iaBUZ3pn9Usmj6z7ofk", alt: "Pallet of yarn cones packaged for export" },
              { delay: 150, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-2XdnlNZZHCsTyiSMmPFlHb-gEkzVL8jzNOST5TPpjZKHjRZhb2iO44gI_lEQ_9ycni2ew_n9aw7ZkiJ4qPIq_ksL217RFVDNBcwC98xu6Pgv8BcAZbU7T9tfr9Rn08UP1htir7mZLyM1Ftm7MOahJtkT1KoGetxR8IurwB0F0lDHGVUuII5PR_q0j6MmRPkBBneuMCZv93Fhlu_EV4sWn0wEz-5uUST6PGTr0-u2NzzMoN_bX6_Q", alt: "Luminous manufacturing floor perspective" },
              { delay: 250, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0IHSwxIPYc-xmHZa_ZJyhHyb6du9rparAClA6HciU2ZXoAwnKBLqQSlZJtPrsafduoUj_khz9KpTEf6dDJWnuat4h8Sy4lPnOBV224T_hesBhIbWrsMv_EqgnHHyTqantp1xaAj4Ab30RNGECYL0qNela0x5yiG8FtvxADGfPTf1_lAWgPOnOAteaPQPpe5NO4vI7-Xxuxk5BCsdkCCOvFOsBpAZK4SjHrzEZMi-85gulHtpIWV0G", alt: "Microscope quality control inspect" },
              { delay: 350, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD65X3XbfFJQZzPlOKJfhhhPvxZHB6fWxnp3w8El7uRBogo5zjJmHeWt0vOgX9XPRUNHhu-48HQZfXX2E7XBsDjd_biw5H2b8tdzN5VER3zOIfTakD3_iowXSNnWJf775DB1GcenizAcAjOknhTlm2EqEPUFVZCqC625kFIljiSF-vFYAfQ-UW3Uug0_Uqwl9Y5Cm5SWRBHkbDuDa1RfccDKtiZ3Nah3TBIJ9Uc2kcyKVfmQ3vUXyBA", alt: "Raw cotton bale storage room" }
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: photo.delay / 1000 }}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <img
                  className="w-full hover:scale-105 transition-transform duration-500 cursor-pointer object-cover"
                  alt={photo.alt}
                  src={photo.img}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 mx-6 md:mx-margin-desktop rounded-[40px] overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            alt="Glowing steel and fiber background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8CBnQevoupmLfM_w9eR2Jr9jz3-Dw2K1FzkOi4nDAhlKK3xLZqLOLv4PmKG7P8NZUcL9c1hTUCReLvr0UXnDI3IdsP4hk4sBbuzPqHj_tJ77D2njcvjYsT_YXOY8oUCz_t3r4A9RXK7G2AzerLZwDdeB94Ese7XP1ifQbTQpwgA6-MWQx_bafV5VaIyJ6MJcP3Eu1WU90knZ0JaeWMxOn3-dM0oBGB9vxW3jXXgS66bDxJxCrYgBX"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 text-center px-6 md:px-10 max-w-4xl mx-auto">
          <h2 className="font-display-lg text-[28px] md:text-display-lg text-white mb-6 font-bold leading-tight">
            Ready to Experience Spinning Excellence?
          </h2>
          <p className="font-body-lg text-body-lg text-white/80 mb-10">
            Partner with Smruti Spintex for high-grade yarn solutions tailored to your specific textile requirements.
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-gold-accent text-primary px-10 md:px-12 py-5 rounded-full font-label-md text-label-md font-bold hover:scale-105 transition-transform shadow-2xl cursor-pointer"
          >
            Start Your Inquiry
          </button>
        </div>
      </section>

      {/* Contact */}
      <section className="py-section-gap px-6 md:px-margin-desktop" id="contact">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start max-w-[1440px] mx-auto">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8 font-bold">Get In Touch</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Registered Office &amp; Factory Plant</h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                    LS No 1279/P2/P2, 1280, 1557/P217, 1557/P218,<br />
                    Near Kuda Road, Opposite Bala Hanuman,<br />
                    Dhrangadhra, Surendranagar District,<br />
                    Gujarat, India — 363310
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Corporate Email</h4>
                  <a
                    href="mailto:ptpatel.smrutispintex@gmail.com"
                    className="text-on-surface-variant hover:text-secondary transition-colors"
                  >
                    ptpatel.smrutispintex@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-12 rounded-3xl overflow-hidden h-64 shadow-lg border border-black/5 bg-surface-container-high flex items-center justify-center relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvNXI4qG1sWRB8fJJ0-wxVacd_YXmuaSJgJWmtDjtmXmaSZdgPBY7Zq_WLi_0r7s9TUAuLutRjI-HS5oVM4bJ3ZXi8M4A8XzRsucWeuXWalUzntxUcaC9Bg2sIe12gr5khCKELn03NgzmKBEBLUjY0-lVr56AFOa7RsVi4yl5PWVYmorH9bvMydv838Ivx5TQTvpJBt5JFENCRVDIL6lT_IvNim-ECjA8ot94fykwrTFe67JQP8DG4')" }}
              ></div>
              <div className="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-2xl max-w-xs shadow-md border border-white/20">
                <h5 className="font-bold text-primary mb-1">Dhrangadhra, Gujarat</h5>
                <p className="text-xs text-on-surface-variant">Surendranagar District — Gujarat's premium cotton belt</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-14 rounded-[40px] shadow-2xl">
            <h3 className="font-headline-md text-headline-md text-primary mb-8 font-bold">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Your Name</label>
                  <input
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-[#FAFAF8] border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                  <input
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-[#FAFAF8] border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Subject</label>
                <select
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full bg-[#FAFAF8] border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                >
                  <option>Product Inquiry</option>
                  <option>Export Quotation</option>
                  <option>Technical Specifications</option>
                  <option>General Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Your Message</label>
                <textarea
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full bg-[#FAFAF8] border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                  placeholder="How can we help you today?"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-industrial-blue text-white py-5 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                {isSubmitted ? (
                  <><Check className="h-5 w-5" /> Message Sent Successfully</>
                ) : (
                  <>Send Inquiry <Send className="h-4 w-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-on-primary w-full pt-20 pb-8 px-6 md:px-margin-desktop flex flex-col border-t border-white/10">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-sm">
            <Logo className="mb-6 brightness-0 invert" invert={true} />
            <p className="text-surface-variant/70 mb-4 font-body-md leading-relaxed text-sm">
              Pioneering the future of the textile industry with sustainable practices and engineering excellence in every thread we spin.
            </p>
            <p className="text-surface-variant/50 text-xs mb-8 leading-relaxed">
              CIN: U17299GJ2021PTC120364<br />
              LS No 1279/P2/P2, 1280, 1557/P217, 1557/P218,<br />
              Near Kuda Road, Opposite Bala Hanuman,<br />
              Dhrangadhra, Surendranagar, Gujarat — 363310
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-accent hover:text-primary transition-colors text-white" href="#" aria-label="Share">
                <Share2 className="h-4 w-4" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-accent hover:text-primary transition-colors text-white" href="#" aria-label="Network">
                <Network className="h-4 w-4" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-accent hover:text-primary transition-colors text-white" href="#" aria-label="Website">
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="font-headline-md text-headline-md text-white mb-6 font-bold">Quick Links</h4>
              <ul className="space-y-4 font-body-md">
                <li><a className="text-surface-variant/70 hover:text-white transition-colors" href="#infrastructure">Infrastructure</a></li>
                <li><a className="text-surface-variant/70 hover:text-white transition-colors" href="#products">Products</a></li>
                <li><a className="text-surface-variant/70 hover:text-white transition-colors" href="#sustainability">Sustainability</a></li>
                <li><a className="text-surface-variant/70 hover:text-white transition-colors" href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-white mb-6 font-bold">Support</h4>
              <ul className="space-y-4 font-body-md">
                <li><a className="text-surface-variant/70 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="text-surface-variant/70 hover:text-white transition-colors" href="#">Terms of Service</a></li>
                <li><a className="text-surface-variant/70 hover:text-white transition-colors" href="#">Compliance</a></li>
                <li><a className="text-surface-variant/70 hover:text-white transition-colors" href="#">Global Export</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-surface-variant/50">
          <div>
            <p>© 2026 Smruti Spintex Private Limited. All rights reserved.</p>
            <p className="mt-1">CIN: U17299GJ2021PTC120364 | RoC: Ahmedabad, Gujarat</p>
          </div>
          <div className="flex gap-8">
            <a className="hover:text-white" href="#">CSR Policy</a>
            <a className="hover:text-white" href="#">Downloads</a>
            <a className="hover:text-white" href="#">Careers</a>
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 22 }}
              className="bg-white rounded-[40px] shadow-2xl max-w-lg w-full overflow-hidden border border-outline-variant/30 relative p-8 md:p-12"
            >
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-on-surface-variant hover:text-secondary cursor-pointer"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="font-headline-lg text-3xl text-primary mb-2 font-bold">Request a Quotation</h3>
              <p className="text-on-surface-variant text-sm mb-8">
                Submit details regarding yarn specifications, count, quantity, and packaging instructions. Our export team will connect with you.
              </p>
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Corporate Name</label>
                  <input
                    required
                    className="w-full bg-[#FAFAF8] border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    placeholder="Enter full name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Business Email</label>
                  <input
                    required
                    className="w-full bg-[#FAFAF8] border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    placeholder="enter@company.com"
                    type="email"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Yarn Count</label>
                    <select className="w-full bg-[#FAFAF8] border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all">
                      <option>100% Cotton (20s-40s)</option>
                      <option>Carded Yarn (16s-34s)</option>
                      <option>Compact Yarn (30s-60s)</option>
                      <option>Organic Combed (24s-40s)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Order Quantity (t)</label>
                    <input
                      required
                      className="w-full bg-[#FAFAF8] border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="e.g. 10"
                      type="number"
                      min="1"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-industrial-blue text-white py-5 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  {isSubmitted ? <Check className="h-5 w-5" /> : "Request Custom Quotation"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
