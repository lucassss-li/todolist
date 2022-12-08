import { Component } from 'react'
import './App.scss'
import List from './components/list'
import Edit from './components/edit'
export default class App extends Component {
  state = {
    list: [],
    selectedData: null,
    editFlag: false,
  }
  setList = ({ id, content, state } = {}) => {
    let list
    //id content存在为修改操作
    //state为真时修改状态，为假时修改内容
    if (id && (content !== undefined || state)) {
      list = this.state.list.map(item => {
        if (item.id === id) {
          if (state) {
            item.done = !item.done
          } else {
            item.content = content
          }
        }
        return item
      })
    }
    //只有content为新增操作
    else if (content !== undefined) {
      list = [...this.state.list, { id: new Date().getTime(), content, done: false }]
    }
    //当内容不存在时，id存在为删除，id不存在为清空操作
    else {
      list = this.state.list.filter(item => (id === undefined ? !item.done : item.id !== id))
    }
    this.setState({
      list,
      editFlag: false,
    })
  }
  showEdit = ({ flag = true, id } = {}) => {
    this.setState({
      editFlag: flag,
      selectedData: this.state.list.find(item => item.id === id),
    })
  }
  render() {
    return (
      <div className='app'>
        <div className='app-title'>todoList</div>
        <List list={this.state.list} setList={this.setList} showEdit={this.showEdit} />
        {this.state.editFlag && <Edit data={this.state.selectedData} setList={this.setList} showEdit={this.showEdit} />}
      </div>
    )
  }
}
