import './Navbar.css'
import Logo from "../../logo.png"
import { NavLink } from "react-router-dom"

export default function Navbar() {

    return (
        <nav className="nav">
            <div className="nav__container">
                <NavLink to="/">
                    <img src={Logo} className="nav__logo" alt="logo" />
                </NavLink>
                <ul className="nav__list">
                    <li>
                        <NavLink to="/about" end className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}>About</NavLink>
                    </li>
                    <li className="underline--magical">
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dinner-ideas" className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}>Dinner Ideas</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}