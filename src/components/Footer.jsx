import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Quality Assurance', to: '/quality' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-4 md:px-margin-desktop py-16 max-w-container-max mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <img
            src="/Horizontal%20Logo.svg"
            alt="Smruti Spintex Pvt Ltd"
            className="h-14 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p className="font-body-md text-body-md text-white/75 max-w-xs leading-relaxed">
            Pioneering precision spinning in Gujarat. Committed to engineering excellence from cotton to clothes.
          </p>
          <p className="text-xs text-white/50 leading-relaxed">
            CIN: U17299GJ2021PTC120364
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-headline-md text-headline-md text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="footer-link font-body-md text-body-md text-white/75 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-headline-md text-headline-md text-white mb-6">Contact Us</h4>
          <div className="space-y-4 font-body-md text-body-md text-white/75">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-white/60 shrink-0 text-[20px] mt-0.5">location_on</span>
              <span>LS No 1279/P2/P2, 1280, 1557/P217, 1557/P218, Near Kuda Road, Opposite Bala Hanuman, Dhrangadhra, Surendranagar District, Gujarat, India — 363310</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white/60 shrink-0 text-[20px]">mail</span>
              <a href="mailto:ptpatel.smrutispintex@gmail.com" className="footer-link hover:text-white">
                ptpatel.smrutispintex@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white/60 shrink-0 text-[20px]">schedule</span>
              <span>Mon – Sat: 09:00 AM – 06:00 PM IST</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 md:px-margin-desktop py-6 max-w-container-max mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center font-label-sm text-label-sm text-white/50 gap-3">
        <p>© 2026 Smruti Spintex Private Limited. All Rights Reserved.</p>
        <p className="text-white/30 text-xs">Designed with precision. Built for excellence.</p>
      </div>
    </footer>
  );
}
