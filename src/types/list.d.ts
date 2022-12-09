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
  setList: (params?: Partial<{ id: number; content: string; state: boolean }>) => void
  showEdit: (params?: Partial<{ flag: boolean; id: number }>) => void
}
