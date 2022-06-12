import { Box, Grid, Typography } from '@mui/material'
import Loading from 'src/pages/Laoding'
import useDevelopersList from '../hooks/useDevelopersList'
import List from './List'
import Pagination from './Pagination'

const Items = () => {
    const { isLoading, developers } = useDevelopersList()

    if (isLoading) {
        return (
            <Box display="flex" height="100%" alignItems="center" justifyContent="center" p={5}>
                <Loading />
            </Box>
        )
    }

    if (!developers || !developers.length) {
        return (
            <Box display="flex" height="100%" alignItems="center" justifyContent="center">
                <Typography m={5} variant="h6">
                    Empty
                </Typography>
            </Box>
        )
    }

    return (
        <Grid container direction="row" spacing={3}>
            <Grid item xs={16} justifyContent="center">
                <List developers={developers} />
            </Grid>
            <Grid item xs={16} justifyContent="center">
                <Pagination />
            </Grid>
        </Grid>
    )
}

export default Items
