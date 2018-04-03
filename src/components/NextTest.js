import React, { Component } from 'react'

class NextTest extends Component {
    
    render() { 
        return (
          <div style = {{border: '1px solid #d9d9d9', width: '400px', padding: '5px', marginTop: '10px'}} >
              <div style = {{textAlign: 'left'}} >
                <div style = {{marginBottom: '5px'}}>
                    <b>{ this.props.curTestsList[this.props.curTestNum].question }</b> 
                </div>
                { this.output() }
              </div>
              <div style = {{textAlign: 'right', marginTop: '5px'}} >
                <button onClick = { this.props.nextQuestion } > далее </button>
              </div>
          </div>
        );
    }

    output =()=> {
        return (
            this.props.curTestsList[this.props.curTestNum].answers.map((item, index) => {
                return (
                    <div key = { index }>
                        <input name='rdo' id={ index } type='radio' value='option-01' />
                        <span style={{ verticalAlign: 'top' }}> { item } </span> 
                        <br/>
                    </div>
                )
            })
        )
    }
}

export default NextTest;