import AppBar from '@mui/material/AppBar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import { Toolbar, useTheme } from '@mui/material'
import Logo from 'src/layouts/app/Header/Logo'
import Navs from 'src/layouts/app/Header/Navs'
import { Box } from '@mui/system'
import ThemeToggler from 'src/layouts/app/Header/ThemeToggler'

interface Props {
    window?: () => Window
    children: React.ReactElement
}
const HideOnScroll = ({ window, children }: Props) => {
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    })

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

export default () => {
    const { header } = useTheme()

    return (
        <HideOnScroll>
            <AppBar elevation={0} sx={{ bgcolor: header?.background }}>
                <Toolbar>
                    <Logo />
                    <Navs />
                    <Box flexGrow={1} />
                    <ThemeToggler />
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}
