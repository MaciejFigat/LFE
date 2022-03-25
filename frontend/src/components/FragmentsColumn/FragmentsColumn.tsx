import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { citationRemoved } from '../../features/fragments/fragmentSlice'
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
                  <p>{citation.excerpt}</p>
                  <p>{citation.source}</p>
                  <button onClick={() => removeCitationHandler(citation.id)}>
                    remove
                  </button>
                  <button onClick={() => {}}>Edit title</button>
                </>
              )}
            </div>
          ))
          .reverse()}
    </div>
  )
}
export default FragmentsColumn
