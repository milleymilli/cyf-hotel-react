import React from "react";
import Header from "./components/header/Header";
import Bookings from "./Bookings";
import TouristInfoCards from "./components/TouristInfoCards";
import Restaurant from "./Restaurant";
import "./App.css";
import Footer from "./components/footer/Footer";
//import FormButton from "./components/FormButton";

const footerList = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />

      <Restaurant />
      <Footer foot={footerList} />
    </div>
  );
};

export default App;
