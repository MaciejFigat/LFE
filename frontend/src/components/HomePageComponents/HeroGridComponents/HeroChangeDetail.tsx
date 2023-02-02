import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { changeFragmentsDetailView } from '../../../features/preferences/preferenceSlice'
import { RelativeWrapper } from '../../../styles/misc.styled'

import { ButtonSmall } from '../../Miscellaneous/Buttons/BigButton.styled'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
interface HeroChangeDetailProps {}

const HeroChangeDetail: React.FC<HeroChangeDetailProps> = () => {
  const dispatch: any = useAppDispatch()
  const fragmentsDetailView: boolean = useAppSelector(
    (state) => state.preference.fragmentsDetailView
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
