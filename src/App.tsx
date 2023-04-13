import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import TopupWalletPage from './pages/TopupWalletPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<TopupWalletPage />} />
                    <Route path='/page-2' element={<>page-2</>} />
                    <Route path='/page-3' element={<>page-3</>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App