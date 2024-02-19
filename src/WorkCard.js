export function WorkCard(props) {
  const { date, company, description, position, experience } = props;
  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-2xl shadow-md dark:bg-gray-700 mb-8 dark:hover:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-md font-light text-gray-600 dark:text-gray-400">
          {date}
        </span>
        <p
          className="px-3 py-1 font-display text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded hover:bg-gray-500"
          tabIndex="0"
        >
          {company}
        </p>
      </div>
      <p className="text-slate-300 text-sm tracking-wide">{description}</p>
      <div className="mt-1">
        <p
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 pb-1"
          tabIndex="1"
          role="link"
        >
          {position}
        </p>
        <p className="text-white">{experience}</p>
      </div>
    </div>
  );
}
