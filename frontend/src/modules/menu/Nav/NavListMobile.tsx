import React from 'react'
import {
  AnimatedWrapperMobile,
  MobileNavList,
  HeaderTitleMobile
} from './nav.styled'
import { AnimatePresence, motion } from 'framer-motion'
import SearchDropdown from '../../SearchBar/SearchDropdown'
import NavDropdown from '../Dropdowns/NavDropdown'

interface NavListMobileProps {
  open: boolean
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
}
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      staggerDirection: 1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
      delayChildren: 0.2
    }
  }
}

const NavListMobile: React.FC<NavListMobileProps> = ({
  open,
  scrollDirection
}) => {
  return (
    <AnimatePresence>
      {open && (
        <AnimatedWrapperMobile
          initial={{
            opacity: 0,
            height: 0,
            borderColor: 'var(--background-blur1)'
          }}
          animate={{
            height: '62px',
            opacity: 1,
            borderColor: 'var(--background-blur2)'
          }}
          transition={{ type: 'default' }}
          exit={{
            height: '5px',
            transition: { delay: 0.7, duration: 0.3 }
          }}
        >
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={sideVariants}
          >
            <MobileNavList>
              <motion.div variants={itemVariants}>
                <HeaderTitleMobile>
                  <SearchDropdown scrollDirection={scrollDirection} />
                </HeaderTitleMobile>
              </motion.div>

              <motion.div variants={itemVariants}>
                <NavDropdown scrollDirection={scrollDirection} />
              </motion.div>
            </MobileNavList>{' '}
          </motion.div>
        </AnimatedWrapperMobile>
      )}
    </AnimatePresence>
  )
}
export default NavListMobile
