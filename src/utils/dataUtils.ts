import { Filter, Pagination } from 'src/api/dataService'
import { SortItem } from 'src/store/sortSlice'
import Developer from 'src/types/Developer'
import SortName from 'src/types/SortName'


export const search = (developers: Developer[], search: string) => {
    search = search.toLocaleLowerCase()
    if (search) {
        developers = developers.filter(e => {
            const name = e.name.toLocaleLowerCase()
            if (name.includes(search) || search.includes(name)) {
                return true
            }
            const exp = e.experience.toString()
            if (exp.includes(search) || search.includes(exp)) {
                return true
            }
            if (e.group && e.group.name) {
                const _group = e.group.name.toLocaleLowerCase()
                return _group.includes(search) || search.includes(_group)
            }
            return false
        })
    }
    return developers
}


export const filter = (developers: Developer[], filter: Filter) => {
    const excluded = filter.filter(e => !e.checked).map(e => e.name)

    if (excluded.length) {
        developers = developers.filter(({ group }) => {
            if (group && group.name) {
                return !excluded.includes(group.name)
            }
            return !excluded.includes(null)
        })
    }

    return developers
}


export const targetSort = (developers: Developer[], sortName: SortName, compare: <T>(a: T, b: T) => 1 | -1 | 0) => {
    switch (sortName) {
    case 'Name':
        return developers.sort((a, b) => compare(a.name, b.name))
    case 'Experience':
        return developers.sort((a, b) => compare(a.experience, b.experience))
    default:
        return developers.sort((a, b) => compare(a.group?.name || '', b.group?.name || ''))
    }
}
export const ascending = (developers: Developer[], sortName: SortName) => {
    const compare = <T>(a: T, b: T) => (
        a > b
            ? 1
            : a < b
                ? -1 : 0)

    return targetSort(developers, sortName, compare)
}
export const descending = (developers: Developer[], sortName: SortName) => {
    const compare = <T>(a: T, b: T) => (
        a > b
            ? -1
            : a < b
                ? 1 : 0)

    return targetSort(developers, sortName, compare)
}
export const sort = (developers: Developer[], sort: SortItem) => {
    switch (sort.sortType) {
    case 'ascending':
        return ascending(developers, sort.name)
    default:
        return descending(developers, sort.name)
    }
}
const getByTargetFromIndex = (developers: Developer[], sortName: SortName, index: number) => {
    let end: number = index

    switch (sortName) {
    case 'Name':
        const { name } = developers[index]
        for (let i = index; i < developers.length; i++) {
            if (developers[i].name === name) end++
            else break
        }
        break
    case 'Experience':
        const { experience } = developers[index]
        for (let i = index; i < developers.length; i++) {
            if (developers[i].experience === experience) end++
            else break
        }
        break
    default:
        const group = developers[index].group?.name
        for (let i = index; i < developers.length; i++) {
            if (developers[i].group?.name === group) end++
            else break
        }
        break
    }

    return developers.slice(index, end)
}
export const nestedSort = (developers: Developer[], sorts: SortItem[]) => {
    sorts = sorts.filter(e => e.sortType !== 'none')
    if (sorts.length) {
        developers = sort(developers, sorts[0])

        let next = 0
        for (let i = 0; i < sorts.length - 1; i++) {
            const newSorted: Developer[][] = []
            for (let j = 0; j < developers.length; j += next) {
                const beforeSorted = getByTargetFromIndex(developers, sorts[i].name, j)
                newSorted.push(sort(beforeSorted, sorts[i + 1]))
                next = beforeSorted.length
            }
            developers = newSorted.flat()
            next = 0
        }
    }

    return developers
}


export const take = (developers: Developer[], { limit, page }: Pagination) => {
    let start = page * limit
    if (start > developers.length) {
        start = developers.length - limit
    }

    const end = start + limit

    return developers.slice(start, end)
}
