import React, { useState, useEffect, useMemo } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { AnimateSharedLayout } from 'framer-motion'
import { sortingOptionEdit } from '../../../features/preferences/preferenceSlice'
import {
  ChoiceItem,
  ChoiceList,
  ChoiceNav,
  ChoiceUnderline,
} from './SharedChoiceWrapper.styled'

interface HeroChoiceWrapperProps {}

const HeroChoiceWrapper: React.FC<HeroChoiceWrapperProps> = () => {
  const dispatch = useAppDispatch()
  const sortingOption: string = useAppSelector(
    (state) => state.preference.sortingOption
  )
  const tabs = useMemo(
    () => [
      {
        label: 'Data',
      },
      {
        label: 'Projekt',
      },
      {
        label: 'Wszystkie',
      },
    ],
    []
  )

  const [selectedTab, setSelectedTab] = useState(tabs[1])
  useEffect(() => {
    switch (sortingOption) {
      case 'data':
        setSelectedTab(tabs[0])
        break
      case 'projekt':
        setSelectedTab(tabs[1])
        break

      case 'wszystkie':
        setSelectedTab(tabs[2])
        break
      default:
        break
    }
  }, [sortingOption, tabs])

  const tabHelper = (item: any) => {
    setSelectedTab(item)
    if (item.label === 'Data') {
      dispatch(sortingOptionEdit('data'))
    }
    if (item.label === 'Projekt') {
      dispatch(sortingOptionEdit('projekt'))
    }
    if (item.label === 'Wszystkie') {
      dispatch(sortingOptionEdit('wszystkie'))
    }
  }

  return (
    <>
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
    </>
  )
}
export default HeroChoiceWrapper
