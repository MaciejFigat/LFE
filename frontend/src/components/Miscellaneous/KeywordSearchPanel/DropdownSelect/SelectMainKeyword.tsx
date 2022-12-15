import React, { useState, useEffect, useMemo } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../app/reduxHooks'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownHeaderInside,
  DropDownList,
  DropDownListContainer,
  DropDownSvgRounded,
  DropDownSvgRoundedLeft,
  HeaderAndCogContainer,
  ListItem,
  ListItemHighlight,
  Main,
  OptionsDropdownContainer,
  TitleInputMainKeyword,
} from './DropdownSelect.styled'
import {
  deleteSavedFragment,
  editSavedFragment,
} from '../../../../features/fragments/fragmentSlice'
import { getUserFragments } from '../../../../features/fragments/fragmentSlice'
import { sortingKeywordMainEdit } from '../../../../features/preferences/preferenceSlice'
import { updateUserFragmentsKeywordMain } from '../../../../features/fragments/fragmentSlice'
import { nanoid } from '@reduxjs/toolkit'
import { SendButtonVerySmall } from '../../Buttons/Buttons.styled'
import SvgIcon from '../../SvgIcon/SvgIcon'
import { RelativeWrapper } from '../../../../styles/misc.styled'
import { ButtonVerySmall } from '../../Buttons/BigButton.styled'

interface SelectMainKeywordProps {
  wide?: boolean
}

const SelectMainKeyword: React.FC<SelectMainKeywordProps> = ({ wide }) => {
  const dispatch: any = useAppDispatch()

  const keywordMain = useAppSelector(
    (state) => state.preference.sortingKeywords.keywordMain
  )
  const fragmentsKeywordMain: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordMain
  )
  const fragmentLoadingUpdate: boolean = useAppSelector(
    (state) => state.fragment.loadingUpdate
  )
  const fragmentSuccessUpdate: boolean = useAppSelector(
    (state) => state.fragment.successUpdate
  )

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )

  const keywordsAll = fragments
    ?.map((fragment) =>
      fragment.keywords
        ?.filter((keyword: string) => keyword !== '')
        .map((keyword: string) => keyword)
    )
    .flat()
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]

  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]

  const [isOpen, setIsOpen] = useState(false)
  const [optionsOpen, setOptionsOpen] = useState(false)
  const [optionsNewKeywordOpen, setOptionsNewKeywordOpen] = useState(false)
  const [keywordEditing, setKeywordEditing] = useState<boolean>(false)
  const [keywordCreation, setKeywordCreation] = useState<boolean>(false)
  const [newKeyword, setNewKeyword] = useState<string>(keywordMain)

  const [selectedMainKeyword, setSelectedMainKeyword] = useState<string | null>(
    keywordMain
  )

  const toggling = () => setIsOpen((isOpen) => !isOpen)
  // * sets mainKeyword as ''
  const setNoKeywordHelper = () => {
    dispatch(sortingKeywordMainEdit(''))
  }

  const stopEditingHandler = () => {
    if (keywordEditing === true) {
      setKeywordEditing((keywordEditing) => !keywordEditing)
      setNewKeyword(keywordMain)
    }
    if (keywordCreation === true)
      setKeywordCreation((keywordCreation) => !keywordCreation)
  }
  const editingHandler = () => {
    setKeywordEditing((keywordEditing) => !keywordEditing)
  }
  const addNewHandler = () => {
    setSelectedMainKeyword('')

    if (keywordCreation === false)
      setKeywordCreation((keywordCreation) => !keywordCreation)
  }

  const onOptionClicked = (value: string | null) => () => {
    setSelectedMainKeyword(value)
    setIsOpen(false)
  }

  useEffect(() => {
    dispatch(sortingKeywordMainEdit(selectedMainKeyword))
  }, [dispatch, selectedMainKeyword])

  // whenever keywordMain changes ie. nav dropdownProject component, it changes selectedKeyword
  useMemo(() => {
    setSelectedMainKeyword(keywordMain)
  }, [keywordMain])

  // whenever loading prompted by saving new or editing keyword values I want to update the list of keywords and the main one
  // fragmentLoadingUpdate false-> true -> false
  // fragmentSuccessUpdate true -> false -> true
  useMemo(() => {
    if (fragmentLoadingUpdate === false && fragmentSuccessUpdate === true) {
      //! HERE it's commented for it's the cause of keywordMain change on every update or delete - since they use the same successUpdate etc
      //! setSelectedMainKeyword(newKeyword)
      const timer = setTimeout(() => dispatch(getUserFragments(1)), 3000)
      return () => clearTimeout(timer)
    }
  }, [fragmentLoadingUpdate, fragmentSuccessUpdate, dispatch])

  useEffect(() => {
    const fragmentsMatching = fragments
      ?.filter(
        (fragmentsSorted) =>
          fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
      )
      .map((el) => ({ ...el, nanoId: nanoid() }))

    if (selectedMainKeyword !== '' && keywordMain !== '') {
      dispatch(updateUserFragmentsKeywordMain(fragmentsMatching))
    }
    const fragmentsNoName = fragments
      ?.filter(
        (fragmentsSorted) =>
          fragmentsSorted.keywords.length === 1 &&
          fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
      )
      .map((el) => ({ ...el, nanoId: nanoid() }))
    if (selectedMainKeyword === '' && keywordMain !== '') {
      dispatch(updateUserFragmentsKeywordMain(fragmentsNoName))
    }
  }, [fragments, dispatch, selectedMainKeyword, keywordMain])

  const removeKeywordHelperUltimate = () => {
    const fragmentsMatching = fragments?.filter(
      (fragmentsSorted) =>
        fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
    )
    if (window.confirm('Czy potwierdzasz usunięcie powiązanych fragmentów?')) {
      if (fragmentsMatching.length === 1 || 2) {
        fragmentsMatching.map((fragment) =>
          dispatch(deleteSavedFragment(fragment._id))
        )
      } else if (fragmentsMatching.length > 2) {
        fragmentsMatching.map((fragment) =>
          dispatch(
            editSavedFragment({
              _id: fragment._id,
              keywords: fragment?.keywords?.filter(
                (keyword: string) => keyword !== selectedMainKeyword
              ),
            })
          )
        )
      }
    }
  }

  const saveNewKeywordHelper = () => {
    setKeywordEditing((keywordEditing) => !keywordEditing)
    setKeywordEditing((keywordCreation) => !keywordCreation)
    const fragmentsNoProject = fragments.filter(
      (filteredFragment) =>
        filteredFragment.keywords.length === 1 &&
        filteredFragment.keywords[0] === ''
    )
    for (let i = 0; i < fragmentsNoProject.length; i++) {
      const fragEdited = {
        _id: fragmentsNoProject[i]._id,
        keywords: [newKeyword],
        keywordValue: [
          {
            keyword: newKeyword,
            labelOne: fragmentsNoProject[0].keywordValue[0].labelOne,
            labelTwo: fragmentsNoProject[0].keywordValue[0].labelTwo,
            value: fragmentsNoProject[0].keywordValue[0].value,
            skip: fragmentsNoProject[0].keywordValue[0].skip,
          },
        ],
      }

      dispatch(editSavedFragment(fragEdited))
    }
  }
  const saveEditedKeywordHelper = () => {
    setKeywordEditing((keywordEditing) => !keywordEditing)
    setSelectedMainKeyword(newKeyword)
    // todo loop through fragmentsKeywordMain ->
    // for each fragment looped i will change an object in keywordValue that contains keywordMain
    // only keyword: '' will change, rest of the {} will remain intact
    // also keywords: [] needs ..., newkeyword
    // also no duplicates
    for (let i = 0; i < fragmentsKeywordMain.length; i++) {
      //* HERE
      const filteredArr = fragmentsKeywordMain[i].keywordValue.filter(
        (keywordSearched: any) => keywordSearched.keyword !== keywordMain
      )

      const foundObject = fragmentsKeywordMain[i].keywordValue.find(
        (keywordSearched: any) => keywordSearched.keyword === keywordMain
      )

      const simpleKeywordArr = fragmentsKeywordMain[i].keywords.filter(
        (keyword: string) => keyword !== keywordMain
      )
      //* HERE

      //* no duplicates edited in
      if (!fragmentsKeywordMain[i].keywords.includes(newKeyword)) {
        const fragEdited = {
          _id: fragmentsKeywordMain[i]._id,
          keywords: [...simpleKeywordArr, newKeyword],
          keywordValue: [
            ...filteredArr,
            {
              keyword: newKeyword,
              labelOne: foundObject.labelOne || 'pro',
              labelTwo: foundObject.labelTwo || 'contra',
              value: foundObject.value,
              skip: foundObject.skip,
            },
          ],
        }

        dispatch(editSavedFragment(fragEdited))
      }
    }
  }

  const togglingOptions = () => {
    setOptionsOpen((optionsOpen) => !optionsOpen)

    if (optionsNewKeywordOpen === true) {
      setOptionsNewKeywordOpen(
        (optionsNewKeywordOpen) => !optionsNewKeywordOpen
      )
    }
    if (optionsOpen === false) {
      setNewKeyword(keywordMain)
    }
    if (keywordEditing === true && optionsOpen === true)
      setKeywordEditing((keywordEditing) => !keywordEditing)
    // setNewKeyword(keywordMain)
    if (keywordCreation === true && optionsOpen === true)
      setKeywordCreation((keywordCreation) => !keywordCreation)
    // setNewKeyword(keywordMain)
  }
  const togglingNewKeywordOptions = () => {
    setOptionsNewKeywordOpen((optionsNewKeywordOpen) => !optionsNewKeywordOpen)

    if (optionsOpen === true) {
      setOptionsOpen((optionsOpen) => !optionsOpen)
    }
  }
  //? this one is for saving new keyword when we just add it to sortingKeyword - it will be saved only if we save a fragment with this beeing active

  const saveTempKeywordHelper = () => {
    if (keywordMain !== newKeyword) {
      dispatch(sortingKeywordMainEdit(newKeyword))
    }
  }
  return (
    <Main>
      <DropDownContainer>
        <HeaderAndCogContainer>
          <DropDownSvgRoundedLeft optionsOpen={optionsNewKeywordOpen}>
            {' '}
            <RelativeWrapper top='5px' left='3px'>
              <SendButtonVerySmall
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variant='successEmpty'
                onClick={togglingNewKeywordOptions}
              >
                <SvgIcon
                  variant={optionsNewKeywordOpen ? 'arrowLeft' : 'moreOptions'}
                  toTop='-20px'
                  toLeft='-90px'
                  width='100px'
                  contentAfter='dodaj projekt'
                />
              </SendButtonVerySmall>
            </RelativeWrapper>
          </DropDownSvgRoundedLeft>
          {keywordEditing || keywordCreation || optionsNewKeywordOpen ? (
            <TitleInputMainKeyword
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              type='mainLabel'
              name='main label'
              placeholder={keywordMain}
              value={newKeyword}
              onChange={(e: any) => setNewKeyword(e.target.value)}
              wide={wide}
            />
          ) : (
            <DropDownHeader
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggling}
              wide={wide}
              className={isOpen ? 'active' : 'inactive'}
            >
              <DropDownHeaderInside
                className={isOpen ? 'activeButton' : 'inactiveButton'}
              >
                {!wide &&
                  (selectedMainKeyword?.substring(0, 15) || 'Wybierz projekt')}
                {wide &&
                  (selectedMainKeyword?.substring(0, 25) || 'Wybierz projekt')}
              </DropDownHeaderInside>
            </DropDownHeader>
          )}{' '}
          <DropDownSvgRounded optionsOpen={optionsOpen}>
            {' '}
            <RelativeWrapper top='3px' left='0px'>
              <SendButtonVerySmall
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variant='secondaryEmpty'
                onClick={togglingOptions}
              >
                <SvgIcon
                  variant={isOpen || optionsOpen ? 'downPoint' : 'rightPoint'}
                  toTop='-20px'
                  toLeft='60px'
                  width='56px'
                  contentAfter='opcje'
                />
              </SendButtonVerySmall>
            </RelativeWrapper>
          </DropDownSvgRounded>
        </HeaderAndCogContainer>
        {/* //? dropdown after cog icon clicked in small version (!wide prop) */}
        <DropDownListContainer>
          {/* //todo adding saveTempKeywordHelper */}
          {keywordMain !== newKeyword &&
            optionsNewKeywordOpen &&
            !keywordCreation &&
            !keywordEditing && (
              <RelativeWrapper top='5px' left='45px'>
                <ButtonVerySmall
                  variant='success'
                  onClick={saveTempKeywordHelper}
                >
                  Dodaj nowy projekt
                </ButtonVerySmall>
              </RelativeWrapper>
            )}
          {optionsOpen && !keywordCreation && !keywordEditing && (
            <OptionsDropdownContainer>
              <SendButtonVerySmall
                variant='successEmpty'
                onClick={addNewHandler}
              >
                <SvgIcon
                  variant='plus'
                  toTop='10px'
                  toLeft='10px'
                  width='100px'
                  contentAfter='dodaj nowy projekt do fragmentów bez projektu'
                />
              </SendButtonVerySmall>
              <SendButtonVerySmall
                variant='primaryEmpty'
                onClick={editingHandler}
              >
                <SvgIcon
                  variant='edit'
                  toTop='10px'
                  toLeft='10px'
                  width='100px'
                  contentAfter='edytuj nazwę wybranego projektu'
                />
              </SendButtonVerySmall>

              <SendButtonVerySmall
                variant='dangerEmpty'
                onClick={removeKeywordHelperUltimate}
              >
                <SvgIcon
                  variant='remove'
                  toTop='10px'
                  toLeft='10px'
                  width='120px'
                  contentAfter='usuń fragmenty powiązane z projektem'
                />
              </SendButtonVerySmall>
            </OptionsDropdownContainer>
          )}
          {(keywordEditing || keywordCreation) && (
            <OptionsDropdownContainer>
              <SendButtonVerySmall
                variant='primaryEmpty'
                onClick={stopEditingHandler}
              >
                <SvgIcon variant='back' toBottom contentAfter='wróć' />
              </SendButtonVerySmall>
              {keywordCreation ? (
                <SendButtonVerySmall
                  variant='successEmpty'
                  onClick={saveNewKeywordHelper}
                >
                  <SvgIcon variant='save' toBottom contentAfter='zapisz' />
                </SendButtonVerySmall>
              ) : (
                <SendButtonVerySmall
                  variant='successEmpty'
                  onClick={saveEditedKeywordHelper}
                >
                  <SvgIcon
                    variant='save'
                    toBottom
                    contentAfter='zapisz zmiany'
                  />
                </SendButtonVerySmall>
              )}
            </OptionsDropdownContainer>
          )}
        </DropDownListContainer>

        {isOpen && uniqueKeywords.length > 1 && (
          <DropDownListContainer>
            <DropDownList>
              <ListItemHighlight onClick={setNoKeywordHelper}>
                fragmenty bez projektu
              </ListItemHighlight>
              {uniqueKeywords?.map((keyword) => (
                <ListItem
                  onClick={onOptionClicked(keyword)}
                  key={Math.random()}
                >
                  {keyword}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  )
}
export default SelectMainKeyword
