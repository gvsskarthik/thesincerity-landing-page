import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Maximize2, Minus, Plus, X } from "lucide-react";
import type { ProductScreen } from "../data/products";

type Props = { name: string; screens: ProductScreen[] };

const notes: Record<string, string[]> = {
  "Result entry": [
    "Selected tests and result-entry fields",
    "Units and configured reference ranges",
    "Out-of-range highlighting and pending-entry status",
  ],
  Registration: [
    "Patient details and test selection",
    "Packages, referrals, and external lab charges",
    "Bill summary and payment options",
  ],
  Reports: [
    "Review report status in one directory",
    "Find the patient and relevant report",
    "Continue to viewing or sharing reports",
  ],
  "Client directory": [
    "Organise managed business accounts",
    "Find clients by business type",
    "Review contact information and account status",
  ],
  "Chatbot studio": [
    "Inspect the conversation visually",
    "Choose server, SaaS, or tenant routing",
    "Preview the configured conversation",
  ],
};

export default function ProductScreens({ name, screens }: Props) {
  const [active, setActive] = useState<ProductScreen | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const overview = screens[0];
  const lab = name === "OptiMediCare";
  const selectedScreens = (labels: string[]) =>
    labels.flatMap((label) =>
      screens.filter((screen) => screen.label === label),
    );
  const stories = lab
    ? selectedScreens(["Registration", "Result entry", "Reports"])
    : screens.slice(1);
  const secondary = lab ? selectedScreens(["Patients", "Accounts"]) : [];
  const setup = lab ? selectedScreens(["Test catalogue", "Lab setup"]) : [];

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      opener.current?.focus();
    };
  }, [active]);

  function open(screen: ProductScreen, button: HTMLButtonElement) {
    opener.current = button;
    setActive(screen);
    setZoomed(false);
    dialog.current?.showModal();
  }

  function frame(screen: ProductScreen, eager = false) {
    const detail = [
      "Patients",
      "Reports",
      "Accounts",
      "Client directory",
    ].includes(screen.label);
    return (
      <figure
        className={`application-frame ${detail ? "application-detail" : ""}`}
      >
        <div className="application-toolbar">
          <span>
            <span className="window-dots" aria-hidden="true">
              ● ● ●
            </span>
            {name} <span className="toolbar-divider">/</span> {screen.label}
          </span>
          <button
            onClick={(event) => open(screen, event.currentTarget)}
            aria-label={`Enlarge ${screen.label} screenshot`}
          >
            <Maximize2 size={14} />
            <span>Explore screen</span>
          </button>
        </div>
        <button
          className="application-image"
          onClick={(event) => open(screen, event.currentTarget)}
          aria-label={`View ${screen.label} screenshot in detail`}
        >
          <img
            src={screen.src}
            alt={screen.alt}
            width={1600}
            height={1000}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
          />
          <span className="image-expand">
            <Plus size={18} /> View details
          </span>
        </button>
        <figcaption>
          Actual application interface{detail ? " detail" : ""} · Demonstration
          data
        </figcaption>
      </figure>
    );
  }

  return (
    <>
      <section
        className="product-stage container"
        aria-labelledby="stage-title"
      >
        <div className="stage-heading">
          <h2 id="stage-title">{overview.title}</h2>
          <p>{overview.description}</p>
        </div>
        <div className="stage-surface">{frame(overview, true)}</div>
        <p className="stage-footnote">
          A closer look at the real product. Select any screen to inspect the
          details.
        </p>
      </section>
      <section
        className="workflow-section section-space"
        id="workflow"
        aria-labelledby="workflow-title"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FROM THE FIRST STEP TO THE NEXT</p>
              <h2 id="workflow-title">
                See how the
                <br />
                <span>work comes together.</span>
              </h2>
            </div>
            <p className="section-intro">
              Follow the tools your team uses, with a closer look at the actual
              application.
            </p>
          </div>
          <div className="workflow-stories">
            {stories.map((screen, index) => (
              <article
                className="workflow-story"
                id={
                  lab
                    ? `lab-${screen.label.toLowerCase().replaceAll(" ", "-")}`
                    : undefined
                }
                data-reveal
                key={screen.src}
              >
                <div className="workflow-copy">
                  <p className="eyebrow">
                    <span className="chapter-number">0{index + 1}</span>
                    {screen.label}
                  </p>
                  <h3>{screen.title}</h3>
                  <p>{screen.description}</p>
                  <ul>
                    {notes[screen.label]?.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
                <div className="workflow-visual">{frame(screen)}</div>
              </article>
            ))}
          </div>
          {secondary.length > 0 && (
            <div
              className="lab-screen-group-heading"
              id="lab-operations"
              data-reveal
            >
              <p className="eyebrow">MANAGE THE DAY</p>
              <h3>
                The patient work.
                <br />
                The business behind it.
              </h3>
              <p>
                Find patient visits and report status, then review the
                collections, dues, and account entries from the same lab
                workspace.
              </p>
            </div>
          )}
          {secondary.length > 0 && (
            <div className="secondary-screens">
              {secondary.map((screen) => (
                <article data-reveal key={screen.src}>
                  <div className="secondary-copy">
                    <p className="eyebrow">{screen.label}</p>
                    <h3>{screen.title}</h3>
                    <p>{screen.description}</p>
                  </div>
                  {frame(screen)}
                </article>
              ))}
            </div>
          )}
          {setup.length > 0 && (
            <>
              <div
                className="lab-screen-group-heading"
                id="lab-setup"
                data-reveal
              >
                <p className="eyebrow">SET UP YOUR LAB</p>
                <h3>Your catalogue. Your report identity.</h3>
                <p>
                  Keep your tests organised and configure the lab details and
                  report preferences your team relies on.
                </p>
              </div>
              <div className="secondary-screens">
                {setup.map((screen) => (
                  <article key={screen.src} data-reveal>
                    <div className="secondary-copy">
                      <p className="eyebrow">{screen.label}</p>
                      <h3>{screen.title}</h3>
                      <p>{screen.description}</p>
                    </div>
                    {frame(screen)}
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <dialog
        className="screen-dialog"
        ref={dialog}
        aria-labelledby="screen-dialog-title"
        onClose={() => {
          setZoomed(false);
          setActive(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="screen-dialog-header">
          <div>
            <h2 id="screen-dialog-title">
              {name} / {active?.label}
            </h2>
            <p>Actual interface · Demonstration data</p>
          </div>
          <div className="screen-dialog-actions">
            <button
              aria-label={
                zoomed
                  ? "Fit screenshot to window"
                  : "Zoom screenshot to original size"
              }
              onClick={() => setZoomed(!zoomed)}
            >
              {zoomed ? <Minus size={18} /> : <Plus size={18} />}
              <span>{zoomed ? "Fit" : "Zoom"}</span>
            </button>
            <a
              href={active?.src}
              target="_blank"
              rel="noreferrer"
              aria-label="Open full size screenshot in a new tab"
            >
              <ArrowUpRight size={18} />
            </a>
            <button
              aria-label="Close screenshot"
              onClick={() => dialog.current?.close()}
            >
              <X size={22} />
            </button>
          </div>
        </div>
        <div
          className={`screen-dialog-image ${zoomed ? "is-zoomed" : ""}`}
          tabIndex={0}
          aria-label="Screenshot viewing area. Use arrow keys to scroll when zoomed."
        >
          {active && (
            <img src={active.src} alt={active.alt} width={1600} height={1000} />
          )}
        </div>
      </dialog>
    </>
  );
}
