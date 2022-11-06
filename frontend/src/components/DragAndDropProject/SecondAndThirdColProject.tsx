import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import {
  // FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  FragmentParSmallExcerpt,
  KeywordB,
  KeywordColumnContainer,
  KeywordColumnsSubtitle,
  KeywordColumnsSubtitleWrapper,
  KeywordDivSimple,
  KeywordSearchContainer,
  KeywordSearchLabelH2,
} from '../Miscellaneous/KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import LabelInput from './LabelInput/LabelInput'
import {
  ClayButtonWrapper,
  DotButton,
  OpenBigDivButton,
  OpenDivButtonWrapper,
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
    ? 'var(--background-tertiary1)'
    : 'var(--background1-main)',

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
    <>
      <KeywordColumnsSubtitleWrapper>
        <KeywordColumnsSubtitle>
          Przeciągnij fragmenty do kategorii<p>Możesz zmienić ich nazwę</p>
        </KeywordColumnsSubtitle>
      </KeywordColumnsSubtitleWrapper>
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
                    <ClayButtonWrapper
                      paddingProps='0.25rem'
                      heightProps='40px'
                    >
                      <LabelInput
                        labelNrOne
                        editing={inputOneEditing}
                        setEditing={setInputOneEditing}
                        label={labelOneState ?? ''}
                        labelRedux={labelOne ?? ''}
                        setLabel={setLabelOneState}
                      />
                    </ClayButtonWrapper>
                  </KeywordSearchLabelH2>
                )}
                {ind === 1 && (
                  <KeywordSearchLabelH2>
                    <ClayButtonWrapper
                      paddingProps='0.25rem'
                      heightProps='40px'
                    >
                      <LabelInput
                        editing={inputTwoEditing}
                        setEditing={setInputTwoEditing}
                        label={labelTwoState ?? ''}
                        labelRedux={labelTwo ?? ''}
                        setLabel={setLabelTwoState}
                      />
                    </ClayButtonWrapper>
                  </KeywordSearchLabelH2>
                )}

                {el.map((fragment: any, index: number) => (
                  <Draggable
                    key={fragment.excerpt + fragment.title + index}
                    draggableId={`${fragment.nanoId}${ind}`}
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
                        <OpenDivButtonWrapper>
                          <OpenBigDivButton
                            onClick={() => openWindowHandler(fragment._id)}
                          >
                            {' '}
                            <DotButton left />
                          </OpenBigDivButton>
                        </OpenDivButtonWrapper>
                        {fragment.title !==
                          fragment.excerpt.substring(0, 22) && (
                          <FragmentParSmall>{fragment.title}</FragmentParSmall>
                        )}
                        <FragmentParSmallExcerpt>
                          {fragment.excerpt}
                        </FragmentParSmallExcerpt>
                        <FragmentParSmall>
                          {fragment.description}
                        </FragmentParSmall>
                        <KeywordDivSimple>
                          {fragment.keywords.map((keyword: string) => (
                            <KeywordB key={keyword}>{keyword} &nbsp;</KeywordB>
                          ))}
                        </KeywordDivSimple>
                      </FragmentDivSmall>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </KeywordSearchContainer>
            )}
          </Droppable>
        ))}
      </KeywordColumnContainer>
    </>
  )
}
export default SecondAndThirdColProject
