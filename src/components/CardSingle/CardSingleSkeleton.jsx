import { motion } from "framer-motion"
import Skeleton from 'react-loading-skeleton'

export const CardSingleSkeleton = () => {
  return (
    <motion.div
      className="card-single"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="">
        <div className="d-flex gap-3">
          <div className="">
            <Skeleton width={170} height={150}/>
            <Skeleton width={170} height={150}/>
            <Skeleton width={170} height={150}/>
          </div>
          <Skeleton width={466} height={460}/>
        </div>
        <div className="card-single__content">
          <Skeleton/>
          <Skeleton width={391} height={56}/>
          <Skeleton width={463} height={142}/>
        </div>
      </div>
    </motion.div>
  )
}
