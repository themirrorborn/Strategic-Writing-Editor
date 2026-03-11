'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, FileText, PenLine, Sparkles } from 'lucide-react';

const sectionMotion = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: 'easeOut' }
};

const sectionClass = 'mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28';

export default function LandingPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <header className="sticky top-0 z-40 border-b border-line/80 bg-background/90 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-12">
          <p className="font-serif text-xl tracking-tight">Strategic Writing Editor</p>
          <a
            href="#offer"
            className="rounded-full border border-foreground px-4 py-2 text-sm transition hover:bg-foreground hover:text-background"
          >
            Request an Edit
          </a>
        </nav>
      </header>

      <section className={`${sectionClass} relative pt-24 md:pt-36`} id="hero">
        <motion.div {...sectionMotion} className="max-w-4xl space-y-8">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">Premium strategic editing studio</p>
          <h1 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Make Your Ideas Read as Clearly as You Think Them
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Strong ideas often get lost in weak drafts. Strategic editing strengthens structure, clarity, and
            persuasion so the idea lands exactly as intended.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#offer" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition hover:opacity-90">
              Request an Edit <ArrowRight size={16} />
            </a>
            <a href="#final-cta" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm transition hover:border-foreground">
              Send a Draft
            </a>
          </div>
        </motion.div>
      </section>

      <motion.section {...sectionMotion} className={sectionClass} id="trust">
        <div className="max-w-3xl space-y-6 border-l border-accent pl-8">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">Positioning</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Built for writers whose ideas deserve precision.</h2>
          <p className="text-lg leading-relaxed text-muted">
            Every edit prioritizes clarity, structure, argument strength, and intellectual honesty. The goal is not to
            decorate writing, but to sharpen thinking so readers can trust what they read.
          </p>
        </div>
      </motion.section>

      <motion.section {...sectionMotion} className={sectionClass} id="service">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">What this service does</p>
          <h2 className="font-serif text-4xl md:text-5xl">Strategic refinement, not surface edits.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Structure', 'The argument is organized so the piece flows logically from first sentence to final conclusion.'],
            ['Clarity', 'Complex passages are simplified and sentence-level edits remove friction for the reader.'],
            ['Persuasion', 'Core claims are reinforced so readers clearly understand why each idea matters.']
          ].map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-line bg-background p-8 shadow-soft">
              <h3 className="font-serif text-3xl">{title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted">
          This is not proofreading. This is strategic editing that improves thinking on the page.
        </p>
      </motion.section>

      <motion.section {...sectionMotion} className={sectionClass} id="deliverables">
        <div className="grid gap-10 rounded-3xl border border-line p-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-muted">What clients receive</p>
            <ul className="mt-6 space-y-4">
              {[
                'Structural improvements to the argument',
                'Clarity edits throughout the piece',
                'Suggested rewrites for weak sections',
                'A clean, polished version ready to publish'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg">
                  <Check className="mt-1 h-5 w-5 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line/80 bg-[#f1ede7] p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted">Turnaround</p>
            <p className="mt-3 font-serif text-5xl">24–72 hours</p>
            <p className="mt-4 text-muted">Fast enough for your publishing cadence, careful enough for your reputation.</p>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionMotion} className={sectionClass} id="for-who">
        <p className="text-sm uppercase tracking-[0.18em] text-muted">Who this is for</p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">For idea-driven writers building trust through clear thinking.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {['Newsletter writers', 'Founders writing essays', 'Analysts explaining complex ideas', 'Independent thinkers', 'Bitcoin and technology writers'].map((audience) => (
            <div key={audience} className="rounded-xl border border-line px-6 py-5 text-lg">
              {audience}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionMotion} className={sectionClass} id="how">
        <p className="text-sm uppercase tracking-[0.18em] text-muted">How it works</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: FileText, title: '1. Send a draft.', body: 'Share your essay, article, or newsletter draft.' },
            { icon: PenLine, title: '2. Strategic edit.', body: 'Structure, clarity, and argument quality are strengthened.' },
            { icon: Sparkles, title: '3. Receive final draft.', body: 'Get an edited version and a clean final copy to publish.' }
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-line p-8">
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-5 font-serif text-3xl">{title}</h3>
              <p className="mt-3 text-muted">{body}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionMotion} className={sectionClass} id="outcomes">
        <div className="rounded-3xl border border-line bg-[#f3efe8] p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">Outcomes</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-5xl">Clients typically see writing that earns attention and holds it.</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Clearer arguments',
              'Stronger essays',
              'Faster publishing',
              'Improved reader engagement',
              'Writing that reflects the strength of your ideas'
            ].map((outcome) => (
              <li key={outcome} className="rounded-xl border border-line/70 bg-background px-5 py-4">
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section {...sectionMotion} className={sectionClass} id="offer">
        <div className="mx-auto max-w-4xl rounded-3xl border border-foreground bg-foreground p-10 text-background md:p-14">
          <p className="text-sm uppercase tracking-[0.18em] text-background/70">Founding client offer</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Founding Client Package</h2>
          <ul className="mt-8 space-y-3 text-background/90">
            <li>• Editing for 3 essays or articles</li>
            <li>• Structural feedback</li>
            <li>• Clarity edits</li>
            <li>• Suggested rewrites</li>
          </ul>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-background/20 pt-6">
            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-background/70">Price</p>
              <p className="font-serif text-5xl">$300 total</p>
              <p className="mt-2 text-background/80">Limited to the first 5 clients.</p>
            </div>
            <a
              href="mailto:hello@strategicwritingeditor.com"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm text-foreground transition hover:bg-background/90"
            >
              Apply for a Founding Client Spot <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionMotion} className={sectionClass} id="final-cta">
        <div className="max-w-4xl space-y-6">
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">Clear ideas deserve clear writing.</h2>
          <p className="max-w-2xl text-lg text-muted">If your draft carries serious thinking, it should read with equal precision.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#offer" className="rounded-full bg-foreground px-6 py-3 text-sm text-background transition hover:opacity-90">
              Request an Edit
            </a>
            <a href="mailto:hello@strategicwritingeditor.com" className="rounded-full border border-line px-6 py-3 text-sm transition hover:border-foreground">
              Send a Draft
            </a>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-12">
          <div>
            <p className="font-serif text-base text-foreground">Strategic Writing Editor</p>
            <p>Strategic editing for idea-driven writing.</p>
          </div>
          <div className="text-left md:text-right">
            <p>hello@strategicwritingeditor.com</p>
            <p>© {new Date().getFullYear()} Strategic Writing Editor</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-background/95 p-4 backdrop-blur md:hidden">
        <a href="#offer" className="block rounded-full bg-foreground px-5 py-3 text-center text-sm text-background">
          Apply for Founding Client Spot
        </a>
      </div>
    </main>
  );
}
