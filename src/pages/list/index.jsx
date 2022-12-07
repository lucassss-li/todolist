import { Component } from 'react'
import './index.scss'
import ListItem from './component/item'
import Count from './component/count'

export default class List extends Component {
  render() {
    return (
      <>
        <div className='list'>
          {this.props.list.map(item => (
            <ListItem {...item} key={item.id} change={this.props.change} delete={this.props.delete} />
          ))}
        </div>
        <Count list={this.props.list} clean={this.props.delete} />
      </>
    )
  }
}
