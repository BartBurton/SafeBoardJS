import {
    Checkbox,
    FormControlLabel,
} from '@mui/material'
import { Box } from '@mui/system'
import SquareRoundedIcon from '@mui/icons-material/SquareRounded'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import HorizontalScroller from 'src/global/components/HorizontalScroller'
import { filter, useGroups } from 'src/store/groupsSlice'
import { useDispatch } from 'react-redux'

const Filter = () => {
    const dispatch = useDispatch()
    const variants = useGroups()

    const handleChange = ({ target: { value, checked } }: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filter({ value: value || null, checked }))
    }

    return (
        <HorizontalScroller>
            <Box display="flex">
                {
                    variants.map(({ id, name, color, checked }) => (
                        <Box
                            key={id}
                            sx={{ whiteSpace: 'nowrap' }}
                        >
                            <FormControlLabel
                                control={
                                    (
                                        <Checkbox
                                            value={name || ''}
                                            onChange={handleChange}
                                            checked={checked}
                                            icon={(
                                                <CheckBoxOutlineBlankIcon
                                                    sx={{
                                                        color,
                                                        filter: 'brightness(0.8)',
                                                    }}
                                                />
                                            )}
                                            checkedIcon={(
                                                <SquareRoundedIcon
                                                    sx={{
                                                        color,
                                                        filter: `drop-shadow(0 0 5px ${color}) brightness(0.8)`,
                                                    }}
                                                />
                                            )}
                                        />
                                    )
                                }
                                label={name || 'Other'}
                            />
                        </Box>
                    ))
                }
            </Box>
        </HorizontalScroller>
    )
}

export default Filter
