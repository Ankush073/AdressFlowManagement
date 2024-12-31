import React, { useState } from 'react';
import './ManageAddress.css';

const ManageAddresses = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, label: 'Home', details: 'near Shitla Devi Mandir, Chembur Colony, Mumbai, Maharashtra, India' },
    { id: 2, label: 'Office', details: 'near Shitla Devi Mandir, Chembur Colony, Mumbai, Maharashtra, India' },
    { id: 3, label: 'Friends & Family', details: 'near Shitla Devi Mandir, Chembur Colony, Mumbai, Maharashtra, India' },
  ]);

  const [recentSearches, setRecentSearches] = useState([
    'Wadala West',
    'Chembur East',
    'Wadala East',
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleSelect = (id) => {
    alert(`Address ${id} selected for delivery`);
  };

  return (
    <div className="container">
      <h1>Manage Addresses</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search your area/pincode/apartment"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button onClick={() => alert(`Searching for: ${searchQuery}`)}>Search</button>
      </div>

      {/* Saved Addresses */}
      <div className="address-list">
        <h2>Saved Addresses</h2>
        {addresses.map((address) => (
          <div className="address-item" key={address.id}>
            <div>
              <strong>{address.label}</strong>
              <p>{address.details}</p>
            </div>
            <div className="actions">
              <button className="select" onClick={() => handleSelect(address.id)}>
                Select
              </button>
              <button className="edit" onClick={() => alert(`Edit address: ${address.id}`)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(address.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Searches */}
      <div className="address-list">
        <h2>Recent Searches</h2>
        {recentSearches.map((search, index) => (
          <div className="address-item" key={index}>
            <p>{search}</p>
            <button className="select" onClick={() => alert(`Selected recent search: ${search}`)}>
              Select
            </button>
          </div>
        ))}
      </div>

      {/* Add New Address Button */}
      <button
        className="add-new"
        onClick={() => alert('Redirect to add new address page')}
      >
        Add New Address
      </button>
    </div>
  );
};

export default ManageAddresses;
