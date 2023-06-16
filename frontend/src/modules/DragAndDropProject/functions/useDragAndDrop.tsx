import { useState, useEffect, Dispatch, SetStateAction, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { editSavedFragment } from '../../../features/fragments/fragmentSlice'
import { FragmentStored, KeywordValue } from '../../../interfaces'
import {
  filterKeywordValue,
  handleDestinationDrop,
  move,
  reorder
} from './dragFragmentsFunctions'
import { DropResult } from 'react-beautiful-dnd'

type UseDragAndDropProps = {
  fragmentsKeywordMain: FragmentStored[]
  keywordMain: string
  setLabelOneState: Dispatch<SetStateAction<string | undefined>>
  setLabelTwoState: Dispatch<SetStateAction<string | undefined>>
}

const useDragAndDrop = ({
  fragmentsKeywordMain,
  keywordMain,
  setLabelOneState,
  setLabelTwoState
}: UseDragAndDropProps) => {
  const dispatch = useAppDispatch()

  const fragments = useAppSelector<Array<FragmentStored>>(
    state => state.fragment.userFragments
  )

  const filterFragments = useMemo(
    () =>
      (
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
      },
    []
  )
  const fragmentsSkipTrueOne = filterFragments(
    fragmentsKeywordMain,
    keywordMain,
    true
  )
  const fragmentsValueTrueTwo = filterFragments(
    fragmentsKeywordMain,
    keywordMain,
    false,
    true
  )
  const fragmentsValueFalseThree = filterFragments(
    fragmentsKeywordMain,
    keywordMain,
    false,
    false
  )
  const [state, setState] = useState([
    fragmentsSkipTrueOne,
    fragmentsValueTrueTwo,
    fragmentsValueFalseThree
  ])

  function onDragEnd (result: DropResult) {
    const { source, destination } = result

    if (!destination) {
      return
    }

    const sourceIndex = +source.droppableId
    const destinationIndex = +destination.droppableId

    const droppedFragment: FragmentStored = state[sourceIndex][source.index]

    const { _id, keywordValue: keywordValueDropped } = droppedFragment

    if (sourceIndex === destinationIndex) {
      const items: FragmentStored[] = reorder(
        state[sourceIndex],
        source.index,
        destination.index
      )
      const newState: FragmentStored[][] = [...state]
      newState[sourceIndex] = items
      setState(newState)
    } else {
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

      //* HERE Begins section of adding keyword to fragment dragged
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

      //* this will not remove empty one
      setState(newState)
    }
  }

  useEffect(() => {
    if (fragmentsKeywordMain) {
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
      const fragmentsValueFalse = fragmentsKeywordMain.filter(
        filteredFragment =>
          filteredFragment.keywordValue.find(
            (keywordSearched: KeywordValue) =>
              keywordSearched.keyword === keywordMain &&
              keywordSearched?.skip !== undefined &&
              keywordSearched.skip === false &&
              keywordSearched.value === false
          )
      )

      setState([fragmentsSkipTrue, fragmentsValueTrue, fragmentsValueFalse])

      const keywordValueFound = fragmentsKeywordMain[0]?.keywordValue?.find(
        (keywordSearched: KeywordValue) =>
          keywordSearched.keyword === keywordMain
      )

      setLabelOneState(keywordValueFound?.labelOne)
      setLabelTwoState(keywordValueFound?.labelTwo)
    }
  }, [
    fragmentsKeywordMain,
    keywordMain,
    setLabelOneState,
    setLabelTwoState,
    fragments
  ])

  return { state, onDragEnd }
}

export default useDragAndDrop
