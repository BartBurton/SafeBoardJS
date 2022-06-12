import { SortItem } from 'src/store/sortSlice'

export type Config = {
    pagination: { limit: number, page: number }
    search: string,
    filter: { name: string | null; checked: boolean }[]
    sort: SortItem[]
}
