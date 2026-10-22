import { useEffect, useRef, useState } from "react";
import type { SceneType } from "../data/serviceScene";
import ServiceDeviceScenes from "./ServiceDeviceScenes";
import ServiceSystemScenes from "./ServiceSystemScenes";
import ServiceWorkflowScenes from "./ServiceWorkflowScenes";
import "./ServiceScene.css";

const captions: Record<SceneType, string> = {
  "web-apps": "One website, designed for desktop, tablet and mobile.",
  app: "A mobile journey: get started, take action and finish with confidence.",
  saas: "A shared workspace that connects people, roles and business workflows.",
  "cloud-data": "Connect your application, APIs and data in one clear flow.",
  whatsapp: "From a customer conversation to a useful business action.",
  support: "Report the issue, find the cause and verify the fix.",
};

export default function ServiceScene({ type, dark = false }: { type: SceneType; dark?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const figure = ref.current;
    if (!figure || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: .15 });
    observer.observe(figure);
    return () => observer.disconnect();
  }, []);
  return (
    <figure ref={ref} className={`service-scene scene-${type}${dark ? " scene-dark" : ""}${visible ? " scene-animate" : ""}`}>
      <svg viewBox="0 0 840 520" fill="none" aria-hidden="true">
        {type === "web-apps" || type === "app" ? <ServiceDeviceScenes type={type} /> :
          type === "cloud-data" || type === "whatsapp" ? <ServiceSystemScenes type={type} /> :
            <ServiceWorkflowScenes type={type} />}
      </svg>
      <figcaption>
        <span className="scene-caption">{captions[type]}</span>
        <span className="scene-concept-note">Concept illustration</span>
      </figcaption>
    </figure>
  );
}
