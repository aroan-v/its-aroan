import DaisyWrapper from '../DaisyWrapper'

const skills = []

export default function SkillsSection() {
  return (
    <DaisyWrapper>
      <section id="skills" className="bg-background py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-secondary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A snapshot of my current skills and where I am in my learning journey. I’m focused on
              staying solid in the fundamentals while steadily growing into modern frameworks and
              tools.
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <progress
                  className="ds-progress ds-progress-accent w-full"
                  value={skill.level}
                  max="100"
                ></progress>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DaisyWrapper>
  )
}
