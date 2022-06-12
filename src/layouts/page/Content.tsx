import { Box } from '@mui/material'
import React from 'react'
import Children from 'src/types/Children'

const Content = ({ children }: Children) => (
    <Box p={3} boxShadow={2} mb={3} mx={3} bgcolor="background.paper" borderRadius="0 4px 4px 4px">
        {children}
    </Box>
)

export default Content
