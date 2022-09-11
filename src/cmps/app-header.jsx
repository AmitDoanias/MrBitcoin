import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../assets/img/bitcoin.jpg'


export const AppHeader = () => {
    return <section className="app-header main-layout full">
        <main className="flex space-between align-center">
            <Link to="/">Mr.bitcoin</Link>
            {/* <Link to="/"><img src={Logo} alt="" /></Link> */}
            <div className="flex">
                <nav className="flex">
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/statitics">Statitics</NavLink>
                </nav>
            </div>
        </main>
    </section>
}