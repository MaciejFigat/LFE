import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import {
  FragmentCard,
  FragmentList,
  Holder,
  HolderContent,
  HolderTitle,
  ListItem,
} from './DragAndDrop.styled'
interface DroppableListProps {
  item: any
}

const DroppableList: React.FC<DroppableListProps> = ({ item }) => {
  const { id, items, label, tint } = item
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <Holder className={`holderTint-${tint}`}>
            <HolderTitle>{label}</HolderTitle>
            <HolderContent>
              <FragmentList>
                {items.map((item: any, index: any) => (
                  <ListItem key={item.id}>
                    <Draggable draggableId={item.id} index={index}>
                      {(provided) => (
                        <FragmentCard
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {item.label}
                        </FragmentCard>
                      )}
                    </Draggable>
                  </ListItem>
                ))}
                {provided.placeholder}
              </FragmentList>
            </HolderContent>
          </Holder>
        </div>
      )}
    </Droppable>
  )
}
export default DroppableList
