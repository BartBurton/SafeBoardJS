import type Children from 'src/types/Children'
import DefaultLayout from '../DefaultLayout'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: Children) => (
    <DefaultLayout header={<Header />} footer={<Footer />}>
        {children}
    </DefaultLayout>
)

export default Layout
