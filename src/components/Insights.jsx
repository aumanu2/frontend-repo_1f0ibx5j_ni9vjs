import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function Insights() {
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Publications & Insights</h2>
          <p className="mt-3 text-slate-700">Thought leadership from our founders — articles, books, and community contributions.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kishore's Book */}
          <article className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow"><BookOpen size={22} /></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Know Your Mutual Fund</h3>
                <p className="text-sm text-slate-700">Top 101 Uncommon and Common Questions on Mutual Funds (2021) by Kishore Gidwani — a practical guide for retail investors.</p>
                <a href="https://www.amazon.in/dp/B098LQ2PXR" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-slate-900 hover:underline">
                  Buy on Amazon <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </article>

          {/* Hitesh's Articles */}
          <article className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Dr. Hitesh K. Patel — Featured</h3>
                <p className="text-sm text-slate-700">Doctor-turned-value investor featured for his no-nonsense approach to wealth creation.</p>
                <a href="https://economictimes.indiatimes.com/markets/stocks/news/gujju-doctor-turns-value-investor-after-reading-buffett-lynch-makes-a-killing/articleshow/62334723.cms" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-slate-900 hover:underline">
                  Read in The Economic Times <ExternalLink size={16} />
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-700">Active mentor and contributor sharing insights on long-term investing.</p>
                <a href="https://forum.valuepickr.com/t/hitesh-patel-our-simple-uncluttered-no-nonsense-mentor/33071" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-900 hover:underline">
                  ValuePickr Mentor Profile <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
