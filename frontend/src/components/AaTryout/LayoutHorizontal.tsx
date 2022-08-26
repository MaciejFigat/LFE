import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { AnimationContainer } from './LayoutHorizontal.styled'

interface LayoutHorizontalProps {}

const LayoutHorizontal: React.FC<LayoutHorizontalProps> = () => {
  const [canOpenApp, setCanOpenApp] = useState<boolean>(true)
  const [openedApp, setOpenedApp] = useState<null | number>(null)
  const closeApp = () => {
    setOpenedApp(null)
    setCanOpenApp(false)
    setTimeout(() => {
      setCanOpenApp(true)
    }, 500)
  }
  const onDragEnd = (event: any, info: any) => {
    if (info.offset.y < 0) closeApp()
  }
  const onClickCloseHelper = () => {
    setOpenedApp(null)
    setCanOpenApp(false)
    setTimeout(() => {
      setCanOpenApp(true)
    }, 500)
  }
  return (
    <AnimationContainer>
      <div className='wrapper'>
        <AnimateSharedLayout>
          {[1, 2, 3, 4].map((app, index) => (
            <motion.div
              className='app-icon__bg'
              key={app}
              layoutId={app.toString()}
              onClick={() => canOpenApp && setOpenedApp(app)}
            >
              {index}
            </motion.div>
          ))}
          <AnimatePresence>
            {openedApp && (
              <>
                <motion.div
                  className='app-opened'
                  layoutId={openedApp.toString()}
                  //   drag
                  //   dragConstraints={{
                  //     left: 0,
                  //     right: 0,
                  //     top: 0,
                  //     bottom: 0,
                  //   }}
                  //   dragElastic={0.03}
                  //   onDragEnd={onDragEnd}
                  onClick={() => onClickCloseHelper()}
                  //   whileTap={{
                  //     scale: 0.9,
                  //     borderRadius: '15px',
                  //   }}
                >
                  {' '}
                  Hello
                </motion.div>
                <motion.div
                  className='close-bar'
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ ease: 'linear' }}
                />
              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </AnimationContainer>
  )
}
export default LayoutHorizontal
