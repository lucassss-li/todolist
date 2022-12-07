import { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './app.scss'
import List from './pages/list'
import Edit from './pages/edit'
export default class App extends Component {
  state = {
    list: [],
  }
  change = (id, content) => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          if (content !== undefined) {
            item.content = content
          } else {
            item.done = !item.done
          }
        }
        return item
      }),
    })
  }
  delete = id => {
    this.setState({
      list: this.state.list.filter(item => (id === undefined ? !item.done : item.id !== id)),
    })
  }
  add = content => {
    this.setState({
      list: [...this.state.list, { id: new Date().getTime(), content, done: false }],
    })
  }
  render() {
    return (
      <div className='app'>
        <div className='app-title'>todoList</div>
        <Router>
          <Switch>
            <Route
              path='/'
              exact
              render={() => <List list={this.state.list} change={this.change} delete={this.delete} />}
            />
            <Route
              path='/edit/:id?'
              render={routeProps => <Edit {...routeProps} list={this.state.list} add={this.add} change={this.change} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
