export function Video() {
  return (
    <video
      className=" fixed w-full h-full right-0 bottom-0 -z-1 object-cover saturate-150 opacity-70"
      autoPlay
      loop
      muted
      src="/video/background-video.mp4"
    ></video>
  );
}
