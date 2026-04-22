export const to12Hour = (time24h: string) => {
  const [h, m] = time24h.split(":").map(Number);
  const modifier = h >= 12 ? "PM" : "AM";
  const hours = h % 12 || 12;
  return `${hours}:${String(m).padStart(2, "0")} ${modifier}`;
};