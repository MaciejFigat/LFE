import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { changeFragmentsDetailView } from '../../../features/preferences/preferenceSlice'

import { ButtonMedium } from '../../Miscellaneous/Buttons/BigButton.styled'
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
      <ButtonMedium variant='secondary' onClick={viewHandler}>
        {fragmentsDetailView ? 'Szczegóły - Tak' : 'Szczegóły - Nie'}
      </ButtonMedium>
    </>
  )
}
export default HeroChangeDetail
