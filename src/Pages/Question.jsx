import React from 'react'
import { Link } from 'react-router-dom';

const Question = ({ question }) => {

    const { questions, currentQuestion, setCurrentQuestion, result, setResult } = question;
    const handleAnswer = (answer, id) => {
        setResult(result.map((item, index) => {
            if (index === currentQuestion) {
                return { answer: answer, answered: true, isCorrect: answer === questions[currentQuestion].options[id] ? true : false }
            }
            return item
        }))
    }
    return (
        <div className='container m-5 row'>
            <div className=' d-flex justify-content-between'>
                {
                    result.map((question, index) => {
                        return (
                            <div key={index} >
                                <button className={question?.answered ? "btn btn-success" : "btn btn-secondary"} onClick={() => setCurrentQuestion(index)}>{index + 1}</button>
                            </div>
                        )
                    })
                }

            </div>
            <div className="card ">
                <h5 className="card-header">Q{currentQuestion + 1}.</h5>
                <div className="card-body">
                    <h5 className="card-title">{questions[currentQuestion].question}</h5>
                    {
                        questions[currentQuestion].options.map((option, index) => {
                            return (
                                <div className="form-check" key={option}>
                                    <input value={option} onClick={() => handleAnswer(option, index)} className="form-check-input" type="radio" name={"flexRadioDefault" + questions[currentQuestion].id + index} id={"flexRadioDefault1" + questions[currentQuestion].id + index} />
                                    <label className="form-check-label" htmlFor={"flexRadioDefault1" + questions[currentQuestion].id + index}>
                                        {option}
                                    </label>
                                </div>
                            )
                        })
                    }
                    <div className='d-flex justify-content-between  mt-3'>
                        {currentQuestion > 0 && <button className="btn btn-primary" onClick={() => setCurrentQuestion(currentQuestion - 1)}>Previous</button>}
                        {currentQuestion < questions.length - 1 && <button className="btn btn-primary" onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>}
                        {currentQuestion === questions.length - 1 && <Link className="btn btn-danger" to={"/result"}>Submit Test</Link>}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Question