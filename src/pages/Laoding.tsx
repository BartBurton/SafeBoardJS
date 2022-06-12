import { Box, CircularProgress } from '@mui/material'

const Loading = () => (
    <Box display="flex" height="100%" alignItems="center" justifyContent="center">
        <CircularProgress color="primary" />
    </Box>
)

export default Loading
