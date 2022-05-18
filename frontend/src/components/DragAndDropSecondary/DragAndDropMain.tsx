import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import DropdownSelect from '../KeywordSearchPanel/DropdownSelect/DropdownSelect'
import {
  FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  KeywordSearchContainer,
} from '../KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * Moves an item from one list to another list.
 */
const move = (
  source: any,
  destination: any,
  droppableSource: any,
  droppableDestination: any
) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result: any = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}
const grid = 8

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
})
const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
})

interface DragAndDropMainProps {}

const DragAndDropMain: React.FC<DragAndDropMainProps> = () => {
  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const fragmentsKeywordOne: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordOne
  )
  const fragmentsKeywordTwo: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordTwo
  )

  const [state, setState] = useState([
    fragments,
    fragmentsKeywordOne,
    fragmentsKeywordTwo,
  ])

  function onDragEnd(result: any) {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }
    // * The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
    const sourceIndex = +source.droppableId
    const destinationIndex = +destination.droppableId
    // * reordering within the same array
    if (sourceIndex === destinationIndex) {
    }
    if (sourceIndex === destinationIndex) {
      const items = reorder(state[sourceIndex], source.index, destination.index)
      const newState: any[] = [...state]
      newState[sourceIndex] = items
      setState(newState)
    } else {
      if (destinationIndex === 0) {
        // console.log('Do not touch me! I am in the first column')
        return
      }
      const result = move(
        state[sourceIndex],
        state[destinationIndex],
        source,
        destination
      )

      const newState = [...state]
      newState[sourceIndex] = result[sourceIndex]
      newState[destinationIndex] = result[destinationIndex]

      setState(newState.filter((group) => group.length))
    }
  }

  // * for rerendering after Redux state side fragmentsKeywordOne and Two are changed
  useEffect(() => {
    setState([fragments, fragmentsKeywordOne, fragmentsKeywordTwo])
    // console.log(`fragmentsKeyword changed`)
  }, [fragmentsKeywordTwo, fragmentsKeywordOne, fragments])

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <KeywordSearchContainer
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {ind === 0 && <h2>All fragments</h2>}

                  {ind === 1 && <DropdownSelect keywordOptionOne />}

                  {ind === 2 && <DropdownSelect />}
                  {el.map((fragment, index) => (
                    <Draggable
                      key={fragment.nanoId}
                      draggableId={fragment.nanoId}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <FragmentDivSmall
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <FragmentParSmall>
                            <FragmentB>T:</FragmentB> {fragment.title}
                          </FragmentParSmall>
                          <FragmentParSmall>
                            <FragmentB>E:</FragmentB> {fragment.excerpt}
                          </FragmentParSmall>
                          <FragmentParSmall>
                            <FragmentB>D:</FragmentB> {fragment.description}
                          </FragmentParSmall>

                          {/* <button
                              type='button'
                              onClick={() => {
                                const newState = [...state]
                                newState[ind].splice(index, 1)
                                setState(
                                  newState.filter((group) => group.length)
                                )
                              }}
                            >
                              delete
                            </button> */}
                        </FragmentDivSmall>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </KeywordSearchContainer>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  )
}
export default DragAndDropMain
