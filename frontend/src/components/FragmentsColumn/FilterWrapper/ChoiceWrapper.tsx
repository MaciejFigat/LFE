import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { showFragments } from '../../../features/preferences/preferenceSlice'
import { SendButton } from '../../Buttons/Buttons.styled'

import { OptionsWrapper } from './FilterWrapper.styled'

interface ChoiceWrapperProps {}

const ChoiceWrapper: React.FC<ChoiceWrapperProps> = () => {
  const dispatch = useAppDispatch()
  const showFragmentsState: boolean = useAppSelector(
    (state) => state.preference.showFragments
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
            Search results
          </SendButton>
          <SendButton variant='lightEmpty' onClick={showFragmentsHandler}>
            Saved fragments
          </SendButton>
        </>
      ) : (
        <>
          <SendButton variant='lightEmpty' onClick={showSearchResultsHandler}>
            Search results
          </SendButton>
          <SendButton variant='darkEmpty' onClick={showFragmentsHandler}>
            Saved fragments
          </SendButton>
        </>
      )}
    </OptionsWrapper>
  )
}
export default ChoiceWrapper
