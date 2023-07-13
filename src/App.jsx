import Widget from "./components/Widget";
import Navbar from "./components/Navbar";
import { widgets } from "./constants";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="parentDiv">
        {widgets
          .sort((a, b) => parseInt(a.priority) - parseInt(b.priority))
          .map((widget, index) => (
            <Widget widget={widget} key={index} index={index} />
          ))}
      </div>
    </>
  );
};

export default App;
