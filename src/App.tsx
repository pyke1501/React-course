import Component from "./pages/fundamental/Component"
import ConditionalRendering from "./pages/fundamental/ConditionalRendering"
import HandleEvent from "./pages/fundamental/HandleEvent"
import JSX from "./pages/fundamental/JSX"
import ListKey from "./pages/fundamental/ListKey"
import Props from "./pages/fundamental/Props"
import State from "./pages/fundamental/State"
import HaiBoxColor from "./sampleApp/hai/HaiColorBox"
import PropDrillingLiftingStateUp from './pages/fundamental/PropDrillingLiftingStateUp'
import Form from "./pages/fundamental/Form"
import StateHook from "./pages/fundamental/StateHook";
import EffectHook from "./pages/fundamental/EffectHook";
import HoangGenerateBox from "./sampleApp/hoang/HoangGenerateBox"
import Context from "./pages/fundamental/Context"
import RefHook from "./pages/fundamental/RefHook"
import PerformanceHook from "./pages/fundamental/PerformanceHook"

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
      <HandleEvent />

      <br />
      <ConditionalRendering />

      <br />
      <ListKey />

      <br />
      <HaiBoxColor />

      <br />
      <PropDrillingLiftingStateUp />

        <div style={{justifyContent: "center"}}>
          <HoangGenerateBox />
        </div>
      <br />
      <Form />

      <br />
      <StateHook />

      <br />
      <EffectHook />

      <br />
      <Context />
      <br />

      <RefHook />

      <br />
      <PerformanceHook />

      <br /><br /><br />
      <br /><br /><br />
    </>
  )
}

export default App;