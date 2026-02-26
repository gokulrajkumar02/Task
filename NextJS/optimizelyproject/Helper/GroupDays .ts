const DAYS = 7;
const HOURS_PER_DAY = 24;

interface HourlyData {
  time: string[];
  apparent_temperature: number[];
  precipitation: number[];
  relativehumidity_2m: number[];
}

export interface GroupedDay {
  date: string;
  time: string[];
  apparent_temperature: number[];
  precipitation: number[];
  humidity: number[];
}

const groupDays = (hourly: HourlyData): GroupedDay[] => {

  return Array.from({ length: DAYS }, (_, day) => {
    const start = day * HOURS_PER_DAY;
    const end = start + HOURS_PER_DAY;
    const slice = <T>(arr: T[]) => arr.slice(start, end);

    return {
      date: hourly.time[start].split("T")[0],
      time: slice(hourly.time),
      apparent_temperature: slice(hourly.apparent_temperature),
      precipitation: slice(hourly.precipitation),
      humidity: slice(hourly.relativehumidity_2m),
    };
  });
};

export default groupDays;
