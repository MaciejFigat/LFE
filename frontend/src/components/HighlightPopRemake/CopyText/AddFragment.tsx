import React, { useState, useEffect } from 'react'
import { SaveHeading } from './CopyText.styled'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { UserInfo } from '../../../interfaces'
import { nanoid } from '@reduxjs/toolkit'
import {
  citationAdded,
  createFragment,
} from '../../../features/fragments/fragmentSlice'
interface AddFragmentProps {
  highlightedText: string
}

const AddFragment: React.FC<AddFragmentProps> = ({ highlightedText }) => {
  const dispatch: any = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const savedFragment = useAppSelector((state) => state.fragment.fragmentSaved)
  const { excerpt: savedExcerpt } = savedFragment
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
    // ! SOURCE
    source: 'source',
    excerpt: highlightedText,
    coordinates: '',
    description: '',
  }
  const newFragment = {
    title: highlightedText.substring(0, 22),
    source: 'test',
    excerpt: highlightedText,
    coordinates: 'test',
    description: 'test',
    // keywords: [],
    // keywordValue: [{ keyword: '', value: true }],
  }
  // todo saving into the DB

  const addCitationHandler = (e: any) => {
    e.preventDefault()
    dispatch(citationAdded(newCitation))
    setCopySuccess('Zapisano!')
    if (Object.keys(userInfo).length > 0 && savedExcerpt !== highlightedText) {
      dispatch(createFragment(newFragment))
      // console.log(savedExcerpt)
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
