import React from "react";
import react from "../assets/react.svg";
import profilepic from "../assets/Muhammad1.jpg";

const Navbar = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  const handleAlert = (e) => {
    alert(`${e} is not yet developed yet!`);
  };
  return (
    <div id="navbar">
      <img onClick={handleScroll} src={react} alt="" />
      <h3 onClick={handleScroll}>Dynamic Dashboard</h3>
      <ul>
        <a href="#!">Inventory</a>
        <a href="#!">Customers</a>
        <a href="#!">Expense</a>
        <a href="#!">Review</a>
        <a href="#!">Traffic</a>
      </ul>
      <span>
        <i
          onClick={(e) => handleAlert("Category Section")}
          class="fa-solid fa-ellipsis"
        ></i>
        <i
          onClick={(e) => handleAlert("Help Section")}
          class="fa-solid fa-question"
        ></i>
        <i
          onClick={(e) => handleAlert("Notification Section")}
          class="fa-solid fa-bell"
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
