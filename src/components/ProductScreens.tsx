import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ProductScreen } from "../data/products";

type Props = { name: string; screens: ProductScreen[] };

export default function ProductScreens({ name, screens }: Props) {
  const [selected, setSelected] = useState(0);
  const screen = screens[selected] || screens[0];
  return (
    <section
      className="product-screens section-space"
      aria-labelledby="screens-title"
    >
      <div className="container">
        <div className="screens-heading">
          <div>
            <p className="eyebrow">THE ACTUAL PRODUCT</p>
            <h2 id="screens-title">
              Inside {name}.<br />
              <span>See the work, clearly.</span>
            </h2>
          </div>
          <p>
            Explore the real application interface. These screenshots use
            demonstration data.
          </p>
        </div>
        <div
          className="screen-selector"
          role="group"
          aria-label={`Choose a ${name} screen`}
        >
          {screens.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <figure className="screen-figure">
          <div className="screen-frame">
            <div className="screen-frame-bar">
              <span className="screen-frame-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>
                {name} / {screen.label}
              </span>
              <a
                href={screen.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${screen.label} screenshot full size in a new tab`}
              >
                Full size
                <ArrowUpRight size={14} />
              </a>
            </div>
            <a
              className="screen-image-link"
              href={screen.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${screen.label} screenshot full size in a new tab`}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
          <figcaption>
            <div aria-live="polite">
              <h3>{screen.title}</h3>
              <p>{screen.description}</p>
            </div>
            <span className="screen-demo-note">
              Actual interface · Demonstration data
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
