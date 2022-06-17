import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  editSavedFragment,
  updateUserFragmentsKeywordOne,
  updateUserFragmentsKeywordTwo,
} from '../../features/fragments/fragmentSlice'
import { DragDropContext } from 'react-beautiful-dnd'

import ResizableScrollSection from '../ScrollSection/ResizableScrollSection'
import FirstColumn from './FirstColumn'
import SecondAndThirdCol from './SecondAndThirdCol'

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

interface DragAndDropMainProps {}

const DragAndDropMain: React.FC<DragAndDropMainProps> = () => {
  const dispatch: any = useAppDispatch()

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const fragment = useAppSelector((state) => state.fragment)
  const { loading, success } = fragment

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
  const sortingDate = useAppSelector((state) => state.preference.sortingDate)
  const { sortingYear, sortingMonth, sortingDay } = sortingDate

  const sortingDateString = `${sortingYear}-${
    sortingMonth < 10 ? `0${sortingMonth}` : `${sortingMonth}`
  }-${sortingDay < 10 ? `0${sortingDay}` : `${sortingDay}`}`

  const [state, setState] = useState([
    fragments.filter(
      (fragmentsSorted) =>
        fragmentsSorted.createdAt.substring(0, 10) === sortingDateString
    ),
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

      // //todo move to 1 from 0 and does not include k1
      if (
        sourceIndex === 0 &&
        destinationIndex === 1 &&
        !keywords.includes(keywordOne)
      ) {
        dispatch(editSavedFragment(newKeywordListOne))
      }
      //todo move to 2 from 0 and does not include k2
      if (
        sourceIndex === 0 &&
        destinationIndex === 2 &&
        !keywords.includes(keywordTwo)
      ) {
        dispatch(editSavedFragment(newKeywordListTwo))
      }

      //* HERE Begins section responsible for moving/removing keywords between column[1] column[2]

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
      } else if (
        sourceIndex === 2 &&
        destinationIndex === 1 &&
        !keywords.includes(keywordOne)
      ) {
        //* from 2 to 1 and there is no keyword1 in 2

        dispatch(editSavedFragment(newKeywordListWithoutTwo))
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
    }
  }

  // * for rerendering after Redux state side fragmentsKeywordOne and Two are changed
  useEffect(() => {
    setState([fragments, fragmentsKeywordOne, fragmentsKeywordTwo])
  }, [fragmentsKeywordTwo, fragmentsKeywordOne, fragments])

  // * updates matching keyword lists one and two after successful dispatch that updates a fragment
  useEffect(() => {
    const fragmentsMatchingOne = fragments?.filter(
      (fragmentsSorted) => fragmentsSorted.keywords?.indexOf(keywordOne) >= 0
    )
    const fragmentsMatchingTwo = fragments?.filter(
      (fragmentsSorted) => fragmentsSorted.keywords?.indexOf(keywordTwo) >= 0
    )

    if (success === true && loading === false) {
      dispatch(updateUserFragmentsKeywordOne(fragmentsMatchingOne))
      dispatch(updateUserFragmentsKeywordTwo(fragmentsMatchingTwo))
    }
  }, [fragments, dispatch, keywordOne, keywordTwo, loading, success])
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ResizableScrollSection
        transparent
        wideSection={<FirstColumn state={state} />}
        // ! 2nd 3rd columns
        narrowSection={<SecondAndThirdCol state={state} />}
      />
    </DragDropContext>
  )
}
export default DragAndDropMain
