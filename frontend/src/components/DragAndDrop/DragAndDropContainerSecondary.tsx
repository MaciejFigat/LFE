import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { LayoutDroppableWrapper } from './DragAndDrop.styled'
import DroppableList from './DroppableList'
import DroppableListSecondary from './DroppableListSecondary'
interface DragDropContainerSecondaryProps {}
const DATA = [
  {
    id: 'af1',
    label: 'Incoming leads',
    items: [
      { id: 'af2', label: 'Item 1' },
      { id: 'af3', label: 'Item 2' },
      { id: 'af4', label: 'Item 3' },
    ],
    tint: 1,
  },
  {
    id: 'af4',
    label: 'Closing leads',
    items: [
      { id: 'af5', label: 'Item 1' },
      { id: 'af6', label: 'Item 2' },
    ],
    tint: 2,
  },
  {
    id: 'af7',
    label: 'On hold',
    items: [
      { id: 'af8', label: 'Item 1' },
      { id: 'af9', label: 'Item 2' },
    ],
    tint: 3,
  },
]
const DragDropContainerSecondary: React.FC<
  DragDropContainerSecondaryProps
> = () => {
  const [items, setItems] = useState<any>([])
  const [groups, setGroups] = useState<any>({})

  useEffect(() => {
    // Mock an API call.
    buildAndSave(DATA)
  }, [])

  function buildAndSave(items: any) {
    //todo The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
    //? const object1 = {
    //?   a: 'somestring',
    //?  b: 42,
    //?   c: false
    //? };

    //? console.log(Object.keys(object1));
    //? expected output: Array ["a", "b", "c"]

    const groups: any = {}
    for (let i = 0; i < Object.keys(items).length; ++i) {
      const currentGroup = items[i]
      groups[currentGroup.id] = i
    }

    // Set the data.
    setItems(items)

    // Makes the groups searchable via their id.
    setGroups(groups)
  }
  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { destination, draggableId, source, type } = result

        if (!destination) {
          return
        }

        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return
        }

        if ('group' === type) {
          const sourceIndex = source.index
          const targetIndex = destination.index

          const workValue = items.slice()
          const [deletedItem] = workValue.splice(sourceIndex, 1)
          workValue.splice(targetIndex, 0, deletedItem)
          buildAndSave(workValue)

          return
        }

        const sourceDroppableIndex = groups[source.droppableId]
        const targetDroppableIndex = groups[destination.droppableId]
        const sourceItems = items[sourceDroppableIndex].items.slice()
        const targetItems =
          source.droppableId !== destination.droppableId
            ? items[targetDroppableIndex].items.slice()
            : sourceItems

        // Pull the item from the source.
        const [deletedItem] = sourceItems.splice(source.index, 1)
        targetItems.splice(destination.index, 0, deletedItem)

        const workValue = items.slice()
        workValue[sourceDroppableIndex] = {
          ...items[sourceDroppableIndex],
          items: sourceItems,
        }
        workValue[targetDroppableIndex] = {
          ...items[targetDroppableIndex],
          items: targetItems,
        }

        setItems(workValue)
      }}
    >
      <Droppable droppableId='ROOT' type='group'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <LayoutDroppableWrapper>
              {items.map((item: any, index: any) => (
                <Draggable draggableId={item.id} key={item.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <DroppableListSecondary key={item.id} item={item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </LayoutDroppableWrapper>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
export default DragDropContainerSecondary
