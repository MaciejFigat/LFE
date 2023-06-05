import React, { useEffect, useState } from 'react'
import { ProjectCard } from './ProjectMenu.styled'

interface ProjectCardComponentProps {
  selected: boolean
  handleCardMouseUp: (keyword: string) => void
  keyword: string
}

const ProjectCardComponent: React.FC<ProjectCardComponentProps> = ({
  selected,

  handleCardMouseUp,
  keyword
}) => {
  const [animation, setAnimation] = useState(
    selected ? 'selected' : 'notSelected'
  )

  const cardVariants = {
    selected: {
      scale: 1.15,
      color: 'var(--background1-main)',
      background: 'var(--background4-main)',
      opacity: 1,
      transition: {
        duration: 0.35,
        type: 'spring',
        default: { ease: 'linear' }
      },
      zIndex: 10,
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
    },

    notSelected: () => ({
      scale: 1,
      color: 'var(--background4-main)',
      background: 'var(--background1-main)',
      opacity: 0.8,
      zIndex: 1,
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
      transition: { duration: 0.85, type: 'spring' }
    })
  }

  useEffect(() => {
    const newAnimation = selected ? 'selected' : 'notSelected'
    if (animation !== newAnimation) {
      setAnimation(newAnimation)
    }
  }, [selected, animation])
  return (
    <ProjectCard
      onMouseUp={() => handleCardMouseUp(keyword)}
      animate={animation}
      variants={cardVariants}
      initial='notSelected'
    >
      {keyword.substring(0, 15)}
    </ProjectCard>
  )
}
export default ProjectCardComponent
