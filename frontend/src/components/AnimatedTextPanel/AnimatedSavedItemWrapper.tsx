import React, { useState, ReactNode } from 'react'
import { SendButtonSmall } from '../Buttons/Buttons.styled'
import AnimatedSavedItem from './AnimatedSavedItem'
import AnimatedSavedItemSimple from './AnimatedSavedItemSimple'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { editSavedFragment } from '../../features/fragments/fragmentSlice'
interface AnimatedSavedItemWrapperProps {
  title: string
  description: string
  children?: ReactNode
  id: string
  source: string
  excerpt: string
  coordinates: string
  updatedAt: string
  keywords: string[]
}

const AnimatedSavedItemWrapper: React.FC<AnimatedSavedItemWrapperProps> = ({
  title,
  description,
  id,
  source,
  excerpt,
  coordinates,
  updatedAt,
  keywords,
}) => {
  const dispatch: any = useAppDispatch()
  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )
  const { keywordOne, keywordTwo } = sortingKeywords
  const [simpleView, setSimpleView] = useState<boolean>(true)

  const viewHandler = () => {
    setSimpleView(!simpleView)
  }
  const newKeywordListOne = {
    _id: id,
    source: source,
    excerpt: excerpt,
    coordinates: coordinates,
    title: title,
    description: description,
    keywords: [...keywords, keywordOne],
  }
  const newKeywordListTwo = {
    _id: id,
    source: source,
    excerpt: excerpt,
    coordinates: coordinates,
    title: title,
    description: description,
    keywords: [...keywords, keywordTwo],
  }
  const addOneHandler = () => {
    if (!keywords.includes(keywordOne)) {
      dispatch(editSavedFragment(newKeywordListOne))
      console.log('One')
    }
  }
  const addTwoHandler = () => {
    if (!keywords.includes(keywordTwo)) {
      dispatch(editSavedFragment(newKeywordListTwo))
      console.log('Two')
    }
  }

  return (
    <>
      <SendButtonSmall variant='primaryEmpty' onClick={viewHandler}>
        edit
      </SendButtonSmall>
      <SendButtonSmall variant='primaryEmpty' onClick={addOneHandler}>
        add to {keywordOne}
      </SendButtonSmall>
      <SendButtonSmall variant='primaryEmpty' onClick={addTwoHandler}>
        add to {keywordTwo}
      </SendButtonSmall>
      {simpleView ? (
        <AnimatedSavedItemSimple
          title={title}
          description={description}
          source={source}
          excerpt={excerpt}
          coordinates={coordinates}
          updatedAt={updatedAt}
          keywords={keywords}
        />
      ) : (
        <AnimatedSavedItem
          id={id}
          title={title}
          description={description}
          source={source}
          excerpt={excerpt}
          coordinates={coordinates}
          updatedAt={updatedAt}
          keywords={keywords}
        />
      )}
    </>
  )
}
export default AnimatedSavedItemWrapper
