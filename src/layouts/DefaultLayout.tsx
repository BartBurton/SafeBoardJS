import { Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import type Children from 'src/types/Children'
import ThemeLayout from './ThemeLayout'

type Props = {
  header: React.ReactNode,
  footer: React.ReactNode
} & Children

const DefaultLayout = ({ header, children, footer }: Props) => (
    <ThemeLayout>
        {header}
        <Toolbar />
        <Box component="main">
            {children}
        </Box>
        <Box component="footer">
            {footer}
        </Box>
    </ThemeLayout>
)

export default DefaultLayout
