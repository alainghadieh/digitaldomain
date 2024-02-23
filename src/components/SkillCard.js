export function SkillCard(props) {
  const { name, svg } = props;
  return (
    <div className="flex flex-start items-center justify-center max-w-2xl px-6 py-4 rounded-2xl shadow-md bg-gray-700 hover:bg-gray-800">
        {svg && <div className="h-6 w-7">{svg}</div>}
        <p className="text-white text-center">{name}</p>
    </div>
  );
}
