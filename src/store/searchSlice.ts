import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '.'

interface Search {
    value: string
}

const initialState: Search = { value: '' }

export const slice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setup: (state: Search, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export const { setup } = slice.actions

export const useSearch = () => useSelector((state: RootState) => state.search.value)

export default slice.reducer
