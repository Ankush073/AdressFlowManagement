import React from "react";
import { Route, Routes } from "react-router-dom";
import LocationPopup from "./components/Locationpopup"; // Correct path for LocationPopup component
import Header from "./components/Header"
import AddressDisplay from "./components/FetchedAdress"
import ManageAddresses from "./components/ManageAddress"
const App = () => {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path="/" element={<LocationPopup />} />
      <Route path="/address/:address" element={<AddressDisplay />} />
      <Route path="/manage-address" element={<ManageAddresses />} />
      
      {/* More routes can go here */}
    </Routes>
    </div>
  );
};

export default App;
