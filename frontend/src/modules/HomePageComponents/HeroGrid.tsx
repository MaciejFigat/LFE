import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
  HeroNavTwo
} from './HeroSection.styled'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { UserInfo } from '../../interfaces'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceUnderline,
  MainChoiceContainer
} from './HomeChoiceWrapper/HomeChoiceWrapper.styled'
import { HeroTwoFourth, HeroTwoMain, HeroTwoThird } from './HeroTwo'
import { HorizontalWrapper, RegularDiv } from '../../styles/misc.styled'
import HomeSearchResultsSmall from './HeroGridComponents/HomeSearchResultsSmall'
import HeroSearchButtons from './HeroGridComponents/HeroSearchButtons'
import HomeSearchBarPagination from './HeroGridComponents/HomeSearchBarPagination'
import CitationDisplay from './CitationDisplay'
import { editYHeroPosition } from '../../features/preferences/preferenceSlice'
import {
  HeroFragmentsDisplay,
  HeroSavedOne,
  HeroSavedTwo
} from './HeroGridComponents/HeroSaved'
import { HeroExportMain } from './HeroGridComponents/HeroExport'
import VisitedLinks from '../../components/VisitedLinks/VisitedLinks'
import PupupEditWindow from '../DragAndDropProject/PopupEditWindow/PupupEditWindow'
import HeroChoiceWrapper from '../Fragments/SharedChoiceWrapper/HeroChoiceWrapper'
import HeroSortingOptions from '../Fragments/FilterWrapper/HeroSortingOptions'
import SelectMainKeyword from '../KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
import HeroProjectExport from './HeroGridComponents/HeroProjectExport'
import UserFragmentsByKeywordHero from '../Fragments/UserFragmentsByKeywordHero'
import HeroProjectCategories from './HeroGridComponents/HeroProjectCategories'
import HeroProjectButtons from './HeroGridComponents/HeroProjectButtons'
import HeroChangeDetail from './HeroGridComponents/HeroChangeDetail'
import { AppDispatch } from '../../app/store'
import { HeroDesktop } from '../../layout/layout.styled'

interface HeroGridProps {}

const HeroGrid: React.FC<HeroGridProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)

  const idOpenFragment = useAppSelector(
    state => state.preference.idOpenFragment
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
      )
    },
    {
      label: 'Zapisz',
      content: <HeroTwoFourth />,
      secondaryContent: (
        <>
          {Object.keys(userInfo).length > 0 &&
          (userInfo.status === 'Active' || userInfo.status === 'Pending') ? (
            <>
              <HeroFragmentsDisplay />
            </>
          ) : (
            <CitationDisplay />
          )}
        </>
      ),
      //? upper right corner
      tertiaryContent: (
        <>
          {Object.keys(userInfo).length > 0 &&
          (userInfo.status === 'Active' || userInfo.status === 'Pending') ? (
            <HeroSortingOptions />
          ) : (
            <RegularDiv>
              <HeroSavedOne />
            </RegularDiv>
          )}
        </>
      ),
      //? lower left corner
      quaternaryContent: (
        <RegularDiv>
          <HeroSearchButtons />
        </RegularDiv>
      ),
      //? lower right corner
      pentanaryContent: (
        <>
          {Object.keys(userInfo).length > 0 &&
          (userInfo.status === 'Active' || userInfo.status === 'Pending') ? (
            <HeroChoiceWrapper />
          ) : (
            <RegularDiv>
              <HeroSavedTwo />
            </RegularDiv>
          )}
        </>
      )
    },
    {
      label: 'Eksportuj',
      content: (
        <>
          {Object.keys(userInfo).length > 0 &&
          (userInfo.status === 'Active' || userInfo.status === 'Pending') ? (
            <UserFragmentsByKeywordHero />
          ) : (
            <CitationDisplay wide />
          )}
        </>
      ),
      secondaryContent: (
        <>
          {Object.keys(userInfo).length > 0 &&
          (userInfo.status === 'Active' || userInfo.status === 'Pending') ? (
            <HeroProjectCategories />
          ) : (
            <VisitedLinks />
          )}
        </>
      ),

      //? upper right corner
      tertiaryContent: (
        <>
          {' '}
          {Object.keys(userInfo).length > 0 &&
          (userInfo.status === 'Active' || userInfo.status === 'Pending') ? (
            <SelectMainKeyword />
          ) : null}
        </>
      ),
      //? lower left corner
      quaternaryContent: (
        <>
          {' '}
          {Object.keys(userInfo).length > 0 &&
          (userInfo.status === 'Active' || userInfo.status === 'Pending') ? (
            <>
              <HeroProjectButtons />
            </>
          ) : null}
        </>
      ),
      //? lower right corner
      pentanaryContent: (
        <>
          {Object.keys(userInfo).length > 0 &&
          (userInfo.status === 'Active' || userInfo.status === 'Pending') ? (
            <HorizontalWrapper>
              {' '}
              <HeroChangeDetail />
              <HeroProjectExport />
            </HorizontalWrapper>
          ) : (
            <HeroExportMain />
          )}
        </>
      )
    }
  ]

  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const tabHelper = (item: any) => {
    setSelectedTab(item)
  }

  return (
    <HeroDesktop>
      {idOpenFragment !== '' && <PupupEditWindow />}

      <HeroGridWrapper>
        <HeroNavigation>
          <HeroNavOneBig>
            {' '}
            <RegularDiv>
              {' '}
              <ChoiceNav amount={tabs.length}>
                <>
                  <ChoiceList>
                    {tabs.map(item => (
                      <ChoiceItem
                        key={item.label}
                        className={
                          item.label === selectedTab.label ? 'selected' : ''
                        }
                        onClick={() => tabHelper(item)}
                      >
                        <b>{`${item.label}`}</b>

                        {item.label === selectedTab.label && (
                          <ChoiceUnderline layoutId='underMain' />
                        )}
                      </ChoiceItem>
                    ))}
                  </ChoiceList>
                </>
              </ChoiceNav>{' '}
            </RegularDiv>
          </HeroNavOneBig>{' '}
          <HeroNavTwo>
            {selectedTab ? selectedTab.tertiaryContent : null}
          </HeroNavTwo>
        </HeroNavigation>

        <HeroMainContainer>
          <HeroMainArticle>
            <HeroArticleBigSection className='scrollPosition'>
              <MainChoiceContainer>
                <AnimatePresence mode='wait'>
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
              <AnimatePresence mode='wait'>
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
              <AnimatePresence mode='wait'>
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
              <AnimatePresence mode='wait'>
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
        </HeroMainContainer>
      </HeroGridWrapper>
    </HeroDesktop>
  )
}
export default HeroGrid
