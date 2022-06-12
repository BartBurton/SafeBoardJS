import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '.'


interface Pagination {
    count: number
    limit: number
    page: number
    pages: number
}

const initialState: Pagination = {
    count: 0,
    limit: 20,
    page: 0,
    pages: 0,
}

export const slice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setupCount: (state: Pagination, action: PayloadAction<number>) => {
            state.count = action.payload
            state.pages = Math.ceil(state.count / state.limit)
            if (state.pages <= state.page) {
                state.page = state.pages - 1
            }
        },
        setPage: (state: Pagination, action: PayloadAction<number>) => {
            state.page = action.payload
            if (state.pages < state.page) {
                state.page = state.pages - 1
            } else if (state.page < 0) {
                state.page = 0
            }
        },
    },
})

export const { setupCount, setPage } = slice.actions

export const usePaginationSelector = () => useSelector((state: RootState) => state.pagination)

export default slice.reducer
