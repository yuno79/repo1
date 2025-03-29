import { useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink: string;
  codeLink: string;
}

function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all">
      <div className="aspect-video bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Live Demo
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              View Code
            </a>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-muted-foreground">
          {project.title[0]}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const projects: ProjectProps[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Management App",
      description: "A Trello-like task management application with drag-and-drop functionality and team collaboration features.",
      tags: ["React", "TypeScript", "Firebase"],
      image: "",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "A responsive dashboard that aggregates and displays social media analytics from various platforms.",
      tags: ["React", "Chart.js", "REST API"],
      image: "",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Weather Forecast App",
      description: "A real-time weather application that provides current conditions and 5-day forecasts for any city.",
      tags: ["JavaScript", "OpenWeather API", "Geolocation"],
      image: "",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Recipe Finder",
      description: "An application that allows users to search for recipes based on ingredients they have on hand.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Fitness Tracker",
      description: "A workout tracking application that helps users log exercises and track their fitness progress.",
      tags: ["React", "TypeScript", "Firebase"],
      image: "",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const categories = ["all", "React", "TypeScript", "Node.js", "MongoDB", "Firebase"];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20">
      <div className="space-y-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">My Projects</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
