import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium tracking-wide text-slate-900 shadow">
            AMFI Registered Distributor — ARN-184156
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Upright Investor Services LLP
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700 italic">When you come to Upright, you've got it Right!</p>
          <p className="mt-4 text-slate-700 max-w-xl">Trusted guidance in Mutual Funds and General Insurance. We focus on fundamentals, patience, and discipline to help you build long-term wealth with clarity and confidence.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-slate-800">Explore Services</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white/80 backdrop-blur text-slate-900 px-5 py-2.5 text-sm font-medium shadow hover:bg-white">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom to improve text contrast; allow pointer events to pass through */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
