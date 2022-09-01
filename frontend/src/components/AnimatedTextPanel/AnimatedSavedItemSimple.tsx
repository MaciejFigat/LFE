import React, { Dispatch, SetStateAction } from 'react'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import { motion } from 'framer-motion'
import {
  FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  FragmentTitleRowSmall,
  KeywordB,
  KeywordDivSimple,
} from '../KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import SvgIcon from '../SvgIcon/SvgIcon'
import { ListItemSimple } from './AnimatedList.styled'
import { WrapperMotionDiv } from '../LayoutAnimated/LayoutAnimated.styled'
import { editIdOpenFragment } from '../../features/preferences/preferenceSlice'

interface AnimatedSavedItemSimpleProps {
  id: string
  title: string
  description: string
  source: string
  excerpt: string
  coordinates: string
  updatedAt: string
  keywords: string[]
  keywordValue: { keyword: string; value: boolean }[]
  simpleView?: boolean
  setSimpleView?: Dispatch<SetStateAction<boolean>>
  setOpenedApp?: Dispatch<SetStateAction<null | string>>
  setTitle?: Dispatch<SetStateAction<string>>
  setIdOpen?: Dispatch<SetStateAction<string>>
  canOpenApp?: boolean
  openedApp?: string | null
}

const AnimatedSavedItemSimple: React.FC<AnimatedSavedItemSimpleProps> = ({
  id,
  title,
  description,
  source,
  excerpt,
  updatedAt,
  keywords,
  // setSimpleView,
  // simpleView,
  coordinates,
  setOpenedApp,
  setTitle,
  canOpenApp,
  openedApp,
  setIdOpen,
}) => {
  const dispatch: any = useAppDispatch()
  const idOpenFragment = useAppSelector(
    (state) => state.preference.idOpenFragment
  )

  const openWindowHandler = () => {
    if (
      canOpenApp &&
      setOpenedApp &&
      setTitle &&
      setIdOpen &&
      openedApp === null
    ) {
      // setOpenedApp(id)
      // setTitle(title)
      // setIdOpen(id)
    }
    if (idOpenFragment === '') {
      dispatch(editIdOpenFragment(id))
    }
  }
  return (
    <>
      <WrapperMotionDiv layoutId={id}>
        <ListItemSimple
          as={motion.li}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          <FragmentDivSmall>
            <FragmentTitleRowSmall>
              <FragmentParSmall>
                {' '}
                <FragmentB>Title:</FragmentB> {title}{' '}
              </FragmentParSmall>
              <SendButtonVerySmall
                variant='primaryEmpty'
                onClick={openWindowHandler}
                // onClick={openWindowHandler('6310d693cbf3fcda37beff9c')}
              >
                <SvgIcon variant='edit' toBottom contentAfter='edit' />
              </SendButtonVerySmall>
            </FragmentTitleRowSmall>
            <FragmentParSmall>
              <FragmentB>Source:</FragmentB> {source}
            </FragmentParSmall>
            <FragmentParSmall>
              <FragmentB>Syg:</FragmentB> {coordinates}
            </FragmentParSmall>
            <FragmentParSmall>
              <FragmentB>Excerpt:</FragmentB> {excerpt}
            </FragmentParSmall>
            <FragmentParSmall>
              <FragmentB>Desc:</FragmentB> {description}
            </FragmentParSmall>
            <FragmentParSmall>
              <FragmentB>Updated:</FragmentB> {updatedAt.substring(0, 10)} at{' '}
              {updatedAt.substring(12, 16)}
            </FragmentParSmall>

            {(keywords.length > 1 || keywords[0] !== '') && (
              <KeywordDivSimple>
                <FragmentB>Keywords:&nbsp;</FragmentB>
                {keywords.map((keyword) => (
                  <KeywordB key={Math.random()}>{keyword} &nbsp;</KeywordB>
                ))}
              </KeywordDivSimple>
            )}
          </FragmentDivSmall>
        </ListItemSimple>
      </WrapperMotionDiv>
    </>
  )
}
export default AnimatedSavedItemSimple
