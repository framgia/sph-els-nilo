import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/api";

const CAT_URL = '/categories/';
const LESS_URL = '/lessons/';
const Quizitem = () => {

    const categoryId = useParams().categoryId;
    const [ans, setAns] = useState([]);
    const [title, setTitle] = useState('');
    const [word, setWord] = useState([]);;
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setAns('');
    }, [])

    useEffect(() => {
        fetchTitle(categoryId);
        fetchWord(categoryId);
    }, [])

    const fetchTitle = (id) => {
        axios
            .get(CAT_URL + id)
            .then((res) => {
                setTitle(res.data.category.title);
            })
    }

    const fetchWord = (id) => {
        axios
            .get(LESS_URL + id)
            .then((res) => {
                setWord(res.data.character);
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (counter + 1 < word.length) {
            setCounter(counter + 1)
        } else {
            const count = ans.filter(w => w === 'true').length;
            alert('Score: ' + count);
        }
    }

    return (
        <>
            <ul className="nav bg-white p-3 w-100 mh-200 mb-5">
                <p className="ms-5 fs-4 position-relative">E-Learning System | Admin</p>
                <div className="nav position-absolute end-0">
                    <li className="nav-item me-40rem">
                        <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/category/dashboard">Choose a Category</a>
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
                <div className="text-white w-75 m-auto">
                    {<p className="fs-2 fw-light">
                        {title}
                    </p>}
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-3 fs-5 bg-white h-25 p-3 my-5 text-black text-center" style={{ width: 'auto', borderRadius: '1rem' }}>
                            <p className="input fw-bold" style={{ fontSize: '4rem' }}>
                                {word.map((pack, index) => {
                                    if (index === counter) {
                                        return pack.character;
                                    }
                                })}
                            </p>
                        </div>
                        <div className="mb-3 fs-5 my-auto" style={{ maxWidth: '300px', textAlign: 'end' }}>
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                {counter + 1} of {word.length}
                            </label>
                            <div className="input-group mb-3"></div>
                            {word.map((pack, index) => {
                                for (let i = 0; i < word.length; i++) {
                                    if (index === counter) {
                                        const arry = [];
                                        let a = JSON.parse(pack.word.choices);
                                        a.map((d) => {
                                            arry.push(<button type="submit" value={d.valid} onClick={(e) => setAns(prevArray => [...prevArray, e.target.value])} className="btn btn-primary m-2" key={arry.length} style={{ width: '300px' }}>{d.choice}</button>)
                                        })

                                        return arry;
                                    }
                                }
                            })}
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Quizitem;
