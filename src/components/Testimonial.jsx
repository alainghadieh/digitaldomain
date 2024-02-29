export function Testimonial(props) {
  const { reviewerName, jobTitle, avatar, alt, review } = props;
  return (
    <div className='p-8 card duration-500' >
      <p className="leading-loose text-spindle-100">{review}</p>
      <div className="flex items-center mt-6">
        <img
          className="object-cover rounded-full w-14 h-14"
          src={avatar}
          alt={alt}
        />
        <div className="mx-4">
          <small>{reviewerName}</small><br />
          <span className="text-sm text-spindle-100">{jobTitle}</span>
        </div>
      </div>
    </div>
  );
}
