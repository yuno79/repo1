export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="block text-primary mt-2">Yuno</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            Video Editor
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            I make quality videos , resposive for engaging with viewers.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full bg-secondary/50 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full overflow-hidden bg-secondary">
            {/* Replace with your image */}
            <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-muted-foreground">
              YN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
