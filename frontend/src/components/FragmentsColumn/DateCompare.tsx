// import React, {useEffect} from 'react'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
interface DateCompareProps {}

const DateCompare: React.FC<DateCompareProps> = () => {
  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const year = today.getFullYear()

  const hour = today.getHours()

  const date = `${year}-${month < 10 ? `0${month}` : `${month}`}-${
    day < 10 ? `0${day}` : `${day}`
  }`
  const hourDigits = `${hour < 10 ? `0${hour}` : `${hour}`}`
  return (
    <div>
      Today is: <b>{date}</b>
      The hour is: <b>{hourDigits}</b>
      The date: <b>{month}</b>
    </div>
  )
}
export default DateCompare
