import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { citationRemoved } from '../../features/fragments/fragmentSlice'
import { AnimateSharedLayout } from 'framer-motion'
import {
  ItemWrapper,
  ListWrapper,
  SimpleCitationItemNoShadow
} from '../AnimatedTextPanel/AnimatedList.styled'
import {
  FragmentsP,
  FragmentsPExcerpt,
  HorizontalContainer
} from '../Fragments/FragmentsColumn.styled'
import { RegularColumn, RelativeWrapper } from '../../styles/misc.styled'
import SvgIcon from '../../components/SvgIcon/SvgIcon'
import { TwoColumnsWrapper } from '../../styles/misc.styled'
import { AppDispatch } from '../../app/store'
import { ButtonSmallCircle } from '../../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../../consts'

interface CitationDisplayProps {
  wide?: boolean
}

const CitationDisplay: React.FC<CitationDisplayProps> = ({ wide }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const citations: any[] = useAppSelector(state => state.fragment.citations)
  const removeCitationHandler = (id: string) => {
    dispatch(citationRemoved(id))
  }

  return (
    <AnimateSharedLayout>
      {citations.length > 0 && !wide ? (
        <RegularColumn>
          {' '}
          {citations
            .map(citation => (
              <ListWrapper
                key={citation.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {citation.excerpt !== '' && (
                  <ItemWrapper>
                    {' '}
                    <SimpleCitationItemNoShadow>
                      <HorizontalContainer>
                        {citation.source !== '' && (
                          <FragmentsP>{citation.source}</FragmentsP>
                        )}

                        <>
                          <RelativeWrapper top='-5px' left='5px'>
                            {' '}
                            <ButtonSmallCircle
                              variant={ButtonVariants.WARNING_EMPTY}
                              onClick={() => removeCitationHandler(citation.id)}
                            >
                              <RelativeWrapper top='5px' left='0px'>
                                <SvgIcon
                                  variant='remove'
                                  contentAfter='usuń'
                                  toBottom
                                  toLeft='-55px'
                                  toTop='-18px'
                                  width='40px'
                                />
                              </RelativeWrapper>
                            </ButtonSmallCircle>
                          </RelativeWrapper>
                        </>
                      </HorizontalContainer>
                      <FragmentsP>{citation.coordinates}</FragmentsP>
                      <FragmentsPExcerpt>
                        {citation.excerpt.substring(0, 150)}
                      </FragmentsPExcerpt>
                    </SimpleCitationItemNoShadow>
                  </ItemWrapper>
                )}
              </ListWrapper>
            ))
            .reverse()}
        </RegularColumn>
      ) : null}
      {citations.length > 0 && wide ? (
        <TwoColumnsWrapper>
          {' '}
          {citations
            .map(citation => (
              <ListWrapper
                key={citation.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {citation.excerpt !== '' && (
                  <ItemWrapper>
                    {' '}
                    <SimpleCitationItemNoShadow>
                      <HorizontalContainer>
                        {citation.source !== '' && (
                          <FragmentsP>{citation.source}</FragmentsP>
                        )}

                        <>
                          <RelativeWrapper top='-5px' left='5px'>
                            {' '}
                            <ButtonSmallCircle
                              variant={ButtonVariants.WARNING_EMPTY}
                              onClick={() => removeCitationHandler(citation.id)}
                            >
                              {' '}
                              <RelativeWrapper top='5px' left='0px'>
                                <SvgIcon
                                  variant='remove'
                                  contentAfter='usuń'
                                  toBottom
                                  toTop='-18px'
                                  toLeft='-55px'
                                  width='40px'
                                />{' '}
                              </RelativeWrapper>
                            </ButtonSmallCircle>
                          </RelativeWrapper>
                        </>
                      </HorizontalContainer>
                      <FragmentsP>{citation.coordinates}</FragmentsP>
                      <FragmentsPExcerpt>
                        {citation.excerpt.substring(0, 150)}
                      </FragmentsPExcerpt>
                    </SimpleCitationItemNoShadow>
                  </ItemWrapper>
                )}
              </ListWrapper>
            ))
            .reverse()}
        </TwoColumnsWrapper>
      ) : null}
    </AnimateSharedLayout>
  )
}
export default CitationDisplay
