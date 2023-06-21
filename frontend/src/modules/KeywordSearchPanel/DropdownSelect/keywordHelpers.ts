import { Dispatch, SetStateAction } from 'react'
import { AppDispatch } from '../../../app/store'
import {
  deleteSavedFragment,
  editSavedFragment
} from '../../../features/fragments/fragmentSlice'
import { FragmentStored, KeywordValue } from '../../../interfaces'
import { nanoid } from '@reduxjs/toolkit'

export const filterFragments = (fragments: FragmentStored[], keyword: string) =>
  fragments?.filter(f => f.keywords?.indexOf(keyword) >= 0)

export const confirmRemoval = () =>
  window.confirm('Czy potwierdzasz usunięcie powiązanych fragmentów?')

export const dispatchFragmentEdit = (
  fragment: FragmentStored,
  filteredKeywords: string[],
  dispatch: AppDispatch
) =>
  dispatch(
    editSavedFragment({
      _id: fragment._id,
      keywords: filteredKeywords
    })
  )

export const dispatchFragmentDelete = (id: string, dispatch: AppDispatch) =>
  dispatch(deleteSavedFragment(id))

export const removeKeywordHelper = (
  fragments: FragmentStored[],
  selectedMainKeyword: string,
  dispatch: AppDispatch
) => {
  const fragmentsMatching = filterFragments(
    fragments,
    selectedMainKeyword as string
  )
  if (confirmRemoval()) {
    fragmentsMatching.forEach(fragment => {
      const filteredKeywords = fragment?.keywords?.filter(
        (keyword: string) => keyword !== selectedMainKeyword
      )
      fragmentsMatching.length <= 2
        ? dispatchFragmentDelete(fragment._id, dispatch)
        : dispatchFragmentEdit(fragment, filteredKeywords, dispatch)
    })
  }
}

export const getFragmentsWithoutProject = (fragments: FragmentStored[]) =>
  fragments.filter(
    fragment => fragment.keywords.length === 1 && fragment.keywords[0] === ''
  )

const editFragmentWithNewKeyword = (
  fragmentsNoProject: FragmentStored[],
  newKeyword: string,
  dispatch: AppDispatch
) => {
  fragmentsNoProject.forEach(fragment => {
    const fragEdited = {
      _id: fragment._id,
      keywords: [newKeyword],
      keywordValue: fragment.keywordValue.map(value => ({
        ...value,
        keyword: newKeyword
      }))
    }
    dispatch(editSavedFragment(fragEdited))
  })
}
export const saveNewKeyword = (
  fragments: FragmentStored[],
  newKeyword: string,
  dispatch: AppDispatch
) => {
  const fragmentsNoProject = getFragmentsWithoutProject(fragments)
  editFragmentWithNewKeyword(fragmentsNoProject, newKeyword, dispatch)
}

export const updateKeywordValues = (
  fragment: FragmentStored,
  simpleKeywordArr: string[],
  filteredArr: KeywordValue[],
  foundObject: KeywordValue,
  newKeyword: string
) => ({
  ...fragment,
  keywords: [...simpleKeywordArr, newKeyword],
  keywordValue: [
    ...filteredArr,
    {
      keyword: newKeyword,
      labelOne: foundObject?.labelOne || 'pro',
      labelTwo: foundObject?.labelTwo || 'contra',
      value: foundObject?.value,
      skip: foundObject?.skip
    }
  ]
})

export const saveEditedKeyword = (
  newKeyword: string,
  setSelectedMainKeyword: Dispatch<SetStateAction<string | null>>,
  fragmentsKeywordMain: FragmentStored[],
  keywordMain: string,
  dispatch: AppDispatch
) => {
  setSelectedMainKeyword(newKeyword)

  fragmentsKeywordMain.forEach(fragment => {
    const filteredArr = fragment.keywordValue.filter(
      (keywordSearched: KeywordValue) => keywordSearched.keyword !== keywordMain
    )

    const foundObject = fragment.keywordValue.find(
      (keywordSearched: KeywordValue) => keywordSearched.keyword === keywordMain
    )

    const simpleKeywordArr = fragment.keywords.filter(
      (keyword: string) => keyword !== keywordMain
    )

    if (!fragment.keywords.includes(newKeyword)) {
      const fragEdited = updateKeywordValues(
        fragment,
        simpleKeywordArr,
        filteredArr,
        foundObject as KeywordValue,
        newKeyword
      )
      dispatch(editSavedFragment(fragEdited as FragmentStored))
    }
  })
}

export const getFragmentsMatching = (
  fragments: FragmentStored[],
  selectedMainKeyword: string
) =>
  fragments
    ?.filter(fragment => fragment.keywords?.includes(selectedMainKeyword))
    .map(el => ({ ...el, nanoId: nanoid() }))

export const getFragmentsNoName = (
  fragments: FragmentStored[],
  selectedMainKeyword: string
) =>
  fragments
    ?.filter(
      fragment =>
        fragment.keywords.length === 1 &&
        fragment.keywords?.includes(selectedMainKeyword)
    )
    .map(el => ({ ...el, nanoId: nanoid() }))
