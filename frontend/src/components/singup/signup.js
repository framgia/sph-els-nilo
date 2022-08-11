import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z]).{4,24}/;
const EMAIL_REGEX = /\S+@\S+\.\S+/;

const Signup = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserfocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordfocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchfocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailfocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const validUser = USER_REGEX.test(user);
        setValidName(validUser);
    }, [user]);

    useEffect(() => {
        const validEmail = EMAIL_REGEX.test(email);
        setValidEmail(validEmail);
    }, [email]);

    useEffect(() => {
        const validPass = PASSWORD_REGEX.test(password);
        setValidPassword(validPass);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    useEffect(() => {
        setErrMsg('');
    }, [user, password, matchPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }


    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" :
                "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <span className={validName ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validName || !user ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aira-describedby="uidnote"
                    onFocus={() => setUserfocus(true)}
                    onBlur={() => setUserfocus(false)}
                />

                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters<br />
                </p>
                {/* break for password */}
                <label htmlFor="password">
                    Password:
                    <span className={validPassword ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPassword || !password ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="password"
                    id="username"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-invalid={validPassword ? "false" : "true"}
                    aira-describedby="passwordnote"
                    onFocus={() => setPasswordfocus(true)}
                    onBlur={() => setPasswordfocus(false)}
                />

                <p id="passwordnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    At least 4 character(s) With Upper and Lower case <br />
                </p>
                {/* Break for confirm password */}
                <label htmlFor="confirm_password">
                    Confirm Password:
                    <span className={validMatch && matchPassword ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validMatch || !matchPassword ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="password"
                    id="confrim_password"
                    onChange={(e) => setMatchPassword(e.target.value)}
                    required
                    aria-invalid={matchPassword ? "false" : "true"}
                    aira-describedby="confirm_passwordnote"
                    onFocus={() => setMatchfocus(true)}
                    onBlur={() => setMatchfocus(false)}
                />

                <p id="confirm_passwordnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Password doesn't match <br />
                </p>
                {/* Break for email */}
                <label htmlFor="email">
                    Email:
                    <span className={validEmail ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validEmail || !email ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aira-describedby="email"
                    onFocus={() => setEmailfocus(true)}
                    onBlur={() => setEmailfocus(false)}
                />

                <p id="email" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Invalid Email <br />
                </p>
                <button disabled={!validName || !validPassword || !validMatch || !validEmail ? true : false} style={{ cursor: 'pointer' }}>Sign Up</button>
            </form>
            <p style={{ fontSize: '17px' }}>
                Already have an account?

                <a href="login" style={{ color: 'blue', textDecoration: 'none' }}> Log In</a>
            </p>
        </section>
    )
}

export default Signup
