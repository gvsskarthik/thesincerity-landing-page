import {
  Activity,
  ClipboardCheck,
  FileHeart,
  ArrowUpRight,
} from "lucide-react";
import "./LabUseCases.css";

const useCases = [
  {
    icon: Activity,
    title: "Medical & pathology labs",
    description:
      "Bring the everyday work of your medical laboratory, pathology lab, or diagnostic centre into one workspace: patients, test selection, results, reports, and payments.",
    link: "Explore patient registration",
    href: "#lab-registration",
  },
  {
    icon: FileHeart,
    title: "Blood test report management",
    description:
      "Work with your configured blood tests and laboratory parameters. Enter results, review units and reference ranges, and prepare branded reports for printing, PDF download, or your connected WhatsApp workflow.",
    link: "See the reporting workflow",
    href: "#lab-result-entry",
  },
  {
    icon: ClipboardCheck,
    title: "Health checkup packages",
    description:
      "Group your laboratory’s tests into health checkup packages. Select the relevant group or package during registration, then keep the bill, individual results, and report status connected to the patient visit.",
    link: "Explore tests and packages",
    href: "#capabilities",
  },
];

export default function LabUseCases() {
  return (
    <section
      className="lab-usecases section-space"
      aria-labelledby="lab-usecases-title"
    >
      <div className="container">
        <div className="lab-usecases-heading" data-reveal>
          <p className="eyebrow">BUILT AROUND YOUR LABORATORY</p>
          <h2 id="lab-usecases-title">
            Different tests.
            <br />
            <span>One connected workflow.</span>
          </h2>
          <p>
            OptiMediCare is medical lab management software for the
            people organising patient visits, recording test results, preparing
            reports, and keeping the accounts in order.
          </p>
        </div>
        <div className="lab-usecases-grid">
          {useCases.map((item, index) => (
            <article key={item.title} data-reveal>
              <div className="lab-usecase-top">
                <item.icon size={27} strokeWidth={1.4} aria-hidden="true" />
                <span aria-hidden="true">0{index + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.href}>
                {item.link}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <div className="lab-catalogue-scope" data-reveal>
          <div>
            <p className="eyebrow">YOUR CONFIGURED TEST CATALOGUE</p>
            <h3>Organise the disciplines your lab works with.</h3>
          </div>
          <p>
            Catalogue categories include haematology (hematology), biochemistry,
            serology, microbiology, clinical pathology for urine tests,
            endocrinology for thyroid and hormone tests, and immunology. Your
            lab defines the tests, parameters, prices, units, and reference
            ranges used in its own workflow.
          </p>
        </div>
      </div>
    </section>
  );
}
