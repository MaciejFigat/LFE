import React, { useCallback, useReducer, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { MainWrapper, ColOne } from './DragAndDrop.styled'
import produce from 'immer'

// export const data = [
//   {
//     id: '5f832341cc119a50d1adb972',
//     picture: 'http://placehold.it/32x32',
//     name: {
//       first: 'Goff',
//       last: 'Robbins',
//     },
//   },
//   {
//     id: '5f832341e1d0f20fc283177a',
//     picture: 'http://placehold.it/32x32',
//     name: {
//       first: 'Pickett',
//       last: 'Burks',
//     },
//   },
//   {
//     id: '5f832341daae2cc0af8610a4',
//     picture: 'http://placehold.it/32x32',
//     name: {
//       first: 'Taylor',
//       last: 'Campos',
//     },
//   },
//   {
//     id: '5f832341ef54dda7b80930da',
//     picture: 'http://placehold.it/32x32',
//     name: {
//       first: 'Nolan',
//       last: 'Bright',
//     },
//   },
//   {
//     id: '5f8323410a6b9155385bd47d',
//     picture: 'http://placehold.it/32x32',
//     name: {
//       first: 'Fran',
//       last: 'Buchanan',
//     },
//   },
//   {
//     id: '5f8323416ecbb23bb925363a',
//     picture: 'http://placehold.it/32x32',
//     name: {
//       first: 'Vonda',
//       last: 'Nieves',
//     },
//   },
//   {
//     id: '5f832341eee9783dfccbfa6d',
//     picture: 'http://placehold.it/32x32',
//     name: {
//       first: 'Sheree',
//       last: 'Reynolds',
//     },
//   },
//   {
//     id: '5f832341c0b0131eeade1b00',
//     picture: 'http://placehold.it/32x32',
//     name: {
//       first: 'Lilian',
//       last: 'Russell',
//     },
//   },
// ]
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

  const data: any[] = useAppSelector((state) => state.fragment.userFragments)

  const [state, dispatch] = useReducer(dragReducer, {
    items: data,
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
        <Droppable droppableId='items' type='PERSON'>
          {/* //todo snapshot will be used for styling during the dragging process */}
          {(provided, snapshot) => {
            return (
              <ColOne ref={provided.innerRef} {...provided.droppableProps}>
                {state.items?.map((fragment: any, index: any) => {
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
                            <div>
                              <span>
                                {fragment.title} {fragment.excerpt}
                              </span>
                              <button onClick={() => console.log(fragment._id)}>
                                {' '}
                                test
                              </button>
                            </div>
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
        <Droppable droppableId='items2' type='PERSON'>
          {(provided, snapshot) => {
            return (
              <ColOne ref={provided.innerRef} {...provided.droppableProps}>
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
                            <div>
                              <span>{fragment.title}</span>
                            </div>
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
        <Droppable droppableId='items3' type='PERSON'>
          {(provided, snapshot) => {
            return (
              <ColOne ref={provided.innerRef} {...provided.droppableProps}>
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
                            <div>
                              <span>{fragment.title}</span>
                            </div>
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
