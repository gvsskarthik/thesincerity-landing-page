import "./AnimatedServiceIcon.css";

type Props = {
  type: string;
  size?: number | string;
  className?: string;
};

/** Decorative, code-native service marks. Motion is a finite enhancement. */
export default function AnimatedServiceIcon({
  type,
  size = 64,
  className = "",
}: Props) {
  return (
    <svg
      className={`animated-service-icon ${className}`.trim()}
      data-icon={type}
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {type === "web-apps" ? (
        <>
          <rect x="13" y="20" width="66" height="49" rx="6" />
          <path d="M13 32h66" />
          <g className="asi-accent">
            <circle cx="20" cy="26" r="1" fill="currentColor" stroke="none" />
            <circle cx="25" cy="26" r="1" fill="currentColor" stroke="none" />
            <circle cx="30" cy="26" r="1" fill="currentColor" stroke="none" />
          </g>
          <g className="asi-draw">
            <path pathLength="1" d="M22 43h18m-18 6h25m-25 6h15" />
            <path pathLength="1" d="m51 52 6-7 7 8 5-5 5 7" />
          </g>
          <g className="asi-shift">
            <rect
              x="62"
              y="44"
              width="20"
              height="33"
              rx="4"
              className="asi-paper"
            />
            <path d="M69 49h6m-5 23h4" />
            <path
              pathLength="1"
              d="m68 59 3 3 5-6"
              className="asi-draw asi-accent"
            />
          </g>
          <path d="M31 76h21m-11-7v7" />
        </>
      ) : type === "saas" ? (
        <>
          <g className="asi-layer asi-layer-back">
            <path d="m17 62 31-17 31 17-31 17-31-17Z" />
            <path d="m17 62 31 17 31-17" className="asi-accent" />
          </g>
          <g className="asi-layer asi-layer-middle">
            <path d="m17 48 31-17 31 17-31 17-31-17Z" className="asi-paper" />
          </g>
          <g className="asi-layer asi-layer-front">
            <path d="m17 34 31-17 31 17-31 17-31-17Z" className="asi-paper" />
            <path
              pathLength="1"
              d="m39 34 6 4 12-8"
              className="asi-draw asi-accent"
            />
          </g>
          <circle cx="80" cy="20" r="3" className="asi-pulse asi-accent" />
        </>
      ) : type === "cloud-data" ? (
        <>
          <path d="M30 45h-3a10 10 0 0 1-1-20 14 14 0 0 1 26-5 12 12 0 0 1 20 9 8 8 0 0 1-1 16h-5" />
          <path
            pathLength="1"
            d="M48 37v17m0 0H24v12m24-12h24v12m-24-12v12"
            className="asi-draw asi-accent"
          />
          <g className="asi-node asi-node-one">
            <rect x="15" y="66" width="18" height="13" rx="3" />
            <path d="M20 72h8" />
          </g>
          <g className="asi-node asi-node-two">
            <rect x="39" y="66" width="18" height="13" rx="3" />
            <path d="M44 72h8" />
          </g>
          <g className="asi-node asi-node-three">
            <rect x="63" y="66" width="18" height="13" rx="3" />
            <path d="M68 72h8" />
          </g>
          <circle cx="48" cy="38" r="3" className="asi-pulse asi-accent" />
        </>
      ) : type === "whatsapp" ? (
        <>
          <path d="M68 53a27 27 0 1 0-47 7l-4 14 15-4a27 27 0 0 0 22 2" />
          <g className="asi-shift">
            <path
              d="m35 30 5 10-4 4c3 6 7 10 13 13l4-4 10 5-2 7c-1 3-6 3-9 2-13-4-24-15-28-28-1-3-1-8 2-9l7-2 2 2Z"
              transform="translate(5 -3) scale(.8)"
            />
          </g>
          <path
            pathLength="1"
            d="M62 61h16m-5-5 5 5-5 5m3 9H60m5-5-5 5 5 5"
            className="asi-draw asi-accent"
          />
          <circle cx="80" cy="35" r="3" className="asi-pulse asi-accent" />
        </>
      ) : type === "app" ? (
        <>
          <rect x="27" y="12" width="42" height="72" rx="10" />
          <path d="M40 19h16m-13 58h10" />
          <g className="asi-node asi-node-one">
            <rect x="35" y="30" width="10" height="10" rx="3" />
            <rect
              x="51"
              y="30"
              width="10"
              height="10"
              rx="3"
              className="asi-accent"
            />
          </g>
          <g className="asi-node asi-node-two">
            <rect
              x="35"
              y="46"
              width="10"
              height="10"
              rx="3"
              className="asi-accent"
            />
            <rect x="51" y="46" width="10" height="10" rx="3" />
          </g>
          <path
            pathLength="1"
            d="m16 39-6 6 6 6m64-12 6 6-6 6"
            className="asi-draw asi-accent"
          />
        </>
      ) : (
        <>
          <path d="M24 49v-8a24 24 0 0 1 48 0v8" />
          <path
            d="M72 61v7a9 9 0 0 1-9 9h-9"
            className="asi-draw"
            pathLength="1"
          />
          <g className="asi-shift">
            <rect x="18" y="43" width="12" height="22" rx="5" />
            <rect x="66" y="43" width="12" height="22" rx="5" />
          </g>
          <rect
            x="43"
            y="73"
            width="12"
            height="8"
            rx="4"
            className="asi-accent"
          />
          <path
            pathLength="1"
            d="m37 47 8 8 15-17"
            className="asi-draw asi-accent"
          />
          <circle cx="77" cy="21" r="3" className="asi-pulse asi-accent" />
        </>
      )}
    </svg>
  );
}
