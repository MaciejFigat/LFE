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
import { useAppSelector } from '../../app/reduxHooks'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import SelectMainKeyword from '../KeywordSearchPanel/DropdownSelect/SelectMainKeyword'

interface FirstColumnProjectProps {
  state: any[]
}
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
  minWidth: '100%',
})
const FirstColumnProject: React.FC<FirstColumnProjectProps> = ({ state }) => {
  const savedFragmentsPage: any = useAppSelector(
    (state) => state.preference.savedFragmentsPage
  )
  const { start, end } = savedFragmentsPage

  // const testHandler = () => {
  //   console.log(state[0])
  // }
  // const removeKeywordHelper = () => {
  //   console.log('object')
  // }
  return (
    <KeywordColumnContainer>
      <Droppable key={'0'} droppableId={`0`}>
        {(provided, snapshot) => (
          <KeywordSearchContainer
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            <SelectMainKeyword />
            {/* <button onClick={removeKeywordHelper}>TEsting remove</button> */}
            {/* <button onClick={testHandler}>TEsting state</button> */}

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
                          <KeywordB key={Math.random()}>
                            {keyword} &nbsp;
                          </KeywordB>
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
    </KeywordColumnContainer>
  )
}
export default FirstColumnProject
