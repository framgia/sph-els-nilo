const Register = () => {

    return (            
            <section>
                <h1>Register</h1>
                <form>
                    <label htmlFor="username">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        required
                    />
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                    />
                    <label htmlFor="confirm_pwd">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        required
                    />

                    <button>Sign Up</button>
                </form>
                <p>
                    Already registered?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <a href="#">Sign In</a>
                    </span>
                </p>
            </section>
    )
}

export default Register