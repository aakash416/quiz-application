import React from 'react'
import { Link } from 'react-router-dom';

const Result = ({ resultData }) => {

    const { result, name, hadleReTakeQuiz } = resultData;
    const score = result.filter(item => item?.isCorrect).length;
    return (
        <div className='container mt-5'>
            <h1>Result : {name}</h1>
            <h2>Thanks for taking result your score is {score / result.length * 100}</h2>
            <Link to={"/"} onClick={() => hadleReTakeQuiz()} className="btn btn-primary">ReTake Test</Link>
        </div>
    )
}

export default Result   