import React, { useCallback, useReducer, useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
// import { editSavedFragment } from '../../features/fragments/fragmentSlice'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { MainWrapper, ColOne } from './DragAndDrop.styled'
import produce from 'immer'
import AnimatedSavedItemSimple from '../AnimatedTextPanel/AnimatedSavedItemSimple'
// import FilterWrapper from '../FragmentsColumn/FilterWrapper/FilterWrapper'
import KeywordSearchSecondary from '../KeywordSearchPanel/KeywordSearch/KeywordSearchSecondary'
// import KeywordSearch from '../KeywordSearchPanel/KeywordSearch/KeywordSearch'

interface DragAndDropSecondaryProps {}

//? DragDropContext is the contex provider
//? Droppable is the drop zone
//? Draggable are the elements dragged
const dragReducer = produce((draft, action) => {
  switch (action.type) {
    case 'MOVE': {
      draft[action.from] =
        draft[action.from] ||
        [
          // { title: 'Hello', _id: 'sdsd1d23312345' },
          // { title: 'Hello', _id: 'sdsd1d23312345' },
        ]
      draft[action.to] =
        draft[action.to] ||
        [
          // { title: 'Hello', _id: 'sdsd1d2ass3312345' },
          // { title: 'Hello', _id: 'sdsddf1d2aa3312345' },
        ]
      const [removed] = draft[action.from].splice(action.fromIndex, 1)
      draft[action.to].splice(action.toIndex, 0, removed)
    }
  }
})
const DragAndDropSecondary: React.FC<DragAndDropSecondaryProps> = () => {
  // const dispatchRedux: any = useAppDispatch()
  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )
  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const [keywordOneArr, setKeywordOneArr] = useState<any[]>([])
  const [keywordTwoArr, setKeywordTwoArr] = useState<any[]>([])
  useEffect(() => {
    if (fragments) {
      setKeywordOneArr(
        fragments.filter(
          (fragmentsSorted) =>
            fragmentsSorted.keywords?.indexOf(sortingKeywords.keywordOne) >= 0
        )
      )
      setKeywordTwoArr(
        fragments.filter(
          (fragmentsSorted) =>
            fragmentsSorted.keywords?.indexOf(sortingKeywords.keywordTwo) >= 0
        )
      )
    }
  }, [fragments, sortingKeywords.keywordOne, sortingKeywords.keywordTwo])

  // const sortingDate = useAppSelector((state) => state.preference.sortingDate)
  // const { sortingYear, sortingMonth, sortingDay } = sortingDate

  // const sortingDateString = `${sortingYear}-${
  //   sortingMonth < 10 ? `0${sortingMonth}` : `${sortingMonth}`
  // }-${sortingDay < 10 ? `0${sortingDay}` : `${sortingDay}`}`

  const data = [...fragments]
  // const data = fragments
  //   const data = fragments.filter(
  //     (fragmentsSorted) =>
  //       // todo here is filtering function comparing the date
  //       // fragmentsSorted.updatedAt.substring(0, 10) === sortingDateString
  //       fragmentsSorted.createdAt.substring(0, 10) === sortingDateString
  //   )
  const data2 = keywordOneArr
  // fragments?.filter(
  //      (fragmentsSorted) =>
  //     fragmentsSorted.keywords?.indexOf(sortingKeywords.keywordOne) >= 0
  // )
  const data3 = keywordTwoArr
  // fragments?.filter(
  //   (fragmentsSorted) =>
  //     fragmentsSorted.keywords?.indexOf(sortingKeywords.keywordTwo) >= 0
  // )

  const [state, dispatch] = useReducer(dragReducer, {
    items: data,
    items2: data2,

    // items2: fragments?.filter(
    //   (fragmentsSorted) =>
    //     fragmentsSorted.keywords?.indexOf(sortingKeywords.keywordOne) >= 0
    // ),
    items3: data3,
    // fragments?.filter(
    //   (fragmentsSorted) =>
    //     fragmentsSorted.keywords?.indexOf(sortingKeywords.keywordTwo) >= 0
    // ),
  })
  // const [state, dispatch] = useReducer(dragReducer, {
  //   items: data,
  //   items2: data2,
  //   items3: data3,
  // })
  //   const [testFragments, setTestFragments] = useState([])
  //   const [testFragmentsTwo, setTestFragmentsTwo] = useState([])
  const onDragEnd = useCallback((result) => {
    if (result.reason === 'DROP') {
      if (!result.destination) {
        return
      }
      dispatch({
        type: 'MOVE',
        from: result.source.droppableId,
        to: result.destination.droppableId,
        fromIndex: result.source.index,
        toIndex: result.destination.index,
      })
    }
  }, [])
  return (
    <MainWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='items' type='FRAGMENT'>
          {/* //todo snapshot will be used for styling during the dragging process */}
          {(provided, snapshot) => {
            return (
              <ColOne ref={provided.innerRef} {...provided.droppableProps}>
                {/* <FilterWrapper /> */}
                <h1>TEST</h1>
                <b>TEST</b>
                <b>TEST</b>
                <b>TEST</b>

                <button onClick={() => console.log(state.items)}>items</button>
                <button
                  onClick={() => console.log(state.items2, keywordOneArr)}
                >
                  items2
                </button>
                <button
                  onClick={() => console.log(state.items3, keywordTwoArr)}
                >
                  items3
                </button>
                {state.items?.map((fragment: any, index: any) => {
                  return (
                    <Draggable
                      // key={Math.random()}
                      key={fragment._id}
                      draggableId={fragment._id}
                      // draggableId={`${Math.random()}`}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {/* <div>
                              <span>{fragment.title}</span>
                            </div> */}
                            <AnimatedSavedItemSimple
                              title={fragment.title}
                              description={fragment.description}
                              source={fragment.source}
                              excerpt={fragment.excerpt}
                              coordinates={fragment.coordinates}
                              updatedAt={fragment.updatedAt}
                              keywords={fragment.keywords}
                            />
                          </div>
                        )
                      }}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ColOne>
            )
          }}
        </Droppable>
        <Droppable droppableId='items2' type='FRAGMENT'>
          {(provided, snapshot) => {
            return (
              <ColOne ref={provided.innerRef} {...provided.droppableProps}>
                {/* <KeywordSearchSecondary
                  keywordOptionOne
                  {...provided.droppableProps}
                /> */}
                {/* <KeywordSearchSecondary keywordOptionOne /> */}
                {state.items2?.map((fragment: any, index: any) => {
                  return (
                    <Draggable
                      key={fragment._id}
                      draggableId={fragment._id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <AnimatedSavedItemSimple
                              title={fragment.title}
                              description={fragment.description}
                              source={fragment.source}
                              excerpt={fragment.excerpt}
                              coordinates={fragment.coordinates}
                              updatedAt={fragment.updatedAt}
                              keywords={fragment.keywords}
                            />
                          </div>
                        )
                      }}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ColOne>
            )
          }}
        </Droppable>
        <Droppable droppableId='items3' type='FRAGMENT'>
          {(provided, snapshot) => {
            return (
              <ColOne ref={provided.innerRef} {...provided.droppableProps}>
                {/* <KeywordSearchSecondary /> */}

                {state.items3?.map((fragment: any, index: any) => {
                  return (
                    <Draggable
                      key={fragment._id}
                      draggableId={fragment._id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <AnimatedSavedItemSimple
                              title={fragment.title}
                              description={fragment.description}
                              source={fragment.source}
                              excerpt={fragment.excerpt}
                              coordinates={fragment.coordinates}
                              updatedAt={fragment.updatedAt}
                              keywords={fragment.keywords}
                            />
                          </div>
                        )
                      }}
                    </Draggable>
                  )
                })}

                {provided.placeholder}
              </ColOne>
            )
          }}
        </Droppable>
      </DragDropContext>
    </MainWrapper>
  )
}
export default DragAndDropSecondary
