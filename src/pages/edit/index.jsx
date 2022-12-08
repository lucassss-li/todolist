import React, { Component, createRef } from 'react'
import './index.scss'
import Button from '@/components/button'

export default class Edit extends Component {
  state = {
    id: 0,
    content: '',
  }
  inputRef = createRef()
  handleChange = event => {
    this.setState({ content: event.target.value })
  }
  handleSubmit = () => {
    this.props.setList({ id: this.state.id, content: this.state.content })
    this.props.history.push('/')
  }
  componentDidMount() {
    this.inputRef.current.focus()
    const id = +this.props.match.params.id
    const data = this.props.list.find(item => item.id === id)
    if (!id || !data) return
    this.setState({
      id,
      content: this.props.list.find(item => item.id === id).content,
    })
  }
  render() {
    return (
      <div className='editor'>
        <input
          className='input'
          type='text'
          ref={this.inputRef}
          value={this.state.content}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmit}>ok</Button>
      </div>
    )
  }
}
