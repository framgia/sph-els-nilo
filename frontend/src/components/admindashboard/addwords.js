import { useState, useEffect, useRef } from "react";
import axios from "../api/api";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const WORD_URL = '/words';
const LESSON_URL = '/lessons';

const Addwords = () => {
    const wordRef = useRef();

    const [character, setCharacter] = useState('');
    const [a, setA] = useState('');
    const [ansA, setAnsA] = useState(false);
    const [b, setB] = useState('');
    const [ansB, setAnsB] = useState(false);
    const [c, setC] = useState('');
    const [ansC, setAnsC] = useState(false);
    const [d, setD] = useState('');
    const [ansD, setAnsD] = useState(false);

    const categoryId = (useParams().categoryId);

    useEffect(() => {
        wordRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            toast.success('Word Added!', { toastId: 1 });
            setTimeout(()=>{ window.location.reload(); }, 2000);
        } catch (err) {
            if (!err.response) {
                toast.error('No server Response', { toastId: 1 });
            } else if (err.response?.status === 422) {
                toast.error('Word already exists!', { toastId: 1 });
            } else {
                toast.error('Addition failed!', { toastId: 1 });
            }
        }
    }

    return (
        <>
            <ul className="nav bg-white p-3 w-100 mh-200 mb-5">
                <p className="ms-5 fs-4 position-relative">E-Learning System | Admin</p>
                <div className="nav position-absolute end-0">
                    <li className="nav-item me-40rem">
                        <a className="nav-link active" aria-current="page" href="/admin/dashboard">Home</a>
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
                        <div className="mb-3 fs-5 h-100 w-50 mx-auto">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Word</label>
                            <input
                                type="text"
                                ref={wordRef}
                                className="form-control w-75"
                                id="exampleFormControlInput1"
                                onChange={(e) => setCharacter(e.target.value)}
                                required
                            />
                            <ToastContainer
                                position="bottom-left"
                                style={{ fontSize: '0.8rem' }}
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover

                            />
                        </div>
                        <div className="mb-3 fs-5 mx-auto">
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
                                        value={ansA}
                                        className="form-check-input"
                                        aria-label="Checkbox htmlFor following text input"
                                        onChange={() => { setAnsA(!ansA) }}
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
                                        value={ansB}
                                        aria-label="Checkbox htmlFor following text input"
                                        onChange={() => { setAnsB(!ansB) }}
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
                                        value={ansC}
                                        aria-label="Checkbox htmlFor following text input"
                                        onChange={() => { setAnsC(!ansC) }}
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
                                        value={ansD}
                                        aria-label="Checkbox htmlFor following text input"
                                        onChange={() => { setAnsD(!ansD) }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={!character || !a || !b || !c || !d || !(ansA || ansB || ansC || ansD) ? true : false}
                        className="btn btn-primary position-fixed end-50"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default Addwords;
