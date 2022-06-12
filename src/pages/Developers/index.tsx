import Layout from 'src/layouts/page/Layout'
import Header from './Header'
import Items from './Items'
import Sorts from './Sorts'


const Developers = () => (
    <Layout header={<Header />}>
        <Sorts />
        <Items />
    </Layout>
)

export default Developers
