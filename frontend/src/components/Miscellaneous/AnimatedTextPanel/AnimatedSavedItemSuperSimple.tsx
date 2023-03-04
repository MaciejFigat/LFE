import React from 'react'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import {
  RelativeWrapper,
  WrapperMotionDivRelativeSmall
} from '../../../styles/misc.styled'
import { SimpleCitationItemSuperSmall } from './AnimatedList.styled'
import { editIdOpenFragment } from '../../../features/preferences/preferenceSlice'
import {
  FragmentsP,
  FragmentsPExcerpt,
  HorizontalContainer
} from '../../FragmentsColumn/FragmentsColumn.styled'
import SvgIcon from '../SvgIcon/SvgIcon'
import { deleteSavedFragment } from '../../../features/fragments/fragmentSlice'
import { AppDispatch } from '../../../app/store'

interface AnimatedSavedItemSuperSimpleProps {
  id: string
  source: string
  excerpt: string
  updatedAt: string
  keywords: string[]
  keywordValue: { keyword: string; value: boolean }[]
  moreColumns?: boolean
}

const AnimatedSavedItemSuperSimple: React.FC<
  AnimatedSavedItemSuperSimpleProps
> = ({ id, source, excerpt }) => {
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
          {source !== '' ? (
            <FragmentsP>{source.substring(0, 26)}</FragmentsP>
          ) : null}

          <RelativeWrapper top='0px' left='10px'>
            {' '}
            <SendButtonVerySmall
              variant='secondaryEmpty'
              onClick={() => openWindowHandler()}
            >
              <SvgIcon
                variant='edit'
                contentAfter='edytuj'
                toLeft='-43px'
                toTop='-17px'
                width='50px'
              />
            </SendButtonVerySmall>
          </RelativeWrapper>
        </HorizontalContainer>

        <HorizontalContainer>
          <FragmentsPExcerpt>{excerpt.substring(0, 30)}</FragmentsPExcerpt>
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
      </SimpleCitationItemSuperSmall>
    </WrapperMotionDivRelativeSmall>
  )
}
export default AnimatedSavedItemSuperSimple
