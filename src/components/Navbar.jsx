import React, { useState, useEffect } from "react";
import react from "../assets/react.svg";
import profilepic from "../assets/Muhammad1.jpg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  const handleAlert = (e) => {
    alert(`${e} is not yet developed yet!`);
  };

  useEffect(() => {
    if (toggle === true) {
      const element = document.getElementById("mobile");
      const rect = element.getBoundingClientRect();
      const x = rect.left + window.scrollX;
      const y = rect.top + window.scrollY;
      let mobile = document.getElementById("ul-mobile");
      mobile.style.position = "absolute";
      mobile.style.left = "0px";
      mobile.style.left = `${x - 100}px`;
      mobile.style.top = `${y + 30}px`;
    }
  }, [toggle]);

  return (
    <div id="navbar">
      <img onClick={handleScroll} src={react} alt="" />
      <h3 onClick={handleScroll}>Dynamic Dashboard</h3>
      <ul id={`${toggle ? "ul-mobile" : ""}`}>
        <a href="#!">Inventory</a>
        <a href="#!">Customers</a>
        <a href="#!">Expense</a>
        <a href="#!">Review</a>
        <a href="#!">Traffic</a>
      </ul>
      <span>
        <i
          onClick={() => setToggle(!toggle)}
          id="mobile"
          className="fa-solid fa-ellipsis"
        ></i>
        <i
          onClick={(e) => handleAlert("Help Section")}
          className="fa-solid fa-question"
        ></i>
        <i
          onClick={(e) => handleAlert("Notification Section")}
          className="fa-solid fa-bell"
        ></i>
        <img
          onClick={(e) => handleAlert("Profile Section")}
          src={profilepic}
          alt=""
        />
      </span>
    </div>
  );
};

export default Navbar;
