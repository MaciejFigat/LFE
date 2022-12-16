import React, { Dispatch, SetStateAction } from 'react'
import {
  FirstColProjectWrapper,
  KeywordColumnContainer,
  KeywordSearchContainer,
} from '../Miscellaneous/KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import { useAppSelector } from '../../app/reduxHooks'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import {
  ClayButtonWrapperSecondary,
  RegularColumn,
  RelativeWrapper,
  WrapperMotionDiv,
} from '../../styles/misc.styled'

import { ListWrapper } from '../Miscellaneous/AnimatedTextPanel/AnimatedList.styled'

import FragmentTextItem from '../Miscellaneous/AnimatedTextPanel/FragmentTextItem'
import SvgIcon from '../Miscellaneous/SvgIcon/SvgIcon'
import { HorizontalContainer } from '../FragmentsColumn/FragmentsColumn.styled'

interface FirstColumnProjectProps {
  state: any[]
  keywordMain?: string
  setOpenedApp?: Dispatch<SetStateAction<null | string>>
  setIdOpen?: Dispatch<SetStateAction<string>>
  canOpenApp?: boolean
  openedApp?: string | null
}
const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: 'none',
  borderRadius: '20px',
  // change background colour if dragging
  background: isDragging
    ? 'var(--background-blur1)'
    : 'var(--background1-main)',
  // todo color change is not working
  color: isDragging
    ? 'var(--background-secondary1)'
    : 'var(--background4-main)',
  // styles we need to apply on draggables
  ...draggableStyle,
})

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver
    ? 'var(--background-blur1)'
    : 'var(--background1-main)',
  borderRadius: '20px',
  // width: 250,
  // width: '100%',
  // width: 250,
  // minWidth: '100%',
})

const FirstColumnProject: React.FC<FirstColumnProjectProps> = ({
  state,
  setOpenedApp,
  canOpenApp,
  openedApp,
  setIdOpen,
}) => {
  const savedFragmentsPage: any = useAppSelector(
    (state) => state.preference.savedFragmentsPage
  )
  const { start, end } = savedFragmentsPage

  return (
    <RegularColumn>
      <KeywordColumnContainer>
        <Droppable key={'0'} droppableId={`0`}>
          {(provided, snapshot) => (
            <KeywordSearchContainer
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              <FirstColProjectWrapper>
                <ClayButtonWrapperSecondary paddingProps='1rem'>
                  <HorizontalContainer>
                    Przeciągnij fragmenty do kategorii{' '}
                    <RelativeWrapper top='4px' left='5px'>
                      <SvgIcon variant='arrowRight' noContent />
                    </RelativeWrapper>
                  </HorizontalContainer>
                </ClayButtonWrapperSecondary>
                {state[0]
                  .slice(start, end + 1)
                  .map((fragment: any, index: number) => (
                    <Draggable
                      key={fragment.nanoId}
                      draggableId={fragment.nanoId}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <ListWrapper
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <WrapperMotionDiv layoutId={fragment._id}>
                              {' '}
                            </WrapperMotionDiv>
                            {fragment.excerpt !== '' && (
                              <FragmentTextItem
                                _id={fragment._id}
                                excerpt={fragment.excerpt}
                                source={fragment.source}
                                coordinates={fragment.coordinates}
                                setOpenedApp={setOpenedApp}
                                canOpenApp={canOpenApp}
                                openedApp={openedApp}
                                setIdOpen={setIdOpen}
                              />
                            )}
                          </ListWrapper>
                        )
                      }}
                    </Draggable>
                  ))}
              </FirstColProjectWrapper>

              {provided.placeholder}
            </KeywordSearchContainer>
          )}
        </Droppable>
      </KeywordColumnContainer>
    </RegularColumn>
  )
}
export default FirstColumnProject
