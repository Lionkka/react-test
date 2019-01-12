import React, { Component } from 'react'

class Field extends Component {
  constructor (props) {
    console.log('constructor Field')
    super(props)
    this.state = {
      value: ''
    }
  }

  handleClick = () => {
    console.log('click')
  }
  onChange = ({target: {value}}) => {
    this.setState({value}, function () {
      console.log('cb')
    })
  }

  componentDidMount(){
    console.log('componentDidMount Field')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount Field')
  }

  render () {
    console.log('log render ')
    const  {state, onChange, handleClick} = this
    return (
      <div>
        <input
          value={state.value}
          onChange={onChange}
          type="text"/>
        <button onClick={handleClick}>Click me</button>
      </div>
    )
  }
}

export default Field
