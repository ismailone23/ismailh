const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "HTML & CSS",
      "UI/UX Design",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Cheerio",
      "Stripe",
      "RevenueCat",
      "Redis",
    ],
  },
  {
    title: "AI & Systems",
    skills: [
      "YOLO",
      "ROS 2",
      "OpenCV",
      "Computer Vision",
      "AI Integrations",
      "Chrome Extensions",
    ],
  },
];

const marqueeSkills = [
  "React Native",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "YOLO",
  "ROS 2",
  "AI Integrations",
  "Chrome Extensions",
  "UI/UX Design",
];

export default function Skills() {
  return (
    <section
      className="overflow-hidden py-24 md:py-28"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto max-w-4xl">
          <h2
            id="skills-heading"
            className="font-headline-md text-headline-md text-text-primary mb-4"
          >
            Skills
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-10">
            What I used to build the projects above
          </p>

          <div className="border-t border-surface-stroke">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-3 border-b border-surface-stroke py-6 md:grid-cols-[190px_minmax(0,1fr)] md:items-baseline md:gap-10"
              >
                <h3 className="font-headline-md text-lg font-medium leading-6 text-text-primary">
                  {group.title}
                </h3>
                <ul className="flex min-w-0 flex-wrap gap-x-5 gap-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="whitespace-nowrap font-body-md text-[15px] leading-6 text-on-surface-variant"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-16 md:mt-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        aria-hidden="true"
      >
        <div className="skills-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeSkills.map((skill) => (
                <span
                  key={skill}
                  className="flex shrink-0 items-center gap-6 md:gap-10 pl-6 md:pl-10"
                >
                  <span className="font-headline-md text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-none tracking-[-0.02em] text-surface-container-highest whitespace-nowrap">
                    {skill}
                  </span>
                  <span className="text-3xl md:text-5xl font-normal leading-none text-text-muted">
                    /
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
