import React, { Component } from 'react'
import './index.scss'
import Button from '../../../../components/button'
import listStore from '../../../../stores/list.store'
import type { Item } from 'types/list'

export default class ListItem extends Component<Item> {
  render() {
    return (
      <div className={`list-item ${this.props.done ? 'done' : ''}`}>
        <span>{this.props.content}</span>
        <Operation {...this.props} />
      </div>
    )
  }
}

class Operation extends Component<Item> {
  render() {
    return (
      <div className='operation'>
        <Button
          onClick={() => listStore.setList({ id: this.props.id, state: true })}
          type={this.props.done ? 'warn' : 'success'}
        >
          {this.props.done ? 'cancel' : 'done'}
        </Button>
        <Button onClick={() => listStore.showEdit({ id: this.props.id })}>edit</Button>
        <Button type='error' onClick={() => listStore.setList({ id: this.props.id })}>
          delete
        </Button>
      </div>
    )
  }
}
