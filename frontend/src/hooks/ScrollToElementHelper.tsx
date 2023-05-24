import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToElementHelper = () => {
  const location = useLocation()

  useEffect(() => {
    const element = document.getElementById(location.hash.substring(1, 7))

    if (element)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      })
  }, [location.hash])

  return null
}

export default ScrollToElementHelper
