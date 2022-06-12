import { Pagination as MaterialPagination } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setPage } from 'src/store/paginationSlice'
import usePagination from '../hooks/usePagination'

const Pagination = () => {
    const dispatch = useDispatch()
    const { pages, page } = usePagination()

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value - 1))
    }

    return (
        <MaterialPagination
            count={pages}
            page={page + 1}
            onChange={handleChange}
            color="primary"
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        />
    )
}

export default Pagination
