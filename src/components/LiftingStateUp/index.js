import React, { Component } from 'react';
import Input from './Input';

class Calculator extends Component {
    state = {
      num1: 0,
      num2: 0
    }

    handleChange = (e, id) => {
      this.setState({
        [`num${id}`]: Number(e.target.value)
      });
    };

    render() {
      console.log(this.state);

      return (
        <div>
          <Input handleChange={(e) => this.handleChange(e, 1)} id='1'/>
        </div>
      );
    }
}

export default Calculator;