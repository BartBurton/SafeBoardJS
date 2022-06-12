import React from 'react'
import { Link, Typography, useTheme } from '@mui/material'
import { secondaryFontFamily } from 'src/global/fonts'
import { Home } from 'src/router'
import { Link as RouterLink } from 'react-router-dom'
import classes from './styles.module.css'

export default () => {
    const { header } = useTheme()

    return (
        <Link
            component={RouterLink}
            to={Home.to}
            color={header?.text.primary}
            underline="none"
            className={classes.logo}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 'Bold',
                    fontFamily: secondaryFontFamily,
                    letterSpacing: '0.05em',
                    mr: 6,
                }}
            >
                MyTeam
            </Typography>
        </Link>
    )
}
