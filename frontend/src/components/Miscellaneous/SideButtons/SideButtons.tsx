import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { SideButtonWrapper } from './SideButtons.styled'
import ButtonComponent from './ButtonComponent'
import { fragmentScrolledEdit } from '../../../features/preferences/preferenceSlice'
interface SideButtonsProps {
  hashIds: string[]
}

const colors = [
  'var(--background-secondary1)',
  'var(--background-secondary2)',
  'var(--background-secondary3)',
  'var(--info1)',
  'var(--info2)',
  'var(--warning1)'
]

const SideButtons: React.FC<SideButtonsProps> = ({ hashIds }) => {
  const location = useLocation()
  const dispatch: any = useAppDispatch()
  const fragmentScrolled = useAppSelector(
    state => state.preference.fragmentScrolled
  )
  useEffect(() => {
    const hashIndex = location.hash.substring(6)
    dispatch(fragmentScrolledEdit(hashIndex))
  }, [dispatch, location.hash])

  const colorChangeHelper = (index: number) => {
    dispatch(fragmentScrolledEdit(index))
  }

  return (
    <SideButtonWrapper>
      {hashIds.length > 0 &&
        hashIds.map((id: any, index: number) => (
          <HashLink smooth to={`/search/result#${id}`} key={index}>
            <ButtonComponent
              color={colors[index]}
              isSelected={colors[fragmentScrolled] === colors[index]}
              key={index}
              onMouseOver={() => colorChangeHelper(index)}
            />
          </HashLink>
        ))}
    </SideButtonWrapper>
  )
}

export default SideButtons
