import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { AppDispatch } from '../../../app/store'
import { changeFragmentsDetailView } from '../../../features/preferences/preferenceSlice'
import { RelativeWrapper } from '../../../styles/misc.styled'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import {
  ButtonSmallCircle,
  ButtonVerySmall
} from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../../../consts'
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
      <ButtonSmallCircle
        variant={ButtonVariants.PRIMARY_EMPTY}
        onClick={viewHandler}
      >
        {fragmentsDetailView ? (
          <>
            <RelativeWrapper top='5px' left='0px'>
              <SvgIcon variant='folder' />
            </RelativeWrapper>
          </>
        ) : (
          <>
            <RelativeWrapper top='5px' left='0px'>
              <SvgIcon variant='store' />
            </RelativeWrapper>
          </>
        )}
      </ButtonSmallCircle>
    </>
  )
}
export default HeroChangeDetail
