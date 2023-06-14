import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'

import { editSavedFragment } from '../../features/fragments/fragmentSlice'
import { editIdOpenFragment } from '../../features/preferences/preferenceSlice'
import { DragDropContext } from 'react-beautiful-dnd'
import FirstColumnProject from './FirstColumnProject'
import SecondAndThirdColProject from './SecondAndThirdColProject'
import PupupEditWindow from './PopupEditWindow/PupupEditWindow'
import {
  HeroArticleBigSection,
  HeroArticleSmallSectionFlexStart,
  HeroGridWrapper,
  HeroMainArticleReversed,
  HeroMainContainer,
  HeroNavigation,
  HeroNavOne,
  HeroNavTwo
} from '../HomePageComponents/HeroSection.styled'
import FirstColumnExportControls from './FirstColumnExportControls'
import { RegularDiv } from '../../styles/misc.styled'
import SelectMainKeyword from '../KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
import { AppDispatch } from '../../app/store'
import { FragmentStored, KeywordValue } from '../../interfaces'

//? reordering the items within a list

const reorder = (
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

const DragAndDropProject: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const idOpenFragment: string = useAppSelector(
    state => state.preference.idOpenFragment
  )
  const fragments = useAppSelector<Array<FragmentStored>>(
    state => state.fragment.userFragments
  )
  const fragmentsKeywordMain = useAppSelector<Array<FragmentStored>>(
    state => state.fragment.fragmentsKeywordMain
  )

  const sortingKeywords = useAppSelector(
    state => state.preference.sortingKeywords
  )

  const { keywordMain } = sortingKeywords

  const filterFragments = (
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

  const [labelOneState, setLabelOneState] = useState<string | undefined>()
  const [labelTwoState, setLabelTwoState] = useState<string | undefined>()
  const [state, setState] = useState([
    fragmentsSkipTrueOne,
    fragmentsValueTrueTwo,
    fragmentsValueFalseThree
  ])

  //? Behold the monster, onDragEnd with no end

  function onDragEnd (result: any) {
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
    const droppedFragment: FragmentStored =
      state[source.droppableId][source.index]
    // const droppableId = destination.droppableId
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
      const filteredKeywordValue = keywordValueDropped.filter(
        (keywordSearched: KeywordValue) =>
          keywordSearched.keyword !== keywordMain
      )

      const mainKeywordObject = keywordValueDropped.find(
        (keywordObject: KeywordValue) => keywordObject.keyword === keywordMain
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
  }, [fragmentsKeywordMain, fragments, keywordMain])

  useEffect(() => {
    dispatch(editIdOpenFragment(''))
  }, [dispatch])

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <HeroGridWrapper>
          <HeroNavigation>
            <HeroNavOne>
              {' '}
              <RegularDiv>
                <FirstColumnExportControls state={state} />
              </RegularDiv>
            </HeroNavOne>

            <HeroNavTwo>
              {' '}
              <SelectMainKeyword wideVersion />
            </HeroNavTwo>
          </HeroNavigation>
          <HeroMainContainer>
            <HeroMainArticleReversed>
              <HeroArticleBigSection>
                <FirstColumnProject state={state} keywordMain={keywordMain} />
              </HeroArticleBigSection>
              <HeroArticleSmallSectionFlexStart>
                {' '}
                <SecondAndThirdColProject
                  labelOne={labelOneState}
                  labelTwo={labelTwoState}
                  state={state}
                />
              </HeroArticleSmallSectionFlexStart>
            </HeroMainArticleReversed>
          </HeroMainContainer>{' '}
        </HeroGridWrapper>
      </DragDropContext>

      {idOpenFragment !== '' && <PupupEditWindow />}
    </>
  )
}
export default DragAndDropProject
