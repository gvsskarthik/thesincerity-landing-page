import {
  ArrowRight,
  Braces,
  Check,
  Cloud,
  Database,
  Layers3,
  Monitor,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

/** Concept illustrations, deliberately separate from real product screenshots. */
export default function ServiceVisual({ type }: { type: string }) {
  return (
    <div className={`service-visual visual-${type}`} aria-hidden="true">
      <div className="visual-grid" />
      {type === "web-apps" ? (
        <div className="device-composition">
          <div className="concept-browser">
            <div className="concept-browser-bar">
              <i />
              <i />
              <i />
              <span>Designed around your business</span>
            </div>
            <div className="concept-browser-content">
              <span className="concept-brand">
                <span />
                Your business
              </span>
              <div className="concept-heading">
                A clearer
                <br />
                digital experience.
              </div>
              <div className="concept-rule" />
              <div className="concept-rule short" />
              <span className="concept-button">
                Explore <ArrowRight size={13} />
              </span>
              <div className="concept-tile-row">
                <span>
                  <Monitor size={24} />
                </span>
                <span>
                  <Braces size={24} />
                </span>
                <span>
                  <Sparkles size={24} />
                </span>
              </div>
            </div>
          </div>
          <div className="concept-phone">
            <span className="phone-speaker" />
            <Smartphone size={24} />
            <div className="concept-rule" />
            <div className="concept-rule short" />
            <div className="phone-card" />
            <div className="phone-card" />
          </div>
        </div>
      ) : type === "saas" ? (
        <div className="platform-composition">
          <div className="platform-central">
            <Layers3 size={50} strokeWidth={1.2} />
            <span>Your platform</span>
          </div>
          <div className="platform-block block-one">
            <span className="small-node">
              <Braces size={18} />
            </span>
            Business logic
          </div>
          <div className="platform-block block-two">
            <span className="small-node">
              <Monitor size={18} />
            </span>
            Your workspace
          </div>
          <div className="platform-block block-three">
            <span className="small-node">
              <Database size={18} />
            </span>
            Connected data
          </div>
          <div className="platform-status">
            <Check size={15} />
            Built around your workflow
          </div>
        </div>
      ) : type === "cloud-data" ? (
        <div className="cloud-composition">
          <div className="cloud-center">
            <Cloud size={72} strokeWidth={1.1} />
            <span>Connected systems</span>
          </div>
          <div className="cloud-endpoint endpoint-one">
            <Monitor size={24} />
            <span>Your application</span>
          </div>
          <div className="cloud-endpoint endpoint-two">
            <Database size={24} />
            <span>Your data</span>
          </div>
          <div className="cloud-endpoint endpoint-three">
            <Braces size={24} />
            <span>Your integrations</span>
          </div>
          <span className="cloud-line line-one" />
          <span className="cloud-line line-two" />
          <span className="cloud-line line-three" />
        </div>
      ) : (
        <div className="support-composition">
          <div className="support-icon">
            <Wrench size={42} strokeWidth={1.2} />
          </div>
          <div className="support-plan">
            <span className="support-plan-title">A path forward.</span>
            {[
              "Understand the issue",
              "Plan the improvement",
              "Build, test, and review",
            ].map((line, i) => (
              <div className="support-plan-row" key={line}>
                <span>0{i + 1}</span>
                {line}
                <Check size={16} />
              </div>
            ))}
          </div>
        </div>
      )}
      <span className="visual-caption">
        Sincerity Services · Concept illustration
      </span>
    </div>
  );
}
