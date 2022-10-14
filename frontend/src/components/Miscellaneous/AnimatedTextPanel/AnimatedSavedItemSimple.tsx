import React from 'react'
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
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import SvgIcon from '../SvgIcon/SvgIcon'
import {
  RelativeRightSvgWrapper,
  WrapperMotionDiv,
} from '../../../styles/misc.styled'
import { ListItemSimple } from './AnimatedList.styled'
import { editIdOpenFragment } from '../../../features/preferences/preferenceSlice'

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
  moreColumns?: boolean
}

const AnimatedSavedItemSimple: React.FC<AnimatedSavedItemSimpleProps> = ({
  id,
  title,
  description,
  source,
  excerpt,
  updatedAt,
  keywords,
  coordinates,
  moreColumns,
}) => {
  const dispatch: any = useAppDispatch()
  const idOpenFragment = useAppSelector(
    (state) => state.preference.idOpenFragment
  )

  const openWindowHandler = () => {
    if (idOpenFragment === '') {
      dispatch(editIdOpenFragment(id))
    }
  }
  return (
    <WrapperMotionDiv layoutId={id}>
      <ListItemSimple
        moreColumns={moreColumns}
        as={motion.li}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
      >
        <FragmentDivSmall moreColumns={moreColumns}>
          <FragmentTitleRowSmall>
            <FragmentParSmall>
              {' '}
              <FragmentB>Tytuł:</FragmentB> {title}{' '}
            </FragmentParSmall>
            <RelativeRightSvgWrapper>
              <SendButtonVerySmall
                variant='primaryEmpty'
                onClick={openWindowHandler}
                // onClick={openWindowHandler('6310d693cbf3fcda37beff9c')}
              >
                <SvgIcon variant='dotCircle' contentAfter='Edytuj' toLeft />
              </SendButtonVerySmall>
            </RelativeRightSvgWrapper>
          </FragmentTitleRowSmall>
          <FragmentParSmall>
            <FragmentB>Źródło:</FragmentB> {source}
          </FragmentParSmall>
          <FragmentParSmall>
            <FragmentB>Syg:</FragmentB> {coordinates}
          </FragmentParSmall>
          <FragmentParSmall>
            <FragmentB>Cytat:</FragmentB> {excerpt}
          </FragmentParSmall>
          <FragmentParSmall>
            <FragmentB>Opis:</FragmentB> {description}
          </FragmentParSmall>
          <FragmentParSmall>
            <FragmentB>Aktualizacja:</FragmentB> {updatedAt.substring(0, 10)} at{' '}
            {updatedAt.substring(12, 16)}
          </FragmentParSmall>

          {(keywords.length > 1 || keywords[0] !== '') && (
            <KeywordDivSimple>
              <FragmentB>Projekty:&nbsp;</FragmentB>
              {keywords.map((keyword) => (
                <KeywordB key={Math.random()}>{keyword} &nbsp;</KeywordB>
              ))}
            </KeywordDivSimple>
          )}
        </FragmentDivSmall>
      </ListItemSimple>
    </WrapperMotionDiv>
  )
}
export default AnimatedSavedItemSimple
