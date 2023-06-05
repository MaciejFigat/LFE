import React, { Dispatch, SetStateAction } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { editSavedFragment } from '../../../features/fragments/fragmentSlice'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import {
  LabelContainer,
  LabelContainerButtons,
  LabelContainerWrapper,
  TitleAnimated,
  TitleInput
} from './LabelInput.styled'
import { ButtonVerySmall } from '../../../components/Buttons/Buttons.styled'

interface LabelInputProps {
  labelNrOne?: boolean
  label: string
  labelRedux: string
  editing?: boolean
  setLabel?: Dispatch<SetStateAction<string | undefined>>
  setEditing?: Dispatch<SetStateAction<boolean>>
}

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  editing,
  setEditing,
  setLabel,
  labelRedux,
  labelNrOne
}) => {
  //? part for saving changes in the db and redux

  const dispatch: any = useAppDispatch()
  const keywordMain = useAppSelector(
    state => state.preference.sortingKeywords.keywordMain
  )
  const fragmentsKeywordMain: any[] = useAppSelector(
    state => state.fragment.fragmentsKeywordMain
  )

  //? end of db and redux part

  const editingHelper = () => {
    if (editing !== undefined && setEditing !== undefined) {
      setEditing(editing => !editing)
    }
  }
  const setLabelHelper = (value: string) => {
    if (setLabel !== undefined) {
      setLabel(value)
    }
  }
  const resetLabelHelper = () => {
    if (setLabel !== undefined && setEditing !== undefined) {
      setLabel(labelRedux)
      setEditing(editing => !editing)
    }
  }
  const saveInputLabelHelper = () => {
    if (setEditing !== undefined) {
      setEditing(editing => !editing)
    }

    for (let i = 0; i < fragmentsKeywordMain.length; i++) {
      const foundArr = fragmentsKeywordMain[i].keywordValue.find(
        (keywordSearched: any) => keywordSearched.keyword === keywordMain
      )

      const filteredArr = fragmentsKeywordMain[i].keywordValue.filter(
        (keywordSearched: any) => keywordSearched.keyword !== keywordMain
      )

      const fragEdited = {
        _id: fragmentsKeywordMain[i]._id,
        keywordValue: [
          ...filteredArr,
          {
            keyword: foundArr.keyword,
            labelOne: labelNrOne ? label : foundArr.labelOne,
            labelTwo: labelNrOne ? foundArr.labelTwo : label,
            value: foundArr.value,
            skip: foundArr.skip
          }
        ]
      }

      dispatch(editSavedFragment(fragEdited))
    }
  }
  return (
    <>
      {editing ? (
        <LabelContainerWrapper>
          {' '}
          <LabelContainer
            $contentAfter='edytuj nazwę'
            $width='55px'
            $toTop='-15px'
            $toLeft='-100px'
          >
            <TitleInput
              type='label'
              name='label'
              placeholder='new label'
              value={label}
              onChange={(e: any) => setLabelHelper(e.target.value)}
            />{' '}
          </LabelContainer>{' '}
          <LabelContainerButtons>
            <ButtonVerySmall variant='primaryEmpty' onClick={resetLabelHelper}>
              <SvgIcon
                variant='back'
                toLeft='-45px'
                toTop='-15px'
                width='45px'
                contentAfter='wróć'
              />
            </ButtonVerySmall>
            {labelRedux !== label && (
              <ButtonVerySmall
                variant='successEmpty'
                onClick={saveInputLabelHelper}
              >
                <SvgIcon
                  variant='save'
                  toLeft='45px'
                  toTop='-15px'
                  width='50px'
                  contentAfter='zapisz'
                />
              </ButtonVerySmall>
            )}
          </LabelContainerButtons>
        </LabelContainerWrapper>
      ) : (
        <LabelContainer
          $contentAfter='nazwa kategorii'
          $width='70px'
          $toTop='-15px'
          $toLeft='-110px'
        >
          <TitleAnimated onClick={editingHelper}> {label}</TitleAnimated>
        </LabelContainer>
      )}
    </>
  )
}
export default LabelInput
