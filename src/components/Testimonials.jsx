import { Testimonial } from "./Testimonial";
const testimonials = [
  {
    reviewerName: "Dr Alexandra",
    jobTitle: "Founder, Alexandra Ageless Glowing",
    avatar: "./dralexandra_avatar.jpeg",
    alt: `Dr Alexandra's avatar`,
    review: `“Working with Alain was fantastic! His expertise and attention to detail resulted in a stunning skincare ecommerce site. Communication was seamless, and he kept me updated throughout. Highly recommend for anyone seeking top-notch web development!”`,
  },
  {
    reviewerName: "Nadine",
    jobTitle: "Marketing Manager at Fab",
    avatar: "./nadine_avatar.jpeg",
    alt: `Nadine's avatar`,
    review: `“Alain transformed our clothing store's online presence! Their design skills captured our brand perfectly. Communication was excellent, and they delivered on time. Our website is now a seamless shopping experience thanks to their expertise!”`,
  },
];

export function Testimonials() {
  return (
    <section className="card">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="text-center">
          What my <span className="text-bermuda-300 ">clients</span> say
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-center  text-gray-300 hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl ">
          {testimonials.map((x) => (
            <Testimonial
              key={x.reviewerName}
              reviewerName={x.reviewerName}
              jobTitle={x.jobTitle}
              avatar={x.avatar}
              alt={x.alt}
              review={x.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
