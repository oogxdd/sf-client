import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider, AuthProvider } from 'context'
import './assets/index.css'
import AsyncComponent from './async-comp'
import { createClient, Provider as URQLProvider } from 'urql'

const loadApp = import('./app')
const App = (props) => (
  <AsyncComponent lazyLoadComponent={loadApp} props={props} />
)

const client = createClient({
  url: process.env.REACT_APP_BACKEND_URL,
  fetchOptions: () => {
    const token = window.localStorage.jwt
    return {
      headers: { Authorization: token ? `Bearer ${token}` : '' },
    }
  },
})

ReactDOM.render(
  <React.StrictMode>
    <URQLProvider value={client}>
      <AppProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AppProvider>
    </URQLProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
