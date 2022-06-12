import { IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useDispatch } from 'react-redux'
import { toggle, useThemeSelector } from 'src/store/themeSlice'

const ThemeToggler = () => {
    const theme = useThemeSelector()
    const dispatch = useDispatch()

    return (
        <IconButton color="default" onClick={() => dispatch(toggle())}>
            {
                theme === 'light'
                    ? <DarkModeIcon color="action" />
                    : <LightModeIcon color="action" />
            }
        </IconButton>
    )
}

export default ThemeToggler
