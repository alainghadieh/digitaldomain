export function Testimonial(props) {
  const { reviewerName, jobTitle, avatar, alt, review } = props;
  return (
    <div className='duration-500 p-3 md:p-8 green-card' >
      <p className="leading-loose md:leading-10 text-bermuda-950 text-xl md:text-2xl ">{review}</p>
      <div className="flex items-center mt-6">
        <img
          className="object-cover rounded-full w-14 h-14"
          src={avatar}
          alt={alt}
        />
        <div className="mx-4">
          <small>{reviewerName}</small><br />
          <span className="text-sm md:text-md text-bermuda-950">{jobTitle}</span>
        </div>
      </div>
    </div>
  );
}
