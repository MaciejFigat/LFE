import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceUnderline,
  MainChoiceContainer,
  WrapperWindow,
} from './SharedChoiceWrapper.styled'

interface SharedChoiceWrapperProps {}

const SharedChoiceWrapper: React.FC<SharedChoiceWrapperProps> = () => {
  const tabs = [
    { label: 'one', icon: '😋' },
    { label: 'two', icon: '😋😋' },
    { label: 'three', icon: '😋😋😋' },
  ]
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const [isSelectedOne, setIsSelectedOne] = useState(false)
  const [isSelectedTwo, setIsSelectedTwo] = useState(false)
  const [isSelectedThree, setIsSelectedThree] = useState(false)
  // const selectedHelper = () => {
  //   setIsSelectedOne((isSelectedOne) => !isSelectedOne)
  //   setIsSelectedTwo((isSelectedTwo) => !isSelectedTwo)
  //   setIsSelectedThree((isSelectedThree) => !isSelectedThree)
  // }
  const tabHelper = (item: any) => {
    setSelectedTab(item)
    // selectedHelper()
  }
  // const spring = {
  //   type: 'spring',
  //   stiffness: 500,
  //   damping: 320,
  //   duration: 1.4,
  // }
  // useEffect(() => {
  //   if (selectedTab === tabs[0]) {
  //     setIsSelectedOne(true)
  //     setIsSelectedTwo(false)
  //     setIsSelectedThree(false)
  //   }
  //   if (selectedTab === tabs[1]) {
  //     setIsSelectedOne(false)
  //     setIsSelectedTwo(true)
  //     setIsSelectedThree(false)
  //   }
  //   if (selectedTab === tabs[2]) {
  //     setIsSelectedOne(false)
  //     setIsSelectedTwo(false)
  //     setIsSelectedThree(true)
  //   }
  // }, [selectedTab, tabs])

  return (
    <>
      <WrapperWindow>
        <ChoiceNav>
          <AnimateSharedLayout>
            <ChoiceList>
              {tabs.map((item) => (
                <ChoiceItem
                  key={item.label}
                  className={item.label === selectedTab.label ? 'selected' : ''}
                  onClick={() => tabHelper(item)}
                >
                  {`${item.icon} ${item.label}`}
                  {/* {item.label === selectedTab.label ? (
                  <ChoiceUnderline layoutId='under' transition={spring} />
                  <motion.div className='underOn' layoutId='under' />
                ) :  null} */}
                  {/* transition={spring}
                 <motion.div className='underOff' layoutId='under' />
                 <motion.div layoutId='under' /> */}

                  {item.label === selectedTab.label && (
                    <motion.div className='underline' layoutId='underline' />
                  )}
                  {item.label === selectedTab.label && (
                    <motion.div
                      className='underlineTwo'
                      layoutId='underlineTwo'
                    />
                  )}
                  {/* {item.label === selectedTab.label && isSelectedOne ? (
                  <motion.div className='under' layoutId='undermeishell' />
                ) : null} */}
                  {/* {isSelectedTwo ? (
                  <motion.div className='under' layoutId='www' />
                ) : null} */}
                  {/* {isSelectedThree ? (
                  <motion.div className='under' layoutId='www' />
                ) : null} */}
                </ChoiceItem>
              ))}
            </ChoiceList>
          </AnimateSharedLayout>
        </ChoiceNav>
        <MainChoiceContainer>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.label : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.icon : '😋'}
            </motion.div>
          </AnimatePresence>
        </MainChoiceContainer>
      </WrapperWindow>
    </>
  )
}
export default SharedChoiceWrapper
