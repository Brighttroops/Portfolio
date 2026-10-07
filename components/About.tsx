import Image from 'next/image';
import content from '../data/content.json';

export default function About() {
  const { profile, skills } = content;
  const skillTags = [...skills.design, ...skills.frontend.slice(0, 3), ...skills.backend.slice(0, 1)];

  return <section id="about" className="section">
    <div className="container grid gap-10 rounded-[2rem] bg-secondary p-7 md:grid-cols-[.85fr_1.15fr] md:items-center md:gap-16 md:p-14">
      <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[1.5rem] bg-background">
        <Image src={profile.avatar} alt={`Portrait of ${profile.name}`} fill sizes="(max-width: 768px) 80vw, 35vw" className="object-cover" />
        <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em]">Based in Malawi ✳</span>
      </div>
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[.2em] text-primary">A little about me</p>
        <h2 className="text-4xl font-bold leading-[1.02] tracking-[-.06em] md:text-6xl">Design-minded.<br/><span className="text-primary">Build-ready.</span></h2>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">{profile.bio}. I bring design and development together to make ideas feel clear, considered, and easy to use.</p>
        <div className="mt-7 flex flex-wrap gap-2">{skillTags.map((skill) => <span key={skill} className="rounded-full border border-foreground/10 bg-background/70 px-4 py-2 text-sm font-medium">{skill}</span>)}</div>
      </div>
    </div>
  </section>;
}
