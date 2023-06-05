import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  HighlightText,
  HorizontalLineTop,
  RelativeWrapper,
  WrapperMotionDivRelativeSmall
} from '../../styles/misc.styled'
import { SimpleCitationItemSuperSmall } from './AnimatedList.styled'
import { editIdOpenFragment } from '../../features/preferences/preferenceSlice'
import {
  FragmentsP,
  FragmentsPExcerpt,
  HorizontalContainer
} from '../Fragments/FragmentsColumn.styled'
import SvgIcon from '../../components/SvgIcon/SvgIcon'
import { deleteSavedFragment } from '../../features/fragments/fragmentSlice'
import { AppDispatch } from '../../app/store'
import { ButtonSmallCircle } from '../../components/Buttons/Buttons.styled'
import { ButtonVariants, TextColor } from '../../consts'

interface AnimatedSavedItemSuperSimpleProps {
  id: string
  excerpt: string
  updatedAt: string
  coordinates: string
  title: string
  keywords: string[]
  keywordValue: { keyword: string; value: boolean }[]
  moreColumns?: boolean
}

const AnimatedSavedItemSuperSimple: React.FC<
  AnimatedSavedItemSuperSimpleProps
> = ({ id, excerpt, coordinates, title }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const idOpenFragment = useAppSelector(
    state => state.preference.idOpenFragment
  )

  const openWindowHandler = () => {
    if (idOpenFragment === '') {
      dispatch(editIdOpenFragment(id))
    }
  }

  const removeFragmentHandler = (id: string) => {
    if (window.confirm('Czy potwierdzasz usunięcie fragmentu?')) {
      dispatch(deleteSavedFragment(id))
    }
  }
  return (
    <WrapperMotionDivRelativeSmall layoutId={id}>
      <SimpleCitationItemSuperSmall
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
      >
        <HorizontalContainer>
          {title !== excerpt.substring(0, 22) ? (
            <FragmentsP>
              {coordinates.substring(0, 26)}{' '}
              <HighlightText color={TextColor.INFO}>{title}</HighlightText>
            </FragmentsP>
          ) : (
            <FragmentsP>{coordinates.substring(0, 26)} </FragmentsP>
          )}

          <RelativeWrapper $top='0px' $left='8px'>
            {' '}
            <ButtonSmallCircle
              variant={ButtonVariants.PRIMARY_EMPTY}
              onClick={() => openWindowHandler()}
            >
              <RelativeWrapper $top='5px' $left='1px'>
                {' '}
                <SvgIcon
                  variant='edit'
                  contentAfter='edytuj'
                  toLeft='-55px'
                  toTop='-17px'
                  width='50px'
                />
              </RelativeWrapper>
            </ButtonSmallCircle>
          </RelativeWrapper>
        </HorizontalContainer>
        <HorizontalLineTop />
        <HorizontalContainer>
          <FragmentsPExcerpt>{excerpt.substring(0, 30)}</FragmentsPExcerpt>
          <>
            <RelativeWrapper $top='0px' $left='8px'>
              <ButtonSmallCircle
                variant={ButtonVariants.WARNING_EMPTY}
                onClick={() => removeFragmentHandler(id)}
              >
                <RelativeWrapper $top='6px' $left='0px'>
                  <SvgIcon
                    variant='remove'
                    contentAfter='usuń'
                    toLeft='-55px'
                    toTop='-17px'
                    width='50px'
                  />
                </RelativeWrapper>
              </ButtonSmallCircle>
            </RelativeWrapper>
          </>
        </HorizontalContainer>
      </SimpleCitationItemSuperSmall>
    </WrapperMotionDivRelativeSmall>
  )
}
export default AnimatedSavedItemSuperSimple
