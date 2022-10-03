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

interface SharedChoiceWrapperProps {}

const SharedChoiceWrapper: React.FC<SharedChoiceWrapperProps> = () => {
  const dispatch = useAppDispatch()

  const numberOfResults: number | undefined = useAppSelector(
    (state) => state.searchResult.searchResults.data.length
  )

  const tabs = [
    {
      label: 'Zapisane',
      content: (
        <>
          {' '}
          <FilterWrapper />
        </>
      ),
    },
    {
      label: 'Wyszukane',
      content: (
        <>
          <SendButtonVerySmall variant='primaryEmpty'>
            Displaying {numberOfResults && numberOfResults} search results
          </SendButtonVerySmall>{' '}
          <Pagination narrow />
        </>
      ),
    },
    { label: 'Przeglądane', content: <VisitedLinks /> },
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
                  {`${item.label}`}

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
