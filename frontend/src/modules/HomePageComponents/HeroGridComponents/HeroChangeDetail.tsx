import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { AppDispatch } from '../../../app/store'
import { changeFragmentsDetailView } from '../../../features/preferences/preferenceSlice'
import { RelativeWrapper } from '../../../styles/misc.styled'

import { ButtonSmall } from '../../../components/Miscellaneous/Buttons/BigButton.styled'
import SvgIcon from '../../../components/Miscellaneous/SvgIcon/SvgIcon'
interface HeroChangeDetailProps {}

const HeroChangeDetail: React.FC<HeroChangeDetailProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const fragmentsDetailView: boolean = useAppSelector(
    state => state.preference.fragmentsDetailView
  )
  const viewHandler = () => {
    dispatch(changeFragmentsDetailView())
  }

  return (
    <>
      <ButtonSmall variant='emptyPrimary' onClick={viewHandler}>
        {fragmentsDetailView ? (
          <>
            Widok szczegółowy
            <RelativeWrapper top='3px' left='5px'>
              <SvgIcon variant='squareEmpty' />
            </RelativeWrapper>
          </>
        ) : (
          <>
            Widok szczegółowy
            <RelativeWrapper top='3px' left='5px'>
              <SvgIcon variant='check' />
            </RelativeWrapper>
          </>
        )}
      </ButtonSmall>
    </>
  )
}
export default HeroChangeDetail
