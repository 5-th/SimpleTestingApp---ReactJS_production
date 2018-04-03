import React, { Component } from 'react'
import tests from '../test_base/tests'
import '../index.css' 
import NextTest from './NextTest'
import Result from './Result'

class App extends Component {
	state = { 
		curTestsList: tests.slice(),
		curTestNum: 0, 
		userAnswers: []
	}

	render() {
			return (
			<div className = "container">
				{ (this.state.curTestNum <= this.state.curTestsList.length - 1) ? <NextTest curTestNum = { this.state.curTestNum } curTestsList = { this.state.curTestsList } nextQuestion = { this.nextQuestion } /> :
				<Result curTestNum = { this.state.curTestNum } curTestsList = { this.state.curTestsList } userAnswers = { this.state.userAnswers } repeat = {this.repeat} /> }
			</div>
		)
	}

	nextQuestion =()=> {
		let onCheckRadio = document.querySelector("input[type='radio']:checked")
		if (onCheckRadio) {
			this.setState({ curTestNum: this.state.curTestNum + 1 })
			this.setState({ userAnswers: [...this.state.userAnswers, onCheckRadio.id] })
			onCheckRadio.checked = false
		} else {
			alert('Выберите свой ответ!')
		}
	}

	repeat =()=> {
		this.setState({ curTestNum: 0, userAnswers: [] })
	}

}

export default App;