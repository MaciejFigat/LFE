import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import {
  FragmentsP,
  FragmentContainer,
  FragmentsPExcerpt,
  HorizontalContainer,
} from './FragmentsColumn.styled'
import { motion, AnimateSharedLayout } from 'framer-motion'
import {
  // ListWrapper,
  ItemWrapper,
  ListWrapperDemo,
} from '../AnimatedTextPanel/AnimatedList.styled'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import { useAppDispatch } from '../../app/reduxHooks'
import { citationRemoved } from '../../features/fragments/fragmentSlice'
// import AnimatedItem from '../AnimatedTextPanel/AnimatedItem'
interface FragmentsColumnProps {}

const FragmentsColumn: React.FC<FragmentsColumnProps> = () => {
  const dispatch: any = useAppDispatch()

  const citations: any[] = useAppSelector((state) => state.fragment.citations)
  const removeCitationHandler = (id: string) => {
    dispatch(citationRemoved(id))
  }
  return (
    <AnimateSharedLayout>
      {citations.length > 0 &&
        citations
          .map((citation, index) => (
            <ListWrapperDemo
              as={motion.ul}
              key={citation.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {citation.excerpt !== '' && (
                <FragmentContainer key={citation.title}>
                  <ItemWrapper>
                    {' '}
                    {/* <AnimatedItem
                      id={citation.id}
                      title={citation.title}
                      description={citation.description}
                      source={citation.source}
                      excerpt={citation.excerpt}
                      coordinates={citation.coordinates}
                    ></AnimatedItem> */}
                    <HorizontalContainer>
                      <FragmentsP>Przykład nr {index + 1}</FragmentsP>
                      <SendButtonVerySmall
                        variant='secondaryEmpty'
                        onClick={() => removeCitationHandler(citation.id)}
                      >
                        usuń
                      </SendButtonVerySmall>
                    </HorizontalContainer>
                    <FragmentsPExcerpt>{citation.excerpt}</FragmentsPExcerpt>
                    <FragmentsP>
                      Zespół TurboLex, 29 sierpnia 2022, Warszawa
                    </FragmentsP>
                  </ItemWrapper>
                </FragmentContainer>
              )}
            </ListWrapperDemo>
          ))
          .reverse()}{' '}
    </AnimateSharedLayout>
  )
}
export default FragmentsColumn
