import React, { Dispatch, SetStateAction } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { editSavedFragment } from '../../../features/fragments/fragmentSlice'
import { SendButtonVerySmall } from '../../Buttons/Buttons.styled'
import SvgIcon from '../../SvgIcon/SvgIcon'
import {
  HorizontalButtonContainer,
  TitleAnimated,
  TitleInput,
} from './LabelInput.styled'

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
  labelNrOne,
}) => {
  //? part for saving changes in the db and redux

  const dispatch: any = useAppDispatch()
  const keywordMain = useAppSelector(
    (state) => state.preference.sortingKeywords.keywordMain
  )
  const fragmentsKeywordMain: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordMain
  )

  //? end of db and redux part

  const editingHelper = () => {
    if (editing !== undefined && setEditing !== undefined) {
      setEditing(!editing)
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
      setEditing(!editing)
    }
  }
  const saveInputLabelHelper = () => {
    if (setEditing !== undefined) {
      setEditing(!editing)
    }

    for (let i = 0; i < fragmentsKeywordMain.length; i++) {
      if (fragmentsKeywordMain[i].keywordValue.keyword === keywordMain) {
      }
      console.log(fragmentsKeywordMain[i].keywordValue)
      const foundArr = fragmentsKeywordMain[i].keywordValue.find(
        (keywordSearched: any) => keywordSearched.keyword === keywordMain
      )

      const fragEdited = {
        _id: fragmentsKeywordMain[i]._id,
        keywordValue: [
          {
            keyword: foundArr.keyword,
            labelOne: labelNrOne ? label : foundArr.labelOne,
            labelTwo: labelNrOne ? foundArr.labelTwo : label,
            value: foundArr.value,
            skip: foundArr.skip,
          },
        ],
      }

      dispatch(editSavedFragment(fragEdited))
    }
  }
  return (
    <>
      {editing ? (
        <HorizontalButtonContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <TitleInput
            type='title'
            name='title'
            placeholder='new title'
            value={label}
            onChange={(e: any) => setLabelHelper(e.target.value)}
          />
          <SendButtonVerySmall
            variant='primaryEmpty'
            onClick={resetLabelHelper}
          >
            <SvgIcon variant='back' toBottom contentAfter='wróć' />
          </SendButtonVerySmall>
          {labelRedux !== label && (
            <SendButtonVerySmall
              variant='successEmpty'
              onClick={saveInputLabelHelper}
            >
              <SvgIcon variant='save' toBottom contentAfter='zapisz' />
            </SendButtonVerySmall>
          )}
        </HorizontalButtonContainer>
      ) : (
        <TitleAnimated
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={editingHelper}
        >
          {' '}
          {label}
        </TitleAnimated>
      )}
    </>
  )
}
export default LabelInput
