import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { serviceDetails } from "../data/serviceDetails";
import AnimatedServiceIcon from "./AnimatedServiceIcon";
import ServiceScene from "./ServiceScene";
import { sceneForPath } from "../data/serviceScene";

export default function CapabilityStage() {
  const [selected, setSelected] = useState(0);
  const service = serviceDetails[selected];
  return (
    <section
      className="capability-stage"
      aria-labelledby="capability-stage-title"
      id="explore-services"
    >
      <div className="capability-stage-top">
        <div>
          <p className="eyebrow">SINCERITY / DESIGN & ENGINEERING</p>
          <h2 id="capability-stage-title">Choose your next move.</h2>
        </div>
        <p>
          Six disciplines.
          <br />
          One considered approach.
        </p>
      </div>
      <div className="capability-stage-layout">
        <div
          className="capability-selector"
          role="group"
          aria-label="Choose a service to explore"
        >
          {serviceDetails.map((item, index) => (
            <button
              key={item.path}
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
              aria-controls="capability-panel"
            >
              <span>0{index + 1}</span>
              <AnimatedServiceIcon type={sceneForPath(item.path)} size={34} />
              <span>{item.name}</span>
              <ArrowUpRight size={16} />
            </button>
          ))}
        </div>
        <div className="capability-panel" id="capability-panel">
          <div className="capability-scene" key={service.path}>
            <ServiceScene type={sceneForPath(service.path)} dark />
          </div>
          <div className="capability-panel-copy" aria-live="polite">
            <div>
              <p>{service.name}</p>
              <h3>{service.overviewTitle}</h3>
            </div>
            <a href={service.path}>
              Explore the service
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
