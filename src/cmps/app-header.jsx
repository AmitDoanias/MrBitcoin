import { Link, NavLink } from 'react-router-dom'


export const AppHeader = () => {
    return <section className="app-header main-layout full">
        <main className="flex space-between align-center">
            <Link to="/">Mr.bitcoin</Link>
            <div className="flex">
                <nav className="flex">
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </div>
        </main>
    </section>
}