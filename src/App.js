import React, { Component } from 'react'
import './App.css'
import { Item, ClassItem } from './components/Item'
import Field from './components/Field'

class App extends Component {

  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = {
      list: []
    }
  }
  componentDidMount(){
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res=> res.json())
      .then((list)=> {
        console.log('data', list.slice(0,1))
        this.setState({list}, ()=> console.log(this.state.list))
      })
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  render () {
    console.log('render')
    return (
      <div className="App">
        {/*<Field/>*/}
        <ul>
          {this.state.list.map((todo, i) =>
            <Item
              key={i}
              data={todo}
            />)}
        </ul>
      </div>
    )
  }
}

export default App
