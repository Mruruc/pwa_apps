# Weather Application

## Overview

Welcome to the Weather Application! This Progressive Web App (PWA) provides real-time weather information based on your current location. It's installable, works offline, and utilizes native device features like geolocation and push notifications to enhance the user experience.

## Features

- **Real-Time Weather Updates:** Get instant weather information based on your current location.
- **Temperature Threshold Notifications:** Set custom temperature thresholds and receive notifications when the current temperature meets or exceeds (or drops below) your specified threshold.
- **Permissions Management:** Easily manage app permissions for geolocation and notifications within the app.
- **Offline Access:** Access previously fetched weather data even without an internet connection.
- **Installable PWA:** Install the app on your device for a native-like experience.
- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.
- **Multiple Views:**
  - **Home:** View current weather details.
  - **Settings:** Customize your temperature thresholds and manage permissions.
  - **About:** Learn more about the app.
  - **404 Page:** Handles undefined routes gracefully.

## Technologies Used

- **Frontend Framework:** React.js
- **Routing:** React Router
- **Styling:** Bootstrap
- **API:** OpenWeatherMap API
- **Push Notifications:** Browser Notifications API
- **PWA Features:** Service Workers, Web App Manifest

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **OpenWeatherMap API Key**

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies:**

```bash
npm install
```

3. **Obtain an OpenWeatherMap API Key:**

Sign up at OpenWeatherMap to get a free API key.

In .env file in the root directory:

Add your API key to the .env file:

```env
VITE_APP_API_KEY=your_openweathermap_api_key
```

Start the Development Server:

```bash
npm start
```

The app will run at http://localhost:5741/.

### Usage

#### Home Page

- Upon loading, the app will request access to your location to fetch weather data.
- If granted, it will display current weather information for your location.
- If denied, you can enable location access in the Settings page.

#### Settings Page

- Temperature Threshold:
  - Set a specific temperature value in degrees Celsius.
  - Choose whether to receive notifications when the temperature exceeds or drops below this threshold.
- Permissions Status:
  - View the current status of geolocation and notification permissions.
  - Enable or disable permissions directly from the app.

#### About Page

* Learn more about the app and its commitment to user privacy and security.
* Understand how the app uses your data and permissions.

### Installing the App

* Click on the "Install App" button to install the PWA on your device.
* The app can then be launched from your home screen or applications menu.
