import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'
import MainRouter from '../../Router/MainRouter'

function Layout() {
    return (
        <div className='layout'>
			<Header />
			<main>
				<div className='layContent'>
					<MainRouter />
				</div>
			</main>
			<Footer />

		</div>
    )
}

export default Layout
