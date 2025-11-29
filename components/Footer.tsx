import content from '../data/content.json';

export default function Footer() {
    const { profile, socials } = content;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary py-12 mt-16 border-t border-border">
            <div className="container flex flex-col items-center gap-8 text-center">
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-2">Bright Fungula</h3>
                    <p className="text-text-muted">{profile.title}</p>
                </div>

                <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
                    <a href="/" className="text-sm font-medium text-text-muted hover:text-foreground transition-colors">Home</a>
                    <a href="/#about" className="text-sm font-medium text-text-muted hover:text-foreground transition-colors">About</a>
                    <a href="/work" className="text-sm font-medium text-text-muted hover:text-foreground transition-colors">Work</a>
                    <a href="/#contact" className="text-sm font-medium text-text-muted hover:text-foreground transition-colors">Contact</a>
                </nav>

                <div className="flex gap-6">
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">GitHub</a>
                    <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">X (Twitter)</a>
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">LinkedIn</a>
                </div>
                <div className="text-sm text-text-muted mt-4">
                    &copy; {currentYear} {profile.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
