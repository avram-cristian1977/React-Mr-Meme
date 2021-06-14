import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import Auth from './pages/Auth'
import Navigation from './components/Navigation'
import { useContext} from 'react'
import AuthContext from './store/auth-context'
import Search from './pages/Search';
import MemeList from './pages/MemeList'
import Footer from './components/Footer'
import MemeDetail from './components/MemeDetail'

function App() {

    const authCTX = useContext(AuthContext)
    
   const nameOfUserHandler = (nameOfUser) => {
         console.log({nameOfUser}) 
         localStorage.setItem("nameOfUser", nameOfUser)
    }

    const localStorageNameOfUser = localStorage.getItem("nameOfUser")

    return <>
        <Navigation nameOfCurrentUser={localStorageNameOfUser} />
        <Switch>
            <Route path="/" exact>
                <Redirect to="/homepage" />
            </Route>
            <Route path="/homepage">
                <Homepage />
            </Route>
            {authCTX.isLoggedIn && <Route path="/aboutme">
                <AboutMe />
            </Route>}
            {authCTX.isLoggedIn && <Route path="/memelist" exact>
                <Search />
            </Route>}
            {!authCTX.isLoggedIn && <Route path="/auth">
                <Auth onSaveNameOfUser={nameOfUserHandler}/>
            </Route>}
            <Route path="/memelist" exact >
                <MemeList/>
            </Route>
            <Route path="/memelist/:id" render={(props) => <MemeDetail {...props}/>}>
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
            
        </Switch>
        <Footer/>
    </>
}

export default App;
