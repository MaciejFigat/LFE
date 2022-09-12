import React, { useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceUnderline,
  MainChoiceContainer,
  WrapperWindow,
} from './HomeChoiceWrapper.styled'
import HeroOne from '../HeroOne'
import HeroTwo from '../HeroTwo'
import HeroThree from '../HeroThree'

interface HomeChoiceWrapperProps {}

const HomeChoiceWrapper: React.FC<HomeChoiceWrapperProps> = () => {
  const tabs = [
    {
      label: 'Precyzyjne wyszukiwanie',
      content: <HeroOne />,
    },
    {
      label: 'Zapisywanie fragmentów',
      content: <HeroTwo />,
    },
    { label: 'Eksport projektów', content: <HeroThree /> },
  ]

  const [selectedTab, setSelectedTab] = useState(tabs[1])

  const tabHelper = (item: any) => {
    setSelectedTab(item)
    // if (item.label === 'Zapisane') {
    //   dispatch(showFragments(true))
    // }
    // if (item.label === 'Wyszukane') {
    //   dispatch(showFragments(false))
    // }
  }

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
                  {`${item.label}`}

                  {item.label === selectedTab.label && (
                    <ChoiceUnderline layoutId='under' />
                  )}
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
              {selectedTab ? selectedTab.content : ''}
            </motion.div>
          </AnimatePresence>
        </MainChoiceContainer>
      </WrapperWindow>
    </>
  )
}
export default HomeChoiceWrapper
