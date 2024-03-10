import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App.jsx'
import { createContext } from 'react'
import UserStore from './shared/store/UserStore'

export const Context = createContext({user: new UserStore()});
ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
    user: new UserStore(),
  }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
  
    
  
)
