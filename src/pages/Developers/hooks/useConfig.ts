import { useGroups } from 'src/store/groupsSlice'
import { usePaginationSelector } from 'src/store/paginationSlice'
import { useSearch } from 'src/store/searchSlice'
import { useSort } from 'src/store/sortSlice'
import { Config } from 'src/types/Config'

const useConfig = (): Config => {
    const { limit, page } = usePaginationSelector()
    const search = useSearch()
    const filter = useGroups()
    const sort = useSort()

    return {
        pagination: { limit, page },
        search,
        filter: filter.map(({ name, checked }) => ({ name, checked })),
        sort,
    }
}

export default useConfig
