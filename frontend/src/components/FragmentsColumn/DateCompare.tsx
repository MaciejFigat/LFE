import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { sortingDateEdit } from '../../features/preferences/preferenceSlice'
import { SendButton } from '../Buttons/Buttons.styled'
interface DateCompareProps {}

const DateCompare: React.FC<DateCompareProps> = () => {
  const dispatch: any = useAppDispatch()

  const sortingDate = useAppSelector((state) => state.preference.sortingDate)
  const { sortingYear, sortingMonth, sortingDay } = sortingDate

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
    if (sortingMonth < 12) {
      dispatch(sortingDateEdit(dateRedux))
    } else if (sortingMonth === 12) {
      dispatch(sortingDateEdit(dateReduxNextYear))
    }
  }

  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus,
        suscipit.
      </p>
      <SendButton variant='primary' onClick={handleDecreaseSortMonth}>
        -1 month
      </SendButton>
      <b>{sortingMonth}</b>
      <SendButton variant='primary' onClick={handleIncreaseSortMonth}>
        +1 month
      </SendButton>
      <SendButton variant='primary' onClick={handleDecreaseSortDay}>
        -1 day
      </SendButton>
      <b>{sortingDay}</b>
      <SendButton variant='primary' onClick={handleIncreaseSortDay}>
        +1 day
      </SendButton>
    </div>
  )
}
export default DateCompare
