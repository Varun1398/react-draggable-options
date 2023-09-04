import "./App.css";
import List from "./data";
import { DragHandle } from "./partials/DragHandle";
import { ListContainer, ListItem } from "./styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const list = List.getList();
  return (
    <div className="App">
      <DragDropContext
        onDragEnd={(param) => {
          const scrI = param.source.index;
          const destI = param.destination?.index;
          if (destI) {
            list.splice(destI, 0, list.splice(scrI, 1)[0]);
            List.saveList(list);
          }
        }}
      >
        <ListContainer>
          <h1>The List</h1>
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={"draggable-" + item.id}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 0 0.4rem #666"
                            : "none",
                        }}
                      >
                        <DragHandle {...provided.dragHandleProps} />
                        <span>{item.title}</span>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ListContainer>
      </DragDropContext>
    </div>
  );
}

export default App;
