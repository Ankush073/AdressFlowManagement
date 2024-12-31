import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Locationpopup.css";

const LocationPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [addressFetched, setAddressFetched] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEnableLocation = () => {
    setAddressFetched(true);
    // Simulate fetching the address (you can replace this with actual geolocation or API logic)
    const fetchedAddress = "1234 Elm Street, Some City, Some Country";
    setDeliveryAddress(fetchedAddress);

    // Navigate to the Address Display page after fetching the address
    navigate(`/address/${fetchedAddress}`);
  };

  const handleSearchManually = () => {
    setAddressFetched(true);
    // Simulate fetching the address manually (replace this with actual logic for manual entry)
    const manuallyEnteredAddress = "5678 Maple Avenue, Another City, Another Country";
    setDeliveryAddress(manuallyEnteredAddress);

    // Navigate to the Address Display page after manual entry
    navigate(`/address/${manuallyEnteredAddress}`);
  };

  if (!showPopup) return null;

  return (
    <div className="bottom-sheet-overlay">
      <div className="bottom-sheet">
        <div className="sheet-content">
          <h3>Location Permission is Off</h3>
          <p>
            We need your location to find the nearest store & provide you a
            seamless delivery experience.
          </p>
          <div className="sheet-buttons">
            <button
              className="enable-location-btn"
              onClick={handleEnableLocation}
            >
              Enable Location
            </button>
            <button
              className="search-manually-btn"
              onClick={handleSearchManually}
            >
              Search Your Location Manually
            </button>
          </div>
        </div>
        <button className="close-btn" onClick={() => setShowPopup(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LocationPopup;
