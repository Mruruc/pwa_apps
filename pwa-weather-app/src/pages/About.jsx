const About = () => {
  return (
    <>
      <h1 className="text-center mb-4">About Weather App</h1>
      <p className="lead">
        Welcome to the Weather App! Your personal companion for staying
        up-to-date with the latest weather conditions, right at your fingertips.
      </p>
      <p>
        Our app provides real-time weather updates based on your current
        location, ensuring you have the most accurate and timely information.
        Whether you're planning your day, traveling, or just curious about the
        weather, the Weather App has got you covered.
      </p>

      <h2 className="mt-5">Features</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Real-Time Weather Updates:</strong> Instantly receive weather
          information based on your current location.
        </li>
        <li className="list-group-item">
          <strong>Customizable Alerts:</strong> Set temperature thresholds to
          get notified when specific conditions are met.
        </li>
        <li className="list-group-item">
          <strong>Offline Access:</strong> Access previously fetched weather
          data even without an internet connection.
        </li>
        <li className="list-group-item">
          <strong>User-Friendly Interface:</strong> Enjoy a clean, intuitive
          design that's easy to navigate.
        </li>
        <li className="list-group-item">
          <strong>Responsive Design:</strong> Optimized for all devices, so you
          can check the weather on the go.
        </li>
      </ul>

      <h2 className="mt-5">Privacy and Security</h2>
      <p>
        Your privacy is our top priority. The Weather App respects your personal
        data and ensures it is protected at all times.
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Location Permission:</strong> We only access your location
          when you grant explicit permission. The app requests access to your
          geolocation solely to provide accurate weather information for your
          area.
        </li>
        <li className="list-group-item">
          <strong>Data Protection:</strong> Your location data is not stored or
          shared with any third parties. It is used only to fetch weather data
          during your active session.
        </li>
        <li className="list-group-item">
          <strong>Secure Notifications:</strong> Notifications are sent securely
          and are designed to keep you informed without compromising your
          privacy.
        </li>
      </ul>

      <h2 className="mt-5">How It Works</h2>
      <p>
        The Weather App utilizes your device's geolocation feature to determine
        your current position. With your permission, it fetches real-time
        weather data from reliable sources and displays it in an
        easy-to-understand format. You can also set your own temperature
        thresholds in the Settings page, and the app will notify you when these
        conditions are met.
      </p>

      <h2 className="mt-5">Why Choose Weather App?</h2>
      <p>
        We are committed to providing you with the most accurate and up-to-date
        weather information while respecting your privacy. Our goal is to help
        you make informed decisions, whether you're heading out for a walk,
        planning a trip, or just curious about the weather in your area.
      </p>

      <h2 className="mt-5">Feedback</h2>
      <p>
        Your experience matters to us! If you have any suggestions or encounter
        any issues, please don't hesitate to reach out. We're always looking to
        improve and would love to hear from you.
      </p>
    </>
  );
};
export default About;
