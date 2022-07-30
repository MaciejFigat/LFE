import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

  const tabHelper = (item: any) => {
    setSelectedTab(item)
  }
  // const spring = {
  //   type: 'spring',
  //   stiffness: 500,
  //   damping: 320,
  //   duration: 1.4,
  // }
  return (
    <>
      <WrapperWindow>
        <ChoiceNav>
          <ChoiceList>
            {tabs.map((item) => (
              <ChoiceItem
                key={item.label}
                className={item.label === selectedTab.label ? 'selected' : ''}
                onClick={() => tabHelper(item)}
              >
                {`${item.icon} ${item.label}`}
                {item.label === selectedTab.label ? (
                  // <ChoiceUnderline layoutId='under' transition={spring} />
                  <motion.div
                    className='underOn'
                    layoutId='under'
                    // transition={spring}
                  />
                ) : // <motion.div className='underOff' layoutId='under' />
                // <motion.div layoutId='under' />
                null}
              </ChoiceItem>
            ))}
          </ChoiceList>
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
