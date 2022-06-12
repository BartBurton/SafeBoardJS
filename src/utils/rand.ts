export const rand = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const selectRandomWithoutRepeat = <T>(source: T[], take: number) => {
    const indexes = [...Array(source.length).keys()]
    const selected: T[] = []

    take = take > source.length ? source.length : take
    while (take--) {
        const index = rand(0, indexes.length - 1)
        selected.push(source[indexes[index]])
        indexes.splice(index, 1)
    }

    return selected
}

export const selectRandomWithRepeat = <T>(source: T[], take: number) => {
    const selected: T[] = []

    take = take > source.length ? source.length : take
    while (take--) {
        const index = rand(0, source.length - 1)
        selected.push(source[index])
    }

    return selected
}
