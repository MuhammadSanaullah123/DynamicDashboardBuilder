import { useEffect, useState } from "react";
import Widget from "./components/Widget";
import Navbar from "./components/Navbar";
import { widgets } from "./constants";
import react from "./assets/react.svg";
import vite from "./assets/vite.svg";
import chart from "./assets/chart.svg";

import "./App.css";

const App = () => {
  /*  const [orderedWidgets, setOrderedWidgets] = useState(widgets); */
  const [update, setUpdate] = useState(false);

  const handleData = () => {
    let temp = [...widgets];
    temp.sort((a, b) => parseInt(a.priority) - parseInt(b.priority));

    const handleFetch = (currentIndex) => {
      if (currentIndex === temp.length) {
        return;
      }

      const fetchData = async () => {
        const fetchedData = await fetch(
          "https://run.mocky.io/v3/13bab32c-f280-4cc9-a802-b3ab7f481e38"
        );
        const tempData = await fetchedData.json();

        temp[currentIndex].value = tempData.data;
        setUpdate((prevUpdate) => !prevUpdate);

        console.log(
          `Data for widget with priority ${temp[currentIndex].priority} has been displayed`
        );
        if (
          currentIndex + 1 < temp.length &&
          temp[currentIndex + 1].priority === temp[currentIndex].priority
        ) {
          handleFetch(currentIndex + 1);
        } else {
          setTimeout(() => {
            handleFetch(currentIndex + 1);
          }, 2000);
        }
      };

      fetchData();
    };

    handleFetch(0);
  };

  useEffect(() => {
    handleData();
  }, []);

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
                  <i className="fa-solid fa-caret-up up"></i>25%
                </p>
              </div>
              <div className="childDiv">
                <h6>Network Unlocks</h6>
                <div className="hr"></div>

                <p>
                  <b>$</b>7546
                </p>
                <p>
                  <i className="fa-solid fa-caret-up up"></i>25%
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
                  <i className="fa-solid fa-caret-up up"></i>25%
                </p>
              </div>
              <div className="childDiv">
                <h6>Trade In</h6>
                <div className="hr"></div>

                <p>
                  <b>$</b>7546
                </p>
                <p>
                  <i className="fa-solid fa-caret-down down"></i>25%
                </p>
              </div>
            </div>
          </div>
          <div id="progressDiv">
            <h3>Profile</h3>
            <div id="imgDiv">
              <img className="progressimg" src={react} alt="" />
              <i className="fa-solid fa-plus"></i>
              <img className="progressimg" src={vite} alt="" />
              <i className="fa-solid fa-plus"></i>
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
            .sort((a, b) => parseInt(a.order) - parseInt(b.order))
            .map((widget, index) => (
              <Widget
                widget={widget}
                key={index}
                index={index}
                widgets={widgets}
                /*  dataArray={dataArray} */
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
