import {
    useMediaQuery,
    useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useMemo, useRef, useState } from 'react'
import Children from 'src/types/Children'
import classes from './styles.module.css'

const wheelHandler = (e: React.WheelEvent) => {
    e.currentTarget.scrollLeft += e.deltaY
}

const HorizontalScroller = ({ children }: Children) => {
    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.down('sm'))
    const ref = useRef<HTMLDivElement>(null)
    const [canScroll, setCanScroll] = useState(true)
    const [canShowScroll, setCanShowScroll] = useState(!match)

    useEffect(() => {
        if (window) {
            setCanScroll(!!ref.current && ref.current.clientWidth > window.innerWidth)

            window.addEventListener('resize', () => {
                setCanScroll(!!ref.current && ref.current.clientWidth > window.innerWidth)
            })
        }
    }, [])
    const currClasses = useMemo(
        () => (canScroll
            ? canShowScroll ? [classes['scroller-scroll'], classes['scroller-viewer']].join(' ') : classes['scroller-scroll']
            : classes['scroller-flex']),
        [canScroll, canShowScroll],
    )
    const mouseEnter = () => {
        if (!match) {
            if (document && canScroll) {
                document.body.style.overflow = 'hidden'
            }
        }
    }
    const mouseLeave = () => {
        if (!match) {
            if (canShowScroll) {
                setCanShowScroll(false)
            }
            if (document) {
                document.body.style.overflow = ''
            }
        }
    }

    return (
        <div
            className={currClasses}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onWheel={wheelHandler}
        >
            <Box ref={ref} display="inline-block">
                {children}
            </Box>
        </div>
    )
}

export default HorizontalScroller
