import { Grid } from '@mui/material'
import Filter from './Filter'
import Search from './Search'

const Header = () => {
    const x = 0
    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={12}>
                <Search />
            </Grid>
            <Grid item xs={12}>
                <Filter />
            </Grid>
        </Grid>
    )
}

export default Header
