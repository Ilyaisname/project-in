import React, {Component} from 'react'
import './main.css'

class CreateList extends Component {
  constructor(props) {
    super(props)
    // this.deleteRow = this.deleteRow.bind(this)
    this.state = {
      elements: this.props.data
    }
  }
  
  deleteRow(i) {

    let arr = this.state.elements

    arr.splice((arr.findIndex(item => item.id == i.id)), 1)
    
    this.setState({
      elements: arr
    })
  }

  render() {
    const data = this.state.elements
    const ListItems = data.map((data) => 
      <li key = {data.id} id= {data.id} className="list__item">
        {data.name} <button className="btn" 
          onClick = {() => this.deleteRow(document.getElementById(data.id))}>Удалить Элемент</button>
      </li>)
    return (
      <main className="content">
        <ul className="list">
          {ListItems}
        </ul>
      </main>
    )
  }

}

export default CreateList