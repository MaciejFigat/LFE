import React from 'react'
import { useAppDispatch } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'
import { deleteSavedFragment } from '../../features/fragments/fragmentSlice'
import {
  DraggingIcon,
  HighlightText,
  HorizontalLineBottom,
  HorizontalLineTop,
  RelativeWrapper
} from '../../styles/misc.styled'
import {
  FragmentsP,
  FragmentsPExcerpt,
  GrabHorizontalContainer,
  HorizontalContainer
} from '../Fragments/FragmentsColumn.styled'
import SvgIcon from '../../components/SvgIcon/SvgIcon'
import { ItemWrapper, SimpleCitationItem } from './AnimatedList.styled'
import { ButtonSmallCircle } from '../../components/Buttons/Buttons.styled'
import { ButtonVariants, TextColor } from '../../consts'
import { editIdOpenFragment } from '../../features/preferences/preferenceSlice'

interface FragmentTextItemProps {
  source: string
  _id: string
  excerpt: string
  title: string
  coordinates: string
}

const FragmentTextItem: React.FC<FragmentTextItemProps> = ({
  source,
  _id,
  excerpt,
  title,
  coordinates
}) => {
  const dispatch: AppDispatch = useAppDispatch()

  const openWindowHandler = (id: string) => {
    dispatch(editIdOpenFragment(id))
  }
  const removeFragmentHandler = (id: string) => {
    if (window.confirm('Czy potwierdzasz usunięcie fragmentu?')) {
      dispatch(deleteSavedFragment(id))
    }
  }

  return (
    <ItemWrapper>
      {/* //? This one has styles ie. shadows and borders */}
      <SimpleCitationItem>
        <GrabHorizontalContainer>
          <RelativeWrapper $top='-15px' $left='0px'>
            <DraggingIcon />
          </RelativeWrapper>{' '}
          {source !== '' ? (
            <>
              {title !== excerpt.substring(0, 22) ? (
                <FragmentsP>
                  {coordinates}

                  <HighlightText color={TextColor.INFO}>{title}</HighlightText>
                </FragmentsP>
              ) : (
                <FragmentsP>{coordinates}</FragmentsP>
              )}
            </>
          ) : null}
          <RelativeWrapper $top='0px' $left='5px'>
            {' '}
            <ButtonSmallCircle
              variant={ButtonVariants.PRIMARY_EMPTY}
              onClick={() => openWindowHandler(_id)}
            >
              <RelativeWrapper $top='6px' $left='1px'>
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
        </GrabHorizontalContainer>
        <HorizontalLineTop />
        <FragmentsPExcerpt>{excerpt.substring(0, 130)}</FragmentsPExcerpt>
        <HorizontalLineBottom />
        <HorizontalContainer>
          {source !== '' ? <FragmentsP>{source}</FragmentsP> : null}

          <RelativeWrapper $top='0px' $left='6px'>
            <ButtonSmallCircle
              variant={ButtonVariants.WARNING_EMPTY}
              onClick={() => removeFragmentHandler(_id)}
            >
              <RelativeWrapper $top='7px' $left='0px'>
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
        </HorizontalContainer>
      </SimpleCitationItem>
    </ItemWrapper>
  )
}
export default FragmentTextItem
