export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="text-xl font-bold tracking-tight">
          PDF Toolkit
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#">Tools</a>
          <a href="#">Features</a>
          <a href="#">Github</a>
        </nav>
      </div>
    </header>
  );
}