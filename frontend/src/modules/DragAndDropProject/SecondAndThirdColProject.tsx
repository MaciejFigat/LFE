import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import {
  FragmentDivSmallWrapper,
  KeywordColumnContainer,
  KeywordSearchContainer,
  KeywordSearchLabelH2
} from '../KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import LabelInput from './LabelInput/LabelInput'
import {
  ClayButtonWrapperSecondary,
  RegularColumn,
  WrapperMotionDiv
} from '../../styles/misc.styled'
import { ListWrapper } from '../AnimatedTextPanel/AnimatedList.styled'

import FragmentTextItem from '../AnimatedTextPanel/FragmentTextItem'
import { FragmentStored } from '../../interfaces'

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: 'none',
  borderRadius: '20px',
  //* change background colour if dragging
  background: isDragging
    ? 'var(--background-blur1)'
    : 'var(--background1-main)',
  color: isDragging
    ? 'var(--background-secondary4)'
    : 'var(--background4-main)',
  //* styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver
    ? 'var(--background-blur1)'
    : 'var(--background1-main)',
  borderRadius: '40px'
})
interface SecondAndThirdColProjectProps {
  state: FragmentStored[][]
  labelOne?: string
  labelTwo?: string
}

const SecondAndThirdColProject: React.FC<SecondAndThirdColProjectProps> = ({
  state,
  labelOne,
  labelTwo
}) => {
  const widthNumber = useAppSelector(state => state.preference.width)
  const sortingKeywords = useAppSelector(
    state => state.preference.sortingKeywords
  )

  const { keywordMain } = sortingKeywords

  const [inputOneEditing, setInputOneEditing] = useState(false)
  const [inputTwoEditing, setInputTwoEditing] = useState(false)
  const [labelOneState, setLabelOneState] = useState(labelOne)
  const [labelTwoState, setLabelTwoState] = useState(labelTwo)

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
                {ind === 0 && keywordMain !== '' && (
                  <KeywordSearchLabelH2>
                    <ClayButtonWrapperSecondary $paddingProps='0.5rem'>
                      <LabelInput
                        labelNrOne
                        editing={inputOneEditing}
                        setEditing={setInputOneEditing}
                        label={labelOneState ?? 'pro'}
                        labelRedux={labelOne ?? 'pro'}
                      />
                    </ClayButtonWrapperSecondary>
                  </KeywordSearchLabelH2>
                )}
                {ind === 1 && keywordMain !== '' && (
                  <KeywordSearchLabelH2>
                    <ClayButtonWrapperSecondary $paddingProps='0.5rem'>
                      <LabelInput
                        editing={inputTwoEditing}
                        setEditing={setInputTwoEditing}
                        label={labelTwoState ?? 'contra'}
                        labelRedux={labelTwo ?? 'contra'}
                      />
                    </ClayButtonWrapperSecondary>
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
                              title={fragment.title}
                              excerpt={fragment.excerpt}
                              source={fragment.source}
                              coordinates={fragment.coordinates}
                            />
                          )}
                        </ListWrapper>
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
