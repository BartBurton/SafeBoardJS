import React, {
    ReactNode,
} from 'react'
import type Children from 'src/types/Children'
import Content from './Content'
import Header from './Header'

type Props = {
    header: ReactNode
} & Children

const Layout = ({ header, children }: Props) => (
    <>
        <Header>{header}</Header>
        <Content>{children}</Content>
    </>
)

export default Layout
