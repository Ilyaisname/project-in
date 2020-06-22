import React, {Component} from 'react'
import './main.css'

class CreateList extends Component {
  constructor(props) {
    super(props)
    // this.deleteRow = this.deleteRow.bind(this)
    this.state = {
      elements: this.props.data,
      inputValue: null
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('cardList getDerivedStateFromProps', nextProps, prevState)

  //   return prevState
  // }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.inputValue !== nextProps.data.includes(nextState.inputValue)
  }

  // getSnapshotBeforeUpdate() {
  //   console.log('getSnapshotBeforeUpdate')
  // }

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

  inputElement(event) {
    const elements = this.state.elements.concat()
    
    if (event === null || event === ' ' || event === '') {
      alert('Введите значение')
      return
    }
    
    const elm = Boolean(elements.find(elem => elem.name === event))

    if(elm) {
      alert('Такой елемент уже есть в списке')
    } else {
      const newObj = {
        name: event,
        id: new Date().getTime().toString()
      }
  
      elements.push(newObj)
    }
    
    this.setState({elements})
  }

  render() {
    const In = 
      <div>
        <input id="textIn" type="text" onChange={this.handleInput}/> 
        <button className="btn"
         onClick = {this.inputElement.bind(this, this.state.inputValue)}>Добавить</button>
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