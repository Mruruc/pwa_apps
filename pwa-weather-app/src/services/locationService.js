
export function getUserLocation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(
            "Unable to retrieve your location. Please check for location access permission."
          );
        }
      );
    } else {
      reject("Geolocation is not supported by your browser!");
    }
  });
}
