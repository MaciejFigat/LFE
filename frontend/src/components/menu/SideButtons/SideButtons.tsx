import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { SendButtonVerySmall } from '../../Buttons/Buttons.styled'
import SvgIcon from '../../SvgIcon/SvgIcon'
import { SideButtonWrapper } from './SideButtons.styled'
import ButtonComponent from './ButtonComponent'
interface SideButtonsProps {
  hashIds: string[]
}
const colors = ['#0099ff', '#ff0055', '#22cc88', '#ffaa00']

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}
const SideButtons: React.FC<SideButtonsProps> = ({ hashIds }) => {
  const [selected, setSelected] = useState(colors[0])

  return (
    <AnimateSharedLayout>
      <SideButtonWrapper>
        {hashIds.length > 0 &&
          hashIds.map((id: any, index: number) => (
          
            <div onMouseOver={() => setSelected(colors[index])}>
              <HashLink
                smooth
                to={`/search/result#${id}`}
                key={Math.random()}
              
              >
               
                <ButtonComponent
                  color={colors[index]}
                  isSelected={selected === colors[index]}
              
                  onClick={() => setSelected(colors[index])}
                 
                </ButtonComponent>
              </HashLink>
            </div>
          ))}
      </SideButtonWrapper>
    </AnimateSharedLayout>
  )
}

export default SideButtons
