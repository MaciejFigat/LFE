import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { citationRemoved } from '../../features/fragments/fragmentSlice'
interface FragmentsColumnProps {}

const FragmentsColumn: React.FC<FragmentsColumnProps> = () => {
  const dispatch: any = useAppDispatch()
  const citations = useAppSelector((state) => state.fragment.citations)
  //   const userFragments = useAppSelector((state) => state.fragment.fragments)

  //   const fragmentsShown = []
  const removeCitationHandler = (id: string) => {
    dispatch(citationRemoved(id))
  }

  return (
    <div>
      {citations.length > 0 &&
        citations
          .map((citation) => (
            <>
              {/* <button onClick={removeCitationHandler(citation.id)}> */}
              <button onClick={() => removeCitationHandler(citation.id)}>
                remove
              </button>
              <p key={citation.id}>{citation.excerpt}</p>
            </>
          ))
          .reverse()}
    </div>
  )
}
export default FragmentsColumn
