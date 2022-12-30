export {}

declare global {
  interface Date {
    beginMonthOf(month: number): number;
    daysInMonth(month: number, year: number): number;
  }
}

Date.prototype.beginMonthOf = (month: number): number => {
  const date = new Date();
  return new Date(date.getFullYear() + "-" + month + "-01").getDay();
}

Date.prototype.daysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate()
}
