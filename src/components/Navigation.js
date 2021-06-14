import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'
import { useContext } from 'react'
import AuthContext from '../store/auth-context'
import { useHistory } from 'react-router-dom'


const Navigation = (props) => {

    const history = useHistory()
    const authCTX = useContext(AuthContext)
    const isLoggedIn = authCTX.isLoggedIn

    const logoutHandler = () => {
        authCTX.logout()
        history.replace('/auth')
    }
    return <div className={classes.navHeader}>
        <nav>
            <ul className={classes.linkList}>
                <NavLink activeClassName={classes.active} to="/homepage">
                    <li>Homepage</li>
                </NavLink>
                <NavLink activeClassName={classes.active} to="/aboutme">
                    {isLoggedIn && <li>About me</li>}
                </NavLink>
                <NavLink activeClassName={classes.active} to="/memelist">
                    {isLoggedIn && <li>Search</li>}
                </NavLink>
                <NavLink activeClassName={classes.active} to="/auth">
                    {!isLoggedIn && <li>Authentication</li>}
                </NavLink>
            </ul>
                {isLoggedIn && <span className={classes.logout} onClick={logoutHandler}>Logout</span>}
                {isLoggedIn && <span className={classes.welcomeUser}>Hello, {props.nameOfCurrentUser} ! </span>}
        </nav>
    </div>
}

export default Navigation