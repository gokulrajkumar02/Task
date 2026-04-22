export const getDates = (days: number) => {
  const today = new Date();
  const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "short" });
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
  });

  return Array.from({ length: days }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    date.setHours(0, 0, 0, 0);

    const labelPrefix =
      i === 0 ? "Today" : i === 1 ? "Tomorrow" : dayFormatter.format(date);
    return {
      id: i,
      label: `${labelPrefix}, ${dateFormatter.format(date)}`,
      value: date,
      key: date.toDateString(),
    };
  });
};