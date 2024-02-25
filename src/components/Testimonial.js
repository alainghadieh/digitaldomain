import { useTypeWriter } from "hooks/useTypeWriter";

export function Testimonial(props) {
    const {reviewerName, jobTitle, avatar, alt, review} = props;
    return(
        <div className="p-8 card">
            <p className="leading-loose text-spindle-100">
            {/* {useTypeWriter({
    texts: [review],
    delay: 10,
    infinite: false,
  })} */}
              {review}
            </p>
            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src={avatar}
                alt={alt}
              />
              <div className="mx-4">
                <h6>{reviewerName}</h6>
                <span className="text-sm text-spindle-100">
                  {jobTitle}
                </span>
              </div>
            </div>
          </div>
    )
}