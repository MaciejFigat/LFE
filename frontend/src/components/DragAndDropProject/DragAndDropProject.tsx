import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { editSavedFragment } from '../../features/fragments/fragmentSlice'
import { DragDropContext } from 'react-beautiful-dnd'
import ResizableScrollSection from '../Miscellaneous/ScrollSection/ResizableScrollSection'
import FirstColumnProject from './FirstColumnProject'
import SecondAndThirdColProject from './SecondAndThirdColProject'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import PupupEditWindow from './PopupEditWindow/PupupEditWindow'
import { editIdOpenFragment } from '../../features/preferences/preferenceSlice'
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

  const fragmentsSkipTrueOne = fragmentsKeywordMain.filter((filteredFragment) =>
    filteredFragment.keywordValue.find(
      (keywordSearched: any) =>
        keywordSearched.keyword === keywordMain &&
        keywordSearched?.skip !== undefined &&
        keywordSearched.skip === true
    )
  )

  const fragmentsValueTrueTwo = fragmentsKeywordMain.filter(
    (filteredFragment) =>
      filteredFragment.keywordValue.find(
        (keywordSearched: any) =>
          keywordSearched.keyword === keywordMain &&
          keywordSearched?.skip !== undefined &&
          keywordSearched.skip === false &&
          keywordSearched.value === true
      )
  )
  const fragmentsValueFalseThree = fragmentsKeywordMain.filter(
    (filteredFragment) =>
      filteredFragment.keywordValue.find(
        (keywordSearched: any) =>
          keywordSearched.keyword === keywordMain &&
          keywordSearched?.skip !== undefined &&
          keywordSearched.skip === false &&
          keywordSearched.value === false
      )
  )
  const [canOpenApp, setCanOpenApp] = useState<boolean>(true)
  const [openedApp, setOpenedApp] = useState<null | string>(null)
  const [idOpen, setIdOpen] = useState<string>('')

  const [labelOneState, setLabelOneState] = useState<string | undefined>()
  const [labelTwoState, setLabelTwoState] = useState<string | undefined>()
  const [state, setState] = useState([
    fragmentsSkipTrueOne,
    fragmentsValueTrueTwo,
    fragmentsValueFalseThree,
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
    const { _id, keywordValue: keywordValueDropped } = droppedFragment

    if (sourceIndex === destinationIndex) {
      const items = reorder(state[sourceIndex], source.index, destination.index)
      const newState: any[] = [...state]
      newState[sourceIndex] = items
      setState(newState)
    } else {
      const filteredKeywordValue = keywordValueDropped.filter(
        (keywordSearched: any) => keywordSearched.keyword !== keywordMain
      )

      const mainKeywordObject = keywordValueDropped.find(
        (keywordObject: any) => keywordObject.keyword === keywordMain
      )
      if (destinationIndex === 0) {
        const destinationZero = {
          _id: _id,
          keywordValue: [
            ...filteredKeywordValue,
            {
              keyword: mainKeywordObject.keyword,
              labelOne: mainKeywordObject.labelOne,
              labelTwo: mainKeywordObject.labelTwo,
              value: mainKeywordObject.value,
              skip: true,
            },
          ],
        }
        dispatch(editSavedFragment(destinationZero))

        // return
      }

      //* HERE Begins section of adding keyword to fragment dragged

      const newKeywordListOne = {
        _id: _id,
        keywordValue: [
          ...filteredKeywordValue,
          {
            keyword: mainKeywordObject.keyword,
            labelOne: mainKeywordObject.labelOne,
            labelTwo: mainKeywordObject.labelTwo,
            value: true,
            skip: false,
          },
        ],
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
            skip: false,
          },
        ],
      }

      // //todo move from 0 to 1
      if (sourceIndex === 0 && destinationIndex === 1) {
        dispatch(editSavedFragment(newKeywordListOne))
      }
      //todo move from 0 to 2
      if (sourceIndex === 0 && destinationIndex === 2) {
        dispatch(editSavedFragment(newKeywordListTwo))
      }

      if (sourceIndex === 1 && destinationIndex === 2) {
        //* from 1 to 2

        dispatch(editSavedFragment(newKeywordListTwo))
      } else if (sourceIndex === 2 && destinationIndex === 1) {
        //* from 2 to 1

        dispatch(editSavedFragment(newKeywordListOne))
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
      const fragmentsSkipTrue = fragmentsKeywordMain.filter(
        (filteredFragment) =>
          filteredFragment.keywordValue.find(
            (keywordSearched: any) =>
              keywordSearched.keyword === keywordMain &&
              keywordSearched?.skip !== undefined &&
              keywordSearched.skip === true
          )
      )

      const fragmentsValueTrue = fragmentsKeywordMain.filter(
        (filteredFragment) =>
          filteredFragment.keywordValue.find(
            (keywordSearched: any) =>
              keywordSearched.keyword === keywordMain &&
              keywordSearched?.skip !== undefined &&
              keywordSearched.skip === false &&
              keywordSearched.value === true
          )
      )
      const fragmentsValueFalse = fragmentsKeywordMain.filter(
        (filteredFragment) =>
          filteredFragment.keywordValue.find(
            (keywordSearched: any) =>
              keywordSearched.keyword === keywordMain &&
              keywordSearched?.skip !== undefined &&
              keywordSearched.skip === false &&
              keywordSearched.value === false
          )
      )

      setState([fragmentsSkipTrue, fragmentsValueTrue, fragmentsValueFalse])

      const keywordValueFound = fragmentsKeywordMain[0]?.keywordValue?.find(
        (keywordSearched: any) => keywordSearched.keyword === keywordMain
      )

      setLabelOneState(keywordValueFound?.labelOne)
      setLabelTwoState(keywordValueFound?.labelTwo)
    }
  }, [fragmentsKeywordMain, fragments, keywordMain])

  useEffect(() => {
    dispatch(editIdOpenFragment(''))
  }, [dispatch])

  return (
    <AnimateSharedLayout type='crossfade'>
      <DragDropContext onDragEnd={onDragEnd}>
        <ResizableScrollSection
          transparent
          wideSection={
            <FirstColumnProject
              setOpenedApp={setOpenedApp}
              // setTitle={setTitle}
              canOpenApp={canOpenApp}
              setIdOpen={setIdOpen}
              openedApp={openedApp}
              state={state}
              keywordMain={keywordMain}
            />
          }
          // ! 2nd 3rd columns
          narrowSection={
            <SecondAndThirdColProject
              setOpenedApp={setOpenedApp}
              setIdOpen={setIdOpen}
              canOpenApp={canOpenApp}
              openedApp={openedApp}
              labelOne={labelOneState}
              labelTwo={labelTwoState}
              state={state}
            />
          }
        />
      </DragDropContext>
      <AnimatePresence>
        {openedApp && (
          <PupupEditWindow
            idOpen={idOpen}
            setOpenedApp={setOpenedApp}
            setCanOpenApp={setCanOpenApp}
            canOpenApp={canOpenApp}
            openedApp={openedApp}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
export default DragAndDropProject
