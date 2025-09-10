import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './componets/Login'
import { DashBoard } from './componets/DashBoard'

function App() {

  const [isLogin,setIsLogin ] = useState(false);
  const [data, setData] = useState("");

  return (
    <>
      {isLogin ? <DashBoard data={data} setIsLogin={setIsLogin}/> : <Login setIsLogin={setIsLogin} setData={setData} /> }
    </>
  )
}

export default App
