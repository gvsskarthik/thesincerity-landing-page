import { useId } from "react";
import "./ServiceWorkflowScenes.css";

export default function ServiceWorkflowScenes({ type }: { type: "saas" | "support" }) {
  const id = `workflow-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <g className={`workflow-scene workflow-scene-${type}`} fontFamily="Inter, Arial, sans-serif">
      <defs>
        <filter id={`${id}-shadow`} x="-25%" y="-25%" width="160%" height="170%">
          <feDropShadow dx="0" dy="15" stdDeviation="15" floodColor="#102e1f" floodOpacity=".13" />
        </filter>
      </defs>
      {type === "saas" ? (
        <>
          <text x="64" y="38" className="workflow-scene-label" fontSize="11" letterSpacing="2">YOUR PROCESS. A SHARED WORKSPACE.</text>
          <g className="workflow-scene-workspace" transform="translate(64 66)">
            <rect width="712" height="355" rx="15" fill="#fff" stroke="#c8d6c6" filter={`url(#${id}-shadow)`} />
            <path d="M0 47h712" stroke="#dce5d8" />
            <rect x="18" y="16" width="15" height="15" rx="4" fill="#54754b" />
            <text x="42" y="28" fontSize="13" fontWeight="600" fill="#2a4130">Your workspace</text>
            <text x="552" y="28" fontSize="10" fill="#647760">Team access</text>
            {[0, 1, 2].map((n) => <g key={n}><circle cx={639 + n * 18} cy="24" r="12" fill={["#d6e4ce", "#e6dcc5", "#cddfda"][n]} stroke="#fff" strokeWidth="2" /><path d={`M${635 + n * 18} 28q4-7 8 0`} fill="none" stroke="#6c7e63" /><circle cx={639 + n * 18} cy="21" r="2.5" fill="#6c7e63" /></g>)}
            <path d="M126 47v308" stroke="#e1e8dd" />
            <rect x="11" y="67" width="104" height="29" rx="6" fill="#edf3e7" />
            <path d="M24 78h10m-10 6h10m-10 32h10m-10 6h10m-10 30h10m-10 6h10" stroke="#85977b" strokeWidth="2" />
            <g fontSize="10" fill="#63755c"><text x="44" y="86" fill="#34512e">Projects</text><text x="44" y="124">People</text><text x="44" y="160">Settings</text></g>
            <text x="148" y="83" fontSize="20" fontWeight="600" letterSpacing="-.6" fill="#2b4230">From request to ready.</text>
            <text x="148" y="104" fontSize="11" fill="#697b62">One process. Clear ownership.</text>
            {["Intake", "In progress", "Ready"].map((label, n) => (
              <g key={label} transform={`translate(${148 + n * 181} 128)`} className={`workflow-scene-column workflow-scene-column-${n}`}>
                <rect width="165" height="190" rx="8" fill={n === 2 ? "#edf3e8" : "#f3f5f0"} />
                <circle cx="14" cy="19" r="4" fill={["#bbaa84", "#8ba385", "#4f7445"][n]} /><text x="25" y="23" fontSize="11" fontWeight="600" fill="#3a5135">{label}</text>
                <rect x="9" y="37" width="147" height="80" rx="6" fill="#fff" stroke="#dce5d5" />
                <text x="20" y="57" fontSize="8" letterSpacing="1" fill="#718269">{["REQUEST", "IN REVIEW", "COMPLETE"][n]}</text>
                <text x="20" y="78" fontSize="11" fontWeight="500" fill="#334c2e">{["New project brief", "Design approval", "Release checklist"][n]}</text>
                <circle cx="26" cy="100" r="6" fill={["#e5dcc6", "#d1e0cc", "#d6e5cf"][n]} />
                <path d={`M40 100h${n === 0 ? "60" : "44"}`} stroke="#c6d2bf" strokeWidth="4" strokeLinecap="round" />
                {n === 2 ? <path className="workflow-scene-check" d="m129 97 5 5 10-12" fill="none" stroke="#638958" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> : <><rect x="9" y="128" width="147" height="47" rx="6" fill="#fff" stroke="#e3e9dd" /><path d="M21 144h89m-89 13h55" stroke="#c6d2bf" strokeWidth="4" strokeLinecap="round" /></>}
              </g>
            ))}
          </g>
          <path className="workflow-scene-route" d="M208 454h416" fill="none" stroke="#8ba37e" strokeWidth="1.5" />
          {[{ x: 208, label: "Roles" }, { x: 416, label: "Workflow" }, { x: 624, label: "Shared progress" }].map(({ x, label }) => <g key={label}><circle cx={x} cy="454" r="5" fill="#8aa67c" stroke="#e4eddd" strokeWidth="2" /><text x={x} y="482" textAnchor="middle" fontSize="12" className="workflow-scene-label">{label}</text></g>)}
        </>
      ) : (
        <>
          <text x="64" y="38" fontSize="11" letterSpacing="2" className="workflow-scene-label">UNDERSTAND THE ISSUE. VERIFY THE FIX.</text>
          <path d="M238 256h70m238 0h70" stroke="#92aa86" strokeWidth="2" fill="none" className="workflow-scene-route" />
          <g className="workflow-scene-ticket" transform="translate(64 128)">
            <rect width="208" height="251" rx="13" fill="#fff" stroke="#d2dccc" filter={`url(#${id}-shadow)`} />
            <rect width="208" height="45" rx="13" fill="#eee8d9" /><path d="M0 32h208v13H0z" fill="#eee8d9" />
            <circle cx="23" cy="23" r="6" fill="#b7975f" /><text x="39" y="27" fontSize="11" fill="#665331" fontWeight="600">ISSUE REPORTED</text>
            <text x="19" y="82" fontSize="20" letterSpacing="-.5" fontWeight="600" fill="#34462e">Form won’t</text><text x="19" y="106" fontSize="20" letterSpacing="-.5" fontWeight="600" fill="#34462e">submit.</text>
            <text x="19" y="134" fontSize="11" fill="#6d7b65">Website contact form</text>
            <path d="M19 156h170" stroke="#e0e6d9" />
            <text x="19" y="180" fontSize="10" fill="#6d7b65">Reproduce the problem</text>
            <rect x="19" y="198" width="126" height="27" rx="13.5" fill="#f1eddf" /><text x="33" y="215" fontSize="10" fill="#6c5a37">Investigation started</text>
          </g>
          <g className="workflow-scene-diagnose" transform="translate(305 88)">
            <rect width="242" height="331" rx="13" fill="#fff" stroke="#c9d7c3" filter={`url(#${id}-shadow)`} />
            <text x="20" y="34" fontSize="16" fontWeight="600" fill="#31472d">Find the cause.</text>
            <text x="20" y="56" fontSize="11" fill="#697c60">Inspect → test → improve</text>
            <rect x="18" y="77" width="206" height="99" rx="7" fill="#233b2d" />
            <g fontFamily="monospace" fontSize="10"><text x="31" y="103" fill="#c5d9ba">$ inspect request</text><text x="31" y="124" fill="#d2be8b">→ validation mismatch</text><text x="31" y="151" fill="#c5d9ba" className="workflow-scene-diagnostic-result">✓ cause identified</text></g>
            {["Reproduce", "Isolate the cause", "Apply and test"].map((label, n) => <g key={label} className={`workflow-scene-step workflow-scene-step-${n}`}><circle cx="30" cy={207 + n * 37} r="10" fill="#e9f0e1" /><path d={`m26 ${207 + n * 37} 3 3 5-6`} fill="none" stroke="#739466" strokeWidth="1.5" strokeLinecap="round" /><text x="49" y={211 + n * 37} fontSize="12" fill="#52674a">{label}</text>{n < 2 && <path d={`M30 ${219 + n * 37}v13`} stroke="#cad9c1" />}</g>)}
          </g>
          <g className="workflow-scene-resolved" transform="translate(580 128)">
            <rect width="196" height="251" rx="13" fill="#f0f5e9" stroke="#bed0b2" filter={`url(#${id}-shadow)`} />
            <circle cx="98" cy="61" r="29" fill="#d5e5c9" /><path className="workflow-scene-check" d="m85 61 9 9 18-21" stroke="#577b49" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="98" y="119" textAnchor="middle" fontSize="22" fontWeight="600" letterSpacing="-.5" fill="#34512b">Fix verified.</text>
            <text x="98" y="145" textAnchor="middle" fontSize="11" fill="#5e7652">Tested in context.</text>
            <path d="M22 165h152" stroke="#d0ddc5" />
            <text x="98" y="189" textAnchor="middle" fontSize="11" fill="#5e7652">Clear handover.</text><text x="98" y="210" textAnchor="middle" fontSize="11" fill="#5e7652">Keep improving.</text>
          </g>
          <g textAnchor="middle" className="workflow-scene-label" fontSize="12"><text x="168" y="468">01 / Report</text><text x="426" y="468">02 / Investigate</text><text x="678" y="468">03 / Resolve</text></g>
        </>
      )}
    </g>
  );
}
