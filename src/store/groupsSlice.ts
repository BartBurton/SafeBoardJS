import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import Group from 'src/types/Group'
import { RootState } from '.'

type FilterGroup = {
    checked: boolean
} & Group

interface Groups {
    value: FilterGroup[]
}

const initialState: Groups = { value: [] }

export const slice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        setup: (state: Groups, action: PayloadAction<Group[]>) => {
            state.value = action.payload.map(e => ({ ...e, checked: true }))
            state.value.push({
                id: state.value.length + 1,
                name: null,
                color: '#b5b6b8',
                checked: true,
            })
        },
        filter: (state: Groups, { payload: { value, checked } }: PayloadAction<{ value: string | null; checked: boolean }>) => {
            const index = state.value.findIndex(e => e.name === value)
            if (index >= 0) {
                state.value[index].checked = checked
            }
        },
    },
})

export const { setup, filter } = slice.actions

export const useGroups = () => useSelector((state: RootState) => state.groups.value)

export default slice.reducer
