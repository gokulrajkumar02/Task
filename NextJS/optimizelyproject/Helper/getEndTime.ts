export const getEndTime = (startTime: string, durationMin = 150) => {
  const [time, modifier] = startTime.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes + durationMin);

  let endHours = date.getHours();
  const endMinutes = date.getMinutes();

  const ampm = endHours >= 12 ? "PM" : "AM";
  endHours = endHours % 12 || 12;

  return `${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")} ${ampm}`;
};