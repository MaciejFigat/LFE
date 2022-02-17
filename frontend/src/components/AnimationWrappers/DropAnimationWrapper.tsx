import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface DropAnimationWrapperProps {
  children?: ReactNode
  delay?: 1 | 2 | 3
  direction?: 'left' | 'right' | 'top'
}

const DropAnimationWrapper: React.FC<DropAnimationWrapperProps> = ({
  children,
  delay,
  direction,
}) => {
  return (
    <AnimatePresence>
      {!direction && !delay && (
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.9,
            damping: 20,
          }}
        >
          {children}
        </motion.div>
      )}
      {!direction && delay === 1 && (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.9,
            damping: 20,
          }}
        >
          {children}
        </motion.div>
      )}
      {!direction && delay === 2 && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.9,
            damping: 20,
          }}
        >
          {children}
        </motion.div>
      )}
      {!direction && delay === 3 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 0.9,
            damping: 20,
          }}
        >
          {children}
        </motion.div>
      )}
      {direction === 'left' && (
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 0.9,
            damping: 20,
          }}
        >
          {children}
        </motion.div>
      )}
      {direction === 'right' && (
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.9,
            damping: 20,
          }}
        >
          {children}
        </motion.div>
      )}
      {direction === 'top' && (
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.9,
            damping: 30,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default DropAnimationWrapper
