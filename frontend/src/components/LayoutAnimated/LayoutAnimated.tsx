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
  const [title, setTitle] = useState<string>('')
  // const [description, setDescription] = useState<string>('')
  // const [id, setId] = useState<string>('')
  // const [set, setDescription] = useState<string>('')
  // const [title, setTitle] = useState<string>('')
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
  const openWindowHandler = (id: string, title: string) => {
    if (canOpenApp) {
      setOpenedApp(id)
      setTitle(title)
    }
  }
  return (
    <AnimationContainer>
      <LayoutDivWrapper>
        <AnimateSharedLayout type='crossfade'>
          {testFrag.map((app, index) => (
            // {children?.map((app: any, index: any) => (
            <ClosedLayoutDiv key={app.id} layoutId={app.id.toString()}>
              {app.title}

              <OpenDivButton
                onClick={() => openWindowHandler(app.id, app.title)}
              />
            </ClosedLayoutDiv>
          ))}
          <AnimatePresence>
            {openedApp && (
              <>
                {/* <OpenedLayoutDiv layoutId={openedApp.toString()}> */}
                <OpenedLayoutDiv layoutId={openedApp.toString()}>
                  {title}
                </OpenedLayoutDiv>
                <ClosingDiv
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ ease: 'linear' }}
                  onClick={() => onClickCloseHelper()}
                />
              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </LayoutDivWrapper>
    </AnimationContainer>
  )
}
export default LayoutAnimated
