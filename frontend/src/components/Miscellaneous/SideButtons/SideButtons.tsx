import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { ScrollBackground, SideButtonWrapper } from './SideButtons.styled'
import ButtonComponent from './ButtonComponent'
import { fragmentScrolledEdit } from '../../../features/preferences/preferenceSlice'
import { AnimatePresence, MotionValue, useTransform } from 'framer-motion'

interface SideButtonsProps {
  hashIds: string[]
  scrollYProgress: MotionValue<number>
}

const colors = [
  'var(--background-secondary1)',
  'var(--background-secondary2)',
  'var(--background-secondary3)',
  'var(--info1)',
  'var(--info2)',
  'var(--warning1)'
]

const SideButtons: React.FC<SideButtonsProps> = ({
  hashIds,
  scrollYProgress
}) => {
  const location = useLocation()
  const dispatch: any = useAppDispatch()

  const fragmentScrolled = useAppSelector(
    state => state.preference.fragmentScrolled
  )
  useEffect(() => {
    const hashIndex = location.hash.substring(6)
    dispatch(fragmentScrolledEdit(hashIndex))
  }, [dispatch, location.hash])

  const colorChangeHelper = (index: number) => {
    dispatch(fragmentScrolledEdit(index))
  }
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <AnimatePresence>
      <SideButtonWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ScrollBackground
          style={{
            height
          }}
        />

        {hashIds.length > 0 &&
          hashIds.map((id: any, index: number) => (
            <HashLink smooth to={`/search/result#${id}`} key={index}>
              <ButtonComponent
                color={colors[index]}
                isSelected={colors[fragmentScrolled] === colors[index]}
                key={index}
                onMouseOver={() => colorChangeHelper(index)}
              />
            </HashLink>
          ))}
      </SideButtonWrapper>{' '}
    </AnimatePresence>
  )
}

export default SideButtons
