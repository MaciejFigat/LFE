import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
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
import { FragmentStored } from '../../interfaces'
import useDragAndDrop from './functions/useDragAndDrop'

const DragAndDropProject: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const idOpenFragment: string = useAppSelector(
    state => state.preference.idOpenFragment
  )

  const fragmentsKeywordMain = useAppSelector<Array<FragmentStored>>(
    state => state.fragment.fragmentsKeywordMain
  )

  const sortingKeywords = useAppSelector(
    state => state.preference.sortingKeywords
  )

  const { keywordMain } = sortingKeywords

  const [labelOneState, setLabelOneState] = useState<string | undefined>()
  const [labelTwoState, setLabelTwoState] = useState<string | undefined>()

  const { state, onDragEnd } = useDragAndDrop({
    fragmentsKeywordMain,
    keywordMain,
    setLabelOneState: setLabelOneState,
    setLabelTwoState: setLabelTwoState
  })

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
