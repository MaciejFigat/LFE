import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { sortingDateEdit } from '../../features/preferences/preferenceSlice'
import { SendButtonSmall } from '../Buttons/Buttons.styled'
interface DateCompareProps {}

const DateCompare: React.FC<DateCompareProps> = () => {
  const dispatch: any = useAppDispatch()

  const sortingDate = useAppSelector((state) => state.preference.sortingDate)
  const { sortingYear, sortingMonth, sortingDay } = sortingDate

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )

  // todo sorting day +/- handlers
  const handleDecreaseSortDay = () => {
    //? Day 0 is the last day in the previous month, month constructor is 0-based, sortingMonth - 1 = today.getMonth(), which we need for getting the correct amount of days
    const maxDaysPreviousMonth = new Date(
      sortingYear,
      sortingMonth - 1,
      0
    ).getDate()
    const dateThisMonth = {
      sortingYear: sortingYear,
      sortingMonth: sortingMonth,
      sortingDay: sortingDay - 1,
    }
    const dateReduxPreviousMonth = {
      sortingYear: sortingYear,
      sortingMonth: sortingMonth - 1,
      sortingDay: maxDaysPreviousMonth,
    }
    const dateReduxPreviousYear = {
      sortingYear: sortingYear - 1,
      sortingMonth: 12,
      sortingDay: 31,
    }
    if (sortingDay > 1) {
      dispatch(sortingDateEdit(dateThisMonth))
    } else if (sortingDay === 1 && sortingMonth > 1) {
      dispatch(sortingDateEdit(dateReduxPreviousMonth))
    } else if (sortingDay === 1 && sortingMonth === 1 && sortingYear > 1970) {
      dispatch(sortingDateEdit(dateReduxPreviousYear))
    }
  }
  const handleIncreaseSortDay = () => {
    const maxDaysCurrentMonth = new Date(sortingYear, sortingMonth, 0).getDate()
    const dateRedux = {
      sortingYear: sortingYear,
      sortingMonth: sortingMonth,
      sortingDay: sortingDay + 1,
    }
    const dateNextMonth = {
      sortingYear: sortingYear,
      sortingMonth: sortingMonth + 1,
      sortingDay: 1,
    }
    const dateNextYear = {
      sortingYear: sortingYear + 1,
      sortingMonth: 1,
      sortingDay: 1,
    }
    if (sortingDay < maxDaysCurrentMonth) {
      dispatch(sortingDateEdit(dateRedux))
    } else if (sortingDay === maxDaysCurrentMonth && sortingMonth < 12) {
      dispatch(sortingDateEdit(dateNextMonth))
    } else if (
      sortingDay === maxDaysCurrentMonth &&
      sortingMonth === 12 &&
      sortingYear > 1970
    ) {
      dispatch(sortingDateEdit(dateNextYear))
    }
  }
  // todo sorting month +/- handlers
  const handleDecreaseSortMonth = () => {
    const maxDaysPreviousMonth = new Date(
      sortingYear,
      sortingMonth - 1,
      0
    ).getDate()

    const dateRedux = {
      sortingYear: sortingYear,
      sortingMonth: sortingMonth - 1,
      sortingDay:
        sortingDay <= maxDaysPreviousMonth
          ? sortingDay
          : // todo targetting the month prior
            maxDaysPreviousMonth,
    }
    const datePreviousYear = {
      sortingYear: sortingYear - 1,
      sortingMonth: 12,
      sortingDay: 31,
    }
    if (sortingMonth > 1) {
      dispatch(sortingDateEdit(dateRedux))
    } else if (sortingMonth === 1) {
      dispatch(sortingDateEdit(datePreviousYear))
    }
  }
  const handleIncreaseSortMonth = () => {
    const maxDaysNextMonth = new Date(
      sortingYear,
      sortingMonth + 1,
      0
    ).getDate()

    const dateRedux = {
      sortingYear: sortingYear,
      sortingMonth: sortingMonth + 1,
      sortingDay:
        sortingDay <= maxDaysNextMonth ? sortingDay : maxDaysNextMonth,
    }
    const dateReduxNextYear = {
      sortingYear: sortingYear + 1,
      sortingMonth: 1,
      sortingDay: sortingDay,
    }
    //todo
    if (sortingMonth < 12 && sortingMonth - 1 < new Date().getMonth()) {
      dispatch(sortingDateEdit(dateRedux))
    } else if (sortingMonth === 12) {
      dispatch(sortingDateEdit(dateReduxNextYear))
    }
  }
  const handleIncreaseSortYear = () => {
    const dateReduxNextYear = {
      sortingYear: sortingYear + 1,
      sortingMonth: sortingMonth,
      sortingDay: sortingDay,
    }
    if (sortingYear < new Date().getFullYear()) {
      dispatch(sortingDateEdit(dateReduxNextYear))
    }
  }
  const handleDecreaseSortYear = () => {
    const datePreviousYear = {
      sortingYear: sortingYear - 1,
      sortingMonth: sortingMonth,
      sortingDay: sortingDay,
    }
    if (sortingYear > 1970) {
      dispatch(sortingDateEdit(datePreviousYear))
    }
  }

  const handleSetToday = () => {
    const date = {
      sortingYear: new Date().getFullYear(),
      sortingMonth: new Date().getMonth() + 1,
      sortingDay: new Date().getDate(),
    }

    dispatch(sortingDateEdit(date))
  }
  //? 👇️ This works because each Date object stores a timestamp (the number of milliseconds since the Unix Epoch) under the hood.
  //?  console.log(new Date().getTime()) -> 1643013648670
  const handleSetLastSession = () => {
    const maxDate = new Date(
      Math.max(
        // @ts-ignore //todo
        ...fragments.map((fragment) => {
          return new Date(fragment.updatedAt)
        })
      )
    )
    //? If you try to compare two Date objects, they get converted to timestamps before the comparison takes place

    const lastSession = maxDate.toISOString().substring(0, 10)

    // const date = {
    //   sortingYear: lastSession.substring(0, 4),
    //   sortingMonth: lastSession.substring(5, 7),
    //   sortingDay: lastSession.substring(8, 10),
    // }
    const date = {
      sortingYear: maxDate.getFullYear(),
      sortingMonth: maxDate.getMonth() + 1,
      sortingDay: maxDate.getDate(),
    }

    console.log(date)
    dispatch(sortingDateEdit(date))
  }
  return (
    <div>
      <p>Sorting by date -/+ for now</p>

      <SendButtonSmall variant='primary' onClick={handleDecreaseSortDay}>
        -
      </SendButtonSmall>
      <b>{sortingDay}</b>
      <SendButtonSmall variant='primary' onClick={handleIncreaseSortDay}>
        +
      </SendButtonSmall>
      <SendButtonSmall variant='primary' onClick={handleDecreaseSortMonth}>
        -
      </SendButtonSmall>
      <b>{sortingMonth}</b>
      {sortingMonth - 1 < new Date().getMonth() && (
        <SendButtonSmall variant='primary' onClick={handleIncreaseSortMonth}>
          +
        </SendButtonSmall>
      )}
      <SendButtonSmall variant='primary' onClick={handleDecreaseSortYear}>
        -
      </SendButtonSmall>
      <b>{sortingYear}</b>
      {sortingYear < new Date().getFullYear() && (
        <SendButtonSmall variant='primary' onClick={handleIncreaseSortYear}>
          +
        </SendButtonSmall>
      )}
      {(sortingYear !== new Date().getFullYear() ||
        sortingMonth !== new Date().getMonth() + 1 ||
        sortingDay !== new Date().getDate()) && (
        <SendButtonSmall variant='primaryEmpty' onClick={handleSetToday}>
          Today
        </SendButtonSmall>
      )}
      <SendButtonSmall variant='primaryEmpty' onClick={handleSetLastSession}>
        Last session
      </SendButtonSmall>
    </div>
  )
}
export default DateCompare
