import { useId } from "react";
import "./ServiceScene.css";

import type { SceneType } from "../data/serviceScene";
const captions: Record<SceneType, string> = {
  "web-apps": "Interfaces that connect people to a business.",
  app: "A considered experience, across devices.",
  saas: "A workspace built around a real process.",
  "cloud-data": "Independent systems. Connected thinking.",
  whatsapp: "The conversation, connected to your application.",
  support: "Understand. Improve. Move forward.",
};

export default function ServiceScene({
  type,
  dark = false,
}: {
  type: SceneType;
  dark?: boolean;
}) {
  const id = useId().replaceAll(":", "");
  const green = dark ? "#a9c3a5" : "#668267";
  return (
    <figure
      className={`service-scene scene-${type} ${dark ? "scene-dark" : ""}`}
    >
      <svg viewBox="0 0 800 500" fill="none" aria-hidden="true">
        <defs>
          <pattern
            id={id + "grid"}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0H0V40"
              stroke={dark ? "#a1bc9c" : "#869b81"}
              strokeOpacity=".12"
            />
          </pattern>
          <linearGradient
            id={id + "panel"}
            x1="100"
            x2="680"
            y1="40"
            y2="440"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#eaf0e7" />
          </linearGradient>
          <filter
            id={id + "shadow"}
            x="-40%"
            y="-40%"
            width="180%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="15"
              floodColor="#10271a"
              floodOpacity=".15"
            />
          </filter>
        </defs>
        <path fill={`url(#${id}grid)`} d="M0 0H800V500H0Z" />
        <ellipse
          cx="400"
          cy="276"
          rx="300"
          ry="170"
          stroke={green}
          strokeOpacity=".18"
        />
        <ellipse
          cx="400"
          cy="276"
          rx="220"
          ry="125"
          stroke={green}
          strokeOpacity=".15"
        />
        {type === "web-apps" || type === "app" || type === "saas" ? (
          <>
            <g className="scene-layer scene-back" transform="translate(130 60)">
              <rect
                x="0"
                y="0"
                width="540"
                height="342"
                rx="14"
                fill={`url(#${id}panel)`}
                stroke="#bccab7"
                filter={`url(#${id}shadow)`}
              />
              <path d="M0 40H540" stroke="#d3ddce" />
              <circle cx="21" cy="20" r="3" fill="#9aaa91" />
              <circle cx="33" cy="20" r="3" fill="#b3bfa9" />
              <circle cx="45" cy="20" r="3" fill="#d0d8ca" />
              <rect
                x="195"
                y="13"
                width="150"
                height="14"
                rx="7"
                fill="#e2e9de"
              />
              {type === "saas" ? (
                <>
                  <rect x="0" y="41" width="110" height="287" fill="#f0f4eb" />
                  <rect
                    x="18"
                    y="65"
                    width="72"
                    height="8"
                    rx="4"
                    fill="#8b9e7b"
                  />
                  {[0, 1, 2, 3].map((i) => (
                    <g key={i}>
                      <rect
                        x="18"
                        y={100 + i * 36}
                        width="12"
                        height="12"
                        rx="3"
                        fill={i === 0 ? "#547451" : "#c9d6c0"}
                      />
                      <rect
                        x="40"
                        y={104 + i * 36}
                        width="49"
                        height="5"
                        rx="2"
                        fill="#b5c3ac"
                      />
                    </g>
                  ))}
                  <text
                    x="136"
                    y="82"
                    fill="#263c2b"
                    fontSize="18"
                    fontFamily="Inter, sans-serif"
                  >
                    Your workspace.
                  </text>
                  {[0, 1, 2].map((i) => (
                    <g key={i}>
                      <rect
                        x={136 + i * 127}
                        y="104"
                        width="112"
                        height="62"
                        rx="8"
                        fill="#e7eddf"
                      />
                      <path
                        d={`M${151 + i * 127} 149l18 -13 17 4 17 -18 16 6`}
                        stroke="#78966b"
                        strokeWidth="2"
                      />
                    </g>
                  ))}
                  {[0, 1, 2, 3].map((i) => (
                    <g key={i}>
                      <rect
                        x="136"
                        y={188 + i * 30}
                        width="367"
                        height="23"
                        rx="5"
                        fill={i % 2 ? "#f5f7f2" : "#eaf0e5"}
                      />
                      <circle cx="151" cy={199 + i * 30} r="4" fill="#9ab089" />
                      <path
                        d={`M170 ${199 + i * 30}H290M360 ${199 + i * 30}h50M458 ${199 + i * 30}h26`}
                        stroke="#b3c2a8"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </g>
                  ))}
                </>
              ) : (
                <>
                  <text
                    x="35"
                    y="88"
                    fill="#536849"
                    fontSize="11"
                    letterSpacing="2"
                    fontFamily="Inter, sans-serif"
                  >
                    DESIGNED AROUND YOUR USERS
                  </text>
                  <text
                    x="35"
                    y="140"
                    fill="#263c2b"
                    fontSize="34"
                    letterSpacing="-1"
                    fontFamily="Inter, sans-serif"
                  >
                    A clearer way
                  </text>
                  <text
                    x="35"
                    y="182"
                    fill="#263c2b"
                    fontSize="34"
                    letterSpacing="-1"
                    fontFamily="Inter, sans-serif"
                  >
                    to connect.
                  </text>
                  <path
                    d="M35 210H295M35 225H250"
                    stroke="#c7d2bf"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <rect
                    x="35"
                    y="250"
                    width="118"
                    height="34"
                    rx="17"
                    fill="#2d4b36"
                  />
                  <path
                    d="M111 267h16m-5-5 5 5-5 5"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="367"
                    y="75"
                    width="133"
                    height="202"
                    rx="66"
                    fill="#dce6d2"
                  />
                  <ellipse
                    cx="432"
                    cy="178"
                    rx="48"
                    ry="72"
                    stroke="#77946c"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M384 178h96M432 106v144M397 126l70 104M397 230l70-104"
                    stroke="#8fa581"
                    strokeOpacity=".6"
                  />
                </>
              )}
            </g>
            {type !== "saas" && (
              <g
                className="scene-layer scene-device"
                transform="translate(548 178) rotate(7 67 130)"
              >
                <rect
                  width="134"
                  height="253"
                  rx="24"
                  fill="#293e30"
                  stroke="#64795b"
                  strokeWidth="2"
                  filter={`url(#${id}shadow)`}
                />
                <rect
                  x="7"
                  y="7"
                  width="120"
                  height="239"
                  rx="19"
                  fill="#fafcf7"
                />
                <rect
                  x="45"
                  y="13"
                  width="44"
                  height="8"
                  rx="4"
                  fill="#293e30"
                />
                <rect
                  x="21"
                  y="47"
                  width="48"
                  height="7"
                  rx="3"
                  fill="#8da17f"
                />
                <rect
                  x="21"
                  y="74"
                  width="92"
                  height="65"
                  rx="8"
                  fill="#dfe9d7"
                />
                <path
                  d="m34 122 17-18 17 4 14-22 17 6"
                  stroke="#7b9a6c"
                  strokeWidth="2"
                />
                <rect
                  x="21"
                  y="156"
                  width="92"
                  height="27"
                  rx="6"
                  fill="#ecf1e7"
                />
                <rect
                  x="21"
                  y="194"
                  width="92"
                  height="27"
                  rx="6"
                  fill="#ecf1e7"
                />
              </g>
            )}
            {type === "saas" && (
              <g
                className="scene-layer scene-badge"
                transform="translate(472 354)"
              >
                <rect
                  width="224"
                  height="57"
                  rx="12"
                  fill="#2c4834"
                  stroke="#729268"
                />
                <circle cx="28" cy="28" r="10" stroke="#c7d8b8" />
                <path d="m23 28 4 4 7-8" stroke="#c7d8b8" strokeWidth="1.6" />
                <text
                  x="49"
                  y="33"
                  fill="#e8f1de"
                  fontSize="12"
                  fontFamily="Inter, sans-serif"
                >
                  One connected workflow
                </text>
              </g>
            )}
          </>
        ) : type === "support" ? (
          <>
            <g className="scene-layer scene-back" transform="translate(160 85)">
              <rect
                width="480"
                height="310"
                rx="16"
                fill={`url(#${id}panel)`}
                stroke="#bccab7"
                filter={`url(#${id}shadow)`}
              />
              <text
                x="32"
                y="48"
                fill="#263c2b"
                fontSize="23"
                fontFamily="Inter, sans-serif"
              >
                Keep the work moving.
              </text>
              {[
                "Understand the issue",
                "Plan the improvement",
                "Build, test, and review",
              ].map((label, i) => (
                <g key={label}>
                  <rect
                    x="30"
                    y={78 + i * 68}
                    width="420"
                    height="52"
                    rx="9"
                    fill={i === 1 ? "#e0ead6" : "#f2f5ed"}
                    stroke="#d5dfcd"
                  />
                  <circle cx="57" cy={104 + i * 68} r="11" stroke="#8ba079" />
                  <path
                    d={`m52 ${104 + i * 68} 4 4 7-8`}
                    stroke="#789568"
                    strokeWidth="1.5"
                  />
                  <text
                    x="82"
                    y={109 + i * 68}
                    fill="#4b6242"
                    fontSize="14"
                    fontFamily="Inter, sans-serif"
                  >
                    {label}
                  </text>
                </g>
              ))}
            </g>
            <g
              className="scene-layer scene-badge"
              transform="translate(565 56)"
            >
              <rect
                width="88"
                height="88"
                rx="24"
                fill="#2c4834"
                stroke="#729268"
              />
              <path
                d="m25 60 25-25M44 27a16 16 0 0 0-14 23l-10 10 8 8 10-10a16 16 0 0 0 23-14l-12 6-6-6 6-12Z"
                stroke="#d8e6ca"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </g>
          </>
        ) : (
          <>
            <path
              className="scene-connection"
              d="M207 171h105q34 0 34 34v55m247-89H488q-34 0-34 34v55M400 300v85"
              stroke={green}
              strokeWidth="2"
              strokeDasharray="6 8"
            />
            <g
              className="scene-layer scene-back"
              transform="translate(295 170)"
            >
              <rect
                width="210"
                height="140"
                rx="22"
                fill={`url(#${id}panel)`}
                stroke="#aebfa4"
                filter={`url(#${id}shadow)`}
              />
              {type === "whatsapp" ? (
                <path
                  d="M75 49h60v42H99l-17 13V91h-7V49Z"
                  stroke="#698c5b"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M77 87h58a20 20 0 0 0 1-40 29 29 0 0 0-55 3 19 19 0 0 0-4 37Z"
                  stroke="#698c5b"
                  strokeWidth="2"
                />
              )}
              <text
                x="105"
                y="121"
                textAnchor="middle"
                fill="#4d6842"
                fontSize="12"
                fontFamily="Inter, sans-serif"
              >
                {type === "whatsapp"
                  ? "Messaging gateway"
                  : "Connected systems"}
              </text>
            </g>
            {[
              [100, 100, "Your application"],
              [
                530,
                100,
                type === "whatsapp" ? "Business account" : "External API",
              ],
              [
                315,
                365,
                type === "whatsapp" ? "Conversation flow" : "Your data",
              ],
            ].map(([x, y, label], i) => (
              <g
                className={`scene-layer scene-node node-${i}`}
                transform={`translate(${x} ${y})`}
                key={label}
              >
                <rect
                  width="170"
                  height="92"
                  rx="13"
                  fill="#f8fbf4"
                  stroke="#b7c8ad"
                />
                <rect
                  x="18"
                  y="20"
                  width="26"
                  height="22"
                  rx="5"
                  fill="#e0ead6"
                />
                <path
                  d="M24 27h14M24 33h9"
                  stroke="#8da37f"
                  strokeWidth="1.5"
                />
                <text
                  x="18"
                  y="69"
                  fill="#4c6342"
                  fontSize="12"
                  fontFamily="Inter, sans-serif"
                >
                  {label}
                </text>
              </g>
            ))}
          </>
        )}
      </svg>
      <figcaption>
        <span>DESIGN & ENGINEERING STUDY</span>
        {captions[type]}
        <span className="scene-concept-note">Concept illustration</span>
      </figcaption>
    </figure>
  );
}
