import React, { Component } from 'react'
import './index.scss'
import Button from '@/components/button'

export default class Edit extends Component {
  state = {
    id: null,
    content: '',
  }
  handleChange = event => {
    this.setState({ content: event.target.value })
  }
  handleSubmit = () => {
    this.props.setList({ id: this.state.id, content: this.state.content })
  }
  componentDidMount() {
    if (!this.props.data) return
    const { id, content } = this.props.data
    this.setState({
      id,
      content,
    })
  }
  render() {
    return (
      <div className='editor' onClick={() => this.props.showEdit({ flag: false })}>
        <input
          className='input'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
          onClick={e => e.stopPropagation()}
        />
        <Button onClick={this.handleSubmit}>ok</Button>
      </div>
    )
  }
}
