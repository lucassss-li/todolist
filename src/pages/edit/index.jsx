import React, { Component } from 'react'
import './index.scss'
import Button from '@/components/button'

export default class Edit extends Component {
  state = {
    id: 0,
    content: '',
  }
  handleChange = event => {
    this.setState({ content: event.target.value })
  }
  handleSubmit = () => {
    if (this.state.id) {
      this.props.change(this.state.id, this.state.content)
    } else {
      this.props.add(this.state.content)
    }
    this.props.history.push('/')
  }
  componentDidMount() {
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
        <input className='input' type='text' value={this.state.content} onChange={this.handleChange} />
        <Button onClick={this.handleSubmit}>ok</Button>
      </div>
    )
  }
}
