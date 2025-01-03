Locationpop: Google Maps Address Fetcher

Locationpop is a React-based project that integrates Google Maps to allow users to locate, view, and edit their addresses. This application uses the Google Maps API for address fetching, search functionality, and interactive map markers. It also features a user-friendly interface with Material-UI components.

Features

Real-time Geolocation: Automatically fetch the user's current location using the browser's Geolocation API.

Google Maps Integration: Display maps with the Google Maps JavaScript API.

Search and Select Locations: Use the Google Places Autocomplete to search and select locations.

Interactive Map Markers: Click on the map to select a location, which updates the address and marker position.

Bottom Sheet Drawer: Edit address details in a convenient bottom drawer.

Material-UI Components: Stylish and modern interface for a seamless user experience.

Prerequisites

Node.js and npm installed.

A Google Cloud Platform account with access to the Maps JavaScript API and Geocoding API.

API Key stored securely as an environment variable.

Installation

Clone the Repository:

git clone https://github.com/your-username/locationpop.git
cd locationpop

Install Dependencies:

npm install

Set Up Environment Variables:
Create a .env file in the root directory and add your Google Maps API key:

REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here

Start the Development Server:

npm start

Usage

Open the app in your browser at http://localhost:3000.

Allow the browser to access your location.

Use the search box or click on the map to select a location.

Edit and save the address in the bottom drawer.

Project Structure

src/
├── components/
│   └── Locationpop.jsx  # Main component for the location popup functionality
├── styles/
│   └── FetchedAddress.css  # Styles for the project
├── App.js  # Entry point for the app
├── index.js  # Renders the app to the DOM
└── .env  # Environment variable file (not included in the repo)

Key Libraries

React: Front-end framework.

@react-google-maps/api: Google Maps wrapper for React.

Material-UI: Modern React UI components.

API Usage

Google Maps JavaScript API: Displays the map and markers.

Geocoding API: Converts latitude and longitude into readable addresses.

Places Autocomplete API: Provides location suggestions in the search box.

Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

Fork the repository.

Create a new branch:

git checkout -b feature-name

Commit your changes:

git commit -m 'Add feature description'

Push to the branch:

git push origin feature-name

Open a pull request.

Author

Developed by ANKUSH.

