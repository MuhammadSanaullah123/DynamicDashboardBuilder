import Widget from "./components/Widget";
import { widgets } from "./constants";
import "./App.css";

const App = () => {
  return (
    <div id="parentDiv">
      {widgets
        .sort((a, b) => parseInt(a.priority) - parseInt(b.priority))
        .map((widget, index) => (
          <Widget widget={widget} key={index} index={index} />
        ))}
    </div>
  );
};

export default App;
