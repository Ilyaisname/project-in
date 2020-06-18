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
  
  deleteRow(index) {
    // let arr = this.state.elements.concat()

    // arr.splice((arr.findIndex(item => item.id == i.id)), 1)
    
    // this.setState({
    //   elements: arr
    // })

    const elements = this.state.elements.concat()

    elements.splice(index, 1)

    this.setState({ elements })
  }

  render() {
    const data = this.state.elements
    const ListItems = data.map((data, index) => 
      <li key = {data.id} /* id= {data.id} */className="list__item">
        {data.name} <button className="btn" 
          onClick = {() => this.deleteRow(index /* document.getElementById(data.id) */)}>Удалить Элемент</button>
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