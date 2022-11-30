import React, { useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
// import HeroWelcome from './HeroGridComponents.tsx/HeroWelcome'

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
  HeroNavOneBig,
  // HeroNavTwo,
} from './HeroSection.styled'
import { useAppSelector } from '../../app/reduxHooks'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceUnderline,
  MainChoiceContainer,
} from './HomeChoiceWrapper/HomeChoiceWrapper.styled'
import { HeroTwoMain, HeroTwoSecond, HeroTwoThird } from './HeroTwo'
import { HeroThreeMain, HeroThreeSecond, HeroThreeThird } from './HeroThree'
import { RegularDiv } from '../../styles/misc.styled'

import HomeSearchResultsSmall from './HeroGridComponents.tsx/HomeSearchResultsSmall'
import HeroSearchButtons from './HeroGridComponents.tsx/HeroSearchButtons'
import HomeSearchBarPagination from './HeroGridComponents.tsx/HomeSearchBarPagination'
import SimpleResultDisplay from '../Miscellaneous/ResultDisplay/SimpleResultDisplay'

interface HeroGridProps {}

const HeroGrid: React.FC<HeroGridProps> = () => {
  const tabs = [
    {
      label: 'Wyszukaj',
      content: <HeroTwoMain />,
      secondaryContent: <HomeSearchResultsSmall />,
      tertiaryContent: <HomeSearchBarPagination />,
      quaternaryContent: (
        <RegularDiv>
          <HeroSearchButtons />
        </RegularDiv>
      ),
      pentanaryContent: (
        <RegularDiv>
          <HeroTwoThird />
        </RegularDiv>
      ),
    },
    {
      label: 'Zapisz',
      content: <SimpleResultDisplay />,
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

  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const tabHelper = (item: any) => {
    setSelectedTab(item)
  }
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        <HeroNavOneBig>
          {' '}
          <RegularDiv>
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
          </RegularDiv>
        </HeroNavOneBig>{' '}
        <HeroNavOne>
          {/* <AnimatePresence exitBeforeEnter> */}
          {/* <motion.div
              key={selectedTab ? selectedTab.label : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            > */}
          {selectedTab ? selectedTab.tertiaryContent : null}
          {/* </motion.div> */}
          {/* </AnimatePresence> */}
        </HeroNavOne>
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
                  {selectedTab ? selectedTab.content : null}
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
                {selectedTab ? selectedTab.secondaryContent : null}
              </motion.div>
            </AnimatePresence>
          </HeroArticleSmallSection>
          <HeroArticleBottomBigSection>
            {' '}
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? selectedTab.quaternaryContent : null}
              </motion.div>
            </AnimatePresence>
          </HeroArticleBottomBigSection>{' '}
          <HeroArticleBottomSmallSection>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? selectedTab.pentanaryContent : null}
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
