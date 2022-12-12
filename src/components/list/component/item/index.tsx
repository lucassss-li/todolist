import React, { Component } from 'react'
import './index.scss'
import Button from '@/components/button'
import listStore from '@/stores/list.store'
import type { Item } from '@/types/list'

export default class ListItem extends Component<Item> {
  render() {
    const { content, done } = this.props
    return (
      <div className={`list-item ${done ? 'done' : ''}`}>
        <span>{content}</span>
        <Operation {...this.props} />
      </div>
    )
  }
}

class Operation extends Component<Item> {
  render() {
    const { id, done } = this.props
    const { handleChangeState, showEdit, handleDelete } = listStore
    return (
      <div className='operation'>
        <Button onClick={() => handleChangeState(id)} type={done ? 'warn' : 'success'}>
          {this.props.done ? 'cancel' : 'done'}
        </Button>
        <Button onClick={() => showEdit(id)}>edit</Button>
        <Button
          type='error'
          onClick={() => {
            handleDelete(id)
          }}
        >
          delete
        </Button>
      </div>
    )
  }
}
