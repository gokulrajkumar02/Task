const toFahrenheit = (temp: number): number => (temp * 9) / 5 + 32;

const getMinMax = (value: { apparent_temperature?: number[] }, unit: string): [number, number] => {
  const temps = value?.apparent_temperature;
  
  if (!temps?.length) return [0, 0];
  const convertedFahrenheit = unit === "celsius" ? temps : temps.map(toFahrenheit);
  return [Math.max(...convertedFahrenheit), Math.min(...convertedFahrenheit)];
};

export default getMinMax;