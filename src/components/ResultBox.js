import React, { useContext, useRef, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { answersContext } from '../App'
import { Accordion } from '@mantine/core'

export const ResultBox = () => {
	const { answers, setAnswers } = useContext(answersContext),
		mark = useRef(0),
		answersSample = [
			{
				question: '８２円の＿切手＿を１０まいください。',
				choice: ['きりて', 'ぎって', 'きいて', 'きって'],
				answer: 'きって',
				answered: 'きって',
			},
			{
				question: 'チーズの＿うしろ＿に牛乳があります。',
				choice: ['線ろ', '前ろ', '皆', '後ろ'],
				answer: '後ろ',
				answered: '後ろ',
			},
			{
				question: '5さい下の＿弟＿は とても かわいいです。',
				choice: ['おとと', 'おととう', 'おっととう', 'おとうと'],
				answer: 'おとうと',
				answered: 'おとうと',
			},
			{
				question: '子どものとき花＿や＿に なりたかったです。',
				choice: ['屋', '家', '店', '山'],
				answer: '屋',
				answered: '山',
			},
			{
				question: 'これは＿わたし＿が きのう わすれた かさです。',
				choice: ['広', '私', '利', '業'],
				answer: '私',
				answered: '業',
			},
			{
				question: 'わたしは＿しろい＿ふくをよくかいます。',
				choice: ['白い', '黄い', '黒い', '青い'],
				answer: '白い',
				answered: '青い',
			},
			{
				question: 'ここに＿住所＿を書いてください。',
				choice: ['じゅうしょう', 'じゅうしょ', 'じゅしょう', 'じゅしょ'],
				answer: 'じゅうしょ',
				answered: 'じゅしょ',
			},
			{
				question: '＿近所＿に ゆうめいな かしゅが すんでいます。',
				choice: ['きんじょ', 'きんじょう', 'きんしょ', 'きんしょう'],
				answer: 'きんじょ',
				answered: 'きんしょう',
			},
			{
				question: 'きょうかしょのこの＿部分＿を コピーしてください。',
				choice: ['べぶん', 'ぶべん', 'ぶぶん', 'べべん'],
				answer: 'ぶぶん',
				answered: 'べべん',
			},
			{
				question: 'もうすぐ コンサートが＿はじまり＿ます。',
				choice: ['発まり', '初まり', '始まり', '開まり'],
				answer: '始まり',
				answered: '開まり',
			},
		]

	answers.map(answer => {
		answer.answered === answer.answer && mark.current++
	})

	useEffect(() => {
		document.querySelectorAll('.resultsAnswer').forEach(item => {
			item.querySelectorAll('li').forEach(li => {
				answers.map(answerItem => {
					// if (li.textContent === answerItem.answered) {
					// 	li.classList = 'wrong'
					// 	li.closest('.resultsSingleBox').querySelector('.resultsQuestion').innerHTML += '❌'
					// }
					// if (li.textContent === answerItem.answered && answerItem.answered == answerItem.answer) {
					// 	li.classList = 'correct'
					// 	li.closest('.resultsSingleBox').querySelector('.resultsQuestion').innerHTML += '✔️'
					// } 
					if(li.textContent === answerItem.answered){
						li.classList = 'wrong'
						li.closest('.resultsSingleBox').querySelector('.resultsQuestion li').classList = 'wrong'
					}
					if(li.textContent === answerItem.answered && li.textContent === answerItem.answer){
						li.classList = 'correct'
						li.closest('.resultsSingleBox').querySelector('.resultsQuestion li').classList = 'correct'
					}
					if(li.textContent === answerItem.answer){
						li.classList = 'correct'
					}
				})
			})
		})
	}, [])

	//components
	const ResultsAnswer = props => {
		return (
			<div className='resultsSingleBox'>
				<Accordion multiple iconPosition='right' styles={{ label: { fontSize: 'calc(0.7vw + 0.7rem)' } }}>
					<Accordion.Item
						label={
							<div className='resultsQuestion'>
								<li>{props.value.question}</li>
							</div>
						}
					>
						<div className='resultsAnswer'>
							<ol>
								{props.value.choice.map((answer, index) => (
									<li key={index}>
										<span>{answer}</span>
									</li>
								))}
							</ol>
						</div>
					</Accordion.Item>
				</Accordion>
			</div>
		)
	}

	return (
		<>
			<div className='name'>
				<div>Name</div>
				<div className='percent'>
					<div>
						{mark.current > answers.length ? answers.length : mark.current} / {answers.length}
					</div>
					<div>
						<FaCheck />
					</div>
				</div>
			</div>
			<ol className='resultsWrapper'>
				{answers.map((value, index) => (
					<ResultsAnswer value={value} index={index} key={index} />
				))}
			</ol>
		</>
	)
}

// ? check if answered answers and correct answer are same
// ? Then add icons and marks
