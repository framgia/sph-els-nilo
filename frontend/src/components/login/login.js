import React from "react";
import axios from "../api/axios";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const REG_URL = '/users/login';
const Login = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(REG_URL,
                JSON.stringify({ name: user, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                });
            setSuccess(true);

        } catch (err) {
            if (!err.response) {
                setErrMsg('No server Response');
            } else if (err.response?.status === 401) {
                setErrMsg(err.response.data.message);
            } else {
                // setErrMsg('Registration failed');
                console.log(err.response);
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <div className='auth' style={{ color: 'white' }}>
                    <section>
                        <h1>Success!</h1>
                        <p>
                            <a href="dashboard">dashboard</a>
                        </p>
                    </section>
                </div>

            ) : (<div className="auth" style={{ color: 'white' }}>
                <section>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type='text'
                            id='username'
                            ref={userRef}
                            autoComplete='off'
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type='password'
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <p ref={errRef} className={errMsg ? "errmsg" :
                            "offscreen"} aria-live="assertive" style={{ fontSize: '.6rem', borderRadius: '5px', alignSelf: 'center', marginTop: '1rem' }}><FontAwesomeIcon icon={faInfoCircle} /> {errMsg}</p>

                        <button disabled={!user || !password ? true : false}>Sign In</button>
                    </form>
                    <p style={{ fontSize: '13px' }}>
                        <a href="Forgot" style={{ color: 'blue', textDecoration: 'none', fontSize: '13px' }}> Forgot Password</a>
                    </p>
                    <p style={{ fontSize: '17px' }}>
                        Don't have an account?
                        <a href='signup' style={{ color: 'blue', textDecoration: 'none', fontSize: '17px' }}> Sign Up</a>
                    </p>
                </section>
            </div>
            )}
        </>
    )
}

export default Login
