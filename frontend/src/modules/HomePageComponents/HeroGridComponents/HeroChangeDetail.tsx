import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { AppDispatch } from '../../../app/store'
import { changeFragmentsDetailView } from '../../../features/preferences/preferenceSlice'
import { RelativeWrapper } from '../../../styles/misc.styled'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import { ButtonSmallCircle } from '../../../components/Buttons/Buttons.styled'
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
    <RelativeWrapper $left='-10px' $top='0px'>
      <ButtonSmallCircle
        variant={ButtonVariants.PRIMARY_EMPTY}
        onClick={viewHandler}
      >
        <RelativeWrapper $top='5px' $left='0px'>
          <SvgIcon
            variant={fragmentsDetailView ? 'store' : 'folder'}
            contentAfter={
              fragmentsDetailView ? 'widok szczeg.' : 'widok ogólny'
            }
            toLeft='-63px'
            toTop='-28px'
            width='70px'
          />
        </RelativeWrapper>
      </ButtonSmallCircle>
    </RelativeWrapper>
  )
}
export default HeroChangeDetail
