import { useQuery } from 'react-query'
import dataService from 'src/api/dataService'
import useConfig from './useConfig'

export default () => {
    const { search, filter, sort, pagination } = useConfig()
    const { isLoading, data: developers } = useQuery(
        [search, filter, sort, pagination],
        () => dataService.getDevelopers({
            search, filter, sort, pagination,
        }),
    )

    return { isLoading, developers }
}
