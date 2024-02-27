import { PortfolioCard } from "components/PortfolioCard";

const projects = [
  {
    name: "Pulse Website",
    images: " bg-pulse-sm lg:bg-pulse-lg ",
    detail: "online fitness wear store",
    url: "https://www.pulsefitnesswear.com/"
  },
  {
    name: "Dr Alexandra Website",
    images: " bg-dralexandra-sm lg:bg-dralexandra-lg ",
    detail: "e-commerce site selling skincare products",
    url: "https://dralexandra.clinic/"
  },
];
export function Portfolio() {
  return (
    <section className="">
      <div >
      <h2 className="tracking-normal uppercase">Portfolio</h2>
      <div className="flex flex-col">
      {projects.map((x) => (
            <PortfolioCard
              key={x.name}
              name={x.name}
              detail={x.detail}
              images={x.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
