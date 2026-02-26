const WeatherApi = async (city: string) => {
  try {
    // throw new Error("NETWORK_ERROR");
    if (!city) {
      throw new Error("City is required");
    }
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
    );
    if (!geoRes.ok) {
      throw new Error("Failed to fetch location");
    }
    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("NO_RESULT");
    }
    const { latitude, longitude, name, country } = geoData.results[0];
    const params = new URLSearchParams({
      latitude,
      longitude,
      current_weather: "true",
      hourly: "relativehumidity_2m,apparent_temperature,precipitation",
      timezone: "auto",
    });
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?${params}`,
    );
    if (!weatherRes.ok) {
      throw new Error("Failed to fetch weather");
    }
    const weatherData = await weatherRes.json();
    return {
      location: { name, country },
      weather: weatherData,
    };
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("NETWORK_ERROR");
    }
    throw error;
  }
};

export default WeatherApi;
