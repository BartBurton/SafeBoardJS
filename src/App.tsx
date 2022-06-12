import { Suspense, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home, Developers, Error } from 'src/router'
import dataService from './api/dataService'
import { setup } from './store/groupsSlice'

const App = () => {
    const dispatch = useDispatch()
    const groups = useQuery('groups', () => dataService.getGroups(), {
        staleTime: 60 * 60 * 1000,
    })

    useEffect(() => {
        if (groups.data) {
            dispatch(setup(groups.data))
        }
    })

    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Navigate to={Home.to} replace />} />
                <Route path={Home.to} element={Home.component} />
                <Route path={Developers.to} element={Developers.component} />
                <Route path={Error.to} element={Error.component} />
            </Routes>
        </Suspense>
    )
}

export default App
