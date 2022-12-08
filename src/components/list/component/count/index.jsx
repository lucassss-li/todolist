import { Component } from 'react'
import './index.scss'
import Button from '@/components/button'

export default class Count extends Component {
  render() {
    return (
      <div className='count'>
        <div>
          <Num label='total' num={this.props.list.length} />
          <Num label='incomplete' num={this.props.list.reduce((r, c) => r + +!c.done, 0)} />
        </div>
        <div>
          <Button type='error' onClick={this.props.setList}>
            clean
          </Button>
          <Button onClick={this.props.showEdit}>add</Button>
        </div>
      </div>
    )
  }
}

class Num extends Component {
  render() {
    return (
      <div>
        <span>{this.props.label}</span>:<span className='num'>{this.props.num}</span>
      </div>
    )
  }
}
