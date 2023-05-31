import React, { Dispatch, SetStateAction } from 'react'
import { useAppDispatch } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'
import { deleteSavedFragment } from '../../features/fragments/fragmentSlice'
import {
  HighlightText,
  HorizontalLineTop,
  RelativeWrapper
} from '../../styles/misc.styled'
import {
  FragmentsP,
  FragmentsPExcerpt,
  HorizontalContainer
} from '../Fragments/FragmentsColumn.styled'
import SvgIcon from '../../components/SvgIcon/SvgIcon'
import { ItemWrapper, SimpleCitationItem } from './AnimatedList.styled'
import { ButtonSmallCircle } from '../../components/Buttons/Buttons.styled'
import { ButtonVariants, TextColor } from '../../consts'

interface FragmentTextItemProps {
  source: string
  _id: string
  excerpt: string
  title: string
  coordinates: string
  setOpenedApp?: Dispatch<SetStateAction<null | string>>
  setIdOpen?: Dispatch<SetStateAction<string>>
  canOpenApp?: boolean
  openedApp?: string | null
}

const FragmentTextItem: React.FC<FragmentTextItemProps> = ({
  source,
  _id,
  excerpt,
  title,
  coordinates,
  setOpenedApp,
  canOpenApp,
  openedApp,
  setIdOpen
}) => {
  const dispatch: AppDispatch = useAppDispatch()

  const openWindowHandler = (id: string) => {
    if (canOpenApp && setOpenedApp && setIdOpen && openedApp === null) {
      setOpenedApp(id)
      setIdOpen(id)
    }
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
          <RelativeWrapper top='0px' left='5px'>
            {' '}
            <ButtonSmallCircle
              variant={ButtonVariants.PRIMARY_EMPTY}
              onClick={() => openWindowHandler(_id)}
            >
              <RelativeWrapper top='5px' left='2px'>
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

        <FragmentsPExcerpt>{excerpt.substring(0, 130)}</FragmentsPExcerpt>
        <HorizontalLineTop />
        <HorizontalContainer>
          {source !== '' ? <FragmentsP>{source}</FragmentsP> : null}

          <RelativeWrapper top='0px' left='6px'>
            <ButtonSmallCircle
              variant={ButtonVariants.WARNING_EMPTY}
              onClick={() => removeFragmentHandler(_id)}
            >
              <RelativeWrapper top='6px' left='0px'>
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
