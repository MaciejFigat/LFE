import React, { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ListItem,
  ListTitle,
  ListTitleContainer,
  ListRow,
  ListButtonContainer,
} from './AnimatedList.styled'
import AnimatedTitleField from './AnimatedTitleField'
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
  const [titleEditing, setTitleEditing] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  const toggleEditing = () => setTitleEditing(!titleEditing)

  return (
    <>
      <ListItem
        as={motion.li}
        layout
        initial={{ borderRadius: 3, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        animate={{ opacity: 1, scale: 1 }}
        // exit={{ opacity: 0, scale: 0.8 }}
        exit={{ opacity: 0 }}
      >
        <ListTitleContainer as={motion.div} layout>
          <ListTitle as={motion.h2} layout onClick={toggleOpen}>
            <AnimatedTitleField
              title={title}
              isOpen={isOpen}
              titleEditing={titleEditing}
            />

            {/* {!titleEditing && (
              <AnimatedTitleField title={title} isOpen={isOpen} titleEditing={titleEditing}/>
            )}
            {titleEditing && (
              <AnimatedTitleField
                title={title}
                isOpen={isOpen}
                titleEditing={titleEditing}
              />
            )} */}
          </ListTitle>
          <ListButtonContainer>
            <button onClick={toggleEditing}>edit title</button>
            <button>remove</button>
          </ListButtonContainer>
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
