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
import FilterWrapper from '../FragmentsColumn/FilterWrapper/FilterWrapper'
import FragmentsPagination from '../Pagination/FragmentsPagination'
interface FirstColumnProps {
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
const FirstColumn: React.FC<FirstColumnProps> = ({ state }) => {
  const preference: any = useAppSelector((state) => state.preference)
  const { sortingOption } = preference
  const savedFragmentsPage: any = useAppSelector(
    (state) => state.preference.savedFragmentsPage
  )
  const { start, end } = savedFragmentsPage

  return (
    <KeywordColumnContainer>
      <Droppable key={'0'} droppableId={`0`}>
        {(provided, snapshot) => (
          <KeywordSearchContainer
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            <FilterWrapper />
            {sortingOption === 'all' && <FragmentsPagination />}
            {/* <FragmentsPagination /> */}
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
export default FirstColumn
