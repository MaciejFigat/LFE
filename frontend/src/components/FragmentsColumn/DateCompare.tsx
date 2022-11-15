import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { sortingDateEdit } from '../../features/preferences/preferenceSlice'
import { SendButtonVerySmall } from '../Miscellaneous/Buttons/Buttons.styled'
import { DateCompareRow, DateCompareWrapper } from './FragmentsColumn.styled'

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
      Math.max(...fragments.map((fragment) => Date.parse(fragment.createdAt)))
    )
    // new Date(Math.max(...a.map(e => new Date(e.MeasureDate))));
    //? If you try to compare two Date objects, they get converted to timestamps before the comparison takes place

    const date = {
      sortingYear: maxDate.getFullYear(),
      sortingMonth: maxDate.getMonth() + 1,
      //! HERE seems to be the bug (below)
      // sortingDay: maxDate.getDate() - 1,
      sortingDay: maxDate.getDate(),
    }

    dispatch(sortingDateEdit(date))
  }
  return (
    <DateCompareWrapper>
      <DateCompareRow>
        <SendButtonVerySmall
          variant='secondaryEmpty'
          onClick={handleDecreaseSortDay}
        >
          -
        </SendButtonVerySmall>
        <b>{sortingDay}</b>
        <SendButtonVerySmall
          variant='primaryEmpty'
          onClick={handleIncreaseSortDay}
        >
          +
        </SendButtonVerySmall>
        <SendButtonVerySmall
          variant='secondaryEmpty'
          onClick={handleDecreaseSortMonth}
        >
          -
        </SendButtonVerySmall>
        <b>{sortingMonth}</b>
        {sortingMonth - 1 < new Date().getMonth() ? (
          <SendButtonVerySmall
            variant='primaryEmpty'
            onClick={handleIncreaseSortMonth}
          >
            +
          </SendButtonVerySmall>
        ) : (
          <SendButtonVerySmall variant='primaryEmpty'>
            &nbsp;
          </SendButtonVerySmall>
        )}
        <SendButtonVerySmall
          variant='secondaryEmpty'
          onClick={handleDecreaseSortYear}
        >
          -
        </SendButtonVerySmall>
        <b>{sortingYear}</b>
        {sortingYear < new Date().getFullYear() && (
          <SendButtonVerySmall
            variant='primaryEmpty'
            onClick={handleIncreaseSortYear}
          >
            +
          </SendButtonVerySmall>
        )}
      </DateCompareRow>
      <DateCompareRow>
        {' '}
        {(sortingYear !== new Date().getFullYear() ||
          sortingMonth !== new Date().getMonth() + 1 ||
          sortingDay !== new Date().getDate()) && (
          <SendButtonVerySmall variant='primaryEmpty' onClick={handleSetToday}>
            Dzisiejsza sesja
          </SendButtonVerySmall>
        )}
        <SendButtonVerySmall
          variant='primaryEmpty'
          onClick={handleSetLastSession}
        >
          Ostatnia sesja
        </SendButtonVerySmall>
      </DateCompareRow>
    </DateCompareWrapper>
  )
}
export default DateCompare
