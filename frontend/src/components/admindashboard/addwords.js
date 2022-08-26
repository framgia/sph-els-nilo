import { useState, useEffect, useRef } from "react";
import axios from "../api/api";
import { useParams, useNavigate } from "react-router-dom";

const WORD_URL = '/words';
const LESSON_URL = '/lessons';

const Addwords = () => {
    const wordRef = useRef();
    const sucRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [character, setCharacter] = useState('');
    const [a, setA] = useState('');
    const [ansA, setAnsA] = useState(false);
    const [b, setB] = useState('');
    const [ansB, setAnsB] = useState(false);
    const [c, setC] = useState('');
    const [ansC, setAnsC] = useState(false);
    const [d, setD] = useState('');
    const [ansD, setAnsD] = useState(false);
    const [succ, setSucc] = useState('');
    const [err, setErr] = useState('');

    useEffect(() => {
        setSucc('');
        setErr('');
    }, [character])

    const categoryId = (useParams().categoryId);

    useEffect(() => {
        wordRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(character);
        const choices = [{ "valid": ansA, "choice": a }, { "valid": ansB, "choice": b }, { "valid": ansC, "choice": c }, { "valid": ansD, "choice": d }]
        try {
            const res = await axios.post(LESSON_URL,
                { categoryId, character },
                { headers: { 'Content-Type': 'application/json' } }
            );
            const lessonId = res.data.character.id;

            await axios.post(WORD_URL,
                { lessonId, choices },
                { headers: { 'Content-Type': 'application/json' } });
            setSucc('Word Added!');
            sucRef.current.focus();
        } catch (err) {
            if (!err.response) {
                setErr('No server Response');
            } else if (err.response?.status === 422) {
                setErr('Word already exists!');
            } else {
                setErr('Addition failed!');
            }
            errRef.current.focus();
        }
    }

    return (
        <><ul className="nav bg-white p-3 w-100 mh-200 mb-5">
            <p className="ms-5 fs-4 position-relative">E-Learning System | Admin</p>
            <div className="nav position-absolute end-0">
                <li className="nav-item me-40rem">
                    <a className="nav-link active" aria-current="page" href="/admin/dashboard">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link3</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/logout">Logout</a>
                </li>
            </div>
        </ul>
            <form onSubmit={handleSubmit}>
                <div className="text-white w-50 p-3 h-500 m-auto">
                    <p className="fs-2 fw-light">Add word</p>
                    <div className="d-flex justify-content-between">
                        <div className="mb-3 fs-5">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Word</label>
                            <input
                                type="text"
                                ref={wordRef}
                                className="form-control"
                                style={{ width: '20rem' }}
                                id="exampleFormControlInput1"
                                onChange={(e) => setCharacter(e.target.value)}
                                required
                            />
                            <p ref={errRef} className={err ? "errmsg" : "offscreen"} aria-live="assertive" style={{ fontSize: '.8rem', borderRadius: '5px', alignSelf: 'center', marginTop: '1rem', color: 'red' }}>{err}</p>
                            <p ref={sucRef} className={succ ? "sucmsg" : "offscreen"} aria-live="assertive" style={{ fontSize: '.8rem', borderRadius: '5px', alignSelf: 'center', marginTop: '1rem' }}>{succ}</p>
                        </div>
                        <div className="mb-3 fs-5">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Choices</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text">A. </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Text input with checkbox"
                                    onChange={(e) => setA(e.target.value)}
                                    required
                                />
                                <div className="input-group-text">
                                    <input
                                        type="checkbox"
                                        value={true}
                                        className="form-check-input mt-0"
                                        aria-label="Checkbox htmlFor following text input"
                                        onClick={(e) => setAnsA(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">B. </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Text input with checkbox"
                                    onChange={(e) => setB(e.target.value)}
                                    required
                                />
                                <div className="input-group-text">
                                    <input
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                        value="true"
                                        aria-label="Checkbox htmlFor following text input"
                                        onClick={(e) => setAnsB(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">C. </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Text input with checkbox"
                                    onChange={(e) => setC(e.target.value)}
                                    required
                                />
                                <div className="input-group-text">
                                    <input
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                        value="true"
                                        aria-label="Checkbox htmlFor following text input"
                                        onClick={(e) => setAnsC(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">D. </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Text input with checkbox"
                                    onChange={(e) => setD(e.target.value)}
                                    required
                                />
                                <div className="input-group-text">
                                    <input
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                        value="true"
                                        aria-label="Checkbox htmlFor following text input"
                                        onClick={(e) => setAnsD(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary position-fixed end-50">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Addwords;
