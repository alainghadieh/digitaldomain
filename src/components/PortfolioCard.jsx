import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
export function PortfolioCard(props) {
  const { name, detail, images, url } = props;
  return (
    <div
      className={`h-[1000px] flex items-end ${images} bg-cover bg-center bg-no-repeat rounded-3xl`}
    >
      <div className="flex flex-row justify-between align-items w-full px-8 py-4 backdrop-blur-sm bg-spindle-800/60 delay-200	rounded-3xl">
        <div>
          <h2 className="mt-4 text-bermuda-50 tracking-tight">{name}</h2>
          <p className="mt-2 text-lg tracking-wider text-spindle-50 ">
            {detail}
          </p>
        </div>
        <div className="flex flex-row">
          <a
            href={url}
            target="_blank"
            className="btn-primary w-auto h-fit mx-0 my-auto animate-none flex flex-row align-middle justify-between gap-2"
          >
            visit site
            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
