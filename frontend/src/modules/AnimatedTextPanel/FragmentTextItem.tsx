import React, { Dispatch, SetStateAction } from 'react'
import { useAppDispatch } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'
import { deleteSavedFragment } from '../../features/fragments/fragmentSlice'
import { RelativeWrapper } from '../../styles/misc.styled'
import {
  FragmentsP,
  FragmentsPExcerpt,
  HorizontalContainer
} from '../FragmentsColumn/FragmentsColumn.styled'
import { SendButtonVerySmall } from '../../components/ButtonsSend/Buttons.styled'
import SvgIcon from '../../components/SvgIcon/SvgIcon'
import { ItemWrapper, SimpleCitationItem } from './AnimatedList.styled'

interface FragmentTextItemProps {
  source: string
  _id: string
  excerpt: string
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
          {source !== '' && <FragmentsP>{source}</FragmentsP>}

          <>
            <RelativeWrapper top='-18px' left='10px'>
              {' '}
              <SendButtonVerySmall
                variant='secondaryEmpty'
                onClick={() => openWindowHandler(_id)}
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
          </>
        </HorizontalContainer>

        <FragmentsPExcerpt>{excerpt.substring(0, 150)}</FragmentsPExcerpt>
        <HorizontalContainer>
          {source !== '' && <FragmentsP>{coordinates}</FragmentsP>}

          <>
            <RelativeWrapper top='0px' left='8px'>
              <SendButtonVerySmall
                variant='secondaryEmpty'
                onClick={() => removeFragmentHandler(_id)}
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
      </SimpleCitationItem>
    </ItemWrapper>
  )
}
export default FragmentTextItem
