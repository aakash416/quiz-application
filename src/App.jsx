import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Pages/Home'
import Question from './Pages/Question'
import Result from './Pages/Result'
import questions from './data/questions'

const App = () => {
  const [name, setName] = React.useState('')
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [result, setResult] = React.useState(Array(questions.length).fill(null))

  const question = () => {
    return { questions, currentQuestion, setCurrentQuestion, result, setResult }
  }

  const hadleReTakeQuiz = () => {
    setCurrentQuestion(0)
    setResult(Array(questions.length).fill(null))
    setName('')
  }

  const resultData = () => {
    return { result, name, hadleReTakeQuiz }
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home name={name} setName={setName} />} />
        <Route path='/question' element={<Question question={question()} />} />
        <Route path='/result' element={<Result resultData={resultData()} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App