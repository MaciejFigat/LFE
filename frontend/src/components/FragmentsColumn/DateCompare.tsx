// import React from 'react'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { sortingDateEdit } from '../../features/preferences/preferenceSlice'
interface DateCompareProps {}

const DateCompare: React.FC<DateCompareProps> = () => {
  const dispatch: any = useAppDispatch()
  // const fragments: any[] = useAppSelector(
  //   (state) => state.fragment.userFragments
  // )
  const sortingDate = useAppSelector((state) => state.preference.sortingDate)
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const year = today.getFullYear()

  const hour = today.getHours()

  const date = `${year}-${month < 10 ? `0${month}` : `${month}`}-${
    day < 10 ? `0${day}` : `${day}`
  }`
  const hourDigits = `${hour < 10 ? `0${hour}` : `${hour}`}`

  useEffect(() => {
    dispatch(sortingDateEdit(date))
  }, [dispatch])

  const sortingDateDecreaseHandler = () => {
    dispatch(
      sortingDateEdit(
        `${year}-${month < 10 ? `0${month}` : `${month}`}-${
          day < 10 ? `0${day - 1}` : `${day - 1}`
        }`
      )
    )
  }
  const sortingDateIncreaseHandler = () => {
    dispatch(
      sortingDateEdit(
        `${year}-${month < 10 ? `0${month}` : `${month}`}-${
          day < 10 ? `0${day + 1}` : `${day + 1}`
        }`
      )
    )
  }

  return (
    <div>
      Today is: <b>{date}</b>
      The hour is: <b>{hourDigits}</b>
      The date: <b>{month}</b>
      The sorting date: <b>{sortingDate}</b>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus,
        suscipit.
      </p>
      <button onClick={sortingDateDecreaseHandler}>Yesterday</button>
      <button onClick={sortingDateIncreaseHandler}>
        next day makes no sense
      </button>
    </div>
  )
}
export default DateCompare
