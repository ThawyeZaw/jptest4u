import './App.css'
import { kanjiQAsN4 } from './data/kanjiQAs'
import React, { useState, useEffect } from 'react'
import { QuestionBox } from './components/QuestionBox'
import { ResultBox } from './components/ResultBox'

export const answersContext = React.createContext()

function App() {
	var [answers, setAnswers] = useState([])

	useEffect(() => {
		console.log(answers)
	})

	return (
		<>
			<div className='container'>
				<div className='box'>
					<answersContext.Provider value={{ answers, setAnswers }}>
						{(answers.length <= 9) ? <QuestionBox /> : <ResultBox />}
					</answersContext.Provider>
				</div>
			</div>
		</>
	)
}

export default App
