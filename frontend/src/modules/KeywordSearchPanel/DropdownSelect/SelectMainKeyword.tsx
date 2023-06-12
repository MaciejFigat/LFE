import React, { useState, useEffect, useMemo } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
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
  TitleInputMainKeyword
} from './DropdownSelect.styled'
import {
  deleteSavedFragment,
  editSavedFragment
} from '../../../features/fragments/fragmentSlice'
import { getUserFragments } from '../../../features/fragments/fragmentSlice'
import { sortingKeywordMainEdit } from '../../../features/preferences/preferenceSlice'
import { updateUserFragmentsKeywordMain } from '../../../features/fragments/fragmentSlice'
import { nanoid } from '@reduxjs/toolkit'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import { RelativeWrapper } from '../../../styles/misc.styled'
import {
  ButtonMedium,
  ButtonSmallCircle,
  ButtonVerySmall
} from '../../../components/Buttons/Buttons.styled'

interface SelectMainKeywordProps {
  wideVersion?: boolean
}

const SelectMainKeyword: React.FC<SelectMainKeywordProps> = ({
  wideVersion
}) => {
  const dispatch: any = useAppDispatch()

  const keywordMain = useAppSelector(
    state => state.preference.sortingKeywords.keywordMain
  )
  const fragmentsKeywordMain: any[] = useAppSelector(
    state => state.fragment.fragmentsKeywordMain
  )
  const fragmentLoadingUpdate: boolean = useAppSelector(
    state => state.fragment.loadingUpdate
  )
  const fragmentSuccessUpdate: boolean = useAppSelector(
    state => state.fragment.successUpdate
  )

  const fragments: any[] = useAppSelector(state => state.fragment.userFragments)

  const keywordsAll = fragments
    ?.map(fragment =>
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

  const toggling = () => setIsOpen(isOpen => !isOpen)
  // * sets mainKeyword as ''
  const setNoKeywordHelper = () => {
    dispatch(sortingKeywordMainEdit(''))
  }

  const stopEditingHandler = () => {
    if (keywordEditing === true) {
      setKeywordEditing(keywordEditing => !keywordEditing)
      setNewKeyword(keywordMain)
    }
    if (keywordCreation === true)
      setKeywordCreation(keywordCreation => !keywordCreation)
  }
  const editingHandler = () => {
    setKeywordEditing(keywordEditing => !keywordEditing)
  }
  const addNewHandler = () => {
    setSelectedMainKeyword('')

    if (keywordCreation === false)
      setKeywordCreation(keywordCreation => !keywordCreation)
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

  useMemo(() => {
    if (fragmentLoadingUpdate === false && fragmentSuccessUpdate === true) {
      const timer = setTimeout(() => dispatch(getUserFragments(1)), 3000)
      return () => clearTimeout(timer)
    }
  }, [fragmentLoadingUpdate, fragmentSuccessUpdate, dispatch])

  useEffect(() => {
    const fragmentsMatching = fragments
      ?.filter(
        fragmentsSorted =>
          fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
      )
      .map(el => ({ ...el, nanoId: nanoid() }))

    if (selectedMainKeyword !== '' && keywordMain !== '') {
      dispatch(updateUserFragmentsKeywordMain(fragmentsMatching))
    }
    const fragmentsNoName = fragments
      ?.filter(
        fragmentsSorted =>
          fragmentsSorted.keywords.length === 1 &&
          fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
      )
      .map(el => ({ ...el, nanoId: nanoid() }))
    if (selectedMainKeyword === '' && keywordMain !== '') {
      dispatch(updateUserFragmentsKeywordMain(fragmentsNoName))
    }
  }, [fragments, dispatch, selectedMainKeyword, keywordMain])

  const removeKeywordHelperUltimate = () => {
    const fragmentsMatching = fragments?.filter(
      fragmentsSorted =>
        fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
    )
    if (window.confirm('Czy potwierdzasz usunięcie powiązanych fragmentów?')) {
      if (fragmentsMatching.length === 1 || 2) {
        fragmentsMatching.map(fragment =>
          dispatch(deleteSavedFragment(fragment._id))
        )
      } else if (fragmentsMatching.length > 2) {
        fragmentsMatching.map(fragment =>
          dispatch(
            editSavedFragment({
              _id: fragment._id,
              keywords: fragment?.keywords?.filter(
                (keyword: string) => keyword !== selectedMainKeyword
              )
            })
          )
        )
      }
    }
  }

  const saveNewKeywordHelper = () => {
    setKeywordEditing(keywordEditing => !keywordEditing)
    setKeywordEditing(keywordCreation => !keywordCreation)
    const fragmentsNoProject = fragments.filter(
      filteredFragment =>
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
            skip: fragmentsNoProject[0].keywordValue[0].skip
          }
        ]
      }

      dispatch(editSavedFragment(fragEdited))
    }
  }
  const saveEditedKeywordHelper = () => {
    setKeywordEditing(keywordEditing => !keywordEditing)
    setSelectedMainKeyword(newKeyword)
    // todo loop through fragmentsKeywordMain ->
    // for each fragment looped i will change an object in keywordValue that contains keywordMain
    // only keyword: '' will change, rest of the {} will remain intact
    // also keywords: [] needs ..., newkeyword
    // also no duplicates
    for (let i = 0; i < fragmentsKeywordMain.length; i++) {
      const filteredArr = fragmentsKeywordMain[i].keywordValue.filter(
        (keywordSearched: any) => keywordSearched.keyword !== keywordMain
      )

      const foundObject = fragmentsKeywordMain[i].keywordValue.find(
        (keywordSearched: any) => keywordSearched.keyword === keywordMain
      )

      const simpleKeywordArr = fragmentsKeywordMain[i].keywords.filter(
        (keyword: string) => keyword !== keywordMain
      )

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
              skip: foundObject.skip
            }
          ]
        }

        dispatch(editSavedFragment(fragEdited))
      }
    }
  }

  const togglingOptions = () => {
    setOptionsOpen(optionsOpen => !optionsOpen)

    if (optionsNewKeywordOpen === true) {
      setOptionsNewKeywordOpen(optionsNewKeywordOpen => !optionsNewKeywordOpen)
    }
    if (optionsOpen === false) {
      setNewKeyword(keywordMain)
    }
    if (keywordEditing === true && optionsOpen === true)
      setKeywordEditing(keywordEditing => !keywordEditing)

    if (keywordCreation === true && optionsOpen === true)
      setKeywordCreation(keywordCreation => !keywordCreation)
  }
  const togglingNewKeywordOptions = () => {
    setOptionsNewKeywordOpen(optionsNewKeywordOpen => !optionsNewKeywordOpen)

    if (optionsOpen === true) {
      setOptionsOpen(optionsOpen => !optionsOpen)
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
            <RelativeWrapper $top='20px' $left='3px'>
              <ButtonVerySmall
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
                  toTopMobile='20px'
                  toLeftMobile='-10px'
                  width='100px'
                  contentAfter={
                    optionsNewKeywordOpen ? 'powrót' : 'dodaj projekt'
                  }
                />
              </ButtonVerySmall>
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
              $wide={wideVersion}
            />
          ) : (
            <DropDownHeader
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggling}
              $wide={wideVersion}
              className={isOpen ? 'active' : 'inactive'}
            >
              <DropDownHeaderInside
                className={isOpen ? 'activeButton' : 'inactiveButton'}
              >
                {!wideVersion &&
                  (selectedMainKeyword?.substring(0, 15) || 'Wybierz projekt')}
                {wideVersion &&
                  (selectedMainKeyword?.substring(0, 20) || 'Wybierz projekt')}
              </DropDownHeaderInside>
            </DropDownHeader>
          )}{' '}
          <DropDownSvgRounded optionsOpen={optionsOpen}>
            {' '}
            <RelativeWrapper $top='21px' $left='0px'>
              <ButtonVerySmall
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variant='infoEmpty'
                onClick={togglingOptions}
              >
                <SvgIcon
                  variant={isOpen || optionsOpen ? 'downPoint' : 'rightPoint'}
                  toTop='-20px'
                  toLeft='60px'
                  toTopMobile='20px'
                  toLeftMobile='-5px'
                  width='56px'
                  contentAfter='opcje'
                />
              </ButtonVerySmall>
            </RelativeWrapper>
          </DropDownSvgRounded>
        </HeaderAndCogContainer>

        <DropDownListContainer>
          {keywordMain !== newKeyword &&
            optionsNewKeywordOpen &&
            !keywordCreation &&
            !keywordEditing && (
              <RelativeWrapper
                $left={wideVersion ? '50px' : '20px'}
                $top={wideVersion ? '10px' : '5px'}
              >
                <ButtonMedium variant='success' onClick={saveTempKeywordHelper}>
                  Dodaj nowy projekt
                </ButtonMedium>
              </RelativeWrapper>
            )}
          {optionsOpen && !keywordCreation && !keywordEditing && (
            <RelativeWrapper
              $left={wideVersion ? '30px' : '-4px'}
              $top={wideVersion ? '10px' : '7px'}
            >
              <OptionsDropdownContainer>
                <ButtonSmallCircle
                  variant='successEmpty'
                  onClick={addNewHandler}
                >
                  <RelativeWrapper $top='7px' $left='0px'>
                    <SvgIcon
                      variant='plus'
                      toTop='15px'
                      toLeft='10px'
                      width='100px'
                      contentAfter='dodaj nowy projekt do fragmentów bez projektu'
                    />{' '}
                  </RelativeWrapper>
                </ButtonSmallCircle>
                <ButtonSmallCircle variant='infoEmpty' onClick={editingHandler}>
                  {' '}
                  <RelativeWrapper $top='6px' $left='2px'>
                    <SvgIcon
                      variant='edit'
                      toTop='15px'
                      toLeft='10px'
                      width='100px'
                      contentAfter='edytuj nazwę wybranego projektu'
                    />{' '}
                  </RelativeWrapper>
                </ButtonSmallCircle>
                <ButtonSmallCircle
                  variant='dangerEmpty'
                  onClick={removeKeywordHelperUltimate}
                >
                  {' '}
                  <RelativeWrapper $top='6px' $left='0px'>
                    <SvgIcon
                      variant='remove'
                      toTop='15px'
                      toLeft='10px'
                      width='120px'
                      contentAfter='usuń fragmenty powiązane z projektem'
                    />
                  </RelativeWrapper>
                </ButtonSmallCircle>{' '}
              </OptionsDropdownContainer>
            </RelativeWrapper>
          )}
          {(keywordEditing || keywordCreation) && (
            <RelativeWrapper
              $left={wideVersion ? '30px' : '-4px'}
              $top={wideVersion ? '10px' : '7px'}
            >
              <OptionsDropdownContainer>
                <RelativeWrapper top='12px'>
                  <ButtonVerySmall
                    variant='primaryEmpty'
                    onClick={stopEditingHandler}
                  >
                    <SvgIcon
                      variant='back'
                      toBottom
                      width='60px'
                      toTop='15px'
                      toLeft='-5px'
                      contentAfter='powrót'
                    />
                  </ButtonVerySmall>
                </RelativeWrapper>
                {keywordCreation ? (
                  <RelativeWrapper $top='12px'>
                    <ButtonVerySmall
                      variant='successEmpty'
                      onClick={saveNewKeywordHelper}
                    >
                      <SvgIcon variant='save' toBottom contentAfter='zapisz' />
                    </ButtonVerySmall>
                  </RelativeWrapper>
                ) : (
                  <RelativeWrapper $top='20px'>
                    <ButtonVerySmall
                      variant='successEmpty'
                      onClick={saveEditedKeywordHelper}
                    >
                      <SvgIcon
                        variant='save'
                        toBottom
                        contentAfter='zapisz zmiany'
                        toTop='15px'
                        toLeft='-5px'
                        width='70px'
                      />
                    </ButtonVerySmall>
                  </RelativeWrapper>
                )}
              </OptionsDropdownContainer>
            </RelativeWrapper>
          )}
        </DropDownListContainer>

        {isOpen && uniqueKeywords.length > 1 && (
          <RelativeWrapper
            $left={wideVersion ? '30px' : '0px'}
            $top={wideVersion ? '10px' : '7px'}
          >
            <DropDownListContainer>
              <DropDownList>
                <ListItemHighlight onClick={setNoKeywordHelper}>
                  fragmenty bez projektu
                </ListItemHighlight>
                {uniqueKeywords?.map(keyword => (
                  <ListItem
                    onClick={onOptionClicked(keyword)}
                    key={Math.random()}
                  >
                    {keyword}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          </RelativeWrapper>
        )}
      </DropDownContainer>
    </Main>
  )
}
export default SelectMainKeyword
