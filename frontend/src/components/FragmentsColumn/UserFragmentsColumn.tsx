import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { FragmentContainer } from './FragmentsColumn.styled'
import { motion, AnimateSharedLayout } from 'framer-motion'
import {
  ListWrapper,
  ItemWrapper,
} from '../AnimatedTextPanel/AnimatedList.styled'
import AnimatedSavedItem from '../AnimatedTextPanel/AnimatedSavedItem'
import { getUserFragments } from '../../features/fragments/fragmentSlice'

import DateCompare from './DateCompare'
interface UserFragmentsColumnProps {}

const UserFragmentsColumn: React.FC<UserFragmentsColumnProps> = () => {
  const dispatch: any = useAppDispatch()

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const sortingDate = useAppSelector((state) => state.preference.sortingDate)
  const fragmentSuccess: boolean = useAppSelector(
    (state) => state.fragment.success
  )

  //todo part for date and hour
  // const today = new Date()
  // const month = today.getMonth() + 1
  // const day = today.getDate()
  // const year = today.getFullYear()

  // const hour = today.getHours()

  // const date = `${year}-${month < 10 ? `0${month}` : `${month}`}-${
  //   day < 10 ? `0${day}` : `${day}`
  // }`
  // const hourDigits = `${hour < 10 ? `0${hour}` : `${hour}`}`
  // todo

  // const [sortingDate, setSortingDate] = useState<string>(date)

  useEffect(() => {
    dispatch(getUserFragments(1))
    if (fragmentSuccess === true) {
      dispatch(getUserFragments(1))
    }
  }, [dispatch, fragmentSuccess])

  return (
    <AnimateSharedLayout>
      <DateCompare />
      {fragments.length > 0 &&
        // fragments
        //   .map((fragment) => (
        fragments
          .filter(
            (fragmentsSorted) =>
              // todo here is filtering function comparing the date
              fragmentsSorted.updatedAt.substring(0, 10) === sortingDate
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
                    <AnimatedSavedItem
                      id={fragment._id}
                      title={fragment.title}
                      description={fragment.description}
                      source={fragment.source}
                      excerpt={fragment.excerpt}
                      coordinates={fragment.coordinates}
                      updatedAt={fragment.updatedAt}
                    ></AnimatedSavedItem>
                  </ItemWrapper>
                </FragmentContainer>
              )}
            </ListWrapper>
          ))
          .reverse()}{' '}
    </AnimateSharedLayout>
  )
}
export default UserFragmentsColumn
