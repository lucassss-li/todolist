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
            <ListItem {...item} key={item.id} setList={this.props.setList} />
          ))}
        </div>
        <Count list={this.props.list} setList={this.props.setList} />
      </>
    )
  }
}
