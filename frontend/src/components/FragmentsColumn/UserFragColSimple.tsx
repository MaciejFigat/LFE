import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import {
  FragmentContainer,
  FragmentsContainerSimple,
} from './FragmentsColumn.styled'
import { motion, AnimateSharedLayout } from 'framer-motion'
import {
  ListWrapper,
  ItemWrapper,
} from '../AnimatedTextPanel/AnimatedList.styled'
import FilterWrapper from './FilterWrapper/FilterWrapper'

import { getUserFragments } from '../../features/fragments/fragmentSlice'

import AnimatedSavedItemWrapper from '../AnimatedTextPanel/AnimatedSavedItemWrapper'

interface UserFragColSimpleProps {}

const UserFragColSimple: React.FC<UserFragColSimpleProps> = () => {
  const dispatch: any = useAppDispatch()

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const sortingDate = useAppSelector((state) => state.preference.sortingDate)
  const { sortingYear, sortingMonth, sortingDay } = sortingDate

  const fragmentSuccess: boolean = useAppSelector(
    (state) => state.fragment.success
  )

  const sortingDateString = `${sortingYear}-${
    sortingMonth < 10 ? `0${sortingMonth}` : `${sortingMonth}`
  }-${sortingDay < 10 ? `0${sortingDay}` : `${sortingDay}`}`

  useEffect(() => {
    dispatch(getUserFragments(1))
    if (fragmentSuccess === true) {
      dispatch(getUserFragments(1))
    }
  }, [dispatch, fragmentSuccess])

  return (
    <AnimateSharedLayout>
      <FragmentsContainerSimple>
        <FilterWrapper />
        {fragments.length > 0 &&
          fragments
            .filter(
              (fragmentsSorted) =>
                // todo here is filtering function comparing the date
                // fragmentsSorted.updatedAt.substring(0, 10) === sortingDateString
                fragmentsSorted.createdAt.substring(0, 10) === sortingDateString
            )
            .map((fragment) => (
              <ListWrapper
                as={motion.ul}
                key={fragment._id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {fragment.excerpt !== '' && (
                  <FragmentContainer key={fragment.title}>
                    <ItemWrapper>
                      {' '}
                      <AnimatedSavedItemWrapper
                        id={fragment._id}
                        title={fragment.title}
                        description={fragment.description}
                        source={fragment.source}
                        excerpt={fragment.excerpt}
                        coordinates={fragment.coordinates}
                        updatedAt={fragment.updatedAt}
                        keywords={fragment.keywords}
                      />
                    </ItemWrapper>
                  </FragmentContainer>
                )}
              </ListWrapper>
            ))
            .reverse()}{' '}
      </FragmentsContainerSimple>
    </AnimateSharedLayout>
  )
}
export default UserFragColSimple
