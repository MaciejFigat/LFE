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

//? reordering the items within a list

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * //* Moves an item from one list to another list.
 */
const move = (
  source: any,
  destination: any,
  droppableSource: any,
  droppableDestination: any
) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)

  //* removed array that is a sourceClone without droppableSource.index
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  //* adding removed array
  destClone.splice(droppableDestination.index, 0, removed)

  const result: any = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone
  //* so I'll have result
  //* {droppableSource.droppableId: sourceClone, droppableDestination.droppableId: destClone}

  return result
}
// const grid = 8

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  // padding: grid * 2,
  // margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
})
const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  // padding: grid,
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
  // * dummy object for col 1 and col 2
  // const dummyFragment = {
  //   nanoId: 'fwjifwijjifw111122',
  //   _id: 'dummy text',
  //   userId: 'dummy text',
  //   source: 'dummy text',
  //   excerpt: 'dummy text',
  //   coordinates: 'dummy text',
  //   title: 'dummy text',
  //   description: 'dummy text',
  //   keywords: ['dummy text'],
  // }
  const [state, setState] = useState([
    fragments,
    fragmentsKeywordOne,
    fragmentsKeywordTwo,
    // fragmentsKeywordOne.splice(1, 0, dummyFragment),
    // [dummyFragment, ...fragmentsKeywordOne],
    // fragmentsKeywordTwo.splice(1, 0, dummyFragment),
    // [dummyFragment, ...fragmentsKeywordTwo],
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
    // if (sourceIndex === destinationIndex) {
    // }
    if (sourceIndex === destinationIndex) {
      const items = reorder(state[sourceIndex], source.index, destination.index)
      const newState: any[] = [...state]
      newState[sourceIndex] = items
      setState(newState)
    } else {
      if (destinationIndex === 0) {
        //* I don't want to move anything to the 1st column
        return
      }
      const result = move(
        state[sourceIndex],
        state[destinationIndex],
        source,
        destination
      )

      const newState = [...state]
      //todo targetting the list of this index
      newState[sourceIndex] = result[sourceIndex]
      newState[destinationIndex] = result[destinationIndex]

      //* below setState will remove the empty group [] from the state
      // setState(newState.filter((group) => group.length))
      //* this will not remove empty one
      setState(newState)

      // setState(newState.filter((group) => group.length > 0))
    }
  }

  // * for rerendering after Redux state side fragmentsKeywordOne and Two are changed
  useEffect(() => {
    setState([fragments, fragmentsKeywordOne, fragmentsKeywordTwo])
  }, [fragmentsKeywordTwo, fragmentsKeywordOne, fragments])
  // useEffect(() => {
  //   if (state.length === 3) {
  //     setState([fragments, fragmentsKeywordOne, fragmentsKeywordTwo])
  //   }
  //   if (state.length < 3) {
  //     const dummyFragment = {
  //       nanoId: 'fwjifwijjifw111122',
  //       _id: 'dummy text',
  //       userId: 'dummy text',
  //       source: 'dummy text',
  //       excerpt: 'dummy text',
  //       coordinates: 'dummy text',
  //       title: 'dummy text',
  //       description: 'dummy text',
  //       keywords: ['dummy text'],
  //     }
  //     const fragmentsOne = [dummyFragment, ...fragmentsKeywordOne]
  //     const fragmentsTwo = [dummyFragment, ...fragmentsKeywordTwo]
  //     setState([fragments, fragmentsOne, fragmentsTwo])
  //   }
  // }, [fragmentsKeywordTwo, fragmentsKeywordOne, fragments, state.length])

  // useEffect(() => {
  //   setState([fragments, fragmentsOne, fragmentsTwo])
  // }, [fragmentsKeywordTwo, fragmentsKeywordOne, fragments, dummyFragment, fragmentsOne, fragmentsTwo])

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {/* //*1st column I will rework it to contain filtering by date, keywords etc. */}
          {/* {state.slice(1).map((el, ind) => ( */}
          <Droppable key={'0'} droppableId={`0`}>
            {(provided, snapshot) => (
              <KeywordSearchContainer
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                <h2>All fragments</h2>

                {state[0].map((fragment, index) => (
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
                      </FragmentDivSmall>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </KeywordSearchContainer>
            )}
          </Droppable>
          ){/* //todo End Of 1st column*/}
          {/* //*I am only mapping 2nd and 3rd column */}
          {state.slice(1).map((el, ind) => (
            // ? here indexes have '+1' because I separated 1st column and since I used its indexes aswell as those here, +1 is to avoid the conflict in logic of Droppable
            <Droppable key={ind + 1} droppableId={`${ind + 1}`}>
              {(provided, snapshot) => (
                <KeywordSearchContainer
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <h3>FILLER FILLER</h3>
                  {ind === 0 && <DropdownSelect keywordOptionOne />}
                  {ind === 1 && <DropdownSelect />}
                  {el.length === 1 && (
                    <h2>If You move me this category will dissapear!</h2>
                  )}
                  {/* {el.slice(-1).map((fragment, index) => ( */}
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
