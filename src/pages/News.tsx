import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Download, FileText, Newspaper, X } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import { useAnimePageMotion } from '../hooks/useAnimePageMotion';

import hero2 from '../imgs/hero-2.png';
import news1 from '../imgs/news-1.png';
import news2 from '../imgs/news-2.png';
import news3 from '../imgs/news-3.png';
import pillar3 from '../imgs/pillar-3.png';
import gallery1 from '../imgs/gallery-1.png';
import gallery2 from '../imgs/gallery-2.png';
import gallery3 from '../imgs/gallery-3.png';
import gallery4 from '../imgs/gallery-4.png';
import galleryRow2_1 from '../imgs/gallery-row2-1.png';
import galleryRow2_2 from '../imgs/gallery-row2-2.png';

type ViewMode = 'posts' | 'reports';
const PAGE_SIZE = 6;

interface Article {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
}

interface Report {
  id: string;
  type: string;
  date: string;
  title: string;
  desc: string;
  pages: string;
  owner: string;
}

const articles: Article[] = [
  {
    id: 'character-competence',
    category: 'Research',
    date: 'May 7, 2026',
    title: 'Character vs. Competence: Youth Leadership In North-West Cameroon',
    excerpt: 'Investigating the impact of leadership education on secondary students in vocational training environments.',
    image: gallery1,
    body: [
      'The study follows youth leadership behavior across school clubs, mentorship spaces, and vocational training environments.',
      'Early signals show that leadership education works best when practical responsibility is paired with explicit values language.',
      'The next research cycle will compare confidence, ethical decision-making, and peer accountability across participating schools.',
    ],
  },
  {
    id: 'pilot-hubs',
    category: 'Update',
    date: 'April 22, 2026',
    title: 'ACELIE Pilot Programs Expanded To Three New Regional Hubs',
    excerpt: 'Following successful implementation in Kumbo, we are scaling our model leadership schools project.',
    image: news2,
    body: [
      'The expansion brings ACELIE programming closer to schools and community partners already requesting structured leadership formation.',
      'Each hub will adapt the model to local education realities while keeping the same ethics, innovation, and entrepreneurship framework.',
      'Implementation will begin with mentor onboarding, school readiness checks, and community leadership sessions.',
    ],
  },
  {
    id: 'education-plan',
    category: 'Policy',
    date: 'March 15, 2026',
    title: 'Ethical Leadership In The National Education Strategic Plan',
    excerpt: 'ACELIE presents policy recommendations to the Ministry of Secondary Education in Yaounde.',
    image: pillar3,
    body: [
      'The policy brief recommends leadership education as a measurable civic competency rather than a ceremonial school activity.',
      'Recommendations include teacher preparation, age-specific modules, school clubs, and a national character index pilot.',
      'ACELIE will continue consulting education stakeholders before the next policy submission window.',
    ],
  },
  {
    id: 'mentor-circles',
    category: 'Field Note',
    date: 'February 20, 2026',
    title: 'Mentor Circles Begin Across Partner Schools',
    excerpt: 'Teachers and youth mentors begin structured circles focused on accountability, service, and peer leadership.',
    image: gallery2,
    body: [
      'Mentor circles provide a repeatable structure for conversations around values, responsibility, and local problem-solving.',
      'The first cohort focuses on peer accountability and small leadership assignments within the school week.',
      'Feedback from teachers will shape the next mentor guide revision.',
    ],
  },
  {
    id: 'innovation-labs',
    category: 'Innovation',
    date: 'January 31, 2026',
    title: 'Innovation Labs Connect STEM With Character Formation',
    excerpt: 'ACELIE pilots lab activities that turn technical learning into community-centered solutions.',
    image: gallery3,
    body: [
      'The innovation lab model connects STEM practice to ethical decision-making and local usefulness.',
      'Students are encouraged to frame each technical project around a human problem and a service outcome.',
      'The pilot will document project quality, teamwork, and values language during implementation.',
    ],
  },
  {
    id: 'community-forums',
    category: 'Community',
    date: 'January 12, 2026',
    title: 'Community Forums Shape Regional Leadership Priorities',
    excerpt: 'Local leaders identify civic trust, youth participation, and practical mentorship as urgent priorities.',
    image: gallery4,
    body: [
      'Community forums help align ACELIE programming with local realities instead of importing generic models.',
      'Participants emphasized trust, youth voice, and accountability as key signals of leadership progress.',
      'The findings will inform regional hub programming and public learning sessions.',
    ],
  },
  {
    id: 'girls-stem',
    category: 'STEM',
    date: 'December 18, 2025',
    title: 'Girls In STEM Track Builds Confidence Through Practice',
    excerpt: 'A targeted STEM pathway supports girls through digital literacy, mentorship, and innovation challenges.',
    image: galleryRow2_1,
    body: [
      'The track combines practical skill-building with mentorship from women working in technical and civic spaces.',
      'Participants work in teams, present their ideas, and connect technical confidence to service leadership.',
      'ACELIE will track retention, participation, and project completion across the pilot.',
    ],
  },
  {
    id: 'policy-roundtable',
    category: 'Policy',
    date: 'November 28, 2025',
    title: 'Policy Roundtable Reviews Leadership Education Benchmarks',
    excerpt: 'Education stakeholders review how leadership outcomes can be measured without reducing character to slogans.',
    image: galleryRow2_2,
    body: [
      'The roundtable explored benchmarks for leadership education across curriculum, teacher support, and student practice.',
      'Stakeholders recommended clear rubrics, local case studies, and practical school governance assignments.',
      'The next draft will refine indicators for ethics, responsibility, and civic participation.',
    ],
  },
  {
    id: 'annual-summit',
    category: 'Summit',
    date: 'October 9, 2025',
    title: 'Annual Leadership Summit Centers Institutional Trust',
    excerpt: 'ACELIE convenes educators, youth leaders, and civic actors around trust as a measurable leadership outcome.',
    image: news3,
    body: [
      'The summit framed trust as a leadership outcome built through consistency, transparency, and responsibility.',
      'Sessions covered school governance, youth mentorship, and innovation rooted in public service.',
      'Outputs from the summit will support the 2026 program calendar.',
    ],
  },
];

const reports: Report[] = [
  {
    id: 'constitution',
    title: 'ACELIE Constitution v1.2',
    type: 'Legal Framework',
    date: '2026',
    pages: '42 pages',
    owner: 'Governance Desk',
    desc: 'The governing document defining ACELIE membership rights, non-partisan standards, and organizational structure.',
  },
  {
    id: 'leadership-framework',
    title: 'Philosophy Of Leadership Framework',
    type: 'Core Curriculum',
    date: '2025',
    pages: '68 pages',
    owner: 'Curriculum Desk',
    desc: 'Our approach to leadership as disciplined self-governance, responsible influence, and institutional service.',
  },
  {
    id: 'strategy',
    title: 'Strategic Plan 2026-2030',
    type: 'Strategy Report',
    date: '2026',
    pages: '94 pages',
    owner: 'Strategy Desk',
    desc: 'Five-year roadmap for objectives, cross-cutting themes, regional growth, and impact measurement.',
  },
  {
    id: 'mentor-guide',
    title: 'Mentor Circle Facilitation Guide',
    type: 'Training Manual',
    date: '2026',
    pages: '36 pages',
    owner: 'Mentorship Desk',
    desc: 'Practical guide for running values-based mentorship sessions in schools and community groups.',
  },
  {
    id: 'stem-lab-kit',
    title: 'STEM Lab Starter Kit',
    type: 'Program Toolkit',
    date: '2026',
    pages: '58 pages',
    owner: 'Innovation Desk',
    desc: 'Activity model for connecting technical literacy, teamwork, and community-centered innovation.',
  },
  {
    id: 'policy-brief',
    title: 'Leadership Education Policy Brief',
    type: 'Policy Paper',
    date: '2025',
    pages: '27 pages',
    owner: 'Policy Desk',
    desc: 'Policy recommendations for integrating ethical leadership into national education frameworks.',
  },
  {
    id: 'community-index',
    title: 'Community Character Index Pilot',
    type: 'Measurement Tool',
    date: '2025',
    pages: '51 pages',
    owner: 'Research Desk',
    desc: 'Prototype indicators for measuring civic trust, accountability, and leadership behavior in communities.',
  },
  {
    id: 'volunteer-pack',
    title: 'Volunteer Onboarding Pack',
    type: 'Operations Guide',
    date: '2026',
    pages: '24 pages',
    owner: 'Operations Desk',
    desc: 'Orientation material for volunteer specialists supporting field programs, research, and mentorship.',
  },
  {
    id: 'annual-report',
    title: 'Annual Impact Report 2025',
    type: 'Impact Report',
    date: '2025',
    pages: '76 pages',
    owner: 'Impact Desk',
    desc: 'Summary of program pilots, research outputs, stakeholder engagement, and lessons for the next operating year.',
  },
];

const Pagination = ({ page, totalPages, onPageChange }: { page: number; totalPages: number; onPageChange: (page: number) => void }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onPageChange(item)}
          className={`anime-hover h-11 min-w-11 border px-4 text-[10px] font-bold uppercase tracking-[0.22em] ${
            item === page ? 'border-gold bg-navy text-white' : 'border-hairline bg-white text-navy hover:border-gold'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

const ArticleCard = ({ article, active, onSelect }: { article: Article; active: boolean; onSelect: () => void; key?: any }) => (
  <motion.button
    type="button"
    whileHover={{ y: -5 }}
    onClick={onSelect}
    className={`anime-reveal group flex h-full flex-col border bg-white text-left transition-colors ${
      active ? 'border-gold' : 'border-hairline hover:border-gold'
    }`}
  >
    <div className="relative aspect-[16/9] overflow-hidden bg-navy/5">
      <div className="absolute left-4 top-4 z-10">
        <span className="bg-navy px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white">{article.category}</span>
      </div>
      <img src={article.image} alt={article.title} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
    </div>
    <div className="flex flex-1 flex-col justify-between p-7">
      <div>
        <div className="mb-5 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-gold">
          <Calendar size={11} /> <span>{article.date}</span>
        </div>
        <h3 className="mb-5 text-lg font-bold uppercase leading-[0.95] tracking-tight text-navy transition-colors group-hover:text-gold md:text-xl">
          {article.title}
        </h3>
        <p className="mb-8 text-sm leading-relaxed text-charcoal/60">{article.excerpt}</p>
      </div>
      <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-navy transition-colors group-hover:text-gold">
        Read details <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </motion.button>
);

const ReportCard = ({ report, active, onSelect }: { report: Report; active: boolean; onSelect: () => void; key?: any }) => (
  <button
    type="button"
    onClick={onSelect}
    className={`anime-hover anime-reveal flex min-h-[300px] flex-col justify-between border p-8 text-left transition-colors ${
      active ? 'border-gold bg-navy text-white' : 'border-hairline bg-white text-navy hover:border-gold'
    }`}
  >
    <div>
      <div className="mb-10 flex items-start justify-between gap-6">
        <div className={`flex h-12 w-12 items-center justify-center ${active ? 'bg-gold text-navy' : 'bg-offwhite text-gold'}`}>
          <FileText size={23} strokeWidth={1.4} />
        </div>
        <span className={`text-[9px] font-bold uppercase tracking-[0.24em] ${active ? 'text-gold' : 'text-navy/35'}`}>{report.type}</span>
      </div>
      <h3 className={`mb-5 text-xl font-bold uppercase leading-[0.95] tracking-tight md:text-2xl ${active ? 'text-white' : 'text-navy'}`}>{report.title}</h3>
      <p className={`text-sm leading-relaxed ${active ? 'text-white/58' : 'text-charcoal/60'}`}>{report.desc}</p>
    </div>
    <div className={`mt-8 flex items-center justify-between border-t pt-5 text-[10px] font-bold uppercase tracking-[0.2em] ${active ? 'border-white/15 text-white/58' : 'border-hairline text-charcoal/35'}`}>
      <span>{report.date}</span>
      <span>{report.pages}</span>
    </div>
  </button>
);

export default function News() {
  const pageMotionRef = useAnimePageMotion<HTMLDivElement>();
  const [mode, setMode] = useState<ViewMode>('posts');
  const [selectedArticleId, setSelectedArticleId] = useState(articles[0].id);
  const [selectedReportId, setSelectedReportId] = useState(reports[0].id);
  const [articlePage, setArticlePage] = useState(1);
  const [reportPage, setReportPage] = useState(1);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const selectedArticle = useMemo(() => articles.find((item) => item.id === selectedArticleId) ?? articles[0], [selectedArticleId]);
  const selectedReport = useMemo(() => reports.find((item) => item.id === selectedReportId) ?? reports[0], [selectedReportId]);
  const articleTotalPages = Math.ceil(articles.length / PAGE_SIZE);
  const reportTotalPages = Math.ceil(reports.length / PAGE_SIZE);
  const paginatedArticles = articles.slice((articlePage - 1) * PAGE_SIZE, articlePage * PAGE_SIZE);
  const paginatedReports = reports.slice((reportPage - 1) * PAGE_SIZE, reportPage * PAGE_SIZE);
  const handleArticlePageChange = (page: number) => {
    setArticlePage(page);
    setSelectedArticleId(articles[(page - 1) * PAGE_SIZE]?.id ?? articles[0].id);
  };
  const handleReportPageChange = (page: number) => {
    setReportPage(page);
    setSelectedReportId(reports[(page - 1) * PAGE_SIZE]?.id ?? reports[0].id);
  };

  return (
    <div ref={pageMotionRef} className="bg-offwhite">
      <PageHeader
        title="Institutional Media"
        subtitle="Insights, research papers, and updates from ACELIE operations across the African continent."
        image={news1}
        tagline="THE ACELIE JOURNAL"
      />

      <section className="border-b border-hairline bg-white px-6 py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-10">
            <div className="anime-reveal">
              <div className="text-4xl font-bold text-navy">124</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">Insights</div>
            </div>
            <div className="anime-reveal border-l border-hairline pl-10">
              <div className="text-4xl font-bold text-navy">18</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">Research Papers</div>
            </div>
          </div>

          <div className="flex w-full gap-3 sm:w-auto">
            {[
              { id: 'posts' as ViewMode, label: 'Latest Posts', icon: Newspaper },
              { id: 'reports' as ViewMode, label: 'Reports', icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = mode === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMode(tab.id)}
                  className={`anime-hover flex flex-1 items-center justify-center gap-2 px-5 py-4 text-[10px] font-bold uppercase tracking-widest sm:flex-none ${
                    active ? 'bg-navy text-white' : 'border border-navy/15 bg-white text-navy hover:border-gold'
                  }`}
                >
                  <Icon size={14} /> {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {mode === 'posts' ? (
            <div className="space-y-10">
              <div>
                <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                  <div>
                    <h4 className="anime-reveal mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Latest Analysis</h4>
                    <h2 className="anime-reveal text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-5xl">Newsroom briefings.</h2>
                  </div>
                  <p className="anime-reveal max-w-sm text-sm leading-relaxed text-charcoal/55">Select any card to open its detail panel. Titles stay compact for cleaner scanning.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {paginatedArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      active={article.id === selectedArticle.id}
                      onSelect={() => setSelectedArticleId(article.id)}
                    />
                  ))}
                </div>
                <Pagination page={articlePage} totalPages={articleTotalPages} onPageChange={handleArticlePageChange} />
              </div>

              <aside className="anime-reveal grid overflow-hidden border border-hairline bg-offwhite lg:grid-cols-[0.82fr_1.18fr]">
                <div className="relative min-h-72 overflow-hidden bg-navy">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="h-full w-full object-cover grayscale" />
                  <div className="absolute inset-0 bg-navy/45 mix-blend-multiply" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{selectedArticle.category}</div>
                    <h3 className="text-2xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-3xl">{selectedArticle.title}</h3>
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                    <Calendar size={12} /> {selectedArticle.date}
                  </div>
                  <div className="space-y-5 text-sm leading-relaxed text-charcoal/68">
                    {selectedArticle.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          ) : (
            <div className="space-y-10">
              <div>
                <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                  <div>
                    <h4 className="anime-reveal mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Institutional Repository</h4>
                    <h2 className="anime-reveal text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-5xl">Reports that move the work.</h2>
                  </div>
                  <p className="anime-reveal max-w-sm text-sm leading-relaxed text-charcoal/55">Reports are now selectable. Each report opens a readable metadata panel.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {paginatedReports.map((report) => (
                    <ReportCard
                      key={report.id}
                      report={report}
                      active={report.id === selectedReport.id}
                      onSelect={() => setSelectedReportId(report.id)}
                    />
                  ))}
                </div>
                <Pagination page={reportPage} totalPages={reportTotalPages} onPageChange={handleReportPageChange} />
              </div>

              <aside className="anime-reveal grid border border-hairline bg-navy text-white lg:grid-cols-[0.72fr_1fr]">
                <div className="p-8 lg:p-10">
                  <FileText size={30} className="mb-10 text-gold" />
                  <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{selectedReport.type}</div>
                  <h3 className="mb-7 text-3xl font-bold uppercase leading-[0.9] tracking-tight text-white">{selectedReport.title}</h3>
                  <p className="text-sm leading-relaxed text-white/58">{selectedReport.desc}</p>
                </div>
                <div className="border-t border-white/10 p-8 lg:border-l lg:border-t-0 lg:p-10">
                  <div className="grid grid-cols-2 gap-px bg-white/10">
                    {[
                      ['Year', selectedReport.date],
                      ['Length', selectedReport.pages],
                      ['Owner', selectedReport.owner],
                      ['Status', 'Available'],
                    ].map(([label, value]) => (
                      <div key={label} className="bg-navy p-5">
                        <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/35">{label}</div>
                        <div className="text-sm font-bold uppercase tracking-tight text-white">{value}</div>
                      </div>
                    ))}
                  </div>
                  <button type="button" className="anime-hover mt-8 flex w-full items-center justify-center gap-3 bg-gold px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-navy">
                    Download Report <Download size={15} />
                  </button>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy px-6 py-28">
        <div className="absolute inset-0 opacity-25">
          <img src={hero2} alt="" className="h-full w-full object-cover grayscale" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h4 className="anime-page-kicker anime-reveal mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Featured Publication</h4>
            <h2 className="anime-reveal mb-8 text-4xl font-bold uppercase leading-[0.9] tracking-tight text-white md:text-5xl">Digital governance and ethical STEM maturity.</h2>
            <p className="anime-reveal max-w-xl text-base leading-relaxed text-white/58">
              A focused white paper exploring how African leadership models must adapt to the Fourth Industrial Revolution while maintaining character integrity.
            </p>
          </div>
          <button type="button" onClick={() => setMode('reports')} className="anime-hover w-fit bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-navy">
            Access Full Report
          </button>
        </div>
      </section>

      <section className="bg-offwhite px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h4 className="anime-reveal mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Visual Record</h4>
              <h2 className="anime-reveal text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-5xl">Moments of transformation.</h2>
            </div>
            <p className="anime-reveal max-w-sm text-sm font-bold uppercase leading-relaxed tracking-[0.12em] text-navy/45">
              Captures from pilot hubs and leadership summits in Kumbo, Bamenda, and Yaounde.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[gallery1, gallery2, gallery3, gallery4, galleryRow2_1, galleryRow2_2, news2, news3].map((img, index) => (
              <button 
                key={img} 
                onClick={() => setLightboxImage(img)}
                className={`anime-hover anime-reveal overflow-hidden bg-navy/5 text-left ${index === 1 || index === 6 ? 'row-span-2' : ''}`}
              >
                <img src={img} alt="" className="h-full min-h-48 w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-6 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute right-10 top-10 text-white/50 hover:text-white transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X size={40} strokeWidth={1} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={lightboxImage} 
                alt="Enlarged visual record" 
                className="h-full w-full object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
