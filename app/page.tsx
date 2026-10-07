import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import content from '@/data/content.json';

function FeaturedWork() {
  return <section className="section pt-8">
    <div className="container">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div><p className="mb-3 text-sm font-semibold uppercase tracking-[.2em] text-primary">Selected work</p><h2 className="text-4xl font-bold tracking-[-.06em] md:text-6xl">A little bit of everything.</h2></div>
        <Link href="/work" className="hidden shrink-0 text-sm font-semibold text-primary hover:text-primary-hover sm:block">All projects ↗</Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {content.projects.slice(0, 2).map((project, index) => <Link href="/work" key={project.title} className="group overflow-hidden rounded-[1.75rem] border border-border bg-white/50">
          <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[5/3]' : 'aspect-[5/3]'}`}><Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"/><span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-background text-lg transition-transform group-hover:rotate-45">↗</span></div>
          <div className="flex items-center justify-between gap-4 p-6"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-text-muted">0{index + 1} / Product design</p><h3 className="mt-2 text-xl font-bold">{project.title}</h3></div><span className="text-primary">→</span></div>
        </Link>)}
      </div>
      <Link href="/work" className="btn btn-outline mt-6 w-full sm:hidden">See all projects ↗</Link>
    </div>
  </section>;
}

export default function Home() {
  return <><Hero /><FeaturedWork /><About /><Contact /></>;
}
