import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../redux/store'
import { StyledApp } from '../styled.components/styled'
import Content from './Content'
import Navbar from './Navbar'

export default function AppLayout() {
  return (
    <Router>
      <Provider store={store}>
        <StyledApp className='App'>
          <Navbar />
          <Content />
        </StyledApp>
      </Provider>
    </Router>
  )
}
