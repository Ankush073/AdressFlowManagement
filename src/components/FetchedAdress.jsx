import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import { Drawer, TextField, Button } from '@mui/material';
import './FetchedAddress.css';

const Locationpop = () => {
  const [location, setLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [searchBox, setSearchBox] = useState(null);
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [formData, setFormData] = useState({
    houseNumber: '',
    apartment: '',
    landmark: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          setSelectedLocation({ lat: latitude, lng: longitude });
          fetchAddress(latitude, longitude);
        },
        () => alert('Location not found!')
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchAddress = (lat, lng) => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      console.error('Google Maps API key is missing. Please set it in your .env file.');
      return;
    }

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setAddress(data.results[0].formatted_address);
        } else {
          setAddress('Address not found at this location');
        }
      })
      .catch(() => setAddress('Error fetching address'));
  };

  const onMapClick = useCallback((e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setSelectedLocation({ lat, lng });
    fetchAddress(lat, lng);
  }, []);

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          setSelectedLocation({ lat: latitude, lng: longitude });
          fetchAddress(latitude, longitude);
        },
        () => alert('Location not found!')
      );
    }
  };

  const onPlacesChanged = () => {
    if (searchBox) {
      const places = searchBox.getPlaces();
      if (places && places.length > 0) {
        const { lat, lng } = places[0].geometry.location;
        setSelectedLocation({ lat: lat(), lng: lng() });
        fetchAddress(lat(), lng());
      }
    }
  };

  const handleEnableClick = () => {
    navigate('/manage-address'); // Replace '/manage-address' with your actual route path
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Submitted Address:', formData);
    setBottomSheetOpen(false);
  };

  const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '10px',
  };

  return (
    <div className="location-popup-container">
      <h3 className="popup-header">Location Information</h3>
      <div className="map-container">
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          libraries={["places"]}
        >
          <StandaloneSearchBox
            onLoad={(ref) => setSearchBox(ref)}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              type="text"
              placeholder="Search location"
              className="search-bar"
            />
          </StandaloneSearchBox>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location || { lat: 37.7749, lng: -122.4194 }}
            zoom={15}
            onClick={onMapClick}
          >
            {selectedLocation && <Marker position={selectedLocation} label="📍" />}
          </GoogleMap>
          <button className="locate-me-btn" onClick={handleLocateMe}>
            Locate Me
          </button>
        </LoadScript>
      </div>
      <div className="address-and-buttons">
        <div className="address-display">
          <p className="address">{address}</p>
        </div>
        <button className="enable-btn" onClick={handleEnableClick}>
          Enable
        </button>
        <button className="change-btn" onClick={() => setBottomSheetOpen(true)}>
          Change
        </button>
      </div>

      <Drawer
        anchor="bottom"
        open={isBottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
        classes={{ paper: 'bottom-sheet' }}
      >
        <div className="bottom-sheet-content">
          <h3 className="form-header">Edit Address</h3>
          <form className="address-form">
            <TextField
              label="House/Flat/Block No."
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Apartment/Road/Area"
              name="apartment"
              value={formData.apartment}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Landmark (Optional)"
              name="landmark"
              value={formData.landmark}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <div className="form-buttons">
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setBottomSheetOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </Drawer>
    </div>
  );
};

export default Locationpop;
