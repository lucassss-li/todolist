import { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './app.scss'
import List from './pages/list'
import Edit from './pages/edit'
export default class App extends Component {
  state = {
    list: [],
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
    })
  }
  render() {
    return (
      <div className='app'>
        <div className='app-title'>todoList</div>
        <Router>
          <Switch>
            <Route path='/' exact render={() => <List list={this.state.list} setList={this.setList} />} />
            <Route
              path='/edit/:id?'
              render={routeProps => <Edit {...routeProps} list={this.state.list} setList={this.setList} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
