import React, { Dispatch, SetStateAction } from 'react'
import {
  FirstColProjectWrapper,
  FragmentDivSmall,
  FragmentParSmall,
  FragmentParSmallExcerpt,
  FragmentTitleRowSmall,
  KeywordB,
  KeywordColumnContainer,
  KeywordDivSimple,
  KeywordSearchContainer,
} from '../Miscellaneous/KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import { useAppSelector } from '../../app/reduxHooks'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { SendButtonVerySmall } from '../Miscellaneous/Buttons/Buttons.styled'
import {
  ClayButtonWrapper,
  DotButton,
  RegularColumn,
  RelativeRightSvgWrapper,
  WrapperMotionDiv,
} from '../../styles/misc.styled'
import {
  Container,
  InfoColumnShortSimple,
  InfoSecSimple,
  SubtitleSimple,
  TextWrapperSimpleShort,
  TopLineSimple,
} from '../HomePageComponents/HomeSection.styled'

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

  // change background colour if dragging
  background: isDragging
    ? 'var(--background2-main)'
    : 'var(--background1-main)',
  color: isDragging
    ? 'var(--background-secondary1)'
    : 'var(--background4-main)',
  // styles we need to apply on draggables
  ...draggableStyle,
})

const getListStyle = (isDraggingOver: any) => ({
  borderRadius: '20px',
  background: isDraggingOver
    ? 'var(--background-blur1)'
    : 'var(--background1-main)',

  // width: 250,
  width: '100%',
  minWidth: '100%',
})

const FirstColumnProject: React.FC<FirstColumnProjectProps> = ({
  state,
  keywordMain,
  setOpenedApp,
  canOpenApp,
  openedApp,
  setIdOpen,
}) => {
  const savedFragmentsPage: any = useAppSelector(
    (state) => state.preference.savedFragmentsPage
  )
  const { start, end } = savedFragmentsPage

  // const widthNumber = useAppSelector((state) => state.preference.width)
  // const width = widthString.substring(0, 2)

  const openWindowHandler = (id: string) => {
    if (canOpenApp && setOpenedApp && setIdOpen && openedApp === null) {
      setOpenedApp(id)
      setIdOpen(id)
    }
  }
  const variant = 'primary'
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
              {/* <FirstColProjectWrapper width={widthNumber}> */}
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
                      {(provided, snapshot) => (
                        <FragmentDivSmall
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
                          <InfoSecSimple
                            variant={variant}

                            // onClick={() => submitHandlerDocNr(0)}
                          >
                            <Container>
                              <InfoColumnShortSimple>
                                <TextWrapperSimpleShort imgStart={true}>
                                  <TopLineSimple variant={variant}>
                                    {fragment.title !==
                                    fragment.excerpt.substring(0, 22) ? (
                                      <>{fragment.title.substring(0, 52)}</>
                                    ) : (
                                      <>{fragment.source}</>
                                    )}
                                  </TopLineSimple>{' '}
                                  <TopLineSimple variant={variant}>
                                    {fragment.coordinates}
                                  </TopLineSimple>{' '}
                                  <TopLineSimple variant={variant}>
                                    <> {fragment.excerpt.substring(0, 222)}</>
                                  </TopLineSimple>
                                  <SubtitleSimple variant={variant}>
                                    {fragment.description.substring(0, 12) !==
                                      fragment.source.substring(0, 12) && (
                                      <FragmentParSmall>
                                        {fragment.description}
                                      </FragmentParSmall>
                                    )}
                                    (...)
                                  </SubtitleSimple>
                                </TextWrapperSimpleShort>
                              </InfoColumnShortSimple>
                            </Container>
                          </InfoSecSimple>
                          <FragmentTitleRowSmall>
                            <FragmentParSmall>
                              {fragment.title !==
                              fragment.excerpt.substring(0, 22) ? (
                                <>{fragment.title.substring(0, 52)}</>
                              ) : (
                                <>{fragment.source}</>
                              )}
                            </FragmentParSmall>
                            <FragmentParSmall>
                              {fragment.coordinates}
                            </FragmentParSmall>
                            <RelativeRightSvgWrapper>
                              <SendButtonVerySmall
                                variant='primaryEmpty'
                                onClick={() => openWindowHandler(fragment._id)}
                              >
                                <DotButton left='0px' />
                              </SendButtonVerySmall>
                            </RelativeRightSvgWrapper>
                          </FragmentTitleRowSmall>
                          {/* {fragment.title !==
                            fragment.excerpt.substring(0, 22) && (
                            <FragmentParSmall>
                              {fragment.source}
                            </FragmentParSmall>
                          )} */}

                          <FragmentParSmallExcerpt>
                            <> {fragment.excerpt.substring(0, 222)}</>
                          </FragmentParSmallExcerpt>
                          {fragment.description.substring(0, 12) !==
                            fragment.source.substring(0, 12) && (
                            <FragmentParSmall>
                              {fragment.description}
                            </FragmentParSmall>
                          )}

                          <FragmentParSmall>
                            Aktualizacja: {fragment.updatedAt.substring(0, 10)}{' '}
                            o godzinie {fragment.updatedAt.substring(11, 16)}
                          </FragmentParSmall>
                          {(fragment.keywords.length > 1 ||
                            fragment.keywords[0] !== '') && (
                            <KeywordDivSimple>
                              {fragment.keywords
                                .filter(
                                  (keyword: string) => keyword !== keywordMain
                                )
                                .map((keyword: string) => (
                                  <KeywordB key={Math.random()}>
                                    {keyword} &nbsp;
                                  </KeywordB>
                                ))}
                            </KeywordDivSimple>
                          )}
                        </FragmentDivSmall>
                      )}
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
