import Widget from "./components/Widget";
import Navbar from "./components/Navbar";
import { widgets } from "./constants";
import react from "./assets/react.svg";
import vite from "../public/vite.svg";
import chart from "./assets/chart.svg";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />

      <div id="fixedDiv">
        <h3>Welcome Muhammad!</h3>
        <div id="mainDiv">
          <div id="fourDiv">
            <div className="twoDiv">
              <div className="childDiv">
                <h6>Repairs</h6>
                <div className="hr"></div>

                <p>
                  <b>$</b>7546
                </p>
                <p>
                  <i class="fa-solid fa-caret-up up"></i>25%
                </p>
              </div>
              <div className="childDiv">
                <h6>Network Unlocks</h6>
                <div className="hr"></div>

                <p>
                  <b>$</b>7546
                </p>
                <p>
                  <i class="fa-solid fa-caret-up up"></i>25%
                </p>
              </div>
            </div>
            <div className="twoDiv">
              <div className="childDiv">
                <h6>Accessories & parts</h6>
                <div className="hr"></div>
                <p>
                  <b>$</b>7546
                </p>
                <p>
                  <i class="fa-solid fa-caret-up up"></i>25%
                </p>
              </div>
              <div className="childDiv">
                <h6>Trade In</h6>
                <div className="hr"></div>

                <p>
                  <b>$</b>7546
                </p>
                <p>
                  <i class="fa-solid fa-caret-down down"></i>25%
                </p>
              </div>
            </div>
          </div>
          <div id="progressDiv">
            <h3>Profile</h3>
            <div id="imgDiv">
              <img className="progressimg" src={react} alt="" />
              <i class="fa-solid fa-plus"></i>
              <img className="progressimg" src={vite} alt="" />
              <i class="fa-solid fa-plus"></i>
              <img className="progressimg" src={chart} alt="" />
            </div>
            <div id="parentBar">
              <div id="childBar"></div>
            </div>
            <a href="#!">Complete your profile</a>
          </div>
        </div>
        <div id="parentDiv">
          {widgets
            .sort((a, b) => parseInt(a.priority) - parseInt(b.priority))
            .map((widget, index) => (
              <Widget widget={widget} key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
