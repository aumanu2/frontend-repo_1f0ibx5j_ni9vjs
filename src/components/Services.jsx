import React from 'react';
import { ShieldCheck, LineChart, Wallet } from 'lucide-react';

const services = [
  {
    icon: LineChart,
    title: 'Mutual Funds',
    description:
      'Goal-based planning, SIPs, and diversified portfolios with a focus on quality, consistency, and long-term wealth creation.',
  },
  {
    icon: ShieldCheck,
    title: 'General Insurance',
    description:
      'Health, motor, and term coverage recommendations to protect your family and assets with the right level of cover.',
  },
  {
    icon: Wallet,
    title: 'Investor Mentorship',
    description:
      'Simple, uncluttered, and no-nonsense investing guidance inspired by the ideas of Warren Buffett and Peter Lynch.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-700">
            We act as your reliable financial guide — from planning and investing to protection and peace of mind.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-700 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
