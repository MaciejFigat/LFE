import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { FragmentStored } from '../../../interfaces'
import {
  filterFragments,
  handleDifferentSourceAndDestination,
  handleSourceAndDestinationSame,
  initializeFragments
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
      const newFragments = initializeFragments(
        fragmentsKeywordMain,
        keywordMain,
        fragments,
        setLabelOneState,
        setLabelTwoState
      )
      setState(newFragments)
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
