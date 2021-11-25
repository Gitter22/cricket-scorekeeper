import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../store/auth-context'
import './Login.css'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [state, setState] = useState('')

    const authCtx = useContext(AuthContext)
    const toggleFormHandler = () => {
        setIsLogin(isLogin => !isLogin)
    }

    const history = useHistory()

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const loginHandler = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/user/${isLogin ? 'login' : 'register'}`, {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                authCtx.login(data.token)
                history.replace('/')
            })
            .catch(evnt => console.log("Server Error", evnt))
    }
    return (
        <div>
            <form onSubmit={loginHandler}>
                <h3>{isLogin ? 'Login' : 'Signup'}</h3>
                {isLogin ? '' : (<div>
                    <label>Name:
                        <input type="text" name="name" value={state.name} onChange={handleChange} />
                    </label>
                </div>)}

                <div>
                    <label>Email:
                        <input type="email" name="email" value={state.email} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>Password:
                        <input type="password" name="password" value={state.password} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                </div>
                <button type="button" className='toggle' onClick={toggleFormHandler}>
                    {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
            </form>
        </div>
    )
}

export default Login

{/* const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required />
                </div>
                <div className={classes.actions}>
                    <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
}; */}