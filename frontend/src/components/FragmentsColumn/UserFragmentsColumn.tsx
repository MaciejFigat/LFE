import React, { useEffect, Dispatch, SetStateAction } from 'react'
// import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { FragmentContainer } from './FragmentsColumn.styled'
import { motion } from 'framer-motion'
import {
  ListWrapper,
  ItemWrapper,
} from '../AnimatedTextPanel/AnimatedList.styled'
import { getUserFragments } from '../../features/fragments/fragmentSlice'
import AnimatedSavedItemSimple from '../AnimatedTextPanel/AnimatedSavedItemSimple'

interface UserFragmentsColumnProps {
  setOpenedApp?: Dispatch<SetStateAction<null | string>>
  setTitle?: Dispatch<SetStateAction<string>>
  setIdOpen?: Dispatch<SetStateAction<string>>
  canOpenApp?: boolean
  openedApp?: string | null
}

const UserFragmentsColumn: React.FC<UserFragmentsColumnProps> = ({
  setOpenedApp,
  setTitle,
  canOpenApp,
  openedApp,
  setIdOpen,
}) => {
  const dispatch: any = useAppDispatch()

  // const [canOpenApp, setCanOpenApp] = useState<boolean>(true)

  // const [openedApp, setOpenedApp] = useState<null | string>(null)
  // const [title, setTitle] = useState<string>('')
  // const [idOpen, setIdOpen] = useState<string>('')

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const sortingDate = useAppSelector((state) => state.preference.sortingDate)
  const { sortingYear, sortingMonth, sortingDay } = sortingDate
  const sortingOption: string = useAppSelector(
    (state) => state.preference.sortingOption
  )
  const savedFragmentsPage: any = useAppSelector(
    (state) => state.preference.savedFragmentsPage
  )
  const { start, end } = savedFragmentsPage
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
    // <AnimateSharedLayout>
    <>
      {fragments.length > 0 &&
        fragments
          .filter((fragmentsSorted) =>
            // todo here is filtering function comparing the date

            sortingOption === 'all'
              ? fragmentsSorted
              : fragmentsSorted.createdAt.substring(0, 10) === sortingDateString
          )
          .slice(
            sortingOption === 'all' ? start : 0,
            sortingOption === 'all' ? end + 1 : fragments.length - 1
          )

          .map((fragment) => (
            <ListWrapper
              as={motion.ul}
              key={fragment._id}
              // layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {fragment.excerpt !== '' && (
                <FragmentContainer key={fragment.title}>
                  <ItemWrapper>
                    <AnimatedSavedItemSimple
                      setOpenedApp={setOpenedApp}
                      setTitle={setTitle}
                      canOpenApp={canOpenApp}
                      setIdOpen={setIdOpen}
                      openedApp={openedApp}
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
    </>
    //   </AnimateSharedLayout>
  )
}
export default UserFragmentsColumn
