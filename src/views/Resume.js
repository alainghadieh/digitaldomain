import { ResumeCard } from "../components/ResumeCard";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
const WorkExperience = [
  {
    dateRange: "2021 - Present",
    institution: "Scopic, USA (Remote)",
    detail: "A software development and digital marketing company",
    title: "Intermediate Web Developer",
    description: `
          Worked using .Net Framework 4, .Net Core 3.1, Angular, Umbraco CMS
          framework 
        
          Worked mainly on three different projects: a labor management
          system, an e-commerce website selling technical supplies, and its
          cloud portal (from scratch) using Umbraco CMS framework.
        
      `,
  },
  {
    dateRange: "2020 - 2021",
    institution: "i-magineworks, Hazmieh LB",
    detail: "A digital consulting & creative services company",
    title: "Back-End Developer",
    description: `      
      Worked using .Net Framework 4.8, .Net Core 3.1, C#, SQL server
      
        Helped build and maintain API used for mobile advertising includes CMS
      
    `,
  },
];
const AcademicExperience = [
  {
    dateRange: "2024 - Present",
    institution: "NDU, Louaize LB",
    detail: "Masters",
    title: "Computer Science",
    description: ``,
  },
  {
    dateRange: "2018 - 2021",
    institution: "NDU, Louaize LB",
    detail: "Undergraduate",
    title: "Computer Science",
    description: ``,
  },
];
export function Resume() {
  return (
    <>
      <div className="inline-flex items-center mb-6">
        <BriefcaseIcon className="h-8 w-8 text-white" aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;
        <h1 className="text-white">Corporate Experience</h1>
      </div>
      {WorkExperience.map((x) => (
        <ResumeCard
          key={x.title}
          dateRange={x.dateRange}
          institution={x.institution}
          title={x.title}
          detail={x.detail}
          description={x.description}
        />
      ))}
      <div className="inline-flex items-center mb-6">
        <AcademicCapIcon className="h-8 w-8 text-white" aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;
        <h1 className="text-white">Academic Experience</h1>
      </div>
      {AcademicExperience.map((x) => (
        <ResumeCard
          key={x.detail}
          dateRange={x.dateRange}
          institution={x.institution}
          title={x.title}
          detail={x.detail}
          description={x.description}
        />
      ))}
    </>
  );
}
