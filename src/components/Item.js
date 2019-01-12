import React from 'react'

export const Item = (blabla) => {
  console.log(blabla)
  return <li>{blabla.data}</li>
}

export class ClassItem extends React.Component {
  constructor (props){
    super(props)
    this.state = {

    }

  }
  render () {
    return <li>{this.props.data}</li>
  }
}

