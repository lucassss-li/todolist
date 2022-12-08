import { Component } from 'react'
import './index.scss'
import Button from '@/components/button'
import listStore from '@/stores/list.store'
export default class Count extends Component {
  render() {
    return (
      <div className='count'>
        <div>
          <Num label='total' num={listStore.total} />
          <Num label='incomplete' num={listStore.incomplete} />
        </div>
        <div>
          <Button type='error' onClick={() => listStore.setList()}>
            clean
          </Button>
          <Button onClick={() => listStore.showEdit()}>add</Button>
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
