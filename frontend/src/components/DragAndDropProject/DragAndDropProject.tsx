import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { editSavedFragment } from '../../features/fragments/fragmentSlice'
import { DragDropContext } from 'react-beautiful-dnd'
import ResizableScrollSection from '../ScrollSection/ResizableScrollSection'
import FirstColumnProject from './FirstColumnProject'
import SecondAndThirdColProject from './SecondAndThirdColProject'

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

interface DragAndDropProjectProps {}

const DragAndDropProject: React.FC<DragAndDropProjectProps> = () => {
  const dispatch: any = useAppDispatch()

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const fragmentsKeywordMain: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordMain
  )

  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )

  const { keywordMain } = sortingKeywords
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
    //* this is how I access the fragment I just dropped
    const droppedFragment: any = state[source.droppableId][source.index]
    // const droppableId = destination.droppableId
    const {
      _id,
      // keywords,
      // keywordValue,
    } = droppedFragment

    if (sourceIndex === destinationIndex) {
      const items = reorder(state[sourceIndex], source.index, destination.index)
      const newState: any[] = [...state]
      newState[sourceIndex] = items
      setState(newState)
    } else {
      if (destinationIndex === 0) {
        const destinationZero = {
          _id: _id,
          // keywordValue: [{ keyword: keywordMain, value: true, skip: true }],
          keywordValue: [
            {
              keyword: keywordMain,
              labelOne: 'pro',
              labelTwo: 'contra',
              value: true,
              skip: true,
            },
          ],
        }
        dispatch(editSavedFragment(destinationZero))
        //! Here fragmentsSorted.keywordValue[0].skip: false
        //* I don't want to move anything to the 1st column
        return
      }

      //* HERE Begins section of adding keyword to fragment dragged
      // ? if destination index is 1 then I want to compare keywords[] of the fragment I'm moving keywords.includes(keywordOne) if it does I return, if it doesn't I add the keywordOne to keywords[] of dragged fragment

      const newKeywordListOne = {
        _id: _id,
        keywordValue: [
          {
            keyword: keywordMain,
            value: true,
            labelOne: 'pro',
            labelTwo: 'contra',
            skip: false,
          },
        ],
        // keywordValue: [
        //   ...keywordValue,
        //   { keyword: keywordOne, value: true, skip: true },
        // ],
      }
      const newKeywordListTwo = {
        _id: _id,
        keywordValue: [
          {
            keyword: keywordMain,
            labelOne: 'pro',
            labelTwo: 'contra',
            value: false,
            skip: false,
          },
        ],

        // keywordValue: [
        //   ...keywordValue,
        //   { keyword: keywordOne, value: false, skip: true },
        // ],
      }

      // //todo move from 0 to 1 and does not include k1
      if (
        sourceIndex === 0 &&
        destinationIndex === 1
        // destinationIndex === 1 &&
        // !keywords.includes(keywordOne)
      ) {
        dispatch(editSavedFragment(newKeywordListOne))
      }
      //todo move from 0 to 2 and does not include k2
      if (
        sourceIndex === 0 &&
        destinationIndex === 2
        // destinationIndex === 2 &&
        // !keywords.includes(keywordTwo)
      ) {
        dispatch(editSavedFragment(newKeywordListTwo))
      }

      //* HERE Begins section responsible for moving/removing keywords between column[1] column[2]

      //? if (sourceIndex ===1 || sourceIndex ===2 ) { remove }
      const newKeywordListWithoutOne = {
        _id: _id,
        // keywords: [
        //   ...keywords.filter((keyword: string) => keyword !== keywordOne),
        //   keywordTwo,
        // ],
        keywordValue: [
          {
            keyword: keywordMain,
            labelOne: 'pro',
            labelTwo: 'contra',
            value: false,
            skip: false,
          },
        ],
      }
      const newKeywordListWithoutTwo = {
        _id: _id,
        // keywords: [
        //   ...keywords.filter((keyword: string) => keyword !== keywordTwo),
        //   keywordOne,
        // ],
        keywordValue: [
          {
            keyword: keywordMain,
            labelOne: 'pro',
            labelTwo: 'contra',
            value: true,
            skip: false,
          },
        ],
      }

      if (
        sourceIndex === 1 &&
        destinationIndex === 2
        // destinationIndex === 2 &&
        // // * keywordOne is in
        // !keywords.includes(keywordTwo)
      ) {
        //* from 1 to 2 and there is no keyword2 in 1
        dispatch(editSavedFragment(newKeywordListWithoutOne))
      } else if (
        sourceIndex === 2 &&
        destinationIndex === 1
        // destinationIndex === 1 &&
        // !keywords.includes(keywordOne)
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

      //* this will not remove empty one
      setState(newState)
    }
  }

  useEffect(() => {
    if (
      // fragmentsKeywordMain[0]?.keywordValue[0]?.skip !== undefined &&
      // fragmentsKeywordMain[0]?.keywordValue[0]?.value !== undefined &&
      fragmentsKeywordMain[0]?.keywordValue[0]?.value &&
      fragmentsKeywordMain[0]?.keywordValue[0]?.hasOwnProperty('skip')
      //* .hasOwnProperty('skip') checks whether an object has the property 'skip'
    ) {
      const fragmentsSkipTrue = fragmentsKeywordMain.filter(
        (fragmentsSorted) =>
          fragmentsSorted?.keywordValue[0]?.skip !== undefined &&
          fragmentsSorted?.keywordValue[0]?.skip === true
      )

      const fragmentsValueTrue = fragmentsKeywordMain.filter(
        (fragmentsSorted) =>
          // fragmentsSorted?.keywordValue[0]?.skip !== undefined &&
          // fragmentsSorted?.keywordValue[0]?.value !== undefined &&
          fragmentsSorted?.keywordValue[0]?.value === true &&
          fragmentsSorted?.keywordValue[0]?.skip === false
      )
      const fragmentsValueFalse = fragmentsKeywordMain.filter(
        (fragmentsSorted) =>
          // fragmentsSorted?.keywordValue[0]?.skip !== undefined &&
          // fragmentsSorted?.keywordValue[0]?.value !== undefined &&
          fragmentsSorted?.keywordValue[0]?.value === false &&
          fragmentsSorted?.keywordValue[0]?.skip === false
      )
      setState([fragmentsSkipTrue, fragmentsValueTrue, fragmentsValueFalse])
    }
  }, [fragmentsKeywordMain, fragments])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ResizableScrollSection
        transparent
        wideSection={<FirstColumnProject state={state} />}
        // ! 2nd 3rd columns
        narrowSection={<SecondAndThirdColProject state={state} />}
      />
    </DragDropContext>
  )
}
export default DragAndDropProject
