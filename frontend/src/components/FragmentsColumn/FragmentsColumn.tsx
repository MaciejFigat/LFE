import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { citationRemoved } from '../../features/fragments/fragmentSlice'
import { SendButton } from '../Buttons/Buttons.styled'
import { FragmentsP, FragmentContainer } from './FragmentsColumn.styled'
import { motion, AnimateSharedLayout } from 'framer-motion'
import {
  ListWrapper,
  ItemWrapper,
} from '../AnimatedTextPanel/AnimatedList.styled'
import AnimatedItem from '../AnimatedTextPanel/AnimatedItem'
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
                      <FragmentsP>{citation.title}</FragmentsP>
                      <FragmentsP>{citation.date}</FragmentsP>
                      <FragmentsP>{citation.excerpt}</FragmentsP>
                      <FragmentsP>{citation.source}</FragmentsP>
                      <SendButton variant='primaryEmpty' onClick={() => {}}>
                        Edit title
                      </SendButton>
                      <SendButton
                        variant='secondaryEmpty'
                        onClick={() => removeCitationHandler(citation.id)}
                      >
                        remove
                      </SendButton>
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
