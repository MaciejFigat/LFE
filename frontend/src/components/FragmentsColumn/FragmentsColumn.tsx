import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { citationRemoved } from '../../features/fragments/fragmentSlice'
import { SendButton } from '../Buttons/Buttons.styled'
interface FragmentsColumnProps {}

const FragmentsColumn: React.FC<FragmentsColumnProps> = () => {
  const dispatch: any = useAppDispatch()
  const citations: any[] = useAppSelector((state) => state.fragment.citations)

  const removeCitationHandler = (id: string) => {
    dispatch(citationRemoved(id))
  }

  return (
    <div>
      {citations.length > 0 &&
        citations
          .map((citation) => (
            <div key={citation.id}>
              {citation.excerpt !== '' && (
                <>
                  <p>{citation.title}</p>
                  <p>{citation.date}</p>
                  <p>{citation.excerpt}</p>
                  <p>{citation.source}</p>
                  <SendButton variant='primaryEmpty' onClick={() => {}}>
                    Edit title
                  </SendButton>
                  <SendButton
                    variant='secondaryEmpty'
                    onClick={() => removeCitationHandler(citation.id)}
                  >
                    remove
                  </SendButton>
                </>
              )}
            </div>
          ))
          .reverse()}
    </div>
  )
}
export default FragmentsColumn
