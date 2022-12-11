import React from 'react'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import {
  RelativeWrapper,
  WrapperMotionDivRelative,
} from '../../../styles/misc.styled'
import { SimpleCitationItemSmall } from './AnimatedList.styled'
import { editIdOpenFragment } from '../../../features/preferences/preferenceSlice'
import {
  FragmentsP,
  FragmentsPExcerpt,
  HorizontalContainer,
} from '../../FragmentsColumn/FragmentsColumn.styled'
import SvgIcon from '../SvgIcon/SvgIcon'
import { deleteSavedFragment } from '../../../features/fragments/fragmentSlice'

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
  coordinates,
}) => {
  const dispatch: any = useAppDispatch()
  const idOpenFragment = useAppSelector(
    (state) => state.preference.idOpenFragment
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
        <HorizontalContainer>
          {source !== '' ? <FragmentsP>{source}</FragmentsP> : null}

          <RelativeWrapper top='-15px' left='10px'>
            {' '}
            <SendButtonVerySmall
              variant='secondaryEmpty'
              onClick={() => openWindowHandler()}
            >
              <SvgIcon
                variant='edit'
                contentAfter='edytuj'
                toLeft='-10px'
                toTop='13px'
                width='50px'
              />
            </SendButtonVerySmall>
          </RelativeWrapper>
        </HorizontalContainer>
        <FragmentsP> </FragmentsP>
        <FragmentsPExcerpt>{excerpt.substring(0, 150)}</FragmentsPExcerpt>
        <HorizontalContainer>
          {source !== '' ? (
            <>
              {title !== excerpt.substring(0, 22) ? (
                <FragmentsP>{title}</FragmentsP>
              ) : (
                <FragmentsP>{coordinates}</FragmentsP>
              )}
            </>
          ) : null}

          <>
            <RelativeWrapper top='0px' left='8px'>
              <SendButtonVerySmall
                variant='secondaryEmpty'
                onClick={() => removeFragmentHandler(id)}
              >
                <SvgIcon
                  variant='remove'
                  contentAfter='usuń'
                  toLeft='-40px'
                  toTop='-17px'
                  width='50px'
                />
              </SendButtonVerySmall>
            </RelativeWrapper>
          </>
        </HorizontalContainer>
      </SimpleCitationItemSmall>
    </WrapperMotionDivRelative>
  )
}
export default AnimatedSavedItemSimple
