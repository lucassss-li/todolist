import React, { Component, createRef } from 'react'
import { observer } from 'mobx-react'
import './index.scss'
import Button from '@/components/button'
import listStore from '@/stores/list.store'

type EditState = {
  id?: number
  content: string
}

@observer
export default class Edit extends Component<object, EditState> {
  state = {
    id: undefined,
    content: '',
  }
  inputRef = createRef<HTMLInputElement>()
  handleChange = (event: any) => {
    this.setState({ content: event.target.value })
  }
  handleSubmit = () => {
    if (this.state.id) {
      listStore.handleChangeContent(this.state.id, this.state.content)
    } else {
      listStore.handleAdd(this.state.content)
    }
  }
  componentDidMount() {
    const { id, content = '' } = listStore.selectedData || {}
    this.setState({
      id,
      content,
    })
    this.inputRef.current && this.inputRef.current.focus()
  }
  render() {
    return (
      <div className='editor' onClick={() => listStore.closeEdit()}>
        <input
          className='input'
          type='text'
          ref={this.inputRef}
          value={this.state.content}
          onChange={this.handleChange}
          onClick={e => e.stopPropagation()}
        />
        <Button onClick={this.handleSubmit}>ok</Button>
      </div>
    )
  }
}
