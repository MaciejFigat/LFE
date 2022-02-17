import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface FadeInAnimationWrapperProps {
  children?: ReactNode
  delay?: 'normal' | 'medium' | 'long' | 'bottom'
}

const sideVariants = {
  closed: {
    opacity: 0,
    transition: {
      delay: 0.3,
      duration: 0.9,
    },
  },
  open: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.9,
    },
  },
}
const slideBottomVariants = {
  closed: {
    opacity: 0,
    y: 150,
    transition: {
      delay: 0.3,
      duration: 0.9,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.9,
    },
  },
}
const longVariants = {
  closed: {
    opacity: 0,
    y: 0,
    transition: {
      delay: 1.3,
      duration: 0.9,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.3,
      duration: 0.9,
    },
  },
}

const FadeInAnimationWrapper: React.FC<FadeInAnimationWrapperProps> = ({
  children,
  delay,
}) => {
  return (
    <>
      {!delay && (
        <AnimatePresence>
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={sideVariants}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
      {delay && delay === 'bottom' && (
        <AnimatePresence>
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={slideBottomVariants}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
      {delay && delay === 'long' && (
        <AnimatePresence>
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={longVariants}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}
export default FadeInAnimationWrapper
