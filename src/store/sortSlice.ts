import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import SortName from 'src/types/SortName'
import SortType from 'src/types/SortType'
import { RootState } from '.'

export type SortItem = {
    name: SortName
    sortType: SortType
}

interface Sort {
    value: SortItem[]
}

const initialState: Sort = {
    value: [
        { name: 'Name', sortType: 'none' },
        { name: 'Experience', sortType: 'none' },
        { name: 'Group', sortType: 'none' },
    ],
}

export const slice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setup: (state: Sort, action: PayloadAction<SortItem[]>) => {
            state.value = action.payload
        },
        toggle: (state: Sort, action: PayloadAction<string>) => {
            const index = state.value.findIndex(e => e.name === action.payload)
            if (index >= 0) {
                let sType = state.value[index].sortType
                sType = sType === 'ascending'
                    ? 'descending'
                    : sType === 'descending'
                        ? 'none'
                        : 'ascending'

                state.value[index].sortType = sType
            }
        },
    },
})

export const { setup, toggle } = slice.actions

export const useSort = () => useSelector((state: RootState) => state.sort.value)

export default slice.reducer
