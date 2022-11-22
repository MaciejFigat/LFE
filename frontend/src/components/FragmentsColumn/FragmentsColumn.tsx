import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'

import { motion, AnimateSharedLayout } from 'framer-motion'
import {
  FragmentsWrapper,
  ItemWrapper,
  ListItemSimple,
  ListWrapper,
  SimpleCitationItem,
} from '../Miscellaneous/AnimatedTextPanel/AnimatedList.styled'
import { SendButtonVerySmall } from '../Miscellaneous/Buttons/Buttons.styled'
import { useAppDispatch } from '../../app/reduxHooks'
import { citationRemoved } from '../../features/fragments/fragmentSlice'

import {
  FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  FragmentTitleRowSmall,
} from '../Miscellaneous/KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import {
  RelativeRightSvgWrapper,
  WrapperMotionDiv,
} from '../../styles/misc.styled'
import {
  FragmentsContainerSimple,
  FragmentsP,
  FragmentsPExcerpt,
  HorizontalContainer,
} from './FragmentsColumn.styled'

interface FragmentsColumnProps {
  showFragmentsState?: boolean
}

const FragmentsColumn: React.FC<FragmentsColumnProps> = ({
  showFragmentsState,
}) => {
  const dispatch: any = useAppDispatch()
  const widthNarrow = useAppSelector((state) => state.preference.widthNarrow)
  const citations: any[] = useAppSelector((state) => state.fragment.citations)
  const removeCitationHandler = (id: string) => {
    dispatch(citationRemoved(id))
  }

  return (
    <AnimateSharedLayout>
      <FragmentsWrapper moreColumns={false} width={widthNarrow}>
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
                        {index === 0 ? (
                          <FragmentsP>{citation.title}</FragmentsP>
                        ) : (
                          <FragmentsP>Przykład nr {index + 1}</FragmentsP>
                        )}
                        <SendButtonVerySmall
                          variant='secondaryEmpty'
                          onClick={() => removeCitationHandler(citation.id)}
                        >
                          usuń
                        </SendButtonVerySmall>
                      </HorizontalContainer>
                      <FragmentsPExcerpt>{citation.excerpt}</FragmentsPExcerpt>
                      {citation.source !== 'source' ? (
                        <FragmentsP>{citation.source}</FragmentsP>
                      ) : (
                        <FragmentsP>
                          {/* Zespół TurboLex, {currentDate}, Warszawa */} xxx
                        </FragmentsP>
                      )}
                    </SimpleCitationItem>
                  </ItemWrapper>
                )}
              </ListWrapper>
            ))
            .reverse()}{' '}
      </FragmentsWrapper>
    </AnimateSharedLayout>
  )
}
export default FragmentsColumn
