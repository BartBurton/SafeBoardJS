import { ThemeProvider, createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import { CssBaseline } from '@mui/material'
import { primaryFontFamily } from 'src/global/fonts'
import type Children from 'src/types/Children'
import { useThemeSelector } from 'src/store/themeSlice'
import { useMemo } from 'react'
import '@fontsource/pt-sans-caption'
import '@fontsource/pt-sans'

const typography = {
    fontFamily: primaryFontFamily,
}
const primary = {
    main: '#651fff',
    light: '#834BFF',
    dark: '#4615B2',
}
const header = {
    background: '#651fff',
    text: {
        primary: '#fff',
        secondary: grey[400],
    },
    primary: '#6b5dff',
    secondary: '#00000000',
}

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#d9d8ff',
            paper: '#e4e3ff',
        },
        primary,
    },
    header,
    typography,
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#21252b',
            paper: '#2c313c',
        },
        primary,
    },
    header,
    typography,
})



export default ({ children }: Children) => {
    const appTheme = useThemeSelector()
    const muiTheme = useMemo(() => createTheme(appTheme === 'light'
        ? lightTheme
        : darkTheme), [appTheme])

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline>
                {children}
            </CssBaseline>
        </ThemeProvider>
    )
}
