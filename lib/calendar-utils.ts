export const months = [
  { name: "August 2025", year: 2025, month: 7 },
  { name: "September 2025", year: 2025, month: 8 },
];

export const getDaysInMonth = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];

  // Add empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Add days of month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return days;
};
