import React, { Dispatch, SetStateAction } from 'react'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import {
  FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  KeywordB,
  KeywordDivSimple,
} from '../KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import SvgIcon from '../SvgIcon/SvgIcon'
import { ListItemSimple } from './AnimatedList.styled'

interface AnimatedSavedItemSimpleProps {
  title: string
  description: string
  source: string
  excerpt: string
  coordinates: string
  updatedAt: string
  keywords: string[]
  simpleView?: boolean
  setSimpleView?: Dispatch<SetStateAction<boolean>>
}

const AnimatedSavedItemSimple: React.FC<AnimatedSavedItemSimpleProps> = ({
  title,
  description,
  source,
  excerpt,
  updatedAt,
  keywords,
  setSimpleView,
  simpleView,
}) => {
  const setSimpleViewHandler = () => {
    setSimpleView !== undefined && setSimpleView(!simpleView)
  }

  return (
    <>
      <ListItemSimple
        initial={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0 }}
      >
        <FragmentDivSmall>
          <SendButtonVerySmall
            variant='primaryEmpty'
            onClick={setSimpleViewHandler}
          >
            <SvgIcon variant='edit' contentAfter='edit' />
          </SendButtonVerySmall>
          <FragmentParSmall>
            <FragmentB>Title:</FragmentB> {title}
          </FragmentParSmall>
          <FragmentParSmall>
            <FragmentB>Excerpt:</FragmentB> {excerpt}
          </FragmentParSmall>
          <FragmentParSmall>
            <FragmentB>Desc:</FragmentB> {description}
          </FragmentParSmall>
          <FragmentParSmall>
            <FragmentB>Updated:</FragmentB> {updatedAt}
          </FragmentParSmall>
          <FragmentParSmall>
            <FragmentB>Source:</FragmentB> {source}
          </FragmentParSmall>

          <KeywordDivSimple>
            <FragmentB>Keywords:&nbsp;</FragmentB>
            {keywords.map((keyword) => (
              <KeywordB key={Math.random()}>{keyword} &nbsp;</KeywordB>
            ))}
          </KeywordDivSimple>
        </FragmentDivSmall>
      </ListItemSimple>
    </>
  )
}
export default AnimatedSavedItemSimple
