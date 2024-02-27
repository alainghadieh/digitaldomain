import {motion} from 'framer-motion'
export function PortfolioCard(props) {
  const { name, detail, images, url } = props;
  return (
    <div className={`flex items-end overflow-hidden lg:bg-cover sm:bg-contain bg-center ${images} bg-no-repeat lg:h-screen h-96 card`}>
      <motion.div initial={{}} className="w-full px-8 py-4 overflow-hidden backdrop-blur-sm bg-spindle-800/60 flex justify-between flex-row align-items delay-200	">
        <div>
        <h2 className="mt-4 text-bermuda-50 tracking-tight">{name}</h2>
        <p className="mt-2 text-lg tracking-wider text-spindle-50 ">
          {detail}
        </p>
        </div>
          
        <a href={url} target='_blank' className="btn-primary w-auto h-fit mx-0 my-auto animate-none">visit site</a>
      </motion.div>
    </div>
  );
}
