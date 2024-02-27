export function PortfolioCard(props) {
  const { name, detail, images } = props;
  return (
    <div className={`flex items-end overflow-hidden bg-cover bg-center h-96 ${images} bg-no-repeat`}>
      <div className="w-full px-8 py-4 overflow-hidden backdrop-blur-sm bg-spindle-800/60 ">
        <h2 className="mt-4 text-bermuda-50 tracking-tight">{name}</h2>
        <p className="mt-2 text-lg tracking-wider text-spindle-50 ">
          {detail}
        </p>
      </div>
    </div>
  );
}
