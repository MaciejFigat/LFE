import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import {
  FragmentDivSmall,
  FragmentDivSmallWrapper,
  FragmentParSmall,
  FragmentParSmallExcerpt,
  KeywordB,
  KeywordColumnContainer,
  // KeywordColumnsSubtitle,
  // KeywordColumnsSubtitleWrapper,
  KeywordDivSimple,
  KeywordSearchContainer,
  KeywordSearchLabelH2,
} from '../Miscellaneous/KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import LabelInput from './LabelInput/LabelInput'
import {
  ClayButtonWrapper,
  DotButton,
  OpenDivButtonSecond,
  OpenDivButtonWrapper,
  RegularColumn,
  WrapperMotionDiv,
} from '../../styles/misc.styled'

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: 'none',

  // change background colour if dragging
  background: isDragging
    ? 'var(--background2-main)'
    : 'var(--background1-main)',
  color: isDragging
    ? 'var(--background-secondary4)'
    : 'var(--background4-main)',
  // styles we need to apply on draggables
  ...draggableStyle,
})

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver
    ? 'var(--background-blur1)'
    : 'var(--background1-main)',
  borderRadius: '40px',

  width: 250,
})
interface SecondAndThirdColProjectProps {
  state: any[]
  labelOne?: string
  labelTwo?: string
  setOpenedApp?: Dispatch<SetStateAction<null | string>>
  setIdOpen?: Dispatch<SetStateAction<string>>
  canOpenApp?: boolean
  openedApp?: string | null
}

const SecondAndThirdColProject: React.FC<SecondAndThirdColProjectProps> = ({
  state,
  labelOne,
  labelTwo,
  setOpenedApp,
  canOpenApp,
  openedApp,
  setIdOpen,
}) => {
  const widthNumber = useAppSelector((state) => state.preference.width)

  const [inputOneEditing, setInputOneEditing] = useState(false)
  const [inputTwoEditing, setInputTwoEditing] = useState(false)
  const [labelOneState, setLabelOneState] = useState(labelOne)
  const [labelTwoState, setLabelTwoState] = useState(labelTwo)

  const openWindowHandler = (id: string) => {
    if (canOpenApp && setOpenedApp && setIdOpen && openedApp === null) {
      setOpenedApp(id)

      setIdOpen(id)
    }
  }

  useEffect(() => {
    setLabelOneState(labelOne)
    setLabelTwoState(labelTwo)
  }, [labelOne, labelTwo])

  return (
    <RegularColumn>
      <KeywordColumnContainer>
        {state.slice(1).map((el, ind) => (
          // ? here indexes have '+1' because I separated 1st column and since I used its indexes aswell as those here, +1 is to avoid the conflict in logic of Droppable
          <Droppable key={ind + 1} droppableId={`${ind + 1}`}>
            {(provided, snapshot) => (
              <KeywordSearchContainer
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {ind === 0 && (
                  <KeywordSearchLabelH2>
                    <ClayButtonWrapper paddingProps='0.5rem'>
                      <LabelInput
                        labelNrOne
                        editing={inputOneEditing}
                        setEditing={setInputOneEditing}
                        label={labelOneState ?? 'pro'}
                        labelRedux={labelOne ?? 'pro'}
                        setLabel={setLabelOneState}
                      />
                    </ClayButtonWrapper>
                  </KeywordSearchLabelH2>
                )}
                {ind === 1 && (
                  <KeywordSearchLabelH2>
                    <ClayButtonWrapper paddingProps='0.5rem'>
                      <LabelInput
                        editing={inputTwoEditing}
                        setEditing={setInputTwoEditing}
                        label={labelTwoState ?? 'contra'}
                        labelRedux={labelTwo ?? 'contra'}
                        setLabel={setLabelTwoState}
                      />
                    </ClayButtonWrapper>
                  </KeywordSearchLabelH2>
                )}
                <FragmentDivSmallWrapper width={widthNumber}>
                  {el.map((fragment: any, index: number) => (
                    <Draggable
                      key={fragment.excerpt + fragment.title + index}
                      draggableId={`${fragment.nanoId}${ind}`}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <FragmentDivSmall
                          width={widthNumber}
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
                          <OpenDivButtonWrapper>
                            <OpenDivButtonSecond
                              top='3px'
                              // left='-190px'
                              onClick={() => openWindowHandler(fragment._id)}
                            >
                              {' '}
                              <DotButton left='0px' top='-2px' />
                            </OpenDivButtonSecond>
                          </OpenDivButtonWrapper>
                          {fragment.title !==
                            fragment.excerpt.substring(0, 22) && (
                            <FragmentParSmall>
                              {fragment.title}
                            </FragmentParSmall>
                          )}{' '}
                          <FragmentParSmall>
                            {fragment.description}
                          </FragmentParSmall>
                          <FragmentParSmallExcerpt>
                            {fragment.excerpt}
                          </FragmentParSmallExcerpt>
                          <KeywordDivSimple>
                            {fragment.keywords
                              .filter((keyword: string) => keyword !== '')
                              .map((keyword: string) => (
                                <KeywordB key={keyword}>
                                  {keyword} &nbsp;
                                </KeywordB>
                              ))}
                          </KeywordDivSimple>
                        </FragmentDivSmall>
                      )}
                    </Draggable>
                  ))}
                </FragmentDivSmallWrapper>
                {provided.placeholder}
              </KeywordSearchContainer>
            )}
          </Droppable>
        ))}
      </KeywordColumnContainer>
    </RegularColumn>
  )
}
export default SecondAndThirdColProject
