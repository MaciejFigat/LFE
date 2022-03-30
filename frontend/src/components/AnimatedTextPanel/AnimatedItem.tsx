import React, { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ListItem,
  ListTitle,
  ListTitleContainer,
  ListRow,
} from './AnimatedList.styled'
interface AnimatedItemProps {
  title: string
  description: string
  children?: ReactNode
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  title,
  description,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <>
      <ListItem
        as={motion.li}
        layout
        onClick={toggleOpen}
        initial={{ borderRadius: 3, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <ListTitleContainer as={motion.div} layout>
          <ListTitle as={motion.h2} layout>
            {title}
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
              <ListRow as={motion.div}>{description}</ListRow>
              {children && <ListRow as={motion.div}>{children}</ListRow>}
            </motion.div>
          )}
        </AnimatePresence>
      </ListItem>
    </>
  )
}
export default AnimatedItem
