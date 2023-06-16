import { DraggableLocation } from 'react-beautiful-dnd'
import { FragmentStored, KeywordValue } from '../../../interfaces'
import { editSavedFragment } from '../../../features/fragments/fragmentSlice'
import { useAppDispatch } from '../../../app/reduxHooks'
import { AppDispatch } from '../../../app/store'

//? reordering the items within a list
export const reorder = (
  list: FragmentStored[],
  startIndex: number,
  endIndex: number
): FragmentStored[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * //* Moves an item from one list to another list.
 */
export const move = (
  source: FragmentStored[],
  destination: FragmentStored[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
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

export function filterKeywordValue (
  keywordValueDropped: KeywordValue[],
  keywordMain: string
) {
  const filteredKeywordValue = keywordValueDropped.filter(
    (keywordSearched: KeywordValue) => keywordSearched.keyword !== keywordMain
  )

  const mainKeywordObject = keywordValueDropped.find(
    (keywordObject: KeywordValue) => keywordObject.keyword === keywordMain
  )

  return { filteredKeywordValue, mainKeywordObject }
}

// Helper function to create a new keyword list
export function createKeywordList (
  id: string,
  keywordObject: KeywordValue,
  value: boolean,
  skip: boolean,
  filteredKeywordValue: KeywordValue[]
): any {
  return {
    _id: id,
    keywordValue: [
      ...filteredKeywordValue,
      {
        keyword: keywordObject.keyword,
        labelOne: keywordObject.labelOne,
        labelTwo: keywordObject.labelTwo,
        value: value,
        skip: skip
      }
    ]
  }
}
export function handleDestinationDrop (
  _id: string,
  filteredKeywordValue: KeywordValue[],
  mainKeywordObject: KeywordValue,
  sourceIndex: number,
  destinationIndex: number
): any {
  // replace any with the correct type
  const destinationZero = {
    _id: _id,
    keywordValue: [
      ...filteredKeywordValue,
      {
        keyword: mainKeywordObject.keyword,
        labelOne: mainKeywordObject.labelOne,
        labelTwo: mainKeywordObject.labelTwo,
        value: mainKeywordObject.value,
        skip: true
      }
    ]
  }

  const newKeywordListOne = {
    _id: _id,
    keywordValue: [
      ...filteredKeywordValue,
      {
        keyword: mainKeywordObject.keyword,
        labelOne: mainKeywordObject.labelOne,
        labelTwo: mainKeywordObject.labelTwo,
        value: true,
        skip: false
      }
    ]
  }

  const newKeywordListTwo = {
    _id: _id,
    keywordValue: [
      ...filteredKeywordValue,
      {
        keyword: mainKeywordObject.keyword,
        labelOne: mainKeywordObject.labelOne,
        labelTwo: mainKeywordObject.labelTwo,
        value: false,
        skip: false
      }
    ]
  }

  let fragmentToDispatch
  if (destinationIndex === 0) {
    fragmentToDispatch = destinationZero
  } else if (sourceIndex === 0 && destinationIndex === 1) {
    fragmentToDispatch = newKeywordListOne
  } else if (sourceIndex === 0 && destinationIndex === 2) {
    fragmentToDispatch = newKeywordListTwo
  } else if (sourceIndex === 1 && destinationIndex === 2) {
    fragmentToDispatch = newKeywordListTwo
  } else if (sourceIndex === 2 && destinationIndex === 1) {
    fragmentToDispatch = newKeywordListOne
  }

  return fragmentToDispatch
}
