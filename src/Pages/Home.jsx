import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = ({ name, setName }) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/question")
    }

    return (
        <div className='container mt-5'>
            <h1>Welcome to Quiz Application</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Enter your Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Start Quiz
                </button>
            </form>

        </div >
    )
}

export default Home