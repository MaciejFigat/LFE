import React, { useState } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import { UserInfo } from '../../../interfaces'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceTitleContainer,
  ChoiceUnderline,
  MainChoiceContainer,
  WrapperWindow
} from './HomeChoiceWrapper.styled'
import {
  HeroTitle,
  HeroWrapperColumns,
  HeroWrapperRow
} from '../HeroSection.styled'
import { titleSvg } from '../HeroSectionSVGS/Title'

import { NavLink } from 'react-router-dom'
import { ButtonMedium } from '../../../components/ButtonsSend/BigButton.styled'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import { HorizontalWrapperSpace } from '../../../styles/misc.styled'

interface HomeChoiceWrapperProps {
  tabs: { label: string; content: any }[]
  navTop?: boolean
}

const HomeChoiceWrapper: React.FC<HomeChoiceWrapperProps> = ({
  tabs,
  navTop
}) => {
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const tabHelper = (item: any) => {
    setSelectedTab(item)
  }

  return (
    <>
      <WrapperWindow>
        <ChoiceTitleContainer navTop={navTop}>
          <HeroWrapperColumns>
            <HeroTitle>{titleSvg}</HeroTitle>
          </HeroWrapperColumns>
          {Object.keys(userInfo).length === 0 && (
            <HeroWrapperRow>
              <h3>Nie masz jeszcze konta?</h3>

              <ButtonMedium variant='primary'>
                <NavLink to='/register'>
                  <HorizontalWrapperSpace>
                    Zarejestruj się &nbsp;
                    <SvgIcon
                      variant='chevronRight'
                      noContent
                      lowerPosition='3px'
                    />
                  </HorizontalWrapperSpace>
                </NavLink>
              </ButtonMedium>
            </HeroWrapperRow>
          )}
        </ChoiceTitleContainer>
        <ChoiceNav navTop={navTop} amount={tabs.length}>
          <AnimateSharedLayout>
            <ChoiceList>
              {tabs.map(item => (
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
        <MainChoiceContainer navTop={navTop}>
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
