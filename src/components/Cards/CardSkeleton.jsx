import Skeleton from "react-loading-skeleton"
import { motion } from "framer-motion"

export const CardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Skeleton
        width={222}
        height={222}
      />
      <div className="p-2">
        <div className="d-flex space-between mt-1">
          <Skeleton width={60} />
          <div className="ms-auto">
            <Skeleton width={15} />
          </div>
        </div>
        <Skeleton width={204} />
        <br />
        <Skeleton width={122} />
      </div>
    </motion.div>
  )
}
