import React from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { ListWrapper, ItemWrapper } from './AnimatedList.styled'
import AnimatedItem from './AnimatedItem'

interface AnimatedListProps {
  data: {
    title: string
    id: string
    description: string
    source: string
    excerpt: string
    coordinates: string
  }[]
}
// const data = [
//   {
//     title: '1',
//     description: 'testing 1',
//   },
//   {
//     title: '2',
//     description: 'testing 2',
//   },
//   {
//     title: '3',
//     description: 'testing 3',
//   },
// ]

const AnimatedList: React.FC<AnimatedListProps> = ({ data }) => {
  return (
    <AnimateSharedLayout>
      <ListWrapper
        as={motion.ul}
        layout
        initial={{ borderRadius: 5, opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {data.map((item) => (
          <ItemWrapper key={item.title}>
            {' '}
            <AnimatedItem
              id={item.id}
              title={item.title}
              description={item.description}
              source={item.source}
              excerpt={item.excerpt}
              coordinates={item.coordinates}
            />
          </ItemWrapper>
        ))}
      </ListWrapper>{' '}
    </AnimateSharedLayout>
  )
}
export default AnimatedList
