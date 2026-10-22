import { useId, type ReactNode } from "react";
import "./ServiceDeviceScenes.css";

function Phone({ x, y, shadow, children, className = "" }: { x: number; y: number; shadow: string; children: ReactNode; className?: string }) {
  return (
    <g transform={`translate(${x} ${y})`} className={`device-scene-panel ${className}`}>
      <rect width="166" height="328" rx="29" fill="#233b30" filter={`url(#${shadow})`} />
      <rect x="5" y="5" width="156" height="318" rx="25" fill="#fff" />
      <rect x="57" y="13" width="52" height="13" rx="6.5" fill="#233b30" />
      <path d="M62 310h42" stroke="#bccbc2" strokeWidth="3" strokeLinecap="round" />
      {children}
    </g>
  );
}

export default function ServiceDeviceScenes({ type }: { type: "web-apps" | "app" }) {
  const id = `device-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <g className={`device-scene device-scene-${type}`} fill="none" fontFamily="Inter, Arial, sans-serif">
      <defs>
        <filter id={`${id}-shadow`} x="-35%" y="-25%" width="180%" height="175%">
          <feDropShadow dx="0" dy="15" stdDeviation="15" floodColor="#0d2d1d" floodOpacity=".12" />
        </filter>
        <linearGradient id={`${id}-sage`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#eff4ec" />
          <stop offset="1" stopColor="#cdddc9" />
        </linearGradient>
      </defs>
      {type === "web-apps" ? (
        <>
          <text x="72" y="37" fontSize="11" letterSpacing="2" className="device-scene-label">ONE EXPERIENCE. THREE VIEWPORTS.</text>
          <path d="M88 432H738" className="device-scene-guide" strokeWidth="1" />
          <g transform="translate(72 66)" className="device-scene-panel device-scene-desktop">
            <rect width="518" height="312" rx="13" fill="#fff" stroke="#ccd8cd" filter={`url(#${id}-shadow)`} />
            <path d="M0 32H518" stroke="#e1e7df" />
            <circle cx="18" cy="16" r="3" fill="#bac8b7" /><circle cx="29" cy="16" r="3" fill="#d0d9ca" /><circle cx="40" cy="16" r="3" fill="#e2e8dc" />
            <rect x="175" y="9" width="168" height="14" rx="7" fill="#f1f4ee" />
            <text x="231" y="19" fontSize="7" fill="#657564">yourbusiness.com</text>
            <text x="28" y="61" fontSize="13" fontWeight="650" fill="#253b2e">Your business.</text>
            <text x="339" y="60" fontSize="8" fill="#657564">About</text><text x="384" y="60" fontSize="8" fill="#657564">Work</text><text x="425" y="60" fontSize="8" fill="#657564">Contact</text>
            <text x="28" y="113" fontSize="8" letterSpacing="1.5" fill="#71866c">BUILT AROUND PEOPLE</text>
            <text x="28" y="152" fontSize="32" fontWeight="600" letterSpacing="-1.3" fill="#253b2e">One idea.</text>
            <text x="28" y="188" fontSize="32" fontWeight="600" letterSpacing="-1.3" fill="#253b2e">Every screen.</text>
            <text x="29" y="215" fontSize="9" fill="#657564">A clear next step, wherever you are.</text>
            <g className="device-scene-web-content"><rect x="28" y="236" width="113" height="32" rx="16" fill="#2a4937" /><text x="44" y="256" fontSize="9" fill="#fff">Explore the work</text><path d="M122 248l4 4-4 4m-5-4h9" stroke="#fff" strokeWidth="1.2" /></g>
            <g transform="translate(335 97)"><rect width="153" height="185" rx="72" fill={`url(#${id}-sage)`} /><circle cx="76.5" cy="92" r="56" stroke="#92a789" /><ellipse cx="76.5" cy="92" rx="27" ry="56" stroke="#92a789" /><path d="M21 92h111M76.5 36v112" stroke="#92a789" /><circle cx="116" cy="53" r="8" fill="#b99154" /></g>
          </g>
          <g transform="translate(479 159)" className="device-scene-panel device-scene-tablet">
            <rect width="224" height="256" rx="18" fill="#e5ece1" stroke="#b7c7b4" filter={`url(#${id}-shadow)`} />
            <rect x="7" y="7" width="210" height="242" rx="12" fill="#fff" />
            <text x="23" y="32" fontSize="10" fontWeight="600" fill="#253b2e">Your business.</text><path d="M190 24h11m-11 4h11" stroke="#64745f" />
            <text x="23" y="72" fontSize="22" fontWeight="600" letterSpacing="-.8" fill="#253b2e">One idea.</text><text x="23" y="98" fontSize="22" fontWeight="600" letterSpacing="-.8" fill="#253b2e">Every screen.</text>
            <text x="23" y="120" fontSize="8" fill="#657564">A clear next step, wherever you are.</text>
            <rect x="23" y="138" width="177" height="70" rx="9" fill={`url(#${id}-sage)`} /><circle cx="112" cy="173" r="26" stroke="#96ab8e" /><ellipse cx="112" cy="173" rx="12" ry="26" stroke="#96ab8e" /><path d="M86 173h52" stroke="#96ab8e" /><circle cx="132" cy="154" r="5" fill="#b99154" />
            <rect x="23" y="220" width="92" height="17" rx="8.5" fill="#2a4937" /><text x="37" y="231" fontSize="7" fill="#fff">Explore the work</text>
          </g>
          <g transform="translate(669 238)" className="device-scene-panel device-scene-web-phone">
            <rect width="102" height="194" rx="18" fill="#233b30" filter={`url(#${id}-shadow)`} /><rect x="4" y="4" width="94" height="186" rx="14" fill="#fff" /><rect x="35" y="9" width="32" height="7" rx="3.5" fill="#233b30" />
            <text x="13" y="34" fontSize="7" fontWeight="600" fill="#253b2e">Your business.</text><path d="M82 28h7m-7 4h7" stroke="#64745f" />
            <text x="13" y="59" fontSize="15" fontWeight="600" letterSpacing="-.5" fill="#253b2e">One idea.</text><text x="13" y="76" fontSize="15" fontWeight="600" letterSpacing="-.5" fill="#253b2e">Every</text><text x="13" y="93" fontSize="15" fontWeight="600" letterSpacing="-.5" fill="#253b2e">screen.</text>
            <rect x="13" y="105" width="76" height="43" rx="8" fill={`url(#${id}-sage)`} /><circle cx="51" cy="126.5" r="16" stroke="#96ab8e" /><ellipse cx="51" cy="126.5" rx="7" ry="16" stroke="#96ab8e" /><path d="M35 126.5h32" stroke="#96ab8e" />
            <rect x="13" y="158" width="76" height="20" rx="10" fill="#2a4937" /><text x="26" y="171" fontSize="7" fill="#fff">Explore the work</text><path d="M39 184h25" stroke="#c1cdbd" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g className="device-scene-web-labels" textAnchor="middle" fontSize="12"><circle cx="237" cy="432" r="4" fill="#6f896a" /><circle cx="569" cy="432" r="4" fill="#6f896a" /><circle cx="720" cy="432" r="4" fill="#b99154" /><text x="237" y="462" className="device-scene-label">Desktop</text><text x="569" y="462" className="device-scene-label">Tablet</text><text x="720" y="462" className="device-scene-label">Mobile</text></g>
        </>
      ) : (
        <>
          <text x="110" y="37" fontSize="11" letterSpacing="2" className="device-scene-label">AN APP JOURNEY, FROM START TO DONE.</text>
          <path d="M182 239H658" className="device-scene-app-flow" stroke="#96ac8b" strokeWidth="2" strokeDasharray="4 6" />
          <g fontSize="10" fontWeight="500" letterSpacing="1.5" className="device-scene-label"><text x="112" y="73">01 / GET STARTED</text><text x="337" y="73">02 / TAKE ACTION</text><text x="562" y="73">03 / MOVE FORWARD</text></g>
          <Phone x={107} y={94} shadow={`${id}-shadow`} className="device-scene-app-first">
            <circle cx="83" cy="101" r="44" fill="#edf3e8" /><rect x="61" y="76" width="44" height="50" rx="11" fill="#d2e1ca" /><path d="M73 92h20m-20 8h15m-15 8h9" stroke="#6f8864" strokeWidth="2" strokeLinecap="round" /><circle cx="105" cy="119" r="12" fill="#b48c50" /><path d="m100 119 3 3 6-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <text x="20" y="176" fontSize="20" fontWeight="600" letterSpacing="-.8" fill="#263c2d">A good place</text><text x="20" y="201" fontSize="20" fontWeight="600" letterSpacing="-.8" fill="#263c2d">to begin.</text>
            <text x="20" y="225" fontSize="9" fill="#72816c">Everything you need, together.</text>
            <rect x="19" y="257" width="128" height="31" rx="15.5" fill="#2b4b37" /><text x="55" y="277" fontSize="10" fill="#fff">Continue</text><path d="m124 269 4 4-4 4" stroke="#fff" strokeWidth="1.2" />
          </Phone>
          <g className="device-scene-app-arrow"><circle cx="302" cy="258" r="14" fill="#f6f8f2" stroke="#aebea5" /><path d="M296 258h12m-5-5 5 5-5 5" stroke="#5d7b51" strokeWidth="1.5" /></g>
          <Phone x={337} y={94} shadow={`${id}-shadow`} className="device-scene-app-second">
            <text x="17" y="59" fontSize="9" fill="#72816c">GOOD MORNING</text><text x="17" y="82" fontSize="18" fontWeight="600" letterSpacing="-.6" fill="#263c2d">Your workspace.</text>
            <rect x="16" y="99" width="134" height="62" rx="11" fill="#e7efdf" /><text x="28" y="119" fontSize="9" fill="#607458">YOUR NEXT STEP</text><text x="28" y="139" fontSize="12" fontWeight="600" fill="#304b34">Project review</text><circle cx="129" cy="138" r="8" fill="#c2d6b7" /><path d="m126 135 3 3-3 3" stroke="#537249" strokeWidth="1.3" />
            {[0, 1, 2].map((n) => <g key={n}><rect x="17" y={176 + n * 27} width="13" height="13" rx="4" fill={n === 2 ? "#fff" : "#e9efdf"} stroke="#b7c9ab" />{n !== 2 && <path d={`m20 ${182 + n * 27} 2 2 5-5`} stroke="#6c8a5d" strokeWidth="1.1" />}<text x="39" y={186 + n * 27} fontSize="9" fill="#607458">{["Review the brief", "Check the details", "Confirm and finish"][n]}</text></g>)}
            <rect x="17" y="265" width="132" height="29" rx="14.5" fill="#2b4b37" /><text x="57" y="284" fontSize="10" fill="#fff">Review</text>
          </Phone>
          <g className="device-scene-app-arrow device-scene-app-arrow-last"><circle cx="532" cy="258" r="14" fill="#f6f8f2" stroke="#aebea5" /><path d="M526 258h12m-5-5 5 5-5 5" stroke="#5d7b51" strokeWidth="1.5" /></g>
          <Phone x={567} y={94} shadow={`${id}-shadow`} className="device-scene-app-third">
            <circle cx="83" cy="112" r="47" fill="#eff4e9" /><circle cx="83" cy="112" r="32" fill="#d9e8cf" /><path className="device-scene-check" d="m68 112 10 10 20-23" stroke="#486c3c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="83" y="191" textAnchor="middle" fontSize="23" fontWeight="600" letterSpacing="-.9" fill="#263c2d">You're all set.</text><text x="83" y="216" textAnchor="middle" fontSize="10" fill="#72816c">Review complete.</text>
            <rect x="26" y="240" width="114" height="1" fill="#e0e8db" /><circle cx="56" cy="257" r="3" fill="#88a778" /><text x="66" y="260" fontSize="8" fill="#657b5b">Progress saved</text>
            <rect x="19" y="278" width="128" height="23" rx="11.5" fill="#2b4b37" /><text x="70" y="293" fontSize="9" fill="#fff">Done</text>
          </Phone>
          <g fontSize="12" textAnchor="middle" className="device-scene-label"><text x="190" y="468">A clear welcome</text><text x="420" y="468">A useful next step</text><text x="650" y="468">A confident finish</text></g>
        </>
      )}
    </g>
  );
}
