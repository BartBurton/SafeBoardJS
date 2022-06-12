import { useRef, useState } from 'react'
import { Box, Typography, Zoom } from '@mui/material'
import { selectRandomWithoutRepeat } from 'src/utils/rand'
import parse from 'html-react-parser'

const _emojis = [
    '&#128008;',
    '&#128011;',
    '&#128012;',
    '&#128013;',
    '&#128014;',
    '&#128025;',
    '&#128027;',
    '&#128031;',
    '&#128036;',
    '&#128039;',
    '&#128043;',
    '&#128046;',
    '&#128047;',
    '&#128049;',
    '&#128051;',
    '&#128053;',
    '&#128054;',
    '&#128056;',
    '&#128059;',
    '&#128060;',
    '&#128062;',
    '&#128050;',
    '&#128034;',
    '&#129409;',
    '&#129412;',
    '&#129408;',
    '&#129428;',
    '&#129426;',
    '&#129424;',
    '&#129422;',
    '&#129420;',
    '&#129417;',
]

const Emojis = () => {
    const emojis = useRef(selectRandomWithoutRepeat(_emojis, 4))
    const [isIn, setIsIn] = useState(true)
    if (isIn) {
        setTimeout(() => {
            setIsIn(false)
        }, 5000)
        emojis.current = selectRandomWithoutRepeat(_emojis, 4)
    } else {
        setTimeout(() => {
            setIsIn(true)
        }, 300)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {emojis.current.map((e, i) => (
                <Zoom key={e} in={isIn} style={{ transitionDelay: isIn ? `${100 * (i + 1)}ms` : '' }}>
                    <Typography fontSize={24}>
                        {parse(e)}
                    </Typography>
                </Zoom>
            ))}
        </Box>
    )
}

const Footer = () => (
    <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <Typography
            variant="caption"
            fontSize={16}
            letterSpacing="0.08em"
            color="text.secondary"
            fontWeight="bold"
            textAlign="center"
        >
            <Emojis />
            Nikitin Maxim Anatolevich
        </Typography>
    </Box>
)

export default Footer
