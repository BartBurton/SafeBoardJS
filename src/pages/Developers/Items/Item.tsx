import { Box, Stack, Typography, Chip } from '@mui/material'
import { useMemo } from 'react'
import Developer from 'src/types/Developer'
import parse from 'html-react-parser'

type Props = {
    developer: Developer
}

const Item = ({ developer }: Props) => {
    const { name, img, experience, group } = developer

    const groupChip = useMemo(() => {
        if (group) {
            return (
                <Chip
                    label={group.name}
                    sx={{
                        bgcolor: `${group.color}ae`,
                    }}
                    size="small"
                />
            )
        }
        return null
    }, [group])

    const experienceLabel = useMemo(() => (
        <Typography
            variant="caption"
            fontWeight="bold"
            sx={{
                textShadow: '1px 1px 3px #282c34',
                color: experience < 3
                    ? '#fad4d4'
                    : experience >= 6
                        ? '#6be975'
                        : '#3ffffd',
            }}
        >
            {`${experience} years`}
        </Typography>
    ), [experience])

    return (
        <Stack
            direction="row"
            px={4}
            py={1}
            display="flex"
            alignItems="center"
            borderBottom={1}
            sx={{
                borderColor: 'grey.400',
            }}
        >
            <Typography variant="h5" px={1}>
                {parse(img)}
            </Typography>
            <Typography variant="body1" px={1} textAlign="left">
                {name}
                <br />
                {experienceLabel}
            </Typography>
            <Box flexGrow={1} />
            <Box alignSelf="center">
                {groupChip}
            </Box>
        </Stack>
    )
}

export default Item
