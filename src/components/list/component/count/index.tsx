import React, { Component } from 'react'
import './index.scss'
import Button from '@/components/button'
import listStore from '@/stores/list.store'

export default class Count extends Component {
  render() {
    const { total, incomplete, handleDelete, showEdit } = listStore
    return (
      <div className='count'>
        <div>
          <Num label='total' num={total} />
          <Num label='incomplete' num={incomplete} />
        </div>
        <div>
          <Button type='error' onClick={() => handleDelete()}>
            clean
          </Button>
          <Button onClick={() => showEdit()}>add</Button>
        </div>
      </div>
    )
  }
}

type NumProps = { label: string; num: number }

class Num extends Component<NumProps> {
  render() {
    const { label, num } = this.props
    return (
      <div>
        <span>{label}</span>:<span className='num'>{num}</span>
      </div>
    )
  }
}
