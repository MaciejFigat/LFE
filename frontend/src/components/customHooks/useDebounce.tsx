import React, { useEffect, useState } from 'react'

interface useDebounceProps {
  value: any
  delay: number
}

const useDebounce: React.FC<useDebounceProps> = ({ value, delay }) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timeoutId)
  }, [value, delay])

  return debouncedValue
}
export default useDebounce

//* used to delay execution of the function in order to limit CPU usage or API calls number

//? Usage:
//? const debouncedValue = useDebounce(value, 300)

//? the useEffect below will make less calls to search users because debouncedValue will only change after the delay provided and if I call the function more often it will only execute the most recent one and disregard the previous unfinished calls
//*   useEffect(() => {
//*   console.log('Value: ', debouncedValue)
//*   searchUsers(value)
//*     }, [debouncedValue])
