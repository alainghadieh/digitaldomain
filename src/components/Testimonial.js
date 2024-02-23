export function Testimonial(props) {
    const {reviewerName, jobTitle, avatar, alt, review} = props;
    return(
        <div className="p-6 rounded-2xl md:p-8 shadow-md bg-gray-700 hover:bg-gray-800">
            <p className="leading-loose text-gray-300">
              {review}
            </p>
            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src={avatar}
                alt={alt}
              />
              <div className="mx-4">
                <h1 className="font-semibold  text-spindle-300">{reviewerName}</h1>
                <span className="text-sm text-gray-300">
                  {jobTitle}
                </span>
              </div>
            </div>
          </div>
    )
}