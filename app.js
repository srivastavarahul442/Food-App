import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src="https://img.freepik.com/premium-vector/set-lovely-kawaii-bear-vector-images_601550-614.jpg?w=740"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {resName, stars} = props;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg"
      />
      <h3>{resName}</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>{stars}</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body">
      <div className="seracch-container">
        <input className="input" type="text" />
        <button className="btn">Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard resName={"KFC"} stars="4.5 stars"/>
        <RestaurantCard resName="Meghna food" stars="4 stars"/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
