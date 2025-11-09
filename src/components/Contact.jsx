import React from 'react';
import { Mail, Phone, MapPinned, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Get in Touch</h2>
            <p className="mt-3 text-slate-700">We’d love to understand your goals and help you plan the journey.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p className="flex items-center gap-2"><MapPinned size={18}/> 508 Vihav Supremus, Gotri Main Road, Vadodara 390021</p>
              <p className="flex items-center gap-2"><Mail size={18}/> <a href="mailto:uprightmutual@gmail.com" className="hover:underline">uprightmutual@gmail.com</a></p>
              <p className="flex items-center gap-2"><Phone size={18}/> <a href="tel:+919879565591" className="hover:underline">+91 98795 65591</a></p>
            </div>

            <div className="mt-6 h-64 w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <iframe
                title="Upright Investor Services Location"
                src="https://www.google.com/maps?q=Vihav%20Supremus%2C%20Gotri%20Main%20Road%2C%20Vadodara&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Send us a message</h3>
            <form className="mt-4 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
              <input name="name" type="text" required placeholder="Your Name" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <input name="email" type="email" required placeholder="Email Address" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <input name="phone" type="tel" placeholder="Phone Number" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <textarea name="message" rows="5" required placeholder="How can we help you?" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"></textarea>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-white text-sm font-medium shadow hover:bg-slate-800">
                <Send size={16}/> Send Inquiry
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">By submitting, you agree to be contacted for service-related information.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
