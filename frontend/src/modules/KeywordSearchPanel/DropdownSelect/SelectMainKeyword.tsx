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
import { getUserFragments } from '../../../features/fragments/fragmentSlice'
import { sortingKeywordMainEdit } from '../../../features/preferences/preferenceSlice'
import { updateUserFragmentsKeywordMain } from '../../../features/fragments/fragmentSlice'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import { RelativeWrapper } from '../../../styles/misc.styled'
import {
  ButtonMedium,
  ButtonSmallCircle,
  ButtonVerySmall
} from '../../../components/Buttons/Buttons.styled'
import { AppDispatch } from '../../../app/store'
import {
  getFragmentsMatching,
  getFragmentsNoName,
  removeKeywordHelper,
  saveEditedKeyword,
  saveNewKeyword
} from './keywordHelpers'
import { FragmentStored } from '../../../interfaces'

interface SelectMainKeywordProps {
  wideVersion?: boolean
}

const SelectMainKeyword: React.FC<SelectMainKeywordProps> = ({
  wideVersion
}) => {
  const dispatch: AppDispatch = useAppDispatch()

  const keywordMain = useAppSelector(
    state => state.preference.sortingKeywords.keywordMain
  )
  const fragmentsKeywordMain: FragmentStored[] = useAppSelector(
    state => state.fragment.fragmentsKeywordMain
  )
  const fragmentLoadingUpdate: boolean = useAppSelector(
    state => state.fragment.loadingUpdate
  )
  const fragmentSuccessUpdate: boolean = useAppSelector(
    state => state.fragment.successUpdate
  )

  const fragments: FragmentStored[] = useAppSelector(
    state => state.fragment.userFragments
  )

  const keywordsAll = fragments
    ?.map(fragment =>
      fragment.keywords
        ?.filter((keyword: string) => keyword !== '')
        .map((keyword: string) => keyword)
    )
    .flat()
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]

  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]

  interface OptionsState {
    isOpen: boolean
    optionsOpen: boolean
    optionsNewKeywordOpen: boolean
    keywordEditing: boolean
    keywordCreation: boolean
  }

  const [options, setOptions] = useState<OptionsState>({
    isOpen: false,
    optionsOpen: false,
    optionsNewKeywordOpen: false,
    keywordEditing: false,
    keywordCreation: false
  })

  const toggleOption = (
    optionKey: keyof OptionsState,
    setOptions: React.Dispatch<React.SetStateAction<OptionsState>>
  ) => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [optionKey]: !prevOptions[optionKey]
    }))
  }

  const [newKeyword, setNewKeyword] = useState<string>(keywordMain)

  const [selectedMainKeyword, setSelectedMainKeyword] = useState<string | null>(
    keywordMain
  )

  const toggling = () => toggleOption('isOpen', setOptions)

  const setNoKeywordHelper = () => {
    dispatch(sortingKeywordMainEdit(''))
  }

  const stopEditingHandler = () => {
    if (options.keywordEditing) {
      toggleOption('keywordEditing', setOptions)
      setNewKeyword(keywordMain)
    }
    if (options.keywordCreation) toggleOption('keywordCreation', setOptions)
  }
  const editingHandler = () => {
    toggleOption('keywordEditing', setOptions)
  }
  const addNewHandler = () => {
    setSelectedMainKeyword('')

    if (options.keywordCreation === false)
      toggleOption('keywordCreation', setOptions)
  }

  const onOptionClicked = (value: string | null) => () => {
    setSelectedMainKeyword(value)
    setOptions(prevOptions => ({ ...prevOptions, isOpen: !prevOptions.isOpen }))
  }

  //* REMOVE keyword
  const handleRemoveKeyword = () => {
    removeKeywordHelper(fragments, selectedMainKeyword ?? '', dispatch)
  }
  //* SAVE new keyword
  const saveNewKeywordHelper = () => {
    saveNewKeyword(
      fragments,
      newKeyword,

      dispatch
    )
    toggleOption('keywordEditing', setOptions)
    toggleOption('keywordCreation', setOptions)
  }
  //* SAVE edited Keyword
  const saveEditedKeywordHelper = () => {
    saveEditedKeyword(
      newKeyword,
      setSelectedMainKeyword,
      fragmentsKeywordMain,
      keywordMain,
      dispatch
    )
    toggleOption('keywordEditing', setOptions)
  }
  const togglingOptions = () => {
    toggleOption('optionsOpen', setOptions)

    if (options.optionsNewKeywordOpen) {
      toggleOption('optionsNewKeywordOpen', setOptions)
    }
    if (options.optionsOpen === false) {
      setNewKeyword(keywordMain)
    }
    if (options.keywordEditing && options.optionsOpen)
      toggleOption('keywordEditing', setOptions)

    if (options.keywordCreation && options.optionsOpen)
      toggleOption('keywordCreation', setOptions)
  }
  const togglingNewKeywordOptions = () => {
    toggleOption('optionsNewKeywordOpen', setOptions)
    if (options.optionsOpen) {
      toggleOption('optionsOpen', setOptions)
    }
  }
  //? this one is for saving new keyword when we just add it to sortingKeyword - it will be saved only if we save a fragment with this beeing active

  const saveTempKeywordHelper = () => {
    if (keywordMain !== newKeyword) {
      dispatch(sortingKeywordMainEdit(newKeyword))
    }
  }
  useEffect(() => {
    dispatch(sortingKeywordMainEdit(selectedMainKeyword))
  }, [dispatch, selectedMainKeyword])

  useMemo(() => {
    setSelectedMainKeyword(keywordMain)
  }, [keywordMain])

  useMemo(() => {
    if (fragmentLoadingUpdate === false && fragmentSuccessUpdate) {
      const timer = setTimeout(() => dispatch(getUserFragments(1)), 9000)
      return () => clearTimeout(timer)
    }
  }, [fragmentLoadingUpdate, fragmentSuccessUpdate, dispatch])

  useEffect(() => {
    const isKeywordNotEmpty = selectedMainKeyword !== '' && keywordMain !== ''
    const isKeywordEmpty = selectedMainKeyword === '' && keywordMain !== ''

    if (isKeywordNotEmpty) {
      const fragmentsMatching = getFragmentsMatching(
        fragments,
        selectedMainKeyword as string
      )
      dispatch(updateUserFragmentsKeywordMain(fragmentsMatching))
    }

    if (isKeywordEmpty) {
      const fragmentsNoName = getFragmentsNoName(
        fragments,
        selectedMainKeyword as string
      )
      dispatch(updateUserFragmentsKeywordMain(fragmentsNoName))
    }
  }, [fragments, dispatch, selectedMainKeyword, keywordMain])

  return (
    <Main>
      <DropDownContainer>
        <HeaderAndCogContainer>
          <DropDownSvgRoundedLeft optionsOpen={options.optionsNewKeywordOpen}>
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
                  variant={
                    options.optionsNewKeywordOpen ? 'arrowLeft' : 'moreOptions'
                  }
                  toTop='-20px'
                  toLeft='-90px'
                  toTopMobile='20px'
                  toLeftMobile='-10px'
                  width='100px'
                  contentAfter={
                    options.optionsNewKeywordOpen ? 'powrót' : 'dodaj projekt'
                  }
                />
              </ButtonVerySmall>
            </RelativeWrapper>
          </DropDownSvgRoundedLeft>
          {options.keywordEditing ||
          options.keywordCreation ||
          options.optionsNewKeywordOpen ? (
            <TitleInputMainKeyword
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              type='mainLabel'
              name='main label'
              placeholder={keywordMain}
              value={newKeyword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewKeyword(e.target.value)
              }
              $wide={wideVersion}
            />
          ) : (
            <DropDownHeader
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggling}
              $wide={wideVersion}
              className={options.isOpen ? 'active' : 'inactive'}
            >
              <DropDownHeaderInside
                className={options.isOpen ? 'activeButton' : 'inactiveButton'}
              >
                {!wideVersion &&
                  (selectedMainKeyword?.substring(0, 15) || 'Wybierz projekt')}
                {wideVersion &&
                  (selectedMainKeyword?.substring(0, 20) || 'Wybierz projekt')}
              </DropDownHeaderInside>
            </DropDownHeader>
          )}{' '}
          <DropDownSvgRounded optionsOpen={options.optionsOpen}>
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
                  variant={
                    options.isOpen || options.optionsOpen
                      ? 'downPoint'
                      : 'rightPoint'
                  }
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
            options.optionsNewKeywordOpen &&
            !options.keywordCreation &&
            !options.keywordEditing && (
              <RelativeWrapper
                $left={wideVersion ? '50px' : '20px'}
                $top={wideVersion ? '10px' : '5px'}
              >
                <ButtonMedium variant='success' onClick={saveTempKeywordHelper}>
                  Dodaj nowy projekt
                </ButtonMedium>
              </RelativeWrapper>
            )}
          {options.optionsOpen &&
            !options.keywordCreation &&
            !options.keywordEditing && (
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
                  <ButtonSmallCircle
                    variant='infoEmpty'
                    onClick={editingHandler}
                  >
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
                    onClick={handleRemoveKeyword}
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
          {(options.keywordEditing || options.keywordCreation) && (
            <RelativeWrapper
              $left={wideVersion ? '30px' : '-4px'}
              $top={wideVersion ? '10px' : '7px'}
            >
              <OptionsDropdownContainer>
                <RelativeWrapper $top='12px'>
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
                {options.keywordCreation ? (
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

        {options.isOpen && uniqueKeywords.length > 1 && (
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
