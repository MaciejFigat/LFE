import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  HighlightText,
  HorizontalLineBottom,
  RelativeWrapper,
  WrapperMotionDivRelative
} from '../../styles/misc.styled'
import { SimpleCitationItemSmall } from './AnimatedList.styled'
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

interface AnimatedSavedItemSimpleProps {
  id: string
  title: string
  description: string
  source: string
  excerpt: string
  coordinates: string
  updatedAt: string
  keywords: string[]
  keywordValue: { keyword: string; value: boolean }[]
  moreColumns?: boolean
}

const AnimatedSavedItemSimple: React.FC<AnimatedSavedItemSimpleProps> = ({
  id,
  title,
  source,
  excerpt,
  coordinates
}) => {
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
    <WrapperMotionDivRelative layoutId={id}>
      <SimpleCitationItemSmall
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
      >
        {' '}
        <HorizontalContainer>
          {source !== '' ? (
            <>
              {title !== excerpt.substring(0, 22) ? (
                <>
                  <FragmentsP>
                    {coordinates}
                    <HighlightText color={TextColor.INFO}>
                      {title}
                    </HighlightText>
                  </FragmentsP>
                </>
              ) : (
                <FragmentsP>{coordinates}</FragmentsP>
              )}
            </>
          ) : null}
          <RelativeWrapper $top='0px' $left='0px'>
            {' '}
            <ButtonSmallCircle
              variant={ButtonVariants.PRIMARY_EMPTY}
              onClick={() => openWindowHandler()}
            >
              <RelativeWrapper $top='5px' $left='2px'>
                {' '}
                <SvgIcon
                  variant='edit'
                  contentAfter='edytuj'
                  toLeft='-53px'
                  toTop='-20px'
                  width='50px'
                />
              </RelativeWrapper>
            </ButtonSmallCircle>
          </RelativeWrapper>
        </HorizontalContainer>
        <FragmentsPExcerpt>{excerpt.substring(0, 110)}</FragmentsPExcerpt>
        <HorizontalLineBottom />
        <HorizontalContainer>
          {source !== '' ? <FragmentsP>{source}</FragmentsP> : null}

          <RelativeWrapper $top='10px' $left='0px'>
            <ButtonSmallCircle
              variant={ButtonVariants.WARNING_EMPTY}
              onClick={() => removeFragmentHandler(id)}
            >
              {' '}
              <RelativeWrapper $top='6px' $left='0px'>
                <SvgIcon
                  variant='remove'
                  contentAfter='usuń'
                  toLeft='-53px'
                  toTop='-20px'
                  width='50px'
                />
              </RelativeWrapper>
            </ButtonSmallCircle>
          </RelativeWrapper>
        </HorizontalContainer>
      </SimpleCitationItemSmall>
    </WrapperMotionDivRelative>
  )
}
export default AnimatedSavedItemSimple
