import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '.'

export type ThemeMode = 'light' | 'dark'

const storeItem = 'themeMode'
const initialState = (): ThemeMode => {
    let theme: ThemeMode = 'light'

    if (localStorage.themeMode === null) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = 'dark'
        }
    } else {
        theme = localStorage.getItem(storeItem) as ThemeMode
    }

    return theme
}

export const slice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        toggle: (state: ThemeMode) => {
            state = state === 'light' ? 'dark' : 'light'
            localStorage.themeMode = (state as string)
            return state
        },
    },
})


export const { toggle } = slice.actions
export const useThemeSelector = () => useSelector((state: RootState) => state.theme)
export default slice.reducer
