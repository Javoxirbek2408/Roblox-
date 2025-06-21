import React from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { NetworkBackground } from '@/Components/Bacground/Bg'

export const Layout = () => {
    return (
        <div style={{ width: " 100 %", margin: '0 auto' }} >
            <NetworkBackground />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
