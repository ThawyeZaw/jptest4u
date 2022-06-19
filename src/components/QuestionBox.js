import { kanjiQAsN4, questions } from '../data/kanjiQAs'
import { answersContext } from '../App'
import React, { useState, useRef, useContext } from 'react'

export const QuestionBox = () => {
	const [num, setNum] = useState(1)
	const [btnText, setBtnText] = useState('next')
	const [time, setTime] = useState(10)
	const selected = useRef({})
	const { answers, setAnswers } = useContext(answersContext)
	const [progress, setProgress] = useState(5)
	const [isDisabled, setDisabled] = useState(true)

	// functions
	const selectAnswer = (ans, index) => {
			selected.current = { question: questions[num - 1].question, choice: questions[num - 1].choices, answer: questions[num - 1].answer, answered: ans }

			for (let li of document.querySelectorAll('li')) {
				li.textContent.includes(index) && (li.firstChild.style.background = '#999')
				!li.textContent.includes(index) && (li.firstChild.style.background = '#fff')
			}

			setDisabled(true)
		},
		chooseAnswer = () => {
			if (num <= 11) {
				setAnswers([...answers, selected.current])
				setNum(num + 1)
				setProgress(progress + 10)
			}
		}

	//components
	const Question = () => {
			let splitted = questions[num - 1].question.split('＿')
			return (
				<>
					{splitted[0]}
					<span> {splitted[1]} </span>
					{splitted[2]}
				</>
			)
		},
		Choice = props => {
			return (
				<li
					key={props.index}
					onClick={() => {
						selectAnswer(props.choice, props.index)
						setDisabled(false)
					}}
				>
					<b>{props.index}。</b>
					{props.choice}
				</li>
			)
		}

	return (
		<div className='questionBox'>
			<h1 className='num'>{num}。</h1>
			<div className='wrapper'>
				<h2 className='question'>
					<Question />
				</h2>
				<ul className='choices'>
					{questions[num - 1].choices.map((choice, index) => (
						<Choice choice={choice} index={index + 1} key={index} />
					))}
				</ul>
			</div>
			<div className='bottom'>
				<button
					className='btn'
					onClick={() => {
						chooseAnswer(selected)
						setDisabled(true)
					}}
					disabled={isDisabled}
				>
					{btnText}
				</button>
			</div>
			<div className='progressBar'>
				<div className='progress' style={{width: `${progress}%`}}></div>
			</div>
		</div>
	)
}
