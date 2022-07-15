import React from 'react'
import { DatePickerButton } from './DatePicker.styled'

interface CustomInputDatePickerProps {
  onClick?: any
  value?: any
  ref?: any
  onChange?: (date: Date) => void
}

const CustomInputDatePicker: React.FC<CustomInputDatePickerProps> = ({
  onClick,
  value,
  ref,
  onChange,
}) => {
  return (
    <DatePickerButton
      onClick={onClick}
      ref={ref}
      value={value}
      onChange={onChange}
    />
  )
}
export default CustomInputDatePicker
