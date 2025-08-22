import { createRoot } from 'react-dom/client'
import Props from './Component/Props'
import Destructuring from './Component/Destructuring'
import IfElese from './Component/IfElese'
import ConditionalRendering from './Component/ConditionalRendering'
import Eventhandling from './Component/Eventhandling'


createRoot(document.getElementById('root')).render(
  <>
    <div>
      <Props name="Manav" age={19}/>
      <Destructuring name="Delvadiya" roll={108}/>
      <IfElese isDisplay={true}/>
      <ConditionalRendering isDisplay={true} />
      <Eventhandling/>
    </div>
  </>
  
)
