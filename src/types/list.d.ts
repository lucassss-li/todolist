export interface Item {
  id: number
  content: string
  done: boolean
}

type SetListParams = Partial<{ id: number; content: string; state: boolean }>
type ShowEditParams = Partial<{ flag: boolean; id: number }>

export interface ListStore {
  list: Item[]
  total: number
  incomplete: number
  selectedData: Item | null | undefined
  editFlag: boolean
  setList: (params?: SetListParams) => void
  showEdit: (params?: ShowEditParams) => void
}
