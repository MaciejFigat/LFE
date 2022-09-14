import React, { useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceTitleContainer,
  ChoiceUnderline,
  MainChoiceContainer,
  WrapperWindow,
} from './HomeChoiceWrapper.styled'
import HeroOne from '../HeroOne'
import HeroTwo from '../HeroTwo'
import HeroThree from '../HeroThree'
import { HeroTitle } from '../HeroSection.styled'
import { titleSvg } from '../HeroSectionSVGS/Title'

interface HomeChoiceWrapperProps {}

const HomeChoiceWrapper: React.FC<HomeChoiceWrapperProps> = () => {
  const tabs = [
    {
      label: 'Wyszukiwanie',
      content: <HeroOne />,
    },
    {
      label: 'Zapisywanie',
      content: <HeroTwo />,
    },
    {
      label: 'Eksport',
      content: <HeroThree />,
    },
  ]

  const [selectedTab, setSelectedTab] = useState(tabs[1])

  const tabHelper = (item: any) => {
    setSelectedTab(item)
  }

  return (
    <>
      <WrapperWindow>
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
        <ChoiceNav>
          <AnimateSharedLayout>
            <ChoiceList>
              {tabs.map((item) => (
                <ChoiceItem
                  key={item.label}
                  className={item.label === selectedTab.label ? 'selected' : ''}
                  onClick={() => tabHelper(item)}
                >
                  <b>{`${item.label}`}</b>

                  {item.label === selectedTab.label && (
                    <ChoiceUnderline layoutId='under' />
                  )}
                </ChoiceItem>
              ))}
            </ChoiceList>
          </AnimateSharedLayout>
        </ChoiceNav>
        <ChoiceTitleContainer>
          <HeroTitle>{titleSvg}</HeroTitle>
        </ChoiceTitleContainer>
      </WrapperWindow>
    </>
  )
}
export default HomeChoiceWrapper
