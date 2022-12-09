import { observable } from 'mobx'
import type { Item, ListStore } from '../types/list'

export default observable<ListStore>({
  list: [
    {
      id: 1,
      content: 'aaaa',
      done: false,
    },
  ],
  get total() {
    return this.list.length
  },
  get incomplete() {
    return this.list.reduce((r: number, c: Item) => r + +!c.done, 0)
  },
  selectedData: null,
  editFlag: false,
  setList({ id, content, state } = {}) {
    //id content存在为修改操作
    //state为真时修改状态，为假时修改内容
    if (id && (content !== undefined || state)) {
      this.list = this.list.map(item => {
        if (item.id === id) {
          if (state) {
            item.done = !item.done
          } else {
            item.content = content as string
          }
        }
        return item
      })
    }
    //只有content为新增操作
    else if (content !== undefined) {
      this.list = [...this.list, { id: new Date().getTime(), content, done: false }]
    }
    //当内容不存在时，id存在为删除，id不存在为清空操作
    else {
      this.list = this.list.filter(item => (id === undefined ? !item.done : item.id !== id))
    }
    this.editFlag = false
  },
  showEdit({ flag = true, id } = {}) {
    this.editFlag = flag
    this.selectedData = this.list.find(item => item.id === id)
  },
})
