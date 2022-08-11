import { useRef, useState, useEffect } from "react";

const Login = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])


    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" :
                "offscreen"} aria-live="assertive">{errMsg}</p>
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
                <button disabled={!user || !password ? true : false}>Sig In</button>
            </form>
            <p style={{ fontSize: '13px' }}>
                <a href="Forgot" style={{ color: 'blue', textDecoration: 'none' }}> Forgot Password</a>
            </p>
            <p style={{ fontSize: '17px' }}>
                Don't have an account?
                <a href='signup' style={{ color: 'blue', textDecoration: 'none' }}> Sign Up</a>
            </p>
        </section>
    )
}

export default Login
