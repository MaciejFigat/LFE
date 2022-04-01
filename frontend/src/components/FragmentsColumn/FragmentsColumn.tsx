import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import {
  FragmentsP,
  FragmentContainer,
  FragmentsPExcerpt,
} from './FragmentsColumn.styled'
import { motion, AnimateSharedLayout } from 'framer-motion'
import {
  ListWrapper,
  ItemWrapper,
} from '../AnimatedTextPanel/AnimatedList.styled'
import AnimatedItem from '../AnimatedTextPanel/AnimatedItem'
interface FragmentsColumnProps {}

const FragmentsColumn: React.FC<FragmentsColumnProps> = () => {
  const citations: any[] = useAppSelector((state) => state.fragment.citations)

  return (
    <AnimateSharedLayout>
      {citations.length > 0 &&
        citations
          .map((citation) => (
            <ListWrapper
              as={motion.ul}
              key={citation.id}
              layout
              // initial={{ borderRadius: 5, opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {citation.excerpt !== '' && (
                <FragmentContainer key={citation.title}>
                  <ItemWrapper>
                    {' '}
                    <AnimatedItem
                      id={citation.id}
                      title={citation.title}
                      description={citation.description}
                    >
                      <FragmentsP>created at: {citation.date}</FragmentsP>
                      <FragmentsPExcerpt>{citation.excerpt}</FragmentsPExcerpt>
                      <FragmentsP>source: {citation.source}</FragmentsP>
                    </AnimatedItem>
                  </ItemWrapper>
                </FragmentContainer>
              )}
            </ListWrapper>
          ))
          .reverse()}{' '}
    </AnimateSharedLayout>
  )
}
export default FragmentsColumn
