import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../../../app/reduxHooks'
import { CopyHeading } from './CopyText.styled'
interface CopyTextProps {
  highlightedText: string
}

const CopyText: React.FC<CopyTextProps> = ({ highlightedText }) => {
  const docResult: any = useAppSelector((state) => state.searchResult.docResult)
  const { sad, syg, dataOrzeczenia, typWyroku } = docResult.tresc

  const [copySuccess, setCopySuccess] = useState('')
  // const text = highlightedText
  const copyHandler = (highlightedText: string) => {
    // navigator.clipboard.writeText(highlightedText)
    if (highlightedText) {
      navigator.clipboard.writeText(
        highlightedText + ` ${typWyroku}, ${sad}, ${dataOrzeczenia}, ${syg}`
      )
      setCopySuccess('Copied!')
      // console.log(copySuccess)
    }
  }
  const hoverHelper = () => {
    setCopySuccess('Skopiuj do schowka?')
  }
  const leaveHelper = () => {
    setCopySuccess('')
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
        onClick={() => copyHandler(highlightedText)}
        onMouseEnter={() => hoverHelper()}
        onMouseLeave={() => leaveHelper()}
      >
        Kopiuj
      </CopyHeading>{' '}
    </>
  )
}
export default CopyText
