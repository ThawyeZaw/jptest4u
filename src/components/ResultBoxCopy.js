import React, { useContext, useRef } from 'react'
import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { answersContext } from '../App'
import { Accordion } from '@mantine/core'

export const ResultBox = () => {
	const { answers, setAnswers } = useContext(answersContext)
	const mark = useRef(0)
	/*answers = [
			{
				question: 'きょうの＿バン＿ごはんはおべんとうにします。',
				choices: ['晩', '夜', '朝', '昼'],
				answer: '晩',
			},
			{
				question: '5さい下の＿弟＿は とても かわいいです。',
				choices: ['おとと', 'おととう', 'おっととう', 'おとうと'],
				answer: 'おとうと',
			},
			{
				question: '＿今夜＿友だちとレストランに行きます。',
				choices: ['こんよ', 'こんばん', 'こんや', 'こんよる'],
				answer: 'こんや',
			},
			{
				question: 'にわで いろいろな花 を＿育て＿ています。',
				choices: ['たて', 'かて', 'そだて', 'まいて'],
				answer: 'そだて',
			},
			{
				question: 'ハガキは どこで＿売って＿いますか。',
				choices: ['はって', 'つくって', 'かって', 'うって'],
				answer: 'うって',
			},
			{
				question: 'きょう しごとは 何時に＿おわり＿ますか。',
				choices: ['売まり', '了わり', '止わり', '終わり'],
				answer: 'おわり',
			},
			{
				question: 'えきまえの＿店＿で よく かいものします。',
				choices: ['てん', 'や', 'みせ', 'たな'],
				answer: 'みせ',
			},
			{
				question: 'わたしは＿しろい＿ふくをよくかいます。',
				choices: ['白い', '黄い', '黒い', '青い'],
				answer: '白い',
			},
			{
				question: 'きょうかしょのこの＿部分＿を コピーしてください。',
				choices: ['べぶん', 'ぶべん', 'ぶぶん', 'べべん'],
				answer: 'ぶぶん',
			},
			{
				question: '子どものとき花＿や＿に なりたかったです。',
				choices: ['屋', '家', '店', '山'],
				answer: '屋',
			},
		]*/

	answers.map(answer => {
		answer.answered == answer.correctAnswer && mark.current++
	})

	//components
	const ResultsAnswer = props => {
		return (
			<Accordion multiple iconPosition='right' styles={{ label: { fontSize: 'calc(0.7vw + 0.7rem)' } }}>
				<Accordion.Item
					label={
						<div className='resultsQuestion'>
							<li>{props.value.questions}</li>
						</div>
					}
				>
					<div className='resultsAnswer'>
						<ol>
							{props.value.choices.map((answer, index) => (
								<li key={index}>
									<span>{answer}</span>
								</li>
							))}
						</ol>
					</div>
				</Accordion.Item>
			</Accordion>
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
