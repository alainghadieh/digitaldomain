import { PortfolioCard } from "components/PortfolioCard";
import { useEffect, useRef } from "react";
const projects = [
  {
    name: "Pulse Website",
    images: " bg-pulse-sm lg:bg-pulse-lg ",
    detail: "online fitness wear store",
    url: "https://www.pulsefitnesswear.com/",
  },
  {
    name: "Dr Alexandra Website",
    images: " bg-dralexandra-sm lg:bg-dralexandra-lg ",
    detail: "e-commerce site selling skincare products",
    url: "https://dralexandra.clinic/",
  },
];
export function Portfolio() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      scrollbar: true,
      draggable: true,
      grabCursor: true,
      injectStyles: [
        `.swiper-button-next, .swiper-button-prev {
          width: 30px;
          height: 30px;
          border-radius: 100%;
          color: #91d5c1;
          background-color: #fff;
          border: 1px solid #f1f1f1;
          box-shadow: 1px 1px 6px #0000000d;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 14px;
        }
        .swiper-scrollbar-drag {
          background-color: #91d5c1;
        }
        @media (max-width: 500px) {
          .swiper_container {
            height: 47rem;
          }
          .swiper-slide {
            width: 28rem !important;
            height: 36rem !important;
          }
          .swiper-slide img {
            width: 28rem !important;
            height: 36rem !important;
          }
        }
        
        `

      ]
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section className="">
    <div >
          <swiper-container ref={swiperRef} init="false"
            slides-per-view="1"
            css-mode="true"
            centered-slides="true"
            className="lg:h-screen h-96 overflow-hidden"
          >
            {projects.map((x) => (
              <swiper-slide className="lg:h-screen h-96" key={x.name}>
                <PortfolioCard
                  name={x.name}
                  detail={x.detail}
                  images={x.images}
                  url={x.url}
                />
              </swiper-slide>
            ))}
          </swiper-container>
    </div>
    </section>
  );
}
