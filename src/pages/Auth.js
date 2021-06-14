import classes from './Auth.module.css'
import { useState, useRef, useContext } from 'react'
import Button from '../components/Button'
import AuthContext from '../store/auth-context'
import { useHistory } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'



const Auth = (props) => {

    const history = useHistory()
    const authCTX = useContext(AuthContext)
    const [isRegisterred, setIsRegistered] = useState(true)
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [formIsValid, setFormIsValid] = useState(false)
    const [formIsProcessed, setFormIsProcessed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const formIsInvalid = !formIsValid && formIsProcessed

    const onSubmitHandler = (ev) => {
        ev.preventDefault();
        setFormIsProcessed(true)

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const projectFireBaseKey = 'AIzaSyBBk4NUAnbmMFLE7lTjEpvbtI_gWb1U-w8'
        const signUPFirebaseApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${projectFireBaseKey}`
        const signINFirebaseApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${projectFireBaseKey}`

        if (enteredEmail && enteredEmail.includes("@") && enteredPassword.length > 5) {
            setFormIsValid(true)
        } else {
            console.log("form is invalid");
            return
        }
        let url;
        if (isRegisterred) {
            // fetch sign in api
            url = signINFirebaseApi
            setIsLoading(true)
        } else {
            // fetch sign up api
            url = signUPFirebaseApi
            setIsLoading(true)
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(result => {
                setIsLoading(false)

                if (result.ok) {
                    return result.json();
                } else {
                    return result.json().then((data) => {
                        let errorMessage = 'Authentication failed!';
                        console.log('Authentication failed!');
                        throw new Error(errorMessage);
                    })
                }
            }).then((data) => {
                authCTX.login(data.idToken)
                history.replace('/homepage')
            }).catch(err => {
                alert(err.message)
            })

        const email = emailInputRef.current.value
        const username = email.split("@")
        const nameOfUserLowerCase = username[0]
        const nameOfUserUC = nameOfUserLowerCase.charAt(0).toUpperCase() + nameOfUserLowerCase.slice(1)
        console.log({ nameOfUserUC })

        props.onSaveNameOfUser(nameOfUserUC)

        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
    }

    const toggleAuthModeHandler = (ev) => {
        ev.preventDefault()
        setIsRegistered(prev => !prev)
    }
    return <div className={classes.wrapper}>
                <form onSubmit={onSubmitHandler} className={classes.formControl}>
                    <label className={classes.label} >Email : </label>
                    <input type="text" ref={emailInputRef} />
                    <label className={classes.label}>Password : </label>
                    <input type="password" ref={passwordInputRef} />
                    {!isLoading && <button >{isRegisterred ? 'Login' : 'Sign up'}</button>}
                    {formIsInvalid && <p>The form is invalid</p>}
                    {isLoading && <LoadingSpinner />}
                    <Button onToggleAuthMode={toggleAuthModeHandler}>
                        {isRegisterred
                            ? "You dont have an account?"
                            : "You already have an account?"}
                    </Button>
                </form>
           </div>
}

export default Auth