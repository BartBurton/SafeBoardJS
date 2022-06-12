import { Grid, Typography } from '@mui/material'
import { useThemeSelector } from 'src/store/themeSlice'
import parse from 'html-react-parser'

export const Home = () => {
    const theme = useThemeSelector()

    return (
        <Grid container direction="row">
            <Grid item xs={16} textAlign="center" m={16}>
                <Typography variant="h3" color="text.primary">
                    Hello everyone
                    {parse(theme === 'light' ? '&#127774;' : '&#127771;')}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Home
