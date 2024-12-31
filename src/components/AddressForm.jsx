import React, { useState } from "react";
import "./AddressForm.css"; // Import the CSS file

const AddressForm = () => {
  const [form, setForm] = useState({
    houseFlat: "",
    apartmentArea: "",
    label: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (label) => {
    setForm((prev) => ({ ...prev, label }));
    alert(`Address saved as: ${label}`);
  };

  return (
    <div className="address-form-container">
      <h2 className="address-title">Raj Infrabuilds</h2>
      <p className="address-subtitle">
        near Shitala Devi Mandir, Chembur Colony, Chembur, Mumbai, Maharashtra, India
      </p>
      <form className="address-form">
        <label className="address-label">House / Flat / Block No.</label>
        <input
          type="text"
          name="houseFlat"
          value={form.houseFlat}
          onChange={handleChange}
          className="address-input"
        />

        <label className="address-label">Apartment / Road / Area</label>
        <input
          type="text"
          name="apartmentArea"
          value={form.apartmentArea}
          onChange={handleChange}
          className="address-input"
        />

        <div className="address-save-as">
          <p className="address-label">Save As</p>
          <button
            type="button"
            onClick={() => handleSave("Home")}
            className="icon-button"
          >
            🏠 Home
          </button>
          <button
            type="button"
            onClick={() => handleSave("Work")}
            className="icon-button"
          >
            💼 Work
          </button>
          <button
            type="button"
            onClick={() => handleSave("Other")}
            className="icon-button"
          >
            👥 Other
          </button>
          <button
            type="button"
            onClick={() => handleSave("Custom")}
            className="icon-button"
          >
            📍 Custom
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
