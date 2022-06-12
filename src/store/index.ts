import { configureStore } from '@reduxjs/toolkit'
import theme from 'src/store/themeSlice'
import groups from 'src/store/groupsSlice'
import sort from 'src/store/sortSlice'
import search from 'src/store/searchSlice'
import pagination from 'src/store/paginationSlice'

export const store = configureStore({
    reducer: {
        theme,
        groups,
        sort,
        search,
        pagination,
    },
})

export type RootState = ReturnType<typeof store.getState>
