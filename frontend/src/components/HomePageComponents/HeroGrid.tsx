import React, { useEffect, useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import {
  HeroArticleBigSection,
  HeroArticleBottomBigSection,
  HeroArticleBottomSmallSection,
  HeroArticleSmallSection,
  HeroGridWrapper,
  HeroMainArticle,
  HeroMainContainer,
  HeroNavigation,
  HeroNavOneBig,
  HeroNavTwo,
} from './HeroSection.styled'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { UserInfo } from '../../interfaces'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceUnderline,
  MainChoiceContainer,
} from './HomeChoiceWrapper/HomeChoiceWrapper.styled'
import { HeroTwoFourth, HeroTwoMain, HeroTwoThird } from './HeroTwo'
import { RegularDiv } from '../../styles/misc.styled'
import HomeSearchResultsSmall from './HeroGridComponents.tsx/HomeSearchResultsSmall'
import HeroSearchButtons from './HeroGridComponents.tsx/HeroSearchButtons'
import HomeSearchBarPagination from './HeroGridComponents.tsx/HomeSearchBarPagination'
import CitationDisplay from './CitationDisplay'
import { editYHeroPosition } from '../../features/preferences/preferenceSlice'
import {
  HeroFragmentsDisplay,
  HeroSavedOne,
  HeroSavedTwo,
} from './HeroGridComponents.tsx/HeroSaved'
import { HeroExportMain } from './HeroGridComponents.tsx/HeroExport'
import VisitedLinks from '../Miscellaneous/VisitedLinks/VisitedLinks'
import PupupEditWindow from '../DragAndDropProject/PopupEditWindow/PupupEditWindow'
import HeroChoiceWrapper from '../FragmentsColumn/SharedChoiceWrapper/HeroChoiceWrapper'
import HeroSortingOptions from '../FragmentsColumn/FilterWrapper/HeroSortingOptions'

interface HeroGridProps {}

const HeroGrid: React.FC<HeroGridProps> = () => {
  const dispatch = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  const idOpenFragment = useAppSelector(
    (state) => state.preference.idOpenFragment
  )
  //* I will pass the scrollTop of the element to use if for correct HighlightPopMenu positioning

  const scrollPosition = document.querySelector('.scrollPosition')

  useEffect(() => {
    const dispatchHelper = () => {
      if (scrollPosition) {
        dispatch(editYHeroPosition(Math.floor(scrollPosition?.scrollTop)))
      }
    }

    window.addEventListener('mousedown', dispatchHelper)
    return () => {
      window.removeEventListener('mousedown', dispatchHelper)
    }
  }, [scrollPosition?.scrollTop, dispatch, scrollPosition])
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
      content: <HeroTwoFourth />,
      secondaryContent: (
        <>
          {Object.keys(userInfo).length > 0 && userInfo.status === 'Active' ? (
            <>
              <HeroFragmentsDisplay />
            </>
          ) : (
            <CitationDisplay />
          )}
        </>
      ),
      tertiaryContent: (
        <>
          {Object.keys(userInfo).length > 0 && userInfo.status === 'Active' ? (
            <HeroSortingOptions />
          ) : (
            <RegularDiv>
              <HeroSavedOne />
            </RegularDiv>
          )}
        </>
      ),
      quaternaryContent: (
        <RegularDiv>
          <HeroSearchButtons />
        </RegularDiv>
      ),
      pentanaryContent: (
        <>
          {Object.keys(userInfo).length > 0 && userInfo.status === 'Active' ? (
            <HeroChoiceWrapper />
          ) : (
            <RegularDiv>
              <HeroSavedTwo />
            </RegularDiv>
          )}
        </>
      ),
    },
    {
      label: 'Eksportuj',
      content: (
        <>
          {Object.keys(userInfo).length > 0 && userInfo.status === 'Active' ? (
            <h1>userFragments</h1>
          ) : (
            <CitationDisplay wide />
          )}
        </>
      ),
      secondaryContent: <VisitedLinks />,
      // ! here I will differentiate between logged users and not registered ones (ie. link to fragment management )
      tertiaryContent: <>Ostatnio przeglądane</>,
      quaternaryContent: <HeroExportMain />,
    },
  ]

  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const tabHelper = (item: any) => {
    setSelectedTab(item)
  }

  return (
    <>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {idOpenFragment !== '' && (
            <PupupEditWindow
              idOpen={idOpenFragment}
              openedApp={idOpenFragment}
            />
          )}
        </AnimatePresence>{' '}
        {/* <UserFragmentsByKeyword /> */}
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
            <HeroNavTwo>
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
            </HeroNavTwo>
          </HeroNavigation>

          <HeroMainContainer>
            <HeroMainArticle>
              <HeroArticleBigSection className='scrollPosition'>
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
            {/* <HeroMainArticle></HeroMainArticle> */}
            {/* <HeroMainArticle></HeroMainArticle> */}
          </HeroMainContainer>
        </HeroGridWrapper>
      </AnimateSharedLayout>
    </>
  )
}
export default HeroGrid
