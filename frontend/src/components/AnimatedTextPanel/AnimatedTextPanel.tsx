import React from 'react'
import {
  ListWrapper,
  ItemWrapper,
  PictureListWrapper,
} from './AnimatedTextPanel.styled'
import { motion, AnimateSharedLayout } from 'framer-motion'
import AnimatedList from './AnimatedList'

// import Item from './Item'

// ! ddd
// * ddd
// TODO dddsdsds
// ? ddsdsds

interface AnimatedTextPanelProps {}

const AnimatedTextPanel: React.FC<AnimatedTextPanelProps> = ({}) => {
  // const AnimatedPanel = ({ data, Icon }) => {

  return (
    <PictureListWrapper>
      <AnimateSharedLayout>
        <ListWrapper
          as={motion.ul}
          layout
          initial={{ borderRadius: 5, opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></ListWrapper>{' '}
        {/* <AnimatedList
          picture={item.picture}
          title={item.title}
          description={item.description}
          svgColor={item.color}
          Icon={Icon}
        /> */}
      </AnimateSharedLayout>
    </PictureListWrapper>
  )
}

export default AnimatedTextPanel
