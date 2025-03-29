interface SkillProps {
  name: string;
  level: number; // 0-100
}

function Skill({ name, level }: SkillProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export function Skills() {
  const frontendSkills: SkillProps[] = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 85 },
  ];

  const backendSkills: SkillProps[] = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 80 },
    { name: "GraphQL", level: 70 },
  ];

  const otherSkills: string[] = [
    "Git & GitHub",
    "REST API Design",
    "Responsive Design",
    "Testing (Jest, React Testing Library)",
    "CI/CD",
    "Docker",
    "AWS",
    "Agile / Scrum",
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="space-y-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">My Skills</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Frontend Development</h3>
          <div className="space-y-6">
            {frontendSkills.map((skill) => (
              <Skill key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Backend Development</h3>
          <div className="space-y-6">
            {backendSkills.map((skill) => (
              <Skill key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6">Other Skills</h3>
        <div className="flex flex-wrap gap-3">
          {otherSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
