import * as React from 'react'
import { Typography, useTheme } from '@mui/material'
import { secondaryFontFamily } from 'src/global/fonts'
import { NavLink } from 'react-router-dom'
import useNavs from 'src/router/useNavs'
import type Children from 'src/types/Children'
import navClasses from './styles.module.css'

const NavText = ({ children }: Children) => (
    <Typography
        variant="body2"
        component="span"
        fontFamily={secondaryFontFamily}
        letterSpacing="0.01em"
    >
        {children}
    </Typography>
)

export default () => {
    const navs = useNavs()
    const { header } = useTheme()

    const styles = React.useCallback((props: { isActive: boolean }): React.CSSProperties => ({
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        padding: '0 20px',
        textDecoration: 'none',
        backgroundColor: props.isActive ? header?.primary : header?.secondary,
        color: props.isActive ? header?.text.primary : header?.text.secondary,
    }), [header])

    const classes = React.useCallback((props: { isActive: boolean }):
        string => (props.isActive ? navClasses.active_item : navClasses.default_item), [])

    return (
        <>
            {navs.map(({ caption, to }) => (
                <NavLink
                    className={classes}
                    style={styles}
                    to={to}
                    key={`nav-${caption}`}
                >
                    <Typography fontWeight="bold" letterSpacing="0.1em">
                        {caption}
                    </Typography>
                </NavLink>
            ))}
        </>
    )
}
