import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import dataService from 'src/api/dataService'
import { setupCount, usePaginationSelector } from 'src/store/paginationSlice'
import useConfig from './useConfig'

export default () => {
    const { search, filter } = useConfig()
    const { data: count } = useQuery([search, filter], () => dataService.getCountDevelopers({ search, filter }))

    const dispatch = useDispatch()
    useEffect(() => {
        if (count) {
            dispatch(setupCount(count))
        }
    }, [count, dispatch])

    const { pages, page } = usePaginationSelector()

    return { pages, page }
}
