import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { FragmentStored, KeywordValue } from '../../../interfaces'
import {
  filterFragments,
  handleDifferentSourceAndDestination,
  handleSourceAndDestinationSame
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

    let newState
    if (sourceIndex === destinationIndex) {
      newState = handleSourceAndDestinationSame(result, state)
    } else {
      newState = handleDifferentSourceAndDestination(
        result,
        state,
        dispatch,
        keywordMain
      )
    }
    setState(newState)
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
