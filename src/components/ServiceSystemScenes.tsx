import { useId } from "react";
import "./ServiceSystemScenes.css";

type Props = { type: "cloud-data" | "whatsapp" };

/** Two concept illustrations: system integration and conversation automation. */
export default function ServiceSystemScenes({ type }: Props) {
  const id = useId().replaceAll(":", "");

  return (
    <g className={`system-scene system-scene-${type}`}>
      <defs>
        <filter id={`${id}-system-shadow`} x="-25%" y="-20%" width="150%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#102c21" floodOpacity=".1" />
        </filter>
        <linearGradient id={`${id}-system-panel`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#f3f7f2" />
        </linearGradient>
      </defs>

      {type === "cloud-data" ? (
        <>
          <text x="48" y="48" className="system-scene-eyebrow">ONE CONNECTED ARCHITECTURE</text>
          <g className="system-scene-node system-scene-first" transform="translate(48 102)">
            <rect width="210" height="308" rx="20" fill={`url(#${id}-system-panel)`} stroke="#cedacf" filter={`url(#${id}-system-shadow)`} />
            <path d="M0 43H210" stroke="#e0e7dd" />
            <circle cx="20" cy="22" r="3" fill="#94aa98" />
            <circle cx="31" cy="22" r="3" fill="#c0cec0" />
            <circle cx="42" cy="22" r="3" fill="#dce4d8" />
            <rect x="111" y="15" width="77" height="13" rx="6.5" fill="#e9eee6" />
            <text x="20" y="78" className="system-scene-card-title">Your application</text>
            <text x="20" y="103" className="system-scene-small">A request starts here.</text>
            <rect x="19" y="125" width="172" height="56" rx="10" fill="#eaf0e5" />
            <rect x="31" y="139" width="27" height="27" rx="7" fill="#fff" />
            <path d="M39 148h12m-12 5h8m-8 5h11" stroke="#50715a" strokeWidth="1.5" strokeLinecap="round" />
            <text x="68" y="148" className="system-scene-ui">New request</text>
            <text x="68" y="165" className="system-scene-tiny">Ready to send</text>
            <rect x="19" y="196" width="172" height="91" rx="10" fill="#f6f8f4" stroke="#e0e7dd" />
            <text x="32" y="219" className="system-scene-code">&#123; request &#125;</text>
            <text x="32" y="244" className="system-scene-code system-scene-code-muted">type: order.created</text>
            <text x="32" y="266" className="system-scene-code system-scene-code-muted">status: ready</text>
          </g>

          <g className="system-scene-wires">
            <path d="M258 249H342M500 249H582" stroke="#91aa91" strokeWidth="2" />
            <path className="system-scene-flow" d="M258 249H342M500 249H582" stroke="#5c8c64" strokeWidth="3" strokeDasharray="4 16" strokeLinecap="round" />
            <path d="m329 243 9 6-9 6m240-12 9 6-9 6" stroke="#5c8062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="299" y="223" textAnchor="middle" className="system-scene-wire-label">REQUEST</text>
            <text x="541" y="223" textAnchor="middle" className="system-scene-wire-label">SYNC</text>
          </g>

          <g className="system-scene-node system-scene-second" transform="translate(342 162)">
            <rect width="158" height="174" rx="28" fill="#244738" stroke="#567961" filter={`url(#${id}-system-shadow)`} />
            <rect x="18" y="18" width="122" height="138" rx="18" stroke="#a8c3a2" strokeOpacity=".28" />
            <path d="m59 39-9 9 9 9m40-18 9 9-9 9m-15-20-9 22" stroke="#b9d5ad" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="79" y="100" textAnchor="middle" className="system-scene-api">API</text>
            <text x="79" y="127" textAnchor="middle" className="system-scene-api-small">Validate · transform</text>
            <circle cx="0" cy="87" r="5" fill="#acc99f" stroke="#244738" strokeWidth="3" />
            <circle cx="158" cy="87" r="5" fill="#acc99f" stroke="#244738" strokeWidth="3" />
          </g>

          <g className="system-scene-node system-scene-third" transform="translate(582 102)">
            <rect width="210" height="308" rx="20" fill={`url(#${id}-system-panel)`} stroke="#cedacf" filter={`url(#${id}-system-shadow)`} />
            <path d="M0 79H210" stroke="#e0e7dd" />
            <path d="M27 33a9 9 0 0 1 17-4 7 7 0 1 1 3 14H28a5 5 0 1 1-1-10Z" fill="#e7efdf" stroke="#668b68" strokeWidth="1.5" />
            <text x="19" y="65" className="system-scene-card-title">Cloud systems</text>
            {[{ label: "Database", note: "Structured data", y: 96 }, { label: "Storage", note: "Files & documents", y: 165 }, { label: "Services", note: "Connected tools", y: 234 }].map((item, index) => (
              <g key={item.label} transform={`translate(16 ${item.y})`}>
                <rect width="178" height="57" rx="10" fill="#f3f6f0" stroke="#e0e7dd" />
                <rect x="10" y="13" width="31" height="31" rx="8" fill="#e3ecdd" />
                {index === 0 ? (
                  <g stroke="#5b7d5d" strokeWidth="1.4">
                    <ellipse cx="25.5" cy="22" rx="8" ry="3" />
                    <path d="M17.5 22v11c0 4 16 4 16 0V22m-16 5.5c0 4 16 4 16 0" />
                  </g>
                ) : index === 1 ? (
                  <path d="M17 23h7l2-3h8v16H17Z" stroke="#5b7d5d" strokeWidth="1.4" strokeLinejoin="round" />
                ) : (
                  <g stroke="#5b7d5d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 23-5 5 5 5m7-10 5 5-5 5m-3-12-2 16" />
                  </g>
                )}
                <text x="51" y="25" className="system-scene-ui">{item.label}</text>
                <text x="51" y="43" className="system-scene-tiny">{item.note}</text>
              </g>
            ))}
          </g>

          <g className="system-scene-process">
            <text x="153" y="453" textAnchor="middle">01 / APPLICATION</text>
            <text x="421" y="453" textAnchor="middle">02 / INTEGRATION</text>
            <text x="687" y="453" textAnchor="middle">03 / YOUR SYSTEMS</text>
          </g>
        </>
      ) : (
        <>
          <text x="54" y="45" className="system-scene-eyebrow">A CONVERSATION THAT GOES SOMEWHERE</text>

          <g className="system-scene-node system-scene-first" transform="translate(69 75)">
            <rect width="270" height="383" rx="29" fill="#193e34" stroke="#527b61" filter={`url(#${id}-system-shadow)`} />
            <rect x="7" y="7" width="256" height="369" rx="23" fill="#f0f5ed" />
            <path d="M30 7h210a23 23 0 0 1 23 23v53H7V30A23 23 0 0 1 30 7Z" fill="#244e3c" />
            <circle cx="35" cy="43" r="16" fill="#d8edcb" />
            <path d="M26 40a9 9 0 1 1 5 12l-6 2 1-6a9 9 0 0 1 0-8Z" stroke="#315e42" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="m31 38 2 3-1 2 4 4 2-1 3 2" stroke="#315e42" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <text x="61" y="40" className="system-scene-chat-name">Your business</text>
            <text x="61" y="60" className="system-scene-chat-status">WhatsApp conversation</text>
            <path d="m231 37 5 5-5 5" stroke="#d8e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            <g className="system-scene-message system-scene-message-first" transform="translate(20 100)">
              <rect width="189" height="49" rx="11" fill="#fff" stroke="#dde6d8" />
              <path d="m0 34-6 8h11" fill="#fff" stroke="#dde6d8" strokeLinejoin="round" />
              <text x="12" y="29" className="system-scene-chat-text">Hello, I need some help.</text>
            </g>
            <g className="system-scene-message system-scene-message-second" transform="translate(43 162)">
              <rect width="207" height="61" rx="11" fill="#d9edcd" stroke="#c7dfbc" />
              <text x="12" y="25" className="system-scene-chat-text">Happy to help.</text>
              <text x="12" y="46" className="system-scene-chat-text">What can we help you with?</text>
            </g>
            <g className="system-scene-message system-scene-message-third" transform="translate(43 232)">
              <rect width="207" height="40" rx="9" fill="#fff" stroke="#a7c398" />
              <text x="103.5" y="25" textAnchor="middle" className="system-scene-chat-option">Product enquiry</text>
              <rect y="47" width="207" height="40" rx="9" fill="#fff" stroke="#d5e0ce" />
              <text x="103.5" y="72" textAnchor="middle" className="system-scene-chat-option">Talk to the team</text>
            </g>
            <rect x="20" y="333" width="230" height="28" rx="14" fill="#fff" stroke="#e1e8dc" />
            <text x="33" y="352" className="system-scene-chat-placeholder">Message</text>
            <path d="m229 342 10 5-10 5 2-5-2-5Z" fill="#78946f" />
          </g>

          <g className="system-scene-wires">
            <path d="M339 268H384M444 268H494" stroke="#91aa91" strokeWidth="2" />
            <path className="system-scene-flow" d="M339 268H384M444 268H494" stroke="#5c8c64" strokeWidth="3" strokeDasharray="4 15" strokeLinecap="round" />
            <path d="m481 262 9 6-9 6" stroke="#5c8062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          <g className="system-scene-node system-scene-second" transform="translate(384 238)">
            <rect width="60" height="60" rx="18" fill="#244738" stroke="#7c9b74" />
            <g stroke="#c2d8b6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="15" y="20" width="30" height="25" rx="8" />
              <path d="M30 14v6m-6 12v1m12-1v1m-11 6h10" />
              <circle cx="30" cy="12" r="2" fill="#c2d8b6" stroke="none" />
              <path d="M10 29v8m40-8v8" />
            </g>
          </g>
          <text x="414" y="323" textAnchor="middle" className="system-scene-wire-label">ROUTE</text>

          <g className="system-scene-node system-scene-third" transform="translate(494 106)">
            <rect width="291" height="326" rx="20" fill={`url(#${id}-system-panel)`} stroke="#cedacf" filter={`url(#${id}-system-shadow)`} />
            <path d="M0 52H291" stroke="#dfe7db" />
            <rect x="18" y="18" width="19" height="19" rx="5" fill="#dce8d3" />
            <path d="M23 24h9m-9 6h6" stroke="#537753" strokeWidth="1.5" strokeLinecap="round" />
            <text x="47" y="33" className="system-scene-card-title">Team workspace</text>
            <text x="21" y="86" className="system-scene-ui">New conversation</text>
            <rect x="21" y="102" width="249" height="64" rx="11" fill="#edf3e8" stroke="#dce7d5" />
            <circle cx="47" cy="133" r="14" fill="#d8e6ce" />
            <circle cx="47" cy="129" r="4" fill="#78956b" />
            <path d="M39 140a8 8 0 0 1 16 0" stroke="#78956b" strokeWidth="2" strokeLinecap="round" />
            <text x="70" y="129" className="system-scene-ui">Product enquiry</text>
            <text x="70" y="148" className="system-scene-tiny">Context travels with the message</text>
            <text x="21" y="197" className="system-scene-tiny system-scene-uppercase">CONNECTED WORKFLOW</text>
            <path d="M32 222v61" stroke="#c5d6bc" strokeWidth="2" />
            {[{ y: 222, text: "Message received" }, { y: 254, text: "Routed to the right team" }, { y: 286, text: "Continue the conversation" }].map((step, index) => (
              <g key={step.text} className={`system-scene-workflow-step system-scene-step-${index}`}>
                <circle cx="32" cy={step.y} r="8" fill={index === 2 ? "#244738" : "#e2ecd9"} stroke={index === 2 ? "#244738" : "#bdd0b1"} />
                <path d={`m28 ${step.y} 3 3 5-6`} stroke={index === 2 ? "#d9e9ce" : "#66865b"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="50" y={step.y + 5} className="system-scene-ui">{step.text}</text>
              </g>
            ))}
          </g>
        </>
      )}
    </g>
  );
}
