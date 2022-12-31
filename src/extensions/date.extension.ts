export {}

declare global {
  interface Date {
    beginMonthOf(month: number, year: number): number;
    daysInMonth(month: number, year: number): number;
  }
}

Date.prototype.beginMonthOf = (month: number, year : number): number => {
  const beginMonth = new Date(year, month, 1).getDay();
  return (beginMonth === 0) ? 6 : beginMonth - 1;
}

Date.prototype.daysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate()
}
