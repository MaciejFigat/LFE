import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { editIdOpenFragment } from '../../features/preferences/preferenceSlice'
import PupupEditWindow from '../DragAndDropProject/PopupEditWindow/PupupEditWindow'
import FilterWrapper from '../FragmentsColumn/FilterWrapper/FilterWrapper'
import UserFragmentsColumn from '../FragmentsColumn/UserFragmentsColumn'
import FragmentsPagination from '../Miscellaneous/Pagination/FragmentsPagination'
import { SearchResultsSectionWrapper } from './SearchResultsDisplay.styled'

interface FragmentsDisplayProps {}

const FragmentsDisplay: React.FC<FragmentsDisplayProps> = () => {
  const dispatch: any = useAppDispatch()
  const idOpenFragment = useAppSelector(
    (state) => state.preference.idOpenFragment
  )
  useEffect(() => {
    dispatch(editIdOpenFragment(''))
  }, [dispatch])
  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {idOpenFragment !== '' && (
          <PupupEditWindow idOpen={idOpenFragment} openedApp={idOpenFragment} />
        )}
      </AnimatePresence>
      <SearchResultsSectionWrapper>
        {' '}
        <FilterWrapper />
        <FragmentsPagination />
        <UserFragmentsColumn />
      </SearchResultsSectionWrapper>
    </AnimateSharedLayout>
  )
}
export default FragmentsDisplay
