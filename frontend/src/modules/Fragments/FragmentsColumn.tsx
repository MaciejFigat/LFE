import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'

import {
  FragmentsWrapper,
  ItemWrapper,
  ListWrapper,
  SimpleCitationItem
} from '../AnimatedTextPanel/AnimatedList.styled'
import { citationRemoved } from '../../features/fragments/fragmentSlice'
import {
  FragmentsP,
  FragmentsPExcerpt,
  HorizontalContainer
} from './FragmentsColumn.styled'
import { ButtonVerySmall } from '../../components/Buttons/Buttons.styled'

interface FragmentsColumnProps {
  wide?: boolean
}

const FragmentsColumn: React.FC<FragmentsColumnProps> = ({ wide }) => {
  const dispatch: any = useAppDispatch()
  const widthNarrow = useAppSelector(state => state.preference.widthNarrow)
  const citations: any[] = useAppSelector(state => state.fragment.citations)
  const removeCitationHandler = (id: string) => {
    dispatch(citationRemoved(id))
  }

  return (
    <FragmentsWrapper $moreColumns={wide ? true : false} $width={widthNarrow}>
      {citations.length > 0 &&
        citations
          .map((citation, index) => (
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
                  <SimpleCitationItem>
                    <HorizontalContainer>
                      {citation.coordinates !== '' ? (
                        <FragmentsP>{citation.coordinates}</FragmentsP>
                      ) : (
                        <FragmentsP>Przykład nr {index + 1}</FragmentsP>
                      )}
                      <ButtonVerySmall
                        variant='secondaryEmpty'
                        onClick={() => removeCitationHandler(citation.id)}
                      >
                        usuń
                      </ButtonVerySmall>
                    </HorizontalContainer>
                    {citation.source !== '' && (
                      <FragmentsP>{citation.source}</FragmentsP>
                    )}
                    <FragmentsPExcerpt>{citation.excerpt}</FragmentsPExcerpt>
                  </SimpleCitationItem>
                </ItemWrapper>
              )}
            </ListWrapper>
          ))
          .reverse()}{' '}
    </FragmentsWrapper>
  )
}
export default FragmentsColumn
