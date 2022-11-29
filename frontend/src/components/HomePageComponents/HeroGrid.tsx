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
import Pagination from '../Miscellaneous/Pagination/Pagination'
import HomeSearchResultsSmall from './HeroGridComponents.tsx/HomeSearchResultsSmall'
import HeroSearchButtons from './HeroGridComponents.tsx/HeroSearchButtons'

interface HeroGridProps {
  //   children: ReactChild
}

const HeroGrid: React.FC<HeroGridProps> = () => {
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  const { data, query } = searchResults

  const tabs = [
    {
      label: 'Wyszukaj',
      content: (
        <>{data && data?.length === 0 ? <HeroWelcome /> : <HeroTwoMain />}</>
      ),
      secondaryContent: (
        <>
          {data && data?.length === 0 ? (
            <HomeSearchSample />
          ) : (
            <HomeSearchResultsSmall />
          )}
        </>
      ),
      tertiaryContent: (
        <>
          {data && data?.length === 0 ? (
            <HomeSearchBarOnly />
          ) : (
            //! add a button that provides a choice to show Searchbar switch between
            <>
              <RegularDiv>
                <b>{`${query}: ${data.length} wyników`}</b>
              </RegularDiv>
              <Pagination narrow />
            </>
          )}{' '}
        </>
      ),
      quaternaryContent: (
        <>
          {data && data?.length === 0 ? null : (
            <RegularDiv>
              {' '}
              <HeroSearchButtons />
            </RegularDiv>
          )}
        </>
      ),
      pentanaryContent: (
        <>
          {data && data?.length === 0 ? null : (
            <RegularDiv>
              <HeroTwoThird />
            </RegularDiv>
          )}
        </>
      ),
    },
    {
      label: 'Zapisz',
      content: (
        <>{data && data?.length === 0 ? <HeroWelcome /> : <HeroTwoMain />}</>
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
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? selectedTab.quaternaryContent : ''}
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
                {selectedTab ? selectedTab.pentanaryContent : ''}
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
