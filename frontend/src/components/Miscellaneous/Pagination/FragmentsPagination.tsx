import React, { useRef } from 'react'
import { useAnimation } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { fragmentsPageSaved } from '../../../features/preferences/preferenceSlice'
import {
  DragPaginationButton,
  ProjectMenuContainer,
  ProjectPaginationWrapper,
} from '../../menu/Dropdowns/ProjectMenu.styled'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import {
  PaginateActive,
  PaginateBorderWrapper,
  PaginateWrapper,
} from './Paginate.styled'
import SvgIcon from '../SvgIcon/SvgIcon'
import { RelativeWrapper } from '../../../styles/misc.styled'

interface FragmentsPaginationProps {
  narrow?: boolean
}

const FragmentsPagination: React.FC<FragmentsPaginationProps> = ({
  narrow,
}) => {
  const dragRef = useRef(null)
  const xPos = useRef(0)
  const animation = useAnimation()

  const onUpdate = (latest: any) => {
    xPos.current = latest.x
  }

  const dispatch = useAppDispatch()
  const userFragments: any = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const savedFragmentsPage: any = useAppSelector(
    (state) => state.preference.savedFragmentsPage
  )

  const buttonHelper = (i: number) => {
    dispatch(
      fragmentsPageSaved({
        start: i * 10,
        end: (i + 1) * 10 - 1,
        pageNr: i + 1,
      })
    )
  }

  const onLeftClick = () => {
    const newXPosition = xPos.current + 150

    animation.start({
      x: newXPosition > 0 ? 0 : newXPosition,
    })
  }

  const onRightClick = () => {
    const newXPosition = xPos.current - 150

    animation.start({
      x: newXPosition < (-userFragments.length / 10) * 33 ? 0 : newXPosition,
    })
  }
  return (
    <ProjectPaginationWrapper>
      {' '}
      {userFragments.length > 110 ? (
        <>
          <DragPaginationButton
            position='right'
            left='-5%'
            onClick={onLeftClick}
          >
            {' '}
            <RelativeWrapper top='3px' left='0px'>
              <SvgIcon noContent variant='arrowLeft' />
            </RelativeWrapper>
          </DragPaginationButton>{' '}
          <DragPaginationButton
            position='left'
            left='82%'
            onClick={onRightClick}
          >
            <RelativeWrapper top='3px' left='0px'>
              <SvgIcon variant='arrowRight' noContent />
            </RelativeWrapper>
          </DragPaginationButton>
        </>
      ) : null}
      <ProjectMenuContainer
        drag='x'
        dragConstraints={{
          left: (-userFragments.length / 10) * 21,
          right: 0,
        }}
        dragTransition={{ bounceStiffness: 1100, bounceDamping: 130 }}
        transition={{ type: 'linear', stiffness: 100 }}
        dragElastic={0.5}
        initial={false}
        onUpdate={onUpdate}
        animate={animation}
        style={{ x: 0, opacity: 1 }}
        ref={dragRef}
      >
        <PaginateWrapper narrow={narrow}>
          {userFragments.length % 10 > 0
            ? Array.from(
                { length: Math.floor(userFragments.length / 10) + 1 },
                (_, i) => (
                  <PaginateBorderWrapper key={i} narrow={narrow}>
                    <SendButtonVerySmall
                      variant='secondaryEmpty'
                      onClick={() => buttonHelper(i)}
                    >
                      <PaginateActive
                        pageActive={
                          savedFragmentsPage.pageNr === i + 1 ? true : false
                        }
                      >
                        {i + 1}
                      </PaginateActive>
                    </SendButtonVerySmall>
                  </PaginateBorderWrapper>
                )
              )
            : Array.from({ length: userFragments.length / 10 }, (_, i) => (
                <PaginateBorderWrapper key={i} narrow={narrow}>
                  <SendButtonVerySmall
                    variant='secondaryEmpty'
                    onClick={() => buttonHelper(i)}
                  >
                    <PaginateActive
                      pageActive={
                        savedFragmentsPage.pageNr === i + 1 ? true : false
                      }
                    >
                      {i + 1}
                    </PaginateActive>
                  </SendButtonVerySmall>
                </PaginateBorderWrapper>
              ))}
        </PaginateWrapper>
      </ProjectMenuContainer>
    </ProjectPaginationWrapper>
  )
}
export default FragmentsPagination
