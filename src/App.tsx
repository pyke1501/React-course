import Component from "./pages/fundamental/Component"
import ConditionalRendering from "./pages/fundamental/ConditionalRendering"
import HandleEvent from "./pages/fundamental/HandleEvent"
import JSX from "./pages/fundamental/JSX"
import ListKey from "./pages/fundamental/ListKey"
import Props from "./pages/fundamental/Props"
import State from "./pages/fundamental/State"
import HoangColorBox from "./sampleApp/hoang/HoangColorBox"
import HaiBoxColor from "./sampleApp/hai/HaiColorBox"
import PropDrillingLiftingStateUp from './pages/fundamental/PropDrillingLiftingStateUp'
import Form from "./pages/fundamental/Form"

function App() {
  return (
    <>
      <JSX />

      <br /><br /><br />
      
      <Props />

      <br />
      <State />

      <br />
      <Component />

      <br />
      <HoangColorBox />

      <br />
      <HandleEvent />

      <br />
      <ConditionalRendering />

      <br />
      <ListKey />

      <br />
      <HaiBoxColor />

      <br />
      <PropDrillingLiftingStateUp />

      <br />
      <Form />

      <br /><br /><br />
      <br /><br /><br />
    </>
  )
}

export default App
