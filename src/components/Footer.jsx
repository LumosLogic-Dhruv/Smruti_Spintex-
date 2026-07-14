import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-4 md:px-margin-desktop py-16 max-w-container-max mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <div className="font-headline-md text-headline-md font-bold text-on-primary-container uppercase tracking-tight">
            Smruti Spintex Pvt Ltd
          </div>
          <p className="font-body-md text-body-md opacity-80 max-w-xs leading-relaxed">
            Pioneering precision spinning in Gujarat. Committed to engineering excellence from cotton to clothes.
          </p>
          <p className="text-xs opacity-60 leading-relaxed">
            CIN: U17299GJ2021PTC120364
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-on-primary-container" href="#" aria-label="Share">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-on-primary-container" href="#" aria-label="Website">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-body-lg font-bold text-on-primary-container mb-6">Useful Links</h4>
          <ul className="space-y-3 font-body-md text-body-md text-on-primary-container/80">
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Products', to: '/products' },
              { label: 'Quality Assurance', to: '/quality' },
              { label: 'Our Story', to: '/our-story' },
            ].map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="hover:text-tertiary-fixed transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-body-lg font-bold text-on-primary-container mb-6">Contact Us</h4>
          <div className="space-y-4 font-body-md text-body-md text-on-primary-container/80">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-tertiary-fixed shrink-0 text-[20px]">location_on</span>
              <span>LS No 1279/P2/P2, 1280, 1557/P217, 1557/P218, Near Kuda Road, Opposite Bala Hanuman, Dhrangadhra, Surendranagar District, Gujarat, India — 363310</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary-fixed shrink-0 text-[20px]">mail</span>
              <a href="mailto:ptpatel.smrutispintex@gmail.com" className="hover:text-tertiary-fixed transition-colors">
                ptpatel.smrutispintex@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary-fixed shrink-0 text-[20px]">schedule</span>
              <span>Mon – Sat: 09:00 AM – 06:00 PM IST</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 md:px-margin-desktop py-8 max-w-container-max mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center font-label-sm text-label-sm text-on-primary-container/60 gap-4">
        <p>Copyright © 2026 Smruti Spintex Private Limited. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-on-primary-container transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-on-primary-container transition-colors" href="#">Terms of Service</a>
          <Link className="hover:text-on-primary-container transition-colors" to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
