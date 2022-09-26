import React, { useState, useEffect } from 'react'

import { CopyHeading } from './CopyText.styled'
interface CopyTextProps {
  highlightedText: string
}

const CopyTextDemo: React.FC<CopyTextProps> = ({ highlightedText }) => {
  const [copySuccess, setCopySuccess] = useState('')

  const copyHandler = (highlightedText: string) => {
    if (highlightedText) {
      navigator.clipboard.writeText(
        highlightedText +
          `Interpretacja indywidualna, Dyrektora Izby Skarbowej w Warszawie, 9 marca 2016, IPPB6/4510-22/16-2/AM`
      )
      setCopySuccess('Copied!')
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
export default CopyTextDemo
