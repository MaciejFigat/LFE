import React, { ReactNode, useState } from 'react'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import {
  AnimationContainer,
  ClosedLayoutDiv,
  ClosingDiv,
  LayoutDivWrapper,
  OpenDivButton,
  OpenedLayoutDiv,
} from './LayoutAnimated.styled'

interface LayoutAnimatedProps {
  children?: ReactNode
}

const LayoutAnimated: React.FC<LayoutAnimatedProps> = ({ children }) => {
  const [canOpenApp, setCanOpenApp] = useState<boolean>(true)
  const [openedApp, setOpenedApp] = useState<null | number>(null)

  const onClickCloseHelper = () => {
    setOpenedApp(null)
    setCanOpenApp(false)
    setTimeout(() => {
      setCanOpenApp(true)
    }, 500)
  }
  return (
    <AnimationContainer>
      <LayoutDivWrapper>
        <AnimateSharedLayout>
          {[1, 2, 3, 4].map((app, index) => (
            // {children?.map((app: any, index: any) => (
            <ClosedLayoutDiv key={app} layoutId={app.toString()}>
              <OpenDivButton onClick={() => canOpenApp && setOpenedApp(app)}>
                {index}
              </OpenDivButton>
            </ClosedLayoutDiv>
          ))}
          <AnimatePresence>
            {openedApp && (
              <>
                <ClosingDiv
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ ease: 'linear' }}
                  onClick={() => onClickCloseHelper()}
                />
                <OpenedLayoutDiv
                  layoutId={openedApp.toString()}
                ></OpenedLayoutDiv>
              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </LayoutDivWrapper>
    </AnimationContainer>
  )
}
export default LayoutAnimated
