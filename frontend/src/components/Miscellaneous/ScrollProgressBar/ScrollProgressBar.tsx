import { motion, useViewportScroll, useTransform } from 'framer-motion'

const ScrollProgressBar = () => {
  const { scrollYProgress } = useViewportScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['52%', '100%'])
  const testHandler = () => {
    console.log(scrollYProgress)
  }

  return (
    <motion.div
      style={{
        zIndex: 100,
        width,
        height: '334px',
        backgroundColor: 'blue',
        position: 'fixed',
        top: 0,
        left: 0
      }}
      onClick={() => testHandler()}
    />
  )
}

export default ScrollProgressBar
