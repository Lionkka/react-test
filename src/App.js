import React, { Component } from 'react'
import './App.css'
import { Item, ClassItem } from './components/Item'
import Field from './components/Field'

const list = [
  'todo1',
  'todo2',
  'todo3',
  'todo4',
  'todo5',
  'todo6',
]

class App extends Component {
  render () {
    console.log('test')
    return (
      <div className="App">
        <Field/>
        <ul>
          {list.map((todo, i) =>
            <Item
              key={i}
              data={todo}
              index={i}
              newParam="test"
            />)}
        </ul>
      </div>
    )
  }
}

export default App
