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
  const testChange = () => {
    console.log(value)
    if (onChange) {
      onChange(value)
    }
  }
  return (
    <DatePickerButton
      onClick={onClick}
      ref={ref}
      value={value}
      onChange={onChange}
      // onChange={testChange}
    />
  )
}
export default CustomInputDatePicker
