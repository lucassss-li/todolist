import { Component } from 'react'
import './index.scss'

export default class Button extends Component {
  render() {
    return (
      <button className={`button ${this.props.type}`} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}
