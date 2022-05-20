import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { editSavedFragment } from '../../features/fragments/fragmentSlice'
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

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: 'none',

  // change background colour if dragging
  background: isDragging
    ? 'var(--background2-main)'
    : 'var(--background1-main)',
  color: isDragging
    ? 'var(--background-secondary4)'
    : 'var(--background4-main)',
  // styles we need to apply on draggables
  ...draggableStyle,
})
const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver
    ? 'var(--background-tertiary1)'
    : 'var(--background1-main)',

  width: 250,
})

interface DragAndDropMainProps {}

const DragAndDropMain: React.FC<DragAndDropMainProps> = () => {
  const dispatch: any = useAppDispatch()

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )
  const { keywordOne, keywordTwo } = sortingKeywords
  const fragmentsKeywordOne: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordOne
  )
  const fragmentsKeywordTwo: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordTwo
  )
  //todo for onDragStart fn that checks if fragment of this _id has the keyword of the col it is beeing dragged to

  const [state, setState] = useState([
    fragments,
    fragmentsKeywordOne,
    fragmentsKeywordTwo,
  ])

  //? Behold the monster, onDragEnd with no end

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
      const items = reorder(state[sourceIndex], source.index, destination.index)
      const newState: any[] = [...state]
      newState[sourceIndex] = items
      setState(newState)
    } else {
      if (destinationIndex === 0) {
        //* I don't want to move anything to the 1st column
        return
      }

      //* HERE Begins section of adding keyword to fragment dragged
      // ? if destination index is 1 then I want to compare keywords[] of the fragment I'm moving keywords.includes(keywordOne) if it does I return, if it doesn't I add the keywordOne to keywords[] of dragged fragment
      //* this is how I access the fragment I just dropped
      const droppedFragment: any = state[source.droppableId][source.index]
      // const droppableId = destination.droppableId
      const {
        _id,
        source: fragmentSource,
        excerpt,
        coordinates,
        title,
        description,
        keywords,
      } = droppedFragment

      const newKeywordListOne = {
        _id: _id,
        source: fragmentSource,
        excerpt: excerpt,
        coordinates: coordinates,
        title: title,
        description: description,
        keywords: [...keywords, keywordOne],
      }
      const newKeywordListTwo = {
        _id: _id,
        source: fragmentSource,
        excerpt: excerpt,
        coordinates: coordinates,
        title: title,
        description: description,
        keywords: [...keywords, keywordTwo],
      }

      // // //todo move to 1 include k1
      // if (destinationIndex === 1 && keywords.includes(keywordOne)) {
      //   console.log('move to 1 and include k1')
      // }
      // // //todo move to 2 include k2
      // if (destinationIndex === 2 && keywords.includes(keywordTwo)) {
      //   console.log('move to 2 and include k2')
      // }
      // //todo move to 1 from 0 and does not include k1
      if (
        sourceIndex === 0 &&
        destinationIndex === 1 &&
        !keywords.includes(keywordOne)
      ) {
        console.log('move to 1 and does not include k1')
        dispatch(editSavedFragment(newKeywordListOne))
      }
      // //todo move to 2 from 0 and does not include k2'
      if (
        sourceIndex === 0 &&
        destinationIndex === 2 &&
        !keywords.includes(keywordTwo)
      ) {
        console.log('move to 2 and does not include k2')
        dispatch(editSavedFragment(newKeywordListTwo))
      }

      //* HERE Begins section responsible for moving/removing keywords between column[1] column[2]
      // console.log(sourceIndex)
      //? if (sourceIndex ===1 || sourceIndex ===2 ) { remove }
      const newKeywordListWithoutOne = {
        _id: _id,
        source: fragmentSource,
        excerpt: excerpt,
        coordinates: coordinates,
        title: title,
        description: description,
        keywords: [
          ...keywords.filter((keyword: string) => keyword !== keywordOne),
          keywordTwo,
        ],
      }
      const newKeywordListWithoutTwo = {
        _id: _id,
        source: fragmentSource,
        excerpt: excerpt,
        coordinates: coordinates,
        title: title,
        description: description,
        keywords: [
          ...keywords.filter((keyword: string) => keyword !== keywordTwo),
          keywordOne,
        ],
      }

      if (
        sourceIndex === 1 &&
        destinationIndex === 2 &&
        // * keywordOne is in
        !keywords.includes(keywordTwo)
      ) {
        //* from 1 to 2 and there is no keyword2 in 1
        dispatch(editSavedFragment(newKeywordListWithoutOne))
        console.log('1 to 2 ')
        console.log(keywords)
        console.log(
          keywords.filter((keyword: string) => keyword !== keywordOne)
        )
      } else if (
        sourceIndex === 2 &&
        destinationIndex === 1 &&
        !keywords.includes(keywordOne)
      ) {
        //* from 2 to 1 and there is no keyword1 in 2
        console.log('2 to 1 ')
        dispatch(editSavedFragment(newKeywordListWithoutTwo))
        console.log(keywords)
        console.log(
          keywords.filter((keyword: string) => keyword !== keywordTwo)
        )
      }

      //* END of removing keywords

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
      //todo adding keyword with onDrag event

      //todo
    }
  }

  // * for rerendering after Redux state side fragmentsKeywordOne and Two are changed
  useEffect(() => {
    setState([fragments, fragmentsKeywordOne, fragmentsKeywordTwo])
  }, [fragmentsKeywordTwo, fragmentsKeywordOne, fragments])

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {/* //?1st column I will rework it to contain filtering by date, keywords etc. */}
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
