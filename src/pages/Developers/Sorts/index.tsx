import { Box } from '@mui/material'
import HorizontalScroller from 'src/global/components/HorizontalScroller'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import reorder from 'src/utils/reorder'
import { setup, useSort } from 'src/store/sortSlice'
import { useDispatch } from 'react-redux'
import SortItem from './SortItem'


const Sorts = () => {
    const dispatch = useDispatch()
    const sorts = useSort()

    const dragEndHandler = (e: DropResult) => {
        if (!e.destination) {
            return
        }
        dispatch(setup(reorder(sorts, e.source.index, e.destination.index)))
    }

    return (
        <HorizontalScroller>
            <Box display="flex" px={2} mb={2}>
                <DragDropContext onDragEnd={dragEndHandler}>
                    <Droppable droppableId="sorts" direction="horizontal">
                        {providedDrop => (
                            <div
                                ref={providedDrop.innerRef}
                                {...providedDrop.droppableProps}
                                style={{
                                    display: 'flex',
                                }}
                            >
                                {sorts.map(({ name, sortType }, i) => (
                                    <Draggable draggableId={name} index={i} key={name}>
                                        {providedDrag => (
                                            <div
                                                ref={providedDrag.innerRef}
                                                {...providedDrag.draggableProps}
                                            >
                                                <SortItem name={name} sortType={sortType} draggable={providedDrag} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {providedDrop.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </Box>
        </HorizontalScroller>
    )
}

export default Sorts
