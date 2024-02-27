export function Ping() {
  return (
    <span className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1">
      <span className="animate-ping-fast absolute inline-flex h-full w-full rounded-full bg-bermuda-300 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-bermuda-300"></span>
    </span>
  );
}
