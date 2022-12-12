import React, { Component } from 'react'
import { observer } from 'mobx-react'
import './App.scss'
import List from './components/list'
import Edit from './components/edit'

import listStore from './stores/list.store'

@observer
export default class App extends Component {
  render() {
    const { editFlag } = listStore
    return (
      <div className='app'>
        <div className='app-title'>todoList</div>
        <List />
        {editFlag && <Edit />}
      </div>
    )
  }
}
