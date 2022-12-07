import { createBrowserRouter } from 'react-router-dom'
import { withRouter } from '@/utils'
import App from './App'
import List from './pages/list'
import Editor from './pages/edit'

const ListWithRouter = withRouter(List)
const EditorWithRouter = withRouter(Editor)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ListWithRouter />,
      },
      {
        path: 'editor',
        element: <EditorWithRouter />,
      },
    ],
  },
])
