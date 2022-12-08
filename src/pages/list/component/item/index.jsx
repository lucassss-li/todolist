import { Component } from 'react'
import './index.scss'
import Button from '@/components/button'
import { Link } from 'react-router-dom'

export default class ListItem extends Component {
  render() {
    return (
      <div className={`list-item ${this.props.done ? 'done' : ''}`}>
        <span>{this.props.content}</span>
        <Operation {...this.props} />
      </div>
    )
  }
}

class Operation extends Component {
  render() {
    return (
      <div className='operation'>
        <Button
          onClick={() => this.props.setList({ id: this.props.id, state: true })}
          type={this.props.done ? 'warn' : 'success'}
        >
          {this.props.done ? 'cancel' : 'done'}
        </Button>
        <Button>
          <Link to={`/edit/${this.props.id}`}>edit</Link>
        </Button>
        <Button type='error' onClick={() => this.props.setList({ id: this.props.id })}>
          delete
        </Button>
      </div>
    )
  }
}
