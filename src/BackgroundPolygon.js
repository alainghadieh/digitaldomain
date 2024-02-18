export default function BackgroundPolygon(props) {
    const {isFirst} = props;
    let a,b,c,d,e;
    switch (isFirst) {
        case "true":
            a = "-top-40";
            b = "sm:-top-80";
            c = "left-[calc(50%-11rem)]";
            d = "rotate-[30deg]";
            e = "sm:left-[calc(50%-30rem)]";
            break;
        default:
            a = "top-[calc(100%-13rem)]";
            b = "sm:top-[calc(100%-30rem)]";
            c = "left-[calc(50%+3rem)]";
            d = "";
            e = "sm:left-[calc(50%+36rem)]";
            break;
    }
  return (
        <div
          className={`absolute inset-x-0 ${a} -z-10 transform-gpu overflow-hidden blur-3xl ${b}`}
          aria-hidden="true"
        >
          <div
            className={`relative ${c} aspect-[1155/678] w-[36.125rem] -translate-x-1/2 ${d} bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 ${e} sm:w-[72.1875rem]`}
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
  )
}
