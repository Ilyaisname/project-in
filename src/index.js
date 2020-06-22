import React from 'react'
import {render} from 'react-dom'
import CreateList from './modules/CardList/'
import data from './modules/dataCard'
import Header from './modules/Header/'
import SideBar from './modules/SideBar/'
import './container.css'
import ErrorBoudary from './modules/Error/Error'

function App() {
  return( 
    <div className="container">
      <Header />
      <div className="container__greed">
        <SideBar />
        <ErrorBoudary>
          <CreateList data = {data} />
        </ErrorBoudary>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'));