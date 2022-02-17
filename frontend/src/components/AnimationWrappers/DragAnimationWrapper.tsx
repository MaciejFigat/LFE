import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface DragAnimationWrapperProps {
  children: ReactNode
  constraintsRef: any
}
// Usage

/* import React, { useRef } from 'react'
  const constraintsRef = useRef(null)
   */

/*<Container useRef={constraintsRef}></Container>
  /* <DragAnimationWrapper constraintsRef={constraintsRef}>
        ddd.
      </DragAnimationWrapper> */

const DragAnimationWrapper: React.FC<DragAnimationWrapperProps> = ({
  children,
  constraintsRef,
}) => {
  return (
    <motion.div
      drag
      // dragConstraints={{
      //   top: -20,
      //   left: -20,
      //   right: 20,
      //   bottom: 20,
      // }}
      dragConstraints={constraintsRef}
    >
      {children}
    </motion.div>
  )
}
export default DragAnimationWrapper
