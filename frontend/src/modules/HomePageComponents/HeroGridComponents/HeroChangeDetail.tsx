import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { AppDispatch } from '../../../app/store'
import { changeFragmentsDetailView } from '../../../features/preferences/preferenceSlice'
import { RelativeWrapper } from '../../../styles/misc.styled'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import { ButtonVerySmall } from '../../../components/Buttons/Buttons.styled'
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
      <ButtonVerySmall variant='emptyPrimary' onClick={viewHandler}>
        {fragmentsDetailView ? (
          <>
            <RelativeWrapper top='3px' left='5px'>
              <SvgIcon variant='folder' />
            </RelativeWrapper>
          </>
        ) : (
          <>
            <RelativeWrapper top='3px' left='5px'>
              <SvgIcon variant='store' />
            </RelativeWrapper>
          </>
        )}
      </ButtonVerySmall>
    </>
  )
}
export default HeroChangeDetail
