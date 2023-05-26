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
import { HorizontalLineBottomLight } from '../styles/misc.styled'
import HeroSearchButtons from '../modules/HomePageComponents/HeroGridComponents/HeroSearchButtons'
import HomeSearchResultsSmall from '../modules/HomePageComponents/HeroGridComponents/HomeSearchResultsSmall'
import { ButtonSmall } from '../components/ButtonsSend/BigButton.styled'

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
      label: 'Zapisz',
      content: <HeroTwoMain />,
      secondaryContent: <>sdsdsd</>,
      //? upper right corner
      tertiaryContent: <>sdsdsdsd</>,
      //? lower left corner
      quaternaryContent: <>sdsds</>,
      //? lower right corner
      pentanaryContent: <>sdsdsd</>
    },
    {
      label: 'Eksportuj',
      content: <>COntent exportuj</>,
      secondaryContent: <>jjeje</>,

      //? upper right corner
      tertiaryContent: <>sdsd</>,
      //? lower left corner
      quaternaryContent: <>sdsd</>,
      //? lower right corner
      pentanaryContent: <>666</>
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
            <ButtonSmall
              version='primary'
              onClick={() =>
                setViewSideColumn(viewSideColumn => !viewSideColumn)
              }
            >
              View side
            </ButtonSmall>{' '}
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
