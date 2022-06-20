import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { showFragments } from '../../../features/preferences/preferenceSlice'
import { SendButton } from '../../Buttons/Buttons.styled'
import SvgIcon from '../../SvgIcon/SvgIcon'
import FilterWrapper from './FilterWrapper'

import { OptionsWrapper } from './FilterWrapper.styled'

interface ChoiceWrapperProps {}

const ChoiceWrapper: React.FC<ChoiceWrapperProps> = () => {
  const dispatch = useAppDispatch()
  const showFragmentsState: boolean = useAppSelector(
    (state) => state.preference.showFragments
  )
  const numberOfResults: number | undefined = useAppSelector(
    (state) => state.searchResult.searchResults.data.length
  )
  const showFragmentsHandler = () => {
    dispatch(showFragments(true))
  }
  const showSearchResultsHandler = () => {
    dispatch(showFragments(false))
  }

  return (
    <OptionsWrapper>
      {showFragmentsState ? (
        <>
          <SendButton variant='darkEmpty' onClick={showSearchResultsHandler}>
            Search results <SvgIcon variant='arrowRight' noContent />
          </SendButton>
          <FilterWrapper />
        </>
      ) : (
        <>
          <SendButton variant='lightEmpty'>
            Displaying {numberOfResults && numberOfResults} search results
          </SendButton>
          <SendButton variant='darkEmpty' onClick={showFragmentsHandler}>
            Saved fragments <SvgIcon variant='arrowRight' noContent />
          </SendButton>
        </>
      )}
    </OptionsWrapper>
  )
}
export default ChoiceWrapper
