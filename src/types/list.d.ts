export interface Item {
  id: number
  content: string
  done: boolean
}

export interface ListStore {
  list: Item[]
  total: number
  incomplete: number
  selectedData: Item | null | undefined
  editFlag: boolean
  handleChangeState: (id: number) => void
  handleChangeContent: (id: number, newContent: string) => void
  handleAdd: (content: string) => void
  handleDelete: (id?: number) => void
  showEdit: (id?: number) => void
  closeEdit: () => void
}
