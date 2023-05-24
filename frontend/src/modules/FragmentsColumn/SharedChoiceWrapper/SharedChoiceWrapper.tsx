import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import VisitedLinks from '../../../components/VisitedLinks/VisitedLinks'
import FilterWrapper from '../FilterWrapper/FilterWrapper'
import { showFragments } from '../../../features/preferences/preferenceSlice'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceUnderline,
  MainChoiceContainer,
  WrapperWindow
} from './SharedChoiceWrapper.styled'
import { SendButtonVerySmall } from '../../../components/ButtonsSend/Buttons.styled'
import Pagination from '../../../components/Miscellaneous/Pagination/Pagination'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import { UserInfo } from '../../../interfaces'
import { AppDispatch } from '../../../app/store'

interface SharedChoiceWrapperProps {}

const SharedChoiceWrapper: React.FC<SharedChoiceWrapperProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)
  const citations = useAppSelector(state => state.fragment.citations)

  const numberOfResults: number | undefined = useAppSelector(
    state => state.searchResult.searchResults.data.length || undefined
  )

  const tabs = [
    {
      label: 'Zapisane',
      icon: <SvgIcon variant='save' noContent />,
      // icon: <SvgIcon variant='save' contentAfter='zapisane' toBottom />,
      content: (
        <>
          {Object.keys(userInfo).length > 0 && userInfo.status === 'Active' ? (
            <FilterWrapper />
          ) : (
            <>
              Ilość zapisanych fragmentów: <b>{citations.length}</b>
            </>
          )}
        </>
      )
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
      )
    },
    {
      label: 'Przeglądane',
      icon: <SvgIcon variant='eye' noContent />,
      // icon: <SvgIcon variant='eye' contentAfter='przeglądane' toBottom />,
      content: <VisitedLinks />
    }
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
    <WrapperWindow>
      <ChoiceNav>
        <AnimateSharedLayout>
          <ChoiceList>
            {tabs.map(item => (
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
  )
}
export default SharedChoiceWrapper
