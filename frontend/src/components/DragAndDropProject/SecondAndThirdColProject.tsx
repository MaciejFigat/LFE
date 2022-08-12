import React from 'react'
import {
  FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  KeywordB,
  KeywordColumnContainer,
  KeywordDivSimple,
  KeywordSearchContainer,
} from '../KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import { Droppable, Draggable } from 'react-beautiful-dnd'

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
}

const SecondAndThirdColProject: React.FC<SecondAndThirdColProjectProps> = ({
  state,
  labelOne,
  labelTwo,
}) => {
  return (
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
              {ind === 0 && <h3>{labelOne ?? 'For'}</h3>}
              {ind === 1 && <h3>{labelTwo ?? 'Against'} </h3>}

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
                      <FragmentParSmall>
                        <FragmentB>T:</FragmentB> {fragment.title}
                      </FragmentParSmall>
                      <FragmentParSmall>
                        <FragmentB>E:</FragmentB> {fragment.excerpt}
                      </FragmentParSmall>
                      <FragmentParSmall>
                        <FragmentB>D:</FragmentB> {fragment.description}
                      </FragmentParSmall>
                      <KeywordDivSimple>
                        <FragmentB>Keywords:&nbsp;</FragmentB>
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
  )
}
export default SecondAndThirdColProject
