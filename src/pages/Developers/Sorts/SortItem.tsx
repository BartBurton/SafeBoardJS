import { Box, Button } from '@mui/material'
import { useMemo } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import RemoveIcon from '@mui/icons-material/Remove'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { DraggableProvided } from 'react-beautiful-dnd'
import SortType from 'src/types/SortType'
import { useDispatch } from 'react-redux'
import { toggle } from 'src/store/sortSlice'

type Props = {
    name: string
    sortType: SortType
    draggable: DraggableProvided
}

const SortItem = ({ name, sortType, draggable }: Props) => {
    const dispatch = useDispatch()

    const sortIcon = useMemo(() => {
        switch (sortType) {
        case 'ascending':
            return <ArrowUpwardIcon color="success" />
        case 'descending':
            return <ArrowDownwardIcon color="error" />
        default:
            return <RemoveIcon color="warning" />
        }
    }, [sortType])

    const handleClick = () => {
        dispatch(toggle(name))
    }

    return (
        <Box display="inline-block" py={1} mx={1}>
            <Box display="flex" alignItems="center">
                <Button
                    startIcon={sortIcon}
                    sx={{ textTransform: 'none' }}
                    color="inherit"
                    onClick={handleClick}
                >
                    {name}
                </Button>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    {...draggable.dragHandleProps}
                >
                    <DragIndicatorIcon sx={{ cursor: 'grab' }} />
                </div>
            </Box>
        </Box>
    )
}

export default SortItem
