import { observable } from 'mobx'
import type { Item, ListStore } from '../types/list'

export default observable<ListStore>(
  {
    list: [],
    get total() {
      return this.list.length
    },
    get incomplete() {
      return this.list.reduce((r: number, c: Item) => r + +!c.done, 0)
    },
    selectedData: null,
    editFlag: false,

    handleChangeState(id) {
      this.list = this.list.map(item => {
        if (item.id === id) {
          item.done = !item.done
        }
        return item
      })
    },
    handleChangeContent(id, newContent) {
      this.list = this.list.map(item => {
        if (item.id === id) {
          item.content = newContent
        }
        return item
      })
    },
    handleAdd(content) {
      this.list = [...this.list, { id: new Date().getTime(), content, done: false }]
    },
    handleDelete(id) {
      this.list = this.list.filter(item => (id === undefined ? !item.done : item.id !== id))
    },
    showEdit(id) {
      this.editFlag = true
      id && (this.selectedData = this.list.find(item => item.id === id))
    },
    closeEdit() {
      this.editFlag = false
      this.selectedData = null
    },
  },
  {},
  { autoBind: true },
)
