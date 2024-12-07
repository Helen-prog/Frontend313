import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';


function Layout() {
    return (
        <>
            <Header />
            <main className='content'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;