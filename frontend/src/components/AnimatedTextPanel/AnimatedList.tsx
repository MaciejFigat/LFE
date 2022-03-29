import React from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { ListWrapper, ItemWrapper } from './AnimatedList.styled'
import AnimatedItem from './AnimatedItem'

interface AnimatedListProps {
  data: {
    title: string
    description: string
  }[]
}

const AnimatedList: React.FC<AnimatedListProps> = ({ data }) => {
  return (
    <AnimateSharedLayout>
      <ListWrapper
        as={motion.ul}
        layout
        initial={{ borderRadius: 25, opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {data.map((item) => (
          <ItemWrapper key={item.title}>
            {' '}
            <AnimatedItem title={item.title} description={item.description} />
          </ItemWrapper>
        ))}
      </ListWrapper>{' '}
    </AnimateSharedLayout>
  )
}
export default AnimatedList
