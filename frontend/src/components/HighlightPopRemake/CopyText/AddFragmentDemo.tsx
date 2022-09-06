import React, { useState, useEffect } from 'react'
import { SaveHeading } from './CopyText.styled'
import { useAppDispatch } from '../../../app/reduxHooks'

import { nanoid } from '@reduxjs/toolkit'
import { citationAdded } from '../../../features/fragments/fragmentSlice'
interface AddFragmentProps {
  highlightedText: string
}

const AddFragmentDemo: React.FC<AddFragmentProps> = ({ highlightedText }) => {
  const dispatch: any = useAppDispatch()

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
    source: 'source',
    excerpt: highlightedText,
    coordinates: '',
    description: '',
  }

  // todo saving into the DB

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
export default AddFragmentDemo
