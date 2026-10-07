import Image from 'next/image';
import Link from 'next/link';
import content from '@/data/content.json';

export const metadata = { title: 'Selected Work | Bright Fungula', description: 'Selected product and interface design projects by Bright Fungula.' };

export default function Work() {
  const { projects } = content;
  return (
    <section className="min-h-screen pb-24 pt-36 md:pt-44">
      <div className="container">
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[.2em] text-primary">A few things I’ve made</p>
            <h1 className="max-w-3xl text-6xl font-bold leading-[.9] tracking-[-.07em] md:text-8xl">Selected<br/><span className="text-primary">work.</span></h1>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-text-muted">A mix of product thinking, visual craft, and practical engineering. Each project starts with a real human need.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => {
            const hasRealLink = project.link && !project.link.includes('example.com');
            return <article key={project.title} className={`group overflow-hidden rounded-[1.75rem] border border-border bg-white/50 ${index === 0 ? 'md:col-span-2' : ''}`}>
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/8]' : 'aspect-[4/3]'}`}>
                {project.image && <Image src={project.image} alt={`${project.title} project preview`} fill sizes={index === 0 ? '(max-width: 768px) 100vw, 90vw' : '(max-width: 768px) 100vw, 45vw'} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />}
                <span className="absolute left-5 top-5 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold uppercase tracking-[.14em] backdrop-blur">0{index + 1} / Product design</span>
              </div>
              <div className="flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{project.title}</h2>
                  <p className="mt-2 max-w-xl leading-relaxed text-text-muted">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-muted">{tech}</span>)}</div>
                </div>
                {hasRealLink ? <a href={project.link} target="_blank" rel="noreferrer" className="shrink-0 text-sm font-semibold text-primary hover:text-primary-hover">Visit project ↗</a> : <span className="shrink-0 text-sm font-medium text-text-muted">Case study in progress</span>}
              </div>
            </article>;
          })}
        </div>
        <div className="mt-20 rounded-[2rem] bg-foreground px-7 py-12 text-background md:px-14 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-accent">Have a good one?</p>
          <div className="mt-5 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-[-.05em] md:text-6xl">Let’s make your next idea happen.</h2>
            <Link href="/#contact" className="btn shrink-0 bg-accent text-foreground hover:-translate-y-0.5">Start a conversation ↗</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
