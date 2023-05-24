import React, { useState, useEffect } from 'react'
import { SaveHeading } from './CopyText.styled'
import { useAppDispatch, useAppSelector } from '../../../../app/reduxHooks'
import { UserInfo } from '../../../../interfaces'
import { nanoid } from '@reduxjs/toolkit'
import {
  citationAdded,
  createFragment
} from '../../../../features/fragments/fragmentSlice'
interface AddFragmentProps {
  highlightedText: string
}

const AddFragment: React.FC<AddFragmentProps> = ({ highlightedText }) => {
  const dispatch: any = useAppDispatch()
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)
  const savedFragment = useAppSelector(state => state.fragment.fragmentSaved)
  const { excerpt: savedExcerpt } = savedFragment

  const keywordMain = useAppSelector(
    state => state.preference.sortingKeywords.keywordMain
  )

  const savedDocId: number = useAppSelector(state => state.searchResult.docId)

  const docResult: any = useAppSelector(state => state.searchResult.docResult)
  const { sad, syg, dataOrzeczenia, typWyroku } = docResult.tresc
  const querySaved = docResult.query_f

  // * Alternative method of getting to docId
  // * resultsDetailView: true => then we save read docId
  // * searchResult.heroDocIndex => will tell me which docId (within searchResults.data) is relevant since docResult doesn't have docId
  // *

  // const lastId = visitedLinks[visitedLinks.length - 1].id

  const [copySuccess, setCopySuccess] = useState('')

  const hoverHelper = () => {
    setCopySuccess('Zapisz fragment?')
  }
  const leaveHelper = () => {
    setCopySuccess('')
  }

  const newCitation = {
    id: nanoid(),
    title: highlightedText.substring(0, 22),
    date: '',
    docId: savedDocId,
    source: `${typWyroku} ${sad} ${dataOrzeczenia}` ?? '',
    excerpt: highlightedText,
    coordinates: `${syg}` ?? '',
    description: ''
  }
  const newFragment = {
    // title: highlightedText.substring(0, 22),
    title: `${querySaved}`,
    source: `${typWyroku} ${sad} ${dataOrzeczenia}`,
    excerpt: highlightedText,
    query: `${querySaved}`,
    // docId: `${lastId}`,
    docId: savedDocId,
    coordinates: `${syg}`,
    description: `komentarz`,
    keywords: [keywordMain],

    keywordValue: [
      {
        keyword: keywordMain,
        labelOne: 'pro',
        labelTwo: 'contra',
        value: false,
        skip: true
      }
    ]
  }
  // todo saving into the DB

  const addCitationHandler = (e: any) => {
    e.preventDefault()
    dispatch(citationAdded(newCitation))
    setCopySuccess('Zapisano!')
    if (
      Object.keys(userInfo).length > 0 &&
      userInfo.status === 'Active' &&
      savedExcerpt !== highlightedText
    ) {
      dispatch(createFragment(newFragment))
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccess('')
    }, 3000)
    return () => clearTimeout(timer)
  }, [copySuccess])
  return (
    <>
      {' '}
      <SaveHeading
        contentAfter={copySuccess}
        onClick={addCitationHandler}
        onMouseEnter={() => hoverHelper()}
        onMouseLeave={() => leaveHelper()}
      >
        Zapisz
      </SaveHeading>{' '}
    </>
  )
}
export default AddFragment
