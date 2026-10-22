import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Maximize2,
  Minus,
  Plus,
  X,
} from "lucide-react";
import type { ProductScreen } from "../data/products";
import "./ProductScreens.css";

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
  const viewingArea = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const isOpen = active !== null;
  const activeIndex = active ? screens.indexOf(active) : 0;
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
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (opener.current?.isConnected) opener.current.focus();
    };
  }, [isOpen]);

  function open(screen: ProductScreen, button: HTMLButtonElement) {
    opener.current = button;
    setActive(screen);
    setZoomed(false);
    dialog.current?.showModal();
  }

  function navigate(direction: number) {
    setActive(
      screens[(activeIndex + direction + screens.length) % screens.length],
    );
    setZoomed(false);
    viewingArea.current?.scrollTo({ top: 0, left: 0 });
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
            aria-haspopup="dialog"
          >
            <Maximize2 size={14} />
            <span>Explore screen</span>
          </button>
        </div>
        <button
          className="application-image"
          onClick={(event) => open(screen, event.currentTarget)}
          aria-label={`View ${screen.label} screenshot in detail`}
          aria-haspopup="dialog"
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
        id="screens"
        aria-labelledby="stage-title"
      >
        <div className="stage-heading">
          <h2 id="stage-title">{overview.title}</h2>
          <p>{overview.description}</p>
        </div>
        <div className="stage-surface">{frame(overview, true)}</div>
        <div className="product-screen-index">
          <div className="screen-index-heading">
            <p>Explore the workspace</p>
            <span>{screens.length} real application screens</span>
          </div>
          <div
            className="screen-thumbnail-list"
            role="group"
            aria-label={`${name} screenshots`}
          >
            {screens.map((screen, index) => (
              <button
                className="screen-thumbnail"
                key={screen.src}
                onClick={(event) => open(screen, event.currentTarget)}
                aria-haspopup="dialog"
                aria-label={`Explore ${screen.label}, screen ${index + 1} of ${screens.length}`}
              >
                <span className="screen-thumbnail-image">
                  <img
                    src={screen.src}
                    alt=""
                    width={160}
                    height={100}
                    loading="lazy"
                    decoding="async"
                  />
                  <span aria-hidden="true">
                    <Maximize2 size={16} />
                  </span>
                </span>
                <span className="screen-thumbnail-label">
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {screen.label}
                </span>
              </button>
            ))}
          </div>
        </div>
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
        className="screen-dialog screen-viewer"
        ref={dialog}
        aria-labelledby="screen-dialog-title"
        onClose={() => {
          setZoomed(false);
          setActive(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (zoomed || event.altKey || event.ctrlKey || event.metaKey) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            navigate(event.key === "ArrowLeft" ? -1 : 1);
          }
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
          ref={viewingArea}
          className={`screen-dialog-image ${zoomed ? "is-zoomed" : ""}`}
          tabIndex={0}
          aria-label={
            zoomed
              ? "Screenshot viewing area. Use arrow keys to scroll when zoomed."
              : "Screenshot viewing area. Use left and right arrow keys to explore screens."
          }
        >
          {active && (
            <img
              key={active.src}
              src={active.src}
              alt={active.alt}
              width={1600}
              height={1000}
            />
          )}
        </div>
        <div className="screen-dialog-footer">
          <button
            className="screen-browse-button"
            onClick={() => navigate(-1)}
            aria-label="Previous screenshot"
          >
            <ArrowLeft size={18} />
            <span>Previous</span>
          </button>
          <div
            className="screen-dialog-caption"
            aria-live="polite"
            aria-atomic="true"
          >
            <p>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(screens.length).padStart(2, "0")}
              </span>
              {active?.label}
            </p>
            <span>{active?.description}</span>
          </div>
          <button
            className="screen-browse-button"
            onClick={() => navigate(1)}
            aria-label="Next screenshot"
          >
            <span>Next</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </dialog>
    </>
  );
}
