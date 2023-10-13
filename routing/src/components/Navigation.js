import style from './Navigation.module.css';
import { Link, NavLink } from 'react-router-dom'
export default function Navigation() {
    return (
        <nav className={style.navigation}>
            <ul className={style.listStyle}>
                <li><NavLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'red' })} to="/">Home</NavLink></li>
                <li><NavLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'red' })} to='/about'>About</NavLink></li>
                <li><NavLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'red' })} to='/people'>People</NavLink></li>

            </ul>
        </nav>

    )
}