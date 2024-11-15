export const requestNotificationPermission = (setUserPermission) => {
  Notification.requestPermission().then((permission) => {
    updateNotificationPermission(setUserPermission);
    if (permission === "granted") {
      new Notification("Notifications permission granted.");
    } else if (permission === "denied") {
      alert("Notifications permission denied.");
    }
  });
};

export const updateNotificationPermission = (setUserPermission) => {
  if (Notification.permission === "granted") {
    setUserPermission((prevState) => ({
      ...prevState,
      notifications: "Notifications are currently enabled.",
    }));
  } else if (Notification.permission === "default") {
    setUserPermission((prevState) => ({
      ...prevState,
      notifications: "Notifications permission has not been granted yet.",
    }));
  } else if (Notification.permission === "denied") {
    setUserPermission((prevState) => ({
      ...prevState,
      notifications: "Notifications are currently denied.",
    }));
  }
};

export function requestGeoLocationPermission(setUserPermission) {
  navigator.geolocation.getCurrentPosition(
    () => {
      updateGeolocationPermission(setUserPermission);
      alert("Geolocation permission granted.");
    },
    () => {
      updateGeolocationPermission(setUserPermission);
      alert("Geolocation permission denied.");
    }
  );
}

export function updateGeolocationPermission(setUserPermission) {
  if (navigator.permissions) {
    getState(setUserPermission);
  } else {
    setUserPermission((prevState) => ({
      ...prevState,
      geolocation: "Permission API not supported.",
    }));
  }
}

function getState(setUserPermission) {
  navigator.permissions
    .query({ name: "geolocation" })
    .then((result) => {
      updateState(result.state, setUserPermission);
      result.onchange = () => {
        updateState(result.state, setUserPermission);
      };
    })
    .catch((error) => {
      console.error(error.message);
    });
}

function updateState(state, setUserPermission) {
  if (state === "granted") {
    setUserPermission((prevState) => ({
      ...prevState,
      geolocation: "Location access is currently granted.",
    }));
  } else if (state === "prompt") {
    setUserPermission((prevState) => ({
      ...prevState,
      geolocation: "Location access has not been granted yet.",
    }));
  } else if (state === "denied") {
    setUserPermission((prevState) => ({
      ...prevState,
      geolocation: "Location access is currently denied.",
    }));
  }
}
