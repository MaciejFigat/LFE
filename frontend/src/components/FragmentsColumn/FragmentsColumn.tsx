import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import {
  FragmentsP,
  FragmentContainer,
  FragmentsPExcerpt,
} from './FragmentsColumn.styled'
import { motion, AnimateSharedLayout } from 'framer-motion'
import {
  // ListWrapper,
  ItemWrapper,
  ListWrapperDemo,
} from '../AnimatedTextPanel/AnimatedList.styled'

// import AnimatedItem from '../AnimatedTextPanel/AnimatedItem'
interface FragmentsColumnProps {}

const FragmentsColumn: React.FC<FragmentsColumnProps> = () => {
  const citations: any[] = useAppSelector((state) => state.fragment.citations)

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
                    <FragmentsP>Przykład nr {index + 1}</FragmentsP>
                    <FragmentsPExcerpt>{citation.excerpt}</FragmentsPExcerpt>
                    <FragmentsP>
                      Interpretacja indywidualna, Dyrektora Izby Skarbowej w
                      Warszawie, 9 marca 2016, IPPB6/4510-22/16-2/AM
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
