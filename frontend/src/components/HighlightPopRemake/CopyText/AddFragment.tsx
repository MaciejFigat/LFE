import React, { useState, useEffect } from 'react'
import { SaveHeading } from './CopyText.styled'
import { useAppDispatch } from '../../../app/reduxHooks'
import { nanoid } from '@reduxjs/toolkit'
import { citationAdded } from '../../../features/fragments/fragmentSlice'
interface AddFragmentProps {
  highlightedText: string
}

const AddFragment: React.FC<AddFragmentProps> = ({ highlightedText }) => {
  const dispatch: any = useAppDispatch()

  const [copySuccess, setCopySuccess] = useState('')

  const hoverHelper = () => {
    setCopySuccess('Zapisz fragment?')
  }
  const leaveHelper = () => {
    setCopySuccess('')
  }
  // fake user id to work without firing the backend up
  // const loggedUserIdFake = '123sdsdsd'

  // const newFragment = {
  //   id: '',
  //   userId: loggedUserIdFake,
  // userId: loggedUserId,
  //   citations: [
  //     {
  //       source: '',
  //       excerpt: highlightedText,
  //       coordinates: '',
  //     },
  //   ],
  // }
  const newCitation = {
    id: nanoid(),
    title: 'Best title',
    date: '22-Mar-2100',
    source: 'source',
    excerpt: highlightedText,
    coordinates: 'coordinates',
    description: 'description',
  }
  const addCitationHandler = (e: any) => {
    e.preventDefault()
    dispatch(citationAdded(newCitation))
    setCopySuccess('Zapisano!')
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
