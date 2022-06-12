import { useMemo } from 'react'
import { Developers } from 'src/router'

export default () => {
    const navs = useMemo(() => [
        { caption: Developers.caption, to: Developers.to },
    ], [Developers])

    return navs
}
