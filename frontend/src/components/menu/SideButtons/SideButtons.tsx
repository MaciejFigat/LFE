import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { AnimateSharedLayout } from 'framer-motion'
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
  'var(--background-tertiary1)',
  'var(--background-tertiary2)',
  'var(--background-tertiary3)',
]

const SideButtons: React.FC<SideButtonsProps> = ({ hashIds }) => {
  const dispatch: any = useAppDispatch()
  const fragmentScrolled = useAppSelector(
    (state) => state.preference.fragmentScrolled
  )

  const colorChangeHelper = (index: number) => {
    dispatch(fragmentScrolledEdit(index))
  }

  return (
    <SideButtonWrapper>
      <AnimateSharedLayout>
        {hashIds.length > 0 &&
          hashIds.map((id: any, index: number) => (
            <HashLink smooth to={`/search/result#${id}`} key={index}>
              <ButtonComponent
                color={colors[index]}
                isSelected={colors[fragmentScrolled] === colors[index]}
                key={index}
                onMouseOver={() => colorChangeHelper(index)}
              ></ButtonComponent>
            </HashLink>
          ))}
      </AnimateSharedLayout>
    </SideButtonWrapper>
  )
}

export default SideButtons
