import React, { useState, ReactNode } from 'react'
import AnimatedSavedItem from './AnimatedSavedItem'
import AnimatedSavedItemSimple from './AnimatedSavedItemSimple'

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
  const [simpleView, setSimpleView] = useState<boolean>(true)

  return (
    <>
      {simpleView ? (
        <AnimatedSavedItemSimple
          title={title}
          description={description}
          source={source}
          excerpt={excerpt}
          coordinates={coordinates}
          updatedAt={updatedAt}
          keywords={keywords}
          simpleView={simpleView}
          setSimpleView={setSimpleView}
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
          simpleView={simpleView}
          setSimpleView={setSimpleView}
        />
      )}
    </>
  )
}
export default AnimatedSavedItemWrapper
