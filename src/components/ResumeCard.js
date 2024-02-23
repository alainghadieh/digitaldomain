export function ResumeCard(props) {
  const { dateRange, institution, detail, title, description } = props;
  return (
    <div className="max-w-2xl px-8 py-4 rounded-2xl shadow-md bg-gray-700 mb-8 hover:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-md font-light text-gray-400">
          {dateRange}
        </span>
        <p
          className="px-3 py-1 font-display text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded hover:bg-gray-500"
          tabIndex="0"
        >
          {institution}
        </p>
      </div>
      <p className="text-slate-300 text-sm tracking-wide">{detail}</p>
      <div className="mt-1">
        <p
          className="text-xl font-bold text-white hover:text-gray-200 pb-1"
          tabIndex="1"
          role="link"
        >
          {title}
        </p>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
