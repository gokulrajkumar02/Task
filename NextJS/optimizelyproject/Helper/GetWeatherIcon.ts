const WEATHER_THRESHOLDS = [
  { min: 35, icon: "☀️" },
  { min: 28, icon: "🌤️" },
  { min: 20, icon: "⛅" },
  { min: 10, icon: "🌥️" },
  { min: 0,  icon: "🌧️" },
];
const getWeatherIcon = (avgTemp: number): string => {
  return WEATHER_THRESHOLDS.find(({ min }) => avgTemp >= min)?.icon ?? "❄️";
};

export default getWeatherIcon;