import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import VisitedLinks from '../../Miscellaneous/VisitedLinks/VisitedLinks'
import FilterWrapper from '../FilterWrapper/FilterWrapper'
import { showFragments } from '../../../features/preferences/preferenceSlice'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceUnderline,
  MainChoiceContainer,
  WrapperWindow,
} from './SharedChoiceWrapper.styled'
import { SendButtonVerySmall } from '../../Miscellaneous/Buttons/Buttons.styled'
import Pagination from '../../Miscellaneous/Pagination/Pagination'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'

interface SharedChoiceWrapperProps {}

const SharedChoiceWrapper: React.FC<SharedChoiceWrapperProps> = () => {
  const dispatch = useAppDispatch()

  const numberOfResults: number | undefined = useAppSelector(
    (state) => state.searchResult.searchResults.data.length
  )

  const tabs = [
    {
      label: 'Zapisane',
      icon: <SvgIcon variant='save' noContent />,
      // icon: <SvgIcon variant='save' contentAfter='zapisane' toBottom />,
      content: (
        <>
          {' '}
          <FilterWrapper />
        </>
      ),
    },
    {
      label: 'Wyszukane',
      icon: <SvgIcon variant='search' noContent />,
      // icon: <SvgIcon variant='search' contentAfter='wyszukane' toBottom />,
      content: (
        <>
          <SendButtonVerySmall variant='primaryEmpty'>
            Ilość wyników wyszukiwania: {numberOfResults && numberOfResults}
          </SendButtonVerySmall>{' '}
          <Pagination narrow />
        </>
      ),
    },
    {
      label: 'Przeglądane',
      icon: <SvgIcon variant='eye' noContent />,
      // icon: <SvgIcon variant='eye' contentAfter='przeglądane' toBottom />,
      content: <VisitedLinks />,
    },
  ]

  const [selectedTab, setSelectedTab] = useState(tabs[1])

  const tabHelper = (item: any) => {
    setSelectedTab(item)
    if (item.label === 'Zapisane') {
      dispatch(showFragments(true))
    }
    if (item.label === 'Wyszukane') {
      dispatch(showFragments(false))
    }
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
                  {/* {`${item.label}`} */}
                  {item.icon}
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
export default SharedChoiceWrapper
