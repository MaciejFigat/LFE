import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'

import {
  ListWrapper,
  ItemWrapper,
  FragmentsWrapper
} from '../AnimatedTextPanel/AnimatedList.styled'
import { getUserFragments } from '../../features/fragments/fragmentSlice'
import AnimatedSavedItemSimple from '../AnimatedTextPanel/AnimatedSavedItemSimple'

import { FragmentContainer } from './FragmentsColumn.styled'
import { AppDispatch } from '../../app/store'

interface UserFragmentsColumnProps {
  moreColumns?: boolean
  simpleVersion?: boolean
}

const UserFragmentsColumn: React.FC<UserFragmentsColumnProps> = ({
  moreColumns,
  simpleVersion
}) => {
  const dispatch: AppDispatch = useAppDispatch()

  const fragments: any[] = useAppSelector(state => state.fragment.userFragments)
  const widthNarrow = useAppSelector(state => state.preference.widthNarrow)

  const sortingDate = useAppSelector(state => state.preference.sortingDate)
  const { sortingYear, sortingMonth, sortingDay } = sortingDate
  const sortingOption: string = useAppSelector(
    state => state.preference.sortingOption
  )
  const savedFragmentsPage: any = useAppSelector(
    state => state.preference.savedFragmentsPage
  )
  const { start, end } = savedFragmentsPage
  const fragmentSuccess: boolean = useAppSelector(
    state => state.fragment.success
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
    <FragmentsWrapper
      $moreColumns={moreColumns}
      $width={widthNarrow}
      $simpleVersion={simpleVersion}
    >
      {fragments.length > 0 &&
        fragments
          .filter(fragmentsSorted =>
            // todo here is filtering function comparing the date
            sortingOption === 'wszystkie'
              ? fragmentsSorted
              : fragmentsSorted.createdAt.substring(0, 10) === sortingDateString
          )
          .slice(
            sortingOption === 'wszystkie' ? start : 0,
            sortingOption === 'wszystkie' ? end + 1 : fragments.length - 1
          )

          .map(fragment => (
            <ListWrapper key={fragment._id}>
              {fragment.excerpt !== '' && (
                <FragmentContainer
                  key={fragment.title}
                  moreColumns={moreColumns}
                >
                  <ItemWrapper>
                    <AnimatedSavedItemSimple
                      id={fragment._id}
                      title={fragment.title}
                      description={fragment.description}
                      source={fragment.source}
                      excerpt={fragment.excerpt}
                      coordinates={fragment.coordinates}
                      updatedAt={fragment.updatedAt}
                      keywords={fragment.keywords}
                      keywordValue={fragment.keywordValue}
                    />
                  </ItemWrapper>
                </FragmentContainer>
              )}
            </ListWrapper>
          ))
          .reverse()}
    </FragmentsWrapper>
  )
}
export default UserFragmentsColumn
