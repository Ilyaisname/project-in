import React, {Component} from 'react'
import './main.css'

class CreateList extends Component {
  constructor(props) {
    super(props)
    // this.deleteRow = this.deleteRow.bind(this)
    this.state = {
      elements: this.props.data,
      inputValue: ''
    }
  }
  
  deleteRow(index) {
    const elements = this.state.elements.concat()

    elements.splice(index, 1)

    this.setState({ elements })
  }

  handleInput = (event) => {
    this.setState({
      inputValue: event.target.value 
    })
  }

  inputElement = (event) => {
    const elements = this.state.elements.concat()

    const newObj = {
      name: event,
      id: new Date().getTime().toString()
    }

    elements.push(newObj)

    this.setState({elements})
  }

  render() {
    const In = 
      <div>
        <input id="textIn" type="text" onChange={this.handleInput}/> 
        <button className="btn"
         onClick = {this.inputElement.bind(this, this.state.inputValue)}  >Добавить</button>
      </div>
    const data = this.state.elements
    const ListItems = data.map((data, index) => 
      <li key = {data.id} className="list__item">
        {data.name} <button className="btn" 
          onClick = {this.deleteRow.bind(this, index)}>Удалить Элемент</button>
      </li>)
    return (
      <main className="content">
        {In}
        <ul className="list">
          {ListItems}
        </ul>
      </main>
    )
  }

}

export default CreateList