import { useState } from 'react'
import { classNames } from '../shared/lib/classNames/classNames'
import { Navbar } from '../widgets/Navbar'
import { AppRouter } from './providers'
import './styles/index.scss'

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className={classNames('app', {}, [])}>
      
      <svg className={classNames('icon', {}, [])}  onClick={() => setActive(true)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
      </svg>
      <Navbar active={active} setActive={setActive}/>
      <div className={classNames('content-page', {blackout: active}, [])}  onClick={() => setActive(false)}>
        <AppRouter/>
      </div>
      
    </div>
    
  )
}

export default App
