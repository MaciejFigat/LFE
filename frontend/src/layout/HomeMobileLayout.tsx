import React, { useState } from 'react'
import {
  HeroMobile,
  MobileBigBox,
  MobileBox,
  MobileCompartments
} from './layout.styled'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import PupupEditWindow from '../modules/DragAndDropProject/PopupEditWindow/PupupEditWindow'
import { useAppSelector } from '../app/reduxHooks'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceUnderline
} from '../modules/HomePageComponents/HomeChoiceWrapper/HomeChoiceWrapper.styled'
import {
  HeroTwoMain,
  HeroTwoThird
} from '../modules/HomePageComponents/HeroTwo'
import HomeSearchBarPagination from '../modules/HomePageComponents/HeroGridComponents/HomeSearchBarPagination'
import {
  HorizontalLineBottomLight,
  HorizontalWrapperMobile,
  RelativeWrapper
} from '../styles/misc.styled'
import HeroSearchButtons from '../modules/HomePageComponents/HeroGridComponents/HeroSearchButtons'
import HomeSearchResultsSmall from '../modules/HomePageComponents/HeroGridComponents/HomeSearchResultsSmall'

import SvgIcon from '../components/SvgIcon/SvgIcon'
import { ButtonVerySmall } from '../components/Buttons/Buttons.styled'
import UserFragmentsByKeywordHero from '../modules/FragmentsColumn/UserFragmentsByKeywordHero'
import HeroProjectCategories from '../modules/HomePageComponents/HeroGridComponents/HeroProjectCategories'
import SelectMainKeyword from '../modules/KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
import HeroProjectButtons from '../modules/HomePageComponents/HeroGridComponents/HeroProjectButtons'
import HeroChangeDetail from '../modules/HomePageComponents/HeroGridComponents/HeroChangeDetail'
import HeroProjectExport from '../modules/HomePageComponents/HeroGridComponents/HeroProjectExport'

interface HomeMobileLayoutProps {}

const HomeMobileLayout: React.FC<HomeMobileLayoutProps> = () => {
  const idOpenFragment = useAppSelector(
    state => state.preference.idOpenFragment
  )
  const tabs = [
    {
      label: 'Wyszukaj',
      content: <HeroTwoMain />,
      secondaryContent: <HomeSearchResultsSmall />,
      tertiaryContent: <HomeSearchBarPagination />,
      quaternaryContent: <HeroSearchButtons />,
      pentanaryContent: <HeroTwoThird />
    },

    {
      label: 'Eksportuj',
      content: <UserFragmentsByKeywordHero />,
      secondaryContent: <HeroProjectCategories />,

      tertiaryContent: (
        <HorizontalWrapperMobile>
          {' '}
          <SelectMainKeyword />
          <HeroProjectExport />
        </HorizontalWrapperMobile>
      ),

      quaternaryContent: <HeroProjectButtons />,

      pentanaryContent: <HeroChangeDetail />
    }
  ]
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const [viewSideColumn, setViewSideColumn] = useState<boolean>(false)

  const tabHelper = (item: any) => {
    setSelectedTab(item)
  }
  return (
    <HeroMobile>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {idOpenFragment !== '' && (
            <PupupEditWindow
              idOpen={idOpenFragment}
              openedApp={idOpenFragment}
            />
          )}
        </AnimatePresence>{' '}
        <ChoiceNav amount={tabs.length}>
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
        </ChoiceNav>{' '}
        <HorizontalLineBottomLight />
        {selectedTab ? (
          <MobileBox>{selectedTab.tertiaryContent}</MobileBox>
        ) : null}
        <HorizontalLineBottomLight />
        {selectedTab ? (
          <MobileCompartments>
            <ButtonVerySmall
              variant='primaryEmpty'
              onClick={() =>
                setViewSideColumn(viewSideColumn => !viewSideColumn)
              }
            >
              <RelativeWrapper top='5px'>
                {viewSideColumn ? (
                  <SvgIcon variant='bookOpen' />
                ) : (
                  <SvgIcon variant='book' />
                )}
              </RelativeWrapper>
            </ButtonVerySmall>{' '}
            <div>{selectedTab.quaternaryContent}</div>{' '}
            <div>{selectedTab.pentanaryContent}</div>
          </MobileCompartments>
        ) : null}
        <HorizontalLineBottomLight />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MobileBigBox>
              {selectedTab
                ? viewSideColumn
                  ? selectedTab.secondaryContent
                  : selectedTab.content
                : null}
            </MobileBigBox>
          </motion.div>
        </AnimatePresence>
      </AnimateSharedLayout>
    </HeroMobile>
  )
}
export default HomeMobileLayout
