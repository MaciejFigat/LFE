import React, { useState, useEffect } from 'react'
import { CopyHeading } from './CopyText.styled'

interface CopyTextProps {}

const CopyText: React.FC<CopyTextProps> = () => {
  const [copySuccess, setCopySuccess] = useState('')

  const copyHandler = (id: string) => {
    const copyText = document.getElementById(id)?.innerText
    if (copyText) {
      const dummy = document.createElement('textarea')
      document.body.appendChild(dummy)
      dummy.value = copyText
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
      setCopySuccess('Copied!')
      console.log(copySuccess)
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
        id='copyText'
        onClick={() => copyHandler('copyText')}
        onMouseEnter={() => hoverHelper()}
        onMouseLeave={() => leaveHelper()}
      >
        Copy
      </CopyHeading>{' '}
    </>
  )
}
export default CopyText
