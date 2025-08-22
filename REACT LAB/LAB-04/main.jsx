import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MapUsingArr from './Component/MapUsingArr.jsx'
import MapUsingObj from './Component/MapUsingObj.jsx'
import MapUsingObjectTable from './Component/MapUsingObjectTable.jsx'
import MapUsingCard from './Component/MapUsingCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MapUsingArr/>
    <MapUsingObj/>
    <MapUsingObjectTable/>
    <MapUsingCard/>
  </StrictMode>,
)
