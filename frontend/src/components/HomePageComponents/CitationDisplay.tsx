import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { citationRemoved } from '../../features/fragments/fragmentSlice'
import { AnimateSharedLayout } from 'framer-motion'
import {
  ItemWrapper,
  ListWrapper,
  SimpleCitationItemNoShadow,
} from '../Miscellaneous/AnimatedTextPanel/AnimatedList.styled'
import {
  FragmentsP,
  FragmentsPExcerpt,
  HorizontalContainer,
} from '../FragmentsColumn/FragmentsColumn.styled'
import { SendButtonVerySmall } from '../Miscellaneous/Buttons/Buttons.styled'
import { ChangingColumnsWrapper, RegularColumn } from '../../styles/misc.styled'

interface CitationDisplayProps {}

const CitationDisplay: React.FC<CitationDisplayProps> = () => {
  const dispatch: any = useAppDispatch()
  const citations: any[] = useAppSelector((state) => state.fragment.citations)
  const removeCitationHandler = (id: string) => {
    dispatch(citationRemoved(id))
  }

  return (
    <AnimateSharedLayout>
      {' '}
      <RegularColumn>
        {citations.length > 0 &&
          citations
            .map((citation) => (
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
                            {citation.source.substring(0, 27)}
                            {/* {citation.source} */}
                          </FragmentsP>
                        )}
                        <SendButtonVerySmall
                          variant='secondaryEmpty'
                          onClick={() => removeCitationHandler(citation.id)}
                        >
                          usuń
                        </SendButtonVerySmall>
                      </HorizontalContainer>

                      <FragmentsPExcerpt>
                        {citation.excerpt.substring(0, 50)}
                      </FragmentsPExcerpt>
                    </SimpleCitationItemNoShadow>
                  </ItemWrapper>
                )}
              </ListWrapper>
            ))
            .reverse()}{' '}
      </RegularColumn>
    </AnimateSharedLayout>
  )
}
export default CitationDisplay
