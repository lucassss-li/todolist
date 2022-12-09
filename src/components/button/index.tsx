import React, { Component, ReactNode } from 'react'
import './index.scss'

type ButtonProps = { type?: string; children: ReactNode; onClick: (...args: any[]) => any }

export default class Button extends Component<ButtonProps> {
  render() {
    return (
      <button className={`button ${this.props.type}`} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}
