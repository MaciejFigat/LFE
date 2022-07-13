import React, { forwardRef } from 'react'

interface CustomInputDatePickerProps {
  onClick?: any
  value?: any
  ref?: any
}

const CustomInputDatePicker: React.FC<CustomInputDatePickerProps> = ({
  onClick,
  value,
  ref,
}) => {
  return (
    // * custom input for DatePicker
    //    forwardRef(({ value, onClick }, ref) => (

    <button className='example-custom-input' onClick={onClick} ref={ref}>
      {value}
    </button>
  )
}
export default CustomInputDatePicker
