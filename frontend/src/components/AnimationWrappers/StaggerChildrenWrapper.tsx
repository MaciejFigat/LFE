import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface StaggerChildrenWrapperProps {
  children?: ReactNode
  delay?: 'rightFast' | 'leftSlow'
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
      delayChildren: 0.2,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
      delayChildren: 0.2,
    },
  },
}
const oneVariants = {
  closed: {
    transition: {
      staggerChildren: 0.6,
      staggerDirection: 1,
      delayChildren: 0.4,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.6,
      staggerDirection: 1,
      delayChildren: 0.4,
    },
  },
}
const twoVariants = {
  closed: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
      delayChildren: 0.2,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
      delayChildren: 0.2,
    },
  },
}
//  Warning - wrapper incomplete ---- To make it work You need to wrap the element within the children you want to animate and also set itemVariants
// const itemVariants = {
//     closed: {
//       opacity: 0,
//     },
//     open: { opacity: 1 },
//   }
/* <motion.div whileHover={{ scale: 1.075 }} variants={itemVariants}></motion.div> */
const StaggerChildrenWrapper: React.FC<StaggerChildrenWrapperProps> = ({
  children,
  delay,
}) => {
  return (
    <AnimatePresence>
      {delay && delay === 'leftSlow' && (
        <motion.div
          initial='closed'
          animate='open'
          exit='closed'
          variants={oneVariants}
        >
          {children}
        </motion.div>
      )}
      {delay && delay === 'rightFast' && (
        <motion.div
          initial='closed'
          animate='open'
          exit='closed'
          variants={twoVariants}
        >
          {children}
        </motion.div>
      )}
      {!delay && (
        <motion.div
          initial='closed'
          animate='open'
          exit='closed'
          variants={sideVariants}
        >
          {children}
        </motion.div>
      )}
      )
    </AnimatePresence>
  )
}
export default StaggerChildrenWrapper
