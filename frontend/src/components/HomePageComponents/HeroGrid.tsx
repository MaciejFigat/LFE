import React, { useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import HeroWelcome from './HeroGridComponents.tsx/HeroWelcome'
import HomeSearchBarOnly from './HeroGridComponents.tsx/HomeSearchBarOnly'
import HomeSearchSample from './HeroGridComponents.tsx/HomeSearchSample'
import {
  HeroArticleBigSection,
  HeroArticleBottomBigSection,
  HeroArticleBottomSmallSection,
  HeroArticleSmallSection,
  HeroGridWrapper,
  HeroMainArticle,
  HeroMainContainer,
  HeroNavigation,
  HeroNavOne,
  HeroNavTwo,
} from './HeroSection.styled'
import { useAppSelector } from '../../app/reduxHooks'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceUnderline,
  MainChoiceContainer,
} from './HomeChoiceWrapper/HomeChoiceWrapper.styled'
import { HeroTwoMain, HeroTwoSecond } from './HeroTwo'
import { HeroThreeMain, HeroThreeSecond, HeroThreeThird } from './HeroThree'

interface HeroGridProps {
  //   children: ReactChild
}
// {data && data?.length === 0 && <HeroWelcome />}
const tabs = [
  {
    label: 'Wyszukaj',
    content: (
      <>
        <HeroWelcome />
      </>
    ),
    secondaryContent: <>Wystarczy tylko email</>,
  },
  {
    label: 'Zapisz',
    content: (
      <>
        <HeroTwoMain />
      </>
    ),
    secondaryContent: (
      <>
        <HeroTwoSecond />
      </>
    ),
  },
  {
    label: 'Eksportuj',
    content: <HeroThreeMain />,
    secondaryContent: <HeroThreeSecond />,
    // ! here I will differentiate between logged users and not registered ones (ie. link to fragment management )
    tertiaryContent: <HeroThreeThird />,
  },
]

const HeroGrid: React.FC<HeroGridProps> = () => {
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  const { data, query } = searchResults

  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const tabHelper = (item: any) => {
    setSelectedTab(item)
  }
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        <HeroNavOne>
          <HomeSearchSample />
        </HeroNavOne>
        <HeroNavOne>
          {' '}
          <HomeSearchBarOnly />
        </HeroNavOne>
        <HeroNavTwo> </HeroNavTwo>
        <HeroNavTwo> </HeroNavTwo>
      </HeroNavigation>

      <HeroMainContainer>
        <HeroMainArticle>
          <HeroArticleBigSection>
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
          </HeroArticleBigSection>
          <HeroArticleSmallSection>
            {' '}
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? selectedTab.secondaryContent : ''}
              </motion.div>
            </AnimatePresence>
          </HeroArticleSmallSection>
          <HeroArticleBottomBigSection>
            {' '}
            <ChoiceNav amount={tabs.length}>
              <AnimateSharedLayout>
                <ChoiceList>
                  {tabs.map((item) => (
                    <ChoiceItem
                      key={item.label}
                      className={
                        item.label === selectedTab.label ? 'selected' : ''
                      }
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
            </ChoiceNav>{' '}
          </HeroArticleBottomBigSection>
          <HeroArticleBottomSmallSection>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? selectedTab.tertiaryContent : ''}
              </motion.div>
            </AnimatePresence>
          </HeroArticleBottomSmallSection>
        </HeroMainArticle>
        <HeroMainArticle></HeroMainArticle>
        <HeroMainArticle></HeroMainArticle>
      </HeroMainContainer>
    </HeroGridWrapper>
  )
}
export default HeroGrid
