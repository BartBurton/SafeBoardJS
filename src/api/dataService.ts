import { Config } from 'src/types/Config'
import Developer from 'src/types/Developer'
import Group from 'src/types/Group'
import { filter, nestedSort, search, take } from 'src/utils/dataUtils'
import api from '.'

export type Pagination = { limit: number, page: number }
export type Filter = { name: string | null; checked: boolean }[]

export class dataService {
    static getGroups() {
        return api.request<Group[]>({
            method: 'GET',
            url: './groups.json',
        })
    }
    static getDevelopers(config: Config) {
        return api.request<Developer[]>({
            method: 'GET',
            url: './developers.json',
        }).then(e => take(
            nestedSort(
                filter(
                    search(
                        e,
                        config.search,
                    ),
                    config.filter,
                ),
                config.sort,
            ),
            config.pagination,
        ))
    }
    static getCountDevelopers(config: { search: string; filter: Filter }) {
        return api.request<Developer[]>({
            method: 'GET',
            url: './developers.json',
        }).then(e => filter(search(e, config.search), config.filter).length)
    }
}

export default dataService
