import React, { useState, useEffect } from 'react'
import { CopyHeading } from './CopyText.styled'
import { UserInfo } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { fragmentAdded } from '../../../features/fragments/fragmentSlice'
interface AddFragmentProps {
  highlightedText: string
}

const AddFragment: React.FC<AddFragmentProps> = ({ highlightedText }) => {
  const dispatch: any = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const loggedUserId = userInfo._id

  const [copySuccess, setCopySuccess] = useState('')
  //   const copyHandler = (highlightedText: string) => {
  //     navigator.clipboard.writeText(highlightedText)
  //     if (highlightedText) {
  //       navigator.clipboard.writeText(highlightedText)
  //       setCopySuccess('Copied!')
  //       console.log(copySuccess)
  //     }
  //   }
  const hoverHelper = () => {
    setCopySuccess('Zapisz fragment?')
  }
  const leaveHelper = () => {
    setCopySuccess('')
  }
  // fake user id to work without firing the backend up
  const loggedUserIdFake = '123sdsdsd'
  const newFragment = {
    id: '',
    userId: loggedUserIdFake,
    // userId: loggedUserId,
    citations: [
      {
        source: '',
        excerpt: highlightedText,
        coordinates: '',
      },
    ],
  }
  const addFragmentHandler = (e: any) => {
    e.preventDefault()
    dispatch(fragmentAdded(newFragment))
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
      <CopyHeading
        contentAfter={copySuccess}
        onClick={addFragmentHandler}
        onMouseEnter={() => hoverHelper()}
        onMouseLeave={() => leaveHelper()}
      >
        Zapisz
      </CopyHeading>{' '}
    </>
  )
}
export default AddFragment
