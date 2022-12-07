import React, { Dispatch, SetStateAction } from 'react'
import {
  FirstColProjectWrapper,
  KeywordColumnContainer,
  KeywordSearchContainer,
} from '../Miscellaneous/KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import { useAppSelector } from '../../app/reduxHooks'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { SendButtonVerySmall } from '../Miscellaneous/Buttons/Buttons.styled'
import {
  ClayButtonWrapper,
  RegularColumn,
  RelativeWrapper,
  WrapperMotionDiv,
} from '../../styles/misc.styled'

import {
  ItemWrapper,
  ListWrapper,
  SimpleCitationItem,
} from '../Miscellaneous/AnimatedTextPanel/AnimatedList.styled'
import {
  FragmentsP,
  FragmentsPExcerpt,
  HorizontalContainer,
} from '../FragmentsColumn/FragmentsColumn.styled'
import SvgIcon from '../Miscellaneous/SvgIcon/SvgIcon'

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

  const openWindowHandler = (id: string) => {
    if (canOpenApp && setOpenedApp && setIdOpen && openedApp === null) {
      setOpenedApp(id)
      setIdOpen(id)
    }
  }

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
                <ClayButtonWrapper paddingProps='0.5rem'>
                  Przeciągnij fragmenty
                </ClayButtonWrapper>
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
                              <ItemWrapper>
                                {/* //? This one has styles ie. shadows and borders */}
                                <SimpleCitationItem>
                                  <HorizontalContainer>
                                    {fragment.source !== '' && (
                                      <FragmentsP>{fragment.source}</FragmentsP>
                                    )}

                                    <>
                                      <RelativeWrapper top='-15px' left='10px'>
                                        {' '}
                                        <SendButtonVerySmall
                                          variant='secondaryEmpty'
                                          onClick={() =>
                                            openWindowHandler(fragment._id)
                                          }
                                        >
                                          <SvgIcon
                                            variant='edit'
                                            contentAfter='edytuj'
                                            // toBottom
                                            toLeft='-20px'
                                            toTop='13px'
                                            width='50px'
                                          />
                                        </SendButtonVerySmall>
                                      </RelativeWrapper>
                                    </>
                                  </HorizontalContainer>
                                  <FragmentsP>
                                    {fragment.coordinates}
                                  </FragmentsP>
                                  <FragmentsPExcerpt>
                                    {fragment.excerpt.substring(0, 150)}
                                  </FragmentsPExcerpt>
                                </SimpleCitationItem>
                              </ItemWrapper>
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
