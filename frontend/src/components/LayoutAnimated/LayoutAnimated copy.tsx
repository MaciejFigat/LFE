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
  // const [openedApp, setOpenedApp] = useState<null | number>(null)
  const [openedApp, setOpenedApp] = useState<null | string>(null)

  const onClickCloseHelper = () => {
    setOpenedApp(null)
    setCanOpenApp(false)
    setTimeout(() => {
      setCanOpenApp(true)
    }, 500)
  }

  const testFrag = [
    { id: '123d22123', title: 'one' },
    { id: '12333123', title: 'two' },
    { id: '123123233', title: 'three' },
    { id: '1231fdf23', title: 'four' },
  ]
  // const openedFrag = testFrag.filter((testFrag.id) => id === openedApp)
  return (
    <AnimationContainer>
      <LayoutDivWrapper>
        <AnimateSharedLayout type='crossfade'>
          {/* {[1, 2, 3, 4].map((app, index) => ( */}
          {testFrag.map((app, index) => (
            // {children?.map((app: any, index: any) => (
            <ClosedLayoutDiv key={app.id} layoutId={app.id.toString()}>
              <OpenDivButton
                onClick={() => canOpenApp && setOpenedApp(app.id)}
              />
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
