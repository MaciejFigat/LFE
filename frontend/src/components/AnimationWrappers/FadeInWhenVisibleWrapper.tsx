import React, { ReactNode, useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FadeInWhenVisibleWrapperProps {
  children: ReactNode
}

const FadeInWhenVisibleWrapper: React.FC<FadeInWhenVisibleWrapperProps> = ({
  children,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  }
  return (
    <>
      {' '}
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={variants}
      >
        {children}
      </motion.div>
    </>
  )
}
export default FadeInWhenVisibleWrapper
