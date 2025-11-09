import React from 'react';
import { ExternalLink, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Dr. Hitesh K. Patel',
    role: 'Value Investor & Mentor',
    image:
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop',
    bio:
      'Over two decades of successful investing experience. A doctor-turned-value investor advocating simple, uncluttered, and no-nonsense principles focused on long-term wealth creation.',
    links: [
      { label: 'Mentor Profile', href: 'https://forum.valuepickr.com/t/hitesh-patel-our-simple-uncluttered-no-nonsense-mentor/33071', icon: ExternalLink },
      { label: 'Economic Times Article', href: 'https://economictimes.indiatimes.com/markets/stocks/news/gujju-doctor-turns-value-investor-after-reading-buffett-lynch-makes-a-killing/articleshow/62334723.cms', icon: ExternalLink },
    ],
  },
  {
    name: 'Kishore Gidwani',
    role: 'Mutual Fund Industry Veteran & Author',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    bio:
      'Seasoned financial services professional with three decades in mutual funds. Former Regional Head (Gujarat) at HDFC AMC. Author of "Know Your Mutual Fund" and a passionate financial educator.',
    links: [
      { label: 'LinkedIn', href: 'https://in.linkedin.com/in/kishore-gidwani-15095436', icon: Linkedin },
      { label: 'Book on Amazon', href: 'https://www.amazon.in/dp/B098LQ2PXR', icon: ExternalLink },
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our Team</h2>
          <p className="mt-3 text-slate-700">Leaders with deep expertise and a passion for investor education.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="md:flex">
                <img src={member.image} alt={member.name} className="h-56 w-full md:w-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-slate-700">{member.role}</p>
                  <p className="mt-3 text-slate-700 text-sm leading-relaxed">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {member.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100">
                        <link.icon size={16} /> {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
