import { lazy, ReactNode } from 'react'

import { Home as HomePage } from 'src/pages/Home'
import ErrorPage from 'src/pages/Error'

const DevelopersPage = lazy(() => import('src/pages/Developers'))

type Route = {
    caption: string
    to: string
    component: ReactNode
}

export const Home: Route = {
    caption: 'Home',
    to: '/home',
    component: <HomePage />,
}

export const Developers: Route = {
    caption: 'Developers',
    to: '/developers',
    component: <DevelopersPage />,
}

export const Error: Route = {
    caption: 'Not found',
    to: '*',
    component: <ErrorPage />,
}
