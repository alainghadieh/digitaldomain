export function Ping() {
  return (
    <span className="flex absolute h-4 w-4 lg:top-3 top-1 right-1 lg:-mt-3 -mt-1 ">
      <span className="animate-ping-fast absolute inline-flex h-full w-full rounded-full bg-bermuda-300 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-bermuda-300"></span>
    </span>
  );
}
