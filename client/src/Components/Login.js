import React from 'react'

const Login = (props) => {

    return (
        <div className="login-container">
            <h1>please login to play</h1>
            <button className="login-button" variant="primary" onClick={props.login}>Login</button>
        </div>

    )
}

export default Login;