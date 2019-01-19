import React, { Component } from 'react';
import Field from './Field';
import Item from './Item';

class App extends Component {

  constructor (props) {
    console.log('constructor');
    super(props);
    this.state = {
      list: null,
      hideField: false
    };
  }
  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res=> res.json())
      .then((list)=> {
        console.log('data', list.slice(0,1));
        this.setState({ list }, ()=> console.log(this.state.list));
      });

    setTimeout(()=>{
      this.setState({ hideField: true });
    }, 1000);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  render () {

    console.log('render');

    const { list, hideField } = this.state;
    return (
      <div className="App">
        {!hideField && <Field/>}
        <ul>
          {list && list.map((todo, i) =>
            <Item
              key={i}
              data={todo}
            />)}
        </ul>
      </div>
    );
  }
}

export default App;
