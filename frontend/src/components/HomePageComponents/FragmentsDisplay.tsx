import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { editIdOpenFragment } from '../../features/preferences/preferenceSlice'
import PupupEditWindow from '../DragAndDropProject/PopupEditWindow/PupupEditWindow'
import FilterWrapper from '../FragmentsColumn/FilterWrapper/FilterWrapper'
import UserFragmentsColumn from '../FragmentsColumn/UserFragmentsColumn'
import {
  FragmentsTopWrapper,
  SearchResultsSectionWrapper,
} from './SearchResultsDisplay.styled'
import UserFragmentsByKeyword from '../FragmentsColumn/UserFragmentsByKeyword'

interface FragmentsDisplayProps {}

const FragmentsDisplay: React.FC<FragmentsDisplayProps> = () => {
  const dispatch: any = useAppDispatch()
  const sortingOption: string = useAppSelector(
    (state) => state.preference.sortingOption
  )
  const showFragmentsState: boolean = useAppSelector(
    (state) => state.preference.showFragments
  )
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
        <FilterWrapper wide />
        {showFragmentsState && sortingOption !== 'projekt' && (
          <FragmentsTopWrapper>
            <UserFragmentsColumn moreColumns />
          </FragmentsTopWrapper>
        )}
        {showFragmentsState && sortingOption === 'projekt' && (
          <FragmentsTopWrapper>
            <UserFragmentsByKeyword moreColumns />
          </FragmentsTopWrapper>
        )}
      </SearchResultsSectionWrapper>
    </AnimateSharedLayout>
  )
}
export default FragmentsDisplay
