import { ClipboardList, FileText, Settings2, Wallet } from "lucide-react";
import "./LabCapabilities.css";

const groups = [
  {
    icon: ClipboardList,
    title: "Patient & test management",
    description: "Build the visit around the tests your lab performs.",
    items: [
      {
        title: "Patients and visits",
        text: "Register patient details, find previous visits, and review report and payment status from the patient directory.",
      },
      {
        title: "Tests, groups, and packages",
        text: "Maintain individual tests, group tests together, and manage hospital-specific packages. Use catalogue shortcuts, categories, prices, units, and configured reference ranges.",
      },
      {
        title: "Doctors and referrals",
        text: "Maintain doctor details, report display names, and referral rates. Review doctor-related amounts alongside the patient work.",
      },
    ],
  },
  {
    icon: FileText,
    title: "Results & report preparation",
    description: "Keep result entry and the final document connected.",
    items: [
      {
        title: "Result entry",
        text: "Enter values for the patient’s selected tests in the report workspace. View units and configured reference ranges, with highlighting for values outside those ranges.",
      },
      {
        title: "Report review and printing",
        text: "Review pending and completed reports, open the report view, and prepare printed reports or PDF downloads. Report layout and print-position controls help fit your lab’s format.",
      },
      {
        title: "WhatsApp report workflows",
        text: "Prepare and share reports through the configured WhatsApp workflow. The application includes connection setup and activity views; messaging depends on the lab’s completed integration setup.",
      },
    ],
  },
  {
    icon: Wallet,
    title: "Billing & business operations",
    description: "See the financial side of the same laboratory work.",
    items: [
      {
        title: "Bills and payments",
        text: "Prepare patient bills, record discounts and payment methods, and track paid amounts and remaining dues.",
      },
      {
        title: "Accounts and due patients",
        text: "Review collections, dues, referral amounts, and account entries. Filter by date or doctor, find due patients, and use the available export views.",
      },
      {
        title: "Partner laboratory work",
        text: "Record lab-to-lab work, external laboratory charges, and referral or commission entries alongside the bill summary.",
      },
    ],
  },
  {
    icon: Settings2,
    title: "Your lab’s setup",
    description: "Adjust the details that make the workspace yours.",
    items: [
      {
        title: "Lab profile and report identity",
        text: "Set your laboratory name, contact details, and address for report branding. Configure a signature image for downloaded and WhatsApp report PDFs.",
      },
      {
        title: "Print and display preferences",
        text: "Adjust margins, report text size, heading options, and colour or black-and-white highlighting to suit your report format.",
      },
      {
        title: "Account and connection settings",
        text: "Manage password settings, configure authenticator-app protection, and review the laboratory’s WhatsApp connection setup.",
      },
    ],
  },
];

export default function LabCapabilities() {
  return (
    <section
      className="lab-capabilities section-space"
      id="capabilities"
      aria-labelledby="overview-title"
    >
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">THE COMPLETE LAB WORKSPACE</p>
            <h2 id="overview-title">
              The daily work.
              <br />
              <span>And the details behind it.</span>
            </h2>
          </div>
          <p className="section-intro">
            Explore OptiMediCare by the work you need to do, from setting up
            your catalogue to reviewing the day’s collections.
          </p>
        </div>
        <div className="lab-capability-groups">
          {groups.map((group) => (
            <article key={group.title} data-reveal>
              <div className="lab-group-heading">
                <span className="lab-group-icon">
                  <group.icon size={25} strokeWidth={1.5} />
                </span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <div className="lab-group-items">
                {group.items.map((item) => (
                  <div key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="lab-config-note">
          Every laboratory has its own workflow. Ask for a walkthrough using
          your test catalogue, report format, payment process, and WhatsApp
          requirements.
        </p>
      </div>
    </section>
  );
}
