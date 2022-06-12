import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Layout from 'src/layouts/app/Layout'
import App from './App'
import './index.css'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root')!)

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 5 * 60 * 1000,
        },
    },
})

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <App />
                </Layout>
            </QueryClientProvider>
        </BrowserRouter>
    </Provider>,
)
