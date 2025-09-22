import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={css.nav}>
            <NavLink className={({ isActive }) => (
                isActive ? css.navActive : css.navLink
        )} to='/'>Home</NavLink>
            <NavLink className={({isActive}) => (
                isActive ? css.navActive : css.navLink
        )} to='/movies'>Movies</NavLink>
        </nav>
    )
}

export default Navigation;

