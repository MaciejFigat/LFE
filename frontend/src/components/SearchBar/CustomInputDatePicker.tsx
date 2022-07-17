import React from 'react'
import { DatePickerButton } from './DatePicker.styled'

interface CustomInputDatePickerProps {
  onClick?: any
  value?: any
  innerRef?: any
  onChange?: (date: Date) => void
}

const CustomInputDatePicker: React.FC<CustomInputDatePickerProps> = ({
  onClick,
  value,
  innerRef,
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
      ref={innerRef}
      value={value}
      onChange={onChange}
      // onChange={testChange}
    />
  )
}
export default CustomInputDatePicker
