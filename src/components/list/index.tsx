import React, { Component } from 'react'
import { observer } from 'mobx-react'
import './index.scss'
import ListItem from './component/item'
import Count from './component/count'

import listStore from '@/stores/list.store'
@observer
export default class List extends Component {
  render() {
    const { list } = listStore
    return (
      <>
        <div className='list'>
          {list.map(item => (
            <ListItem {...item} key={item.id} />
          ))}
        </div>
        <Count />
      </>
    )
  }
}
