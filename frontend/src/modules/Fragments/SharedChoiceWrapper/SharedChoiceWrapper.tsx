import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { motion, AnimatePresence } from 'framer-motion'
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
import Pagination from '../../../components/Miscellaneous/Pagination/Pagination'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import { UserInfo } from '../../../interfaces'
import { AppDispatch } from '../../../app/store'
import {
  HighlightText,
  RegularDiv,
  RelativeWrapper
} from '../../../styles/misc.styled'
import { TextColor } from '../../../consts'

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
      icon: (
        <RelativeWrapper top='10px'>
          <SvgIcon
            variant='save'
            contentAfter='zapisane fragmenty'
            width='130px'
            toLeft='10px'
            toTop='15px'
          />
        </RelativeWrapper>
      ),
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
      icon: (
        <RelativeWrapper top='12px'>
          <SvgIcon
            variant='search'
            contentAfter='wyszukane dok.'
            width='105px'
            toLeft='10px'
            toTop='15px'
          />{' '}
        </RelativeWrapper>
      ),
      content: (
        <RegularDiv>
          <HighlightText color={TextColor.PRIMARY}>
            Wyszukano: {numberOfResults && numberOfResults} dok.
          </HighlightText>{' '}
          <Pagination narrow />
        </RegularDiv>
      )
    },
    {
      label: 'Przeglądane',
      icon: (
        <RelativeWrapper $top='12px'>
          <SvgIcon
            variant='eye'
            contentAfter='ostatnie dok.'
            width='88px'
            toLeft='10px'
            toTop='15px'
          />{' '}
        </RelativeWrapper>
      ),
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
        <ChoiceList>
          {tabs.map(item => (
            <ChoiceItem
              key={item.label}
              className={item.label === selectedTab.label ? 'selected' : ''}
              onClick={() => tabHelper(item)}
            >
              {item.icon}
              {item.label === selectedTab.label && (
                <ChoiceUnderline layoutId='under' />
              )}
            </ChoiceItem>
          ))}
        </ChoiceList>
      </ChoiceNav>
      <MainChoiceContainer>
        <AnimatePresence mode='wait'>
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
