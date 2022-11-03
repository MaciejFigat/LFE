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
// import SvgIcon from '../SvgIcon/SvgIcon'
import {
  DotButton,
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
  const keywordMain = useAppSelector(
    (state) => state.preference.sortingKeywords.keywordMain
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
              {title !== excerpt.substring(0, 22) ? (
                <>{title}</>
              ) : (
                <>{source}</>
              )}
            </FragmentParSmall>
            <RelativeRightSvgWrapper>
              <SendButtonVerySmall
                variant='primaryEmpty'
                onClick={openWindowHandler}
                // onClick={openWindowHandler('6310d693cbf3fcda37beff9c')}
              >
                {/* <SvgIcon
                  variant='dotCircle'
                  contentAfter={moreColumns ? 'Edytuj' : ''}
                  toLeft
                /> */}
                <DotButton left='1px' />
              </SendButtonVerySmall>
            </RelativeRightSvgWrapper>
          </FragmentTitleRowSmall>
          {title !== excerpt.substring(0, 22) && (
            <FragmentParSmall>{source}</FragmentParSmall>
          )}

          <FragmentParSmall>
            <FragmentB> {excerpt}</FragmentB>
          </FragmentParSmall>
          {description.substring(0, 12) !== source.substring(0, 12) && (
            <FragmentParSmall>{description}</FragmentParSmall>
          )}
          <FragmentParSmall>{coordinates}</FragmentParSmall>
          <FragmentParSmall>
            Aktualizacja: {updatedAt.substring(0, 10)} o godzinie{' '}
            {updatedAt.substring(12, 16)}
          </FragmentParSmall>
          {(keywords.length > 1 || keywords[0] !== '') && (
            <KeywordDivSimple>
              {keywords
                .filter((keyword) => keyword !== keywordMain)
                .map((keyword) => (
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
