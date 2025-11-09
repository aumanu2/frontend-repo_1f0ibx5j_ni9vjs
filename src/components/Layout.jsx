import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top info bar */}
      <div className="w-full bg-slate-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a href="mailto:uprightmutual@gmail.com" className="flex items-center gap-1 opacity-90 hover:opacity-100 transition"><Mail size={16}/> uprightmutual@gmail.com</a>
            <a href="tel:+919879565591" className="hidden sm:flex items-center gap-1 opacity-90 hover:opacity-100 transition"><Phone size={16}/> +91 98795 65591</a>
          </div>
          <div className="flex items-center gap-1 opacity-90"><MapPin size={16}/> Vadodara, Gujarat</div>
        </div>
      </div>

      {/* Sticky navigation */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-slate-900">Upright Investor Services LLP</a>
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="ml-4 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">Contact</a>
        </nav>
      </header>

      <main className="[scroll-behavior:smooth]">{children}</main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-slate-900 font-semibold">Upright Investor Services LLP</h3>
            <p className="mt-2 text-slate-600 italic">“When you come to Upright, you've got it Right!”</p>
            <p className="mt-4 text-slate-600 text-sm">AMFI Registered Distributor — ARN-184156</p>
          </div>
          <div>
            <h4 className="text-slate-900 font-medium">Contact</h4>
            <p className="mt-2 text-slate-600 text-sm">508 Vihav Supremus, Gotri Main Road, Vadodara 390021</p>
            <div className="mt-3 flex flex-col gap-1 text-sm">
              <a href="mailto:uprightmutual@gmail.com" className="text-slate-700 hover:text-slate-900">uprightmutual@gmail.com</a>
              <a href="tel:+919879565591" className="text-slate-700 hover:text-slate-900">+91 98795 65591</a>
            </div>
          </div>
          <div>
            <h4 className="text-slate-900 font-medium">Disclaimer</h4>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">Investments in securities and mutual funds are subject to market risks. Read all scheme related documents carefully. Past performance is not indicative of future returns. Insurance is the subject matter of solicitation.</p>
          </div>
        </div>
        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Upright Investor Services LLP. All rights reserved.</div>
      </footer>
    </div>
  );
}
