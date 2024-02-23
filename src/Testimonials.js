export function Testimonials() {
  return (
    <section className="rounded-3xl backdrop-blur-lg backdrop-saturate-100 border-solid	border-[#e5e7eb33]	shadow-[1px_1px_20px_rgba(0,0,0,0.12)] border">
      <div className="container px-6 py-10 mx-auto ">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-white ">
          What my <span className="text-bermuda-300 ">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center  text-gray-300 hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl ">
          <div className="p-6 rounded-2xl md:p-8 shadow-md bg-gray-700 hover:bg-gray-800">
            <p className="leading-loose text-gray-300">
              “Working with Alain was fantastic! His expertise and attention to detail resulted in a stunning skincare ecommerce site. Communication was seamless, and he kept me updated throughout. Highly recommend for anyone seeking top-notch web development!”
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="./dralexandra_avatar.jpeg"
                alt="Dr Alexandra's avatar"
              />

              <div className="mx-4">
                <h1 className="font-semibold text-spindle-300">Dr Alexandra</h1>
                <span className="text-sm text-gray-300">
                  Founder, Alexandra Ageless Glowing
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl md:p-8 shadow-md bg-gray-700 hover:bg-gray-800">
            <p className="leading-loose text-gray-300">
              “Alain transformed our clothing store's online presence! Their design skills captured our brand perfectly. Communication was excellent, and they delivered on time. Our website is now a seamless shopping experience thanks to their expertise!”
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="./nadine_avatar.jpeg"
                alt="Nadine's avatar"
              />

              <div className="mx-4">
                <h1 className="font-semibold  text-spindle-300">Nadine</h1>
                <span className="text-sm text-gray-300">
                  Marketing Manager at Fab
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
