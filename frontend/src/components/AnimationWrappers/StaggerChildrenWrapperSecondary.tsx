import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface StaggerChildrenWrapperSecondaryProps {
  children?: ReactNode
}

//todo  both Parent and Child are a (motion.div)

// <Child1 variants={dropUpVariants}></Child1>
// <Child2 variants={dropUpVariants}></Child2>

// const dropUpVariants = {
//     hidden: {
//       y: -10,
//       opacity: 0,
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         stiffness: 100,
//         mass: 0.3,
//       },
//     },
//   }

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.12, // this will set the time inbetween children animation
    },
  },
}

const StaggerChildrenWrapperSecondary: React.FC<
  StaggerChildrenWrapperSecondaryProps
> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {children}
      </motion.div>
      )
    </AnimatePresence>
  )
}
export default StaggerChildrenWrapperSecondary
