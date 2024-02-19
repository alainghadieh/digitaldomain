import { WorkCard } from "../WorkCard";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
const WorkExperience = [
  {
    date: "2021 - Present",
    company: "Scopic, USA (Remote)",
    description: "A software development and digital marketing company",
    position: "Intermediate Web Developer",
    experience: `
          Worked using .Net Framework 4, .Net Core 3.1, Angular, Umbraco CMS
          framework 
        
          Worked mainly on three different projects: a labor management
          system, an e-commerce website selling technical supplies, and its
          cloud portal (from scratch) using Umbraco CMS framework.
        
      `,
  },
  {
    date: "2020 - 2021",
    company: "i-magineworks, Hazmieh LB",
    description: "A digital consulting & creative services company",
    position: "Back-End Developer",
    experience: `      
      Worked using .Net Framework 4.8, .Net Core 3.1, C#, SQL server
      
        Helped build and maintain API used for mobile advertising includes CMS
      
    `,
  },
];
const AcademicExperience = [
  {
    date: "2024 - Present",
    company: "NDU, Louaize LB",
    description: "Masters",
    position: "Computer Science",
    experience: ``,
  },
  {
    date: "2018 - 2021",
    company: "NDU, Louaize LB",
    description: "Undergraduate",
    position: "Computer Science",
    experience: ``,
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
        <WorkCard
          key={x.position}
          date={x.date}
          company={x.company}
          position={x.position}
          description={x.description}
          experience={x.experience}
        />
      ))}
      <div className="inline-flex items-center mb-6">
        <AcademicCapIcon className="h-8 w-8 text-white" aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;
        <h1 className="text-white">Academic Experience</h1>
      </div>
      {AcademicExperience.map((x) => (
        <WorkCard
          key={x.description}
          date={x.date}
          company={x.company}
          position={x.position}
          description={x.description}
          experience={x.experience}
        />
      ))}
    </>
  );
}
