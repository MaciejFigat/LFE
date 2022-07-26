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
const colors = ['#0099ff', '#ff0055', '#22cc88', '#ffaa00']

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
