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
} from '../Miscellaneous/AnimatedTextPanel/AnimatedList.styled'
import { SendButtonVerySmall } from '../Miscellaneous/Buttons/Buttons.styled'
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
  const date = new Date()

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  let currentDate = `${day}-${month}-${year}`
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
                <FragmentContainer key={citation.title} borderBottom>
                  <ItemWrapper>
                    {' '}
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
                        Zespół TurboLex, {currentDate}, Warszawa
                      </FragmentsP>
                    )}
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
