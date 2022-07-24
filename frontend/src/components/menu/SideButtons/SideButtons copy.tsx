import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { SendButtonVerySmall } from '../../Buttons/Buttons.styled'
import SvgIcon from '../../SvgIcon/SvgIcon'
import { SideButtonWrapper } from './SideButtons.styled'
interface SideButtonsProps {
  hashIds: string[]
}
const colors = ['#ff0055', '#0099ff', '#22cc88', '#ffaa00']

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}
const SideButtons: React.FC<SideButtonsProps> = ({ hashIds }) => {
  const [selected, setSelected] = useState(colors[0])

  return (
    <SideButtonWrapper>
      {hashIds.length > 0 &&
        hashIds.map((id: any, index: number) => (
          <HashLink smooth to={`/search/result#${id}`} key={Math.random()}>
            {index === 0 && (
              <SendButtonVerySmall variant='successEmpty'>
                {index + 1}
                <SvgIcon noContent variant='arrowLeft' />
              </SendButtonVerySmall>
            )}
            {index === 1 && (
              <SendButtonVerySmall variant='successEmpty'>
                {index + 1}
                <SvgIcon noContent variant='arrowRight' />
              </SendButtonVerySmall>
            )}
            {index === 2 && (
              <SendButtonVerySmall variant='successEmpty'>
                {index + 1}
                <SvgIcon noContent variant='searchPlus' />
              </SendButtonVerySmall>
            )}
            {index === 3 && (
              <SendButtonVerySmall variant='successEmpty'>
                {index + 1}
                <SvgIcon noContent variant='arrowLeft' />
              </SendButtonVerySmall>
            )}
            {index === 4 && (
              <SendButtonVerySmall variant='successEmpty'>
                {index + 1}
                <SvgIcon noContent variant='arrowLeft' />
              </SendButtonVerySmall>
            )}
            {index === 5 && (
              <SendButtonVerySmall variant='successEmpty'>
                {index + 1}
                <SvgIcon noContent variant='arrowLeft' />
              </SendButtonVerySmall>
            )}
          </HashLink>
        ))}
    </SideButtonWrapper>
  )
}
export default SideButtons
