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
} from '../FragmentsColumn/FragmentsColumn.styled'
import { SendButtonVerySmall } from '../../components/ButtonsSend/Buttons.styled'
import { RegularColumn, RelativeWrapper } from '../../styles/misc.styled'
import SvgIcon from '../../components/SvgIcon/SvgIcon'
import { TwoColumnsWrapper } from '../../styles/misc.styled'
import { AppDispatch } from '../../app/store'

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
                          <FragmentsP>
                            {/* {citation.source.substring(0, 27)} */}
                            {citation.source}
                          </FragmentsP>
                        )}

                        <>
                          <RelativeWrapper top='-15px' left='10px'>
                            {' '}
                            <SendButtonVerySmall
                              variant='secondaryEmpty'
                              onClick={() => removeCitationHandler(citation.id)}
                            >
                              <SvgIcon
                                variant='remove'
                                contentAfter='usuń'
                                toBottom
                                toLeft='-60px'
                                width='40px'
                              />
                            </SendButtonVerySmall>
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
                          <FragmentsP>
                            {/* {citation.source.substring(0, 27)} */}
                            {citation.source}
                          </FragmentsP>
                        )}

                        <>
                          <RelativeWrapper top='-15px' left='10px'>
                            {' '}
                            <SendButtonVerySmall
                              variant='secondaryEmpty'
                              onClick={() => removeCitationHandler(citation.id)}
                            >
                              <SvgIcon
                                variant='remove'
                                contentAfter='usuń'
                                toBottom
                                toLeft='-60px'
                                width='40px'
                              />
                            </SendButtonVerySmall>
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
