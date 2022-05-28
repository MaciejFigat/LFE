import React, { useCallback, useReducer, useState, useEffect } from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { MainWrapper, ColOne } from './DragAndDrop.styled'
import produce from 'immer'
import AnimatedSavedItemSimple from '../AnimatedTextPanel/AnimatedSavedItemSimple'

interface DragAndDropSecondaryProps {}

//? DragDropContext is the contex provider
//? Droppable is the drop zone
//? Draggable are the elements dragged
const dragReducer = produce((draft, action) => {
  switch (action.type) {
    case 'MOVE': {
      draft[action.from] = draft[action.from] || []
      draft[action.to] = draft[action.to] || []
      const [removed] = draft[action.from].splice(action.fromIndex, 1)
      draft[action.to].splice(action.toIndex, 0, removed)
    }
  }
})
const DragAndDropSecondary: React.FC<DragAndDropSecondaryProps> = () => {
  // const dispatchRedux: any = useAppDispatch()
  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )
  // const fragments: any[] = useAppSelector(
  const fragments: any = useAppSelector((state) => state.fragment.userFragments)
  const [keywordOneArr, setKeywordOneArr] = useState<any[]>([])
  const [keywordTwoArr, setKeywordTwoArr] = useState<any[]>([])
  useEffect(() => {
    if (fragments) {
      setKeywordOneArr(
        fragments.filter(
          (fragmentsSorted: any) =>
            fragmentsSorted.keywords?.indexOf(sortingKeywords.keywordOne) >= 0
        )
      )
      setKeywordTwoArr(
        fragments.filter(
          (fragmentsSorted: any) =>
            fragmentsSorted.keywords?.indexOf(sortingKeywords.keywordTwo) >= 0
        )
      )
    }
  }, [fragments, sortingKeywords.keywordOne, sortingKeywords.keywordTwo])

  const data = [...fragments]

  const data2 = keywordOneArr

  const data3 = keywordTwoArr

  const [state, dispatch] = useReducer(dragReducer, {
    items: data,
    items2: data2,

    items3: data3,
  })

  const onDragEnd = useCallback((result) => {
    if (result.reason === 'DROP') {
      if (!result.destination) {
        return
      }
      dispatch({
        type: 'MOVE',
        from: result.source.droppableId,
        to: result.destination.droppableId,
        fromIndex: result.source.index,
        toIndex: result.destination.index,
      })
    }
  }, [])
  return (
    <MainWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='items' type='FRAGMENT'>
          {/* //todo snapshot will be used for styling during the dragging process */}
          {(provided, snapshot) => {
            return (
              <ColOne ref={provided.innerRef} {...provided.droppableProps}>
                {/* <FilterWrapper /> */}
                <h1>TEST</h1>
                <b>TEST</b>
                <b>TEST</b>
                <b>TEST</b>

                <button onClick={() => console.log(state.items)}>items</button>
                <button
                  onClick={() => console.log(state.items2, keywordOneArr)}
                >
                  items2
                </button>
                <button
                  onClick={() => console.log(state.items3, keywordTwoArr)}
                >
                  items3
                </button>
                {state.items?.map((fragment: any, index: any) => {
                  return (
                    <Draggable
                      // key={Math.random()}
                      key={fragment._id}
                      draggableId={fragment._id}
                      // draggableId={`${Math.random()}`}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {/* <div>
                              <span>{fragment.title}</span>
                            </div> */}
                            <AnimatedSavedItemSimple
                              title={fragment.title}
                              description={fragment.description}
                              source={fragment.source}
                              excerpt={fragment.excerpt}
                              coordinates={fragment.coordinates}
                              updatedAt={fragment.updatedAt}
                              keywords={fragment.keywords}
                            />
                          </div>
                        )
                      }}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ColOne>
            )
          }}
        </Droppable>
        <Droppable droppableId='items2' type='FRAGMENT'>
          {(provided, snapshot) => {
            return (
              <ColOne ref={provided.innerRef} {...provided.droppableProps}>
                {/* <KeywordSearchSecondary
                  keywordOptionOne
                  {...provided.droppableProps}
                /> */}
                {/* <KeywordSearchSecondary keywordOptionOne /> */}
                {state.items2?.map((fragment: any, index: any) => {
                  return (
                    <Draggable
                      key={fragment._id}
                      draggableId={fragment._id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <AnimatedSavedItemSimple
                              title={fragment.title}
                              description={fragment.description}
                              source={fragment.source}
                              excerpt={fragment.excerpt}
                              coordinates={fragment.coordinates}
                              updatedAt={fragment.updatedAt}
                              keywords={fragment.keywords}
                            />
                          </div>
                        )
                      }}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ColOne>
            )
          }}
        </Droppable>
        <Droppable droppableId='items3' type='FRAGMENT'>
          {(provided, snapshot) => {
            return (
              <ColOne ref={provided.innerRef} {...provided.droppableProps}>
                {/* <KeywordSearchSecondary /> */}

                {state.items3?.map((fragment: any, index: any) => {
                  return (
                    <Draggable
                      key={fragment._id}
                      draggableId={fragment._id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <AnimatedSavedItemSimple
                              title={fragment.title}
                              description={fragment.description}
                              source={fragment.source}
                              excerpt={fragment.excerpt}
                              coordinates={fragment.coordinates}
                              updatedAt={fragment.updatedAt}
                              keywords={fragment.keywords}
                            />
                          </div>
                        )
                      }}
                    </Draggable>
                  )
                })}

                {provided.placeholder}
              </ColOne>
            )
          }}
        </Droppable>
      </DragDropContext>
    </MainWrapper>
  )
}
export default DragAndDropSecondary
