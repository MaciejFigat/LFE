import { DraggableLocation, DropResult } from 'react-beautiful-dnd'
import { FragmentStored, KeywordValue } from '../../../interfaces'
import { editSavedFragment } from '../../../features/fragments/fragmentSlice'
import { AppDispatch } from '../../../app/store'
import { Dispatch, SetStateAction } from 'react'

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
): FragmentStored {
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

  return fragmentToDispatch as FragmentStored
}

export const filterFragments = (
  fragments: FragmentStored[],
  keywordMain: string,
  skip: boolean,
  value?: boolean
): FragmentStored[] => {
  return fragments.filter(filteredFragment =>
    filteredFragment.keywordValue.find(
      (keywordSearched: KeywordValue) =>
        keywordSearched.keyword === keywordMain &&
        keywordSearched?.skip !== undefined &&
        keywordSearched.skip === skip &&
        keywordSearched.value === value
    )
  )
}

export const handleSourceAndDestinationSame = (
  result: DropResult,
  state: FragmentStored[][]
) => {
  const { source, destination } = result
  const sourceIndex = +source.droppableId
  const items = reorder(state[sourceIndex], source.index, destination!.index)
  const newState = [...state]
  newState[sourceIndex] = items
  return newState
}

export const handleDifferentSourceAndDestination = (
  result: DropResult,
  state: FragmentStored[][],
  dispatch: AppDispatch,
  keywordMain: string
) => {
  const { source, destination } = result
  const sourceIndex = +source.droppableId
  const destinationIndex = +destination!.droppableId

  const droppedFragment: FragmentStored = state[sourceIndex][source.index]

  const { _id, keywordValue: keywordValueDropped } = droppedFragment
  const { filteredKeywordValue, mainKeywordObject } = filterKeywordValue(
    keywordValueDropped,
    keywordMain
  )

  if (destinationIndex === 0 && mainKeywordObject) {
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
    dispatch(editSavedFragment(destinationZero))
  }

  if (mainKeywordObject) {
    const fragmentToDispatch = handleDestinationDrop(
      _id,
      filteredKeywordValue,
      mainKeywordObject,
      sourceIndex,
      destinationIndex
    )
    dispatch(editSavedFragment(fragmentToDispatch))
  }

  const moveResult = move(
    state[sourceIndex],
    state[destinationIndex],
    source,
    destination as DraggableLocation
  )

  const newState = [...state]
  newState[sourceIndex] = moveResult[sourceIndex]
  newState[destinationIndex] = moveResult[destinationIndex]

  return newState
}

export const initializeFragments = (
  fragmentsKeywordMain: FragmentStored[],
  keywordMain: string,
  fragments: FragmentStored[],
  setLabelOneState: Dispatch<SetStateAction<string | undefined>>,
  setLabelTwoState: Dispatch<SetStateAction<string | undefined>>
): FragmentStored[][] => {
  const fragmentsSkipTrue =
    keywordMain !== ''
      ? fragmentsKeywordMain.filter(filteredFragment =>
          filteredFragment.keywordValue.find(
            (keywordSearched: KeywordValue) =>
              keywordSearched.keyword === keywordMain &&
              keywordSearched?.skip !== undefined &&
              keywordSearched.skip === true
          )
        )
      : fragments.filter(
          filteredFragment =>
            filteredFragment.keywords.length === 1 &&
            filteredFragment.keywords[0] === ''
        )

  const fragmentsValueTrue = fragmentsKeywordMain.filter(filteredFragment =>
    filteredFragment.keywordValue.find(
      (keywordSearched: KeywordValue) =>
        keywordSearched.keyword === keywordMain &&
        keywordSearched?.skip !== undefined &&
        keywordSearched.skip === false &&
        keywordSearched.value === true
    )
  )
  const fragmentsValueFalse = fragmentsKeywordMain.filter(filteredFragment =>
    filteredFragment.keywordValue.find(
      (keywordSearched: KeywordValue) =>
        keywordSearched.keyword === keywordMain &&
        keywordSearched?.skip !== undefined &&
        keywordSearched.skip === false &&
        keywordSearched.value === false
    )
  )

  const keywordValueFound = fragmentsKeywordMain[0]?.keywordValue?.find(
    (keywordSearched: KeywordValue) => keywordSearched.keyword === keywordMain
  )

  setLabelOneState(keywordValueFound?.labelOne)
  setLabelTwoState(keywordValueFound?.labelTwo)

  return [fragmentsSkipTrue, fragmentsValueTrue, fragmentsValueFalse]
}
