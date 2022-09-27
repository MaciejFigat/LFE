import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import { NavLink } from 'react-router-dom'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
import { UserInfo } from '../../../interfaces'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  Main,
  ProjectDownList,
  ProjectDropDownWrapper,
} from './NavDropdown.styled'

import ProjectMenuTwo from './ProjectMenuTwo'

interface ProjectDropdownProps {
  options?: any
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

const ProjectDropdown: React.FC<ProjectDropdownProps> = ({
  scrollDirection,
}) => {
  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const keywordsAll = fragments
    ?.map((fragment) => fragment.keywords?.map((keyword: string) => keyword))
    .flat()
    .filter((keywordsFlattened) => keywordsFlattened !== '')
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]
  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]
  const projectName = useAppSelector(
    (state) => state.preference.sortingKeywords.keywordMain
  )
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  useEffect(() => {
    if (scrollDirection === 'down') {
      setIsOpen(false)
    }
  }, [scrollDirection])

  return (
    <>
      <Main>
        <DropDownContainer>
          {Object.keys(userInfo).length > 0 && (
            <ProjectDropDownWrapper>
              <NavLink
                to='/storage'
                className={(navData) =>
                  'nav_link' + (navData.isActive ? ' activated' : '')
                }
              >
                {projectName !== '' ? (
                  projectName.substring(0, 10)
                ) : (
                  <>projekty</>
                )}
              </NavLink>
              <DropDownHeader onClick={toggling}>
                <SvgIcon variant='arrow' noContent />
              </DropDownHeader>
            </ProjectDropDownWrapper>
          )}
          {isOpen && (
            <DropDownListContainer>
              <ProjectDownList>
                {Object.keys(userInfo).length > 0 &&
                uniqueKeywords.length > 0 ? (
                  <ProjectMenuTwo />
                ) : (
                  <b>dodaj nowy projekt</b>
                )}
              </ProjectDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>{' '}
    </>
  )
}
export default ProjectDropdown
