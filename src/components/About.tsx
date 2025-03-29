export function About() {
  return (
    <section id="about" className="py-20">
      <div className="space-y-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">About Me</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Who I Am</h3>
          <p className="text-muted-foreground">
            I am a passionate Full Stack Developer with a deep love for creating clean, efficient, and user-friendly
            web applications. With several years of experience in the industry, I've worked on a diverse range of
            projects that have honed my skills and expanded my knowledge base.
          </p>
          <p className="text-muted-foreground">
            My journey in web development began when I built my first website at the age of 16. Since then,
            I've been continuously learning and adapting to new technologies and methodologies to stay at the
            forefront of this ever-evolving field.
          </p>
          <p className="text-muted-foreground">
            Beyond coding, I enjoy hiking, photography, and contributing to open-source projects. I believe
            that a well-rounded life makes for a better developer.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Personal Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="font-medium">Name:</p>
              <p className="text-muted-foreground">Your Name</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Email:</p>
              <p className="text-muted-foreground">yourname@example.com</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Location:</p>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Availability:</p>
              <p className="text-muted-foreground">Open to opportunities</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Experience:</p>
              <p className="text-muted-foreground">5+ Years</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Education:</p>
              <p className="text-muted-foreground">B.S. Computer Science</p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
