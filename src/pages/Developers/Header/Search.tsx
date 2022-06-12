import {
    FormControl,
    IconButton, InputAdornment, OutlinedInput, Typography, useMediaQuery,
    useTheme,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { FormEvent, useCallback, useState } from 'react'
import { setup, useSearch } from 'src/store/searchSlice'
import { useDispatch } from 'react-redux'

const NAME = 'search'

const Search = () => {
    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.down('sm'))

    const dispatch = useDispatch()
    const [search, setSearch] = useState(useSearch())

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const value = new FormData(e.currentTarget).get(NAME) as string
        dispatch(setup(value))
    }, [dispatch])

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                justifySelf: 'stretch',
                alignItems: 'center',
            }}
        >
            {!match && (
                <Typography component="label" htmlFor={NAME} variant="h6" pr={2}>
                    Search
                </Typography>
            )}
            <FormControl fullWidth variant="outlined">
                <OutlinedInput
                    name={NAME}
                    type="text"
                    value={search}
                    placeholder={match ? 'Search' : ''}
                    onChange={({ target: { value } }) => setSearch(value)}
                    endAdornment={(
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )}
                />
            </FormControl>
        </form>
    )
}

export default Search
