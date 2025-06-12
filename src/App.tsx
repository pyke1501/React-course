import Component from "./pages/fundamental/Component";
import ConditionalRendering from "./pages/fundamental/ConditionalRendering";
import HandleEvent from "./pages/fundamental/HandleEvent";
import JSX from "./pages/fundamental/JSX";
import ListKey from "./pages/fundamental/ListKey";
import Props from "./pages/fundamental/Props";
import State from "./pages/fundamental/State";
import HoangColorBox from "./sampleApp/hoang/HoangColorBox";

function App() {
  return (
    <>
      <JSX />

      <br />
      <br />
      <br />

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
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
