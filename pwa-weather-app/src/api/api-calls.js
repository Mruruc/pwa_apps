const BASE_URL = import.meta.env.VITE_APP_API_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;
async function getWeather(lat, lon) {
  try {
    const response = await fetch(
      `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Invalid response: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export default getWeather;
