import { Box, Typography } from '@mui/material'
import { Error as ErrorPage } from 'src/router'

const Error = () => (
    <Box display="flex" height="100%" alignItems="center" justifyContent="center">
        <Typography variant="h4" color="text.secondary">
            {ErrorPage.caption}
            {' '}
            &#128576;
        </Typography>
    </Box>
)

export default Error
