import React, { useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import {
  ListItem,
  ListTitle,
  ListTitleContainer,
  ListRow,
  ListWrapper,
  ItemWrapper,
} from './AnimatedList.styled'

interface AnimatedListProps {
  data: {
    title: string
    description: string
  }[]
}

const AnimatedList: React.FC<AnimatedListProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

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
            <ListItem
              as={motion.li}
              layout
              onClick={toggleOpen}
              initial={{ borderRadius: 15 }}
            >
              <ListTitleContainer as={motion.div}>
                <ListTitle as={motion.h2} layout>
                  {item.title}
                </ListTitle>
              </ListTitleContainer>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ListRow as={motion.div}>{item.description}</ListRow>
                  </motion.div>
                )}
              </AnimatePresence>
            </ListItem>
          </ItemWrapper>
        ))}
      </ListWrapper>{' '}
    </AnimateSharedLayout>
  )
}
export default AnimatedList
