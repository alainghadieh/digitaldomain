import { SkillCard } from "../components/SkillCard";
import {
  Square3Stack3DIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
const ProfessionalServices = [
  {
    name: "Web Development",
  },
  {
    name: "FrontEnd Development",
  },
  {
    name: "BackEnd Development",
  },
  {
    name: "SEO/SEM Marketing",
  },
  {
    name: "Network Security",
  },
  {
    name: "User Interface Design",
  },
];
const PlatformServices = [
  {
    name: "WordPress",
    svg: (
      <svg
        fill="#00749c"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.891 7.788a8.966 8.966 0 0 1 1.099 4.313 8.986 8.986 0 0 1-4.47 7.771l2.746-7.939c.513-1.282.684-2.309.684-3.219a7.165 7.165 0 0 0-.059-.926m-6.651.087a14.14 14.14 0 0 0 1.026-.088c.485-.063.428-.775-.056-.749 0 0-1.463.112-2.4.112-.887 0-2.375-.125-2.375-.125-.487-.024-.55.713-.061.738 0 0 .449.052.938.075l1.399 3.838-1.975 5.899-3.274-9.724a17.006 17.006 0 0 0 1.028-.083c.487-.063.43-.775-.055-.747 0 0-1.455.115-2.395.115-.167 0-.365-.007-.575-.013C6.093 4.726 8.862 3.113 12 3.113c2.341 0 4.471.894 6.071 2.36-.038-.002-.076-.008-.117-.008-.883 0-1.51.77-1.51 1.596 0 .741.427 1.369.883 2.108.343.601.742 1.37.742 2.481 0 .763-.295 1.662-.685 2.899l-.896 2.987-3.25-9.675.002.014zM12 21.087a8.983 8.983 0 0 1-2.54-.364l2.697-7.838 2.763 7.572c.021.044.042.085.065.124a9.016 9.016 0 0 1-2.985.508m-8.99-8.988a8.94 8.94 0 0 1 .778-3.658l4.287 11.749a8.993 8.993 0 0 1-5.065-8.091m8.99-10c-5.513 0-10 4.487-10 10s4.487 10 10 10 10-4.487 10-10-4.487-10-10-10" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    svg: (
      <svg
        width="100"
        height="100"
        fill="#95bf47"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          width="100%"
          height="100%"
          d="m14.49 20.937 5.381-1.166S17.93 6.633 17.914 6.546c-.016-.086-.086-.144-.158-.144s-1.439-.101-1.439-.101-.949-.949-1.064-1.05c-.027-.029-.057-.043-.086-.058l-.677 15.744zm.446-15.772c-.016 0-.043.014-.057.014-.016 0-.217.059-.533.158-.318-.919-.879-1.768-1.871-1.768h-.086c-.289-.361-.633-.519-.936-.519-2.316 0-3.426 2.892-3.77 4.359-.892.275-1.538.476-1.613.505-.504.158-.517.172-.574.648-.057.344-1.367 10.489-1.367 10.489l10.117 1.899.69-15.785zm-2.635.704v.102c-.559.173-1.178.36-1.783.547.346-1.323.992-1.972 1.553-2.217.146.375.23.878.23 1.568zm-.92-2.2c.1 0 .201.028.303.102-.732.344-1.539 1.222-1.871 2.978a59.11 59.11 0 0 1-1.411.432c.389-1.339 1.325-3.512 2.979-3.512zm.402 7.812s-.604-.315-1.322-.315c-1.08 0-1.123.676-1.123.849 0 .921 2.418 1.28 2.418 3.453 0 1.712-1.08 2.806-2.547 2.806-1.756 0-2.648-1.094-2.648-1.094l.475-1.554s.922.792 1.697.792a.693.693 0 0 0 .721-.69c0-1.209-1.986-1.268-1.986-3.252 0-1.669 1.195-3.295 3.627-3.295.936 0 1.395.272 1.395.272l-.707 2.028zm.922-7.281c.518.06.85.648 1.064 1.311-.258.087-.547.173-.863.273v-.187c0-.561-.072-1.022-.201-1.397z"
        />
      </svg>
    ),
  },
];
export function Services() {
  return (
    <div className="flex flex-col max-w-3xl">
      <h1 className="text-white text-4xl pb-8">
        I offer a wide range of services, including but not limited to the
        following
      </h1>
      <div className="inline-flex items-center mb-6">
        <SquaresPlusIcon className="h-8 w-8 text-white" aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;
        <h1 className="text-white">Professional Services</h1>
      </div>
      <div className="inline-grid lg:grid-cols-3 grid-cols-2 gap-4 mb-8">
        {ProfessionalServices.map((x) => (
          <SkillCard key={x.name} name={x.name} svg={x.svg} />
        ))}
      </div>
      <div className="inline-flex items-center mb-6">
        <Square3Stack3DIcon className="h-8 w-8 text-white" aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;
        <h1 className="text-white">Platform Services</h1>
      </div>
      <div className="flex flex-row gap-4 flex-start">
        {PlatformServices.map((x) => (
          <SkillCard key={x.name} name={x.name} svg={x.svg} />
        ))}
      </div>
    </div>
  );
}
