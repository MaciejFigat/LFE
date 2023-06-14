import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
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
import { ButtonSmallCircle } from '../../../components/Buttons/Buttons.styled'
import { RelativeWrapper } from '../../../styles/misc.styled'
import { AnimatePresence } from 'framer-motion'
import { FragmentStored } from '../../../interfaces'
import { AppDispatch } from '../../../app/store'

interface LabelInputProps {
  labelNrOne?: boolean
  label: string
  labelRedux: string
  editing?: boolean
  setEditing?: Dispatch<SetStateAction<boolean>>
}

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  editing,
  setEditing,

  labelRedux,
  labelNrOne
}) => {
  //? part for saving changes in the db and redux

  const dispatch: AppDispatch = useAppDispatch()
  const keywordMain = useAppSelector(
    state => state.preference.sortingKeywords.keywordMain
  )
  const fragmentsKeywordMain: FragmentStored[] = useAppSelector(
    state => state.fragment.fragmentsKeywordMain
  )
  const [labelLocal, setLabelLocal] = useState(label)
  //? end of db and redux part

  const editingHelper = () => {
    setEditing && setEditing(editing => !editing)
  }
  const setLabelHelper = (value: string) => {
    setLabelLocal(value)
  }
  const resetLabelHelper = () => {
    setLabelLocal(labelRedux)
    setEditing && setEditing(editing => !editing)
  }
  const saveInputLabelHelper = () => {
    if (setEditing) {
      setEditing(editing => !editing)
    }
    fragmentsKeywordMain.forEach(fragment => {
      const keywordIndex = fragment.keywordValue.findIndex(
        keywordSearched => keywordSearched.keyword === keywordMain
      )
      if (keywordIndex !== -1) {
        const newKeywordValue = fragment.keywordValue.map((keywordVal, index) =>
          index === keywordIndex
            ? {
                ...keywordVal,
                labelOne: labelNrOne ? labelLocal : keywordVal.labelOne,
                labelTwo: labelNrOne ? keywordVal.labelTwo : labelLocal
              }
            : keywordVal
        )

        const fragEdited = {
          ...fragment,
          keywordValue: newKeywordValue
        }

        dispatch(editSavedFragment(fragEdited))
      }
    })
  }

  useEffect(() => {
    setLabelLocal(label)
  }, [label])

  return (
    <AnimatePresence initial mode='wait'>
      {editing ? (
        <LabelContainerWrapper
          layoutId={`${label}open`}
          key={`${label}open`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 0, duration: 0.3 }}
        >
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
              value={labelLocal}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLabelHelper(e.target.value)
              }
            />{' '}
          </LabelContainer>{' '}
          <LabelContainerButtons>
            <ButtonSmallCircle
              variant='primaryEmpty'
              onClick={resetLabelHelper}
            >
              <RelativeWrapper $top='6px' $left='-1px'>
                <SvgIcon
                  variant='back'
                  toLeft='-50px'
                  toTop='-20px'
                  width='45px'
                  contentAfter='wróć'
                />
              </RelativeWrapper>
            </ButtonSmallCircle>
            {labelRedux !== labelLocal && (
              <ButtonSmallCircle
                variant='successEmpty'
                onClick={saveInputLabelHelper}
              >
                <RelativeWrapper $top='5px' $left='0px'>
                  <SvgIcon
                    variant='save'
                    toLeft='55px'
                    toTop='-20px'
                    width='50px'
                    contentAfter='zapisz'
                  />{' '}
                </RelativeWrapper>
              </ButtonSmallCircle>
            )}
          </LabelContainerButtons>
        </LabelContainerWrapper>
      ) : (
        <LabelContainer
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.3 }}
          key={`${label}closed`}
          layoutId={`${label}closed`}
          $contentAfter='nazwa kategorii'
          $width='70px'
          $toTop='-15px'
          $toLeft='-110px'
        >
          <TitleAnimated onClick={editingHelper}> {labelLocal}</TitleAnimated>
        </LabelContainer>
      )}
    </AnimatePresence>
  )
}
export default LabelInput
