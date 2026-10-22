import { useEffect, useRef, useState } from "react";
import AnimatedServiceIcon from "./AnimatedServiceIcon";

const phases = [
  {
    title: "Start with the right question.",
    label: "Discover",
    icon: "web-apps",
    text: "Who is it for? What needs to work better? We explore the people, requirements, and existing systems before defining the work.",
    output: "A clear problem, audience, and set of priorities.",
  },
  {
    title: "Make the experience tangible.",
    label: "Define & design",
    icon: "app",
    text: "Bring the important journeys into focus. Agree on the scope, screen structure, and technical approach so the team shares a clear direction.",
    output: "An agreed scope and a considered experience.",
  },
  {
    title: "Build. Review. Refine.",
    label: "Engineer",
    icon: "saas",
    text: "Develop the agreed functionality, connect the right systems, and review the working experience together. Pay attention to the details people actually use.",
    output: "Working software, reviewed against the requirements.",
  },
  {
    title: "A launch is a beginning.",
    label: "Launch & evolve",
    icon: "support",
    text: "Prepare the agreed release and discuss what comes next: maintenance, issue resolution, or the next useful improvement.",
    output: "A practical release and a clear path forward.",
  },
];
export default function DeliveryStory() {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting)
            setActive(Number((entry.target as HTMLElement).dataset.phase));
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: 0 },
    );
    root.current
      ?.querySelectorAll("[data-phase]")
      .forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);
  return (
    <section
      className="delivery-story"
      id="our-approach"
      ref={root}
      aria-labelledby="delivery-title"
    >
      <div className="container delivery-layout">
        <div className="delivery-aside">
          <p className="eyebrow">FROM THE FIRST CONVERSATION</p>
          <h2 id="delivery-title">
            Great work.
            <br />
            <span>A deliberate process.</span>
          </h2>
          <p>
            Know where you are.
            <br />
            Understand what comes next.
          </p>
          <div className="delivery-progress" aria-hidden="true">
            <span
              style={{ transform: `scaleX(${(active + 1) / phases.length})` }}
            />
          </div>
          <div className="delivery-chapter" aria-hidden="true">
            <span>0{active + 1}</span>
            <span>/ 04</span>
            <p>{phases[active].label}</p>
          </div>
        </div>
        <ol className="delivery-phases">
          {phases.map((phase, index) => (
            <li
              key={phase.title}
              data-phase={index}
              className={active === index ? "motion-active" : ""}
            >
              <div className="delivery-phase-top">
                <span>
                  0{index + 1} / {phase.label}
                </span>
                <AnimatedServiceIcon type={phase.icon} size={64} />
              </div>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
              <div className="phase-output">
                <span>THE OUTCOME</span>
                {phase.output}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
