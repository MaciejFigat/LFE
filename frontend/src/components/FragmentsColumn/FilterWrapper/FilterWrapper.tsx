import React, { useState } from 'react'
import DateCompare from '../DateCompare'
import DropdownFilter from './DropdownFilter/DropdownFilter'

interface FilterWrapperProps {}
const optionsTest = ['date', 'keyword', 'else']
const FilterWrapper: React.FC<FilterWrapperProps> = () => {
  return (
    <div>
      <DropdownFilter options={optionsTest} />
      <DateCompare />
    </div>
  )
}
export default FilterWrapper
