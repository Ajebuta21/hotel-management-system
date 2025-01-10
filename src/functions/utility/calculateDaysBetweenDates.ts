export function calculateDaysBetweenDates(date1: Date, date2: Date): number {
  const diffInMs = Math.abs(
    new Date(date2).getTime() - new Date(date1).getTime()
  );
  const answer = diffInMs / (1000 * 60 * 60 * 24);
  return parseInt(answer.toFixed(0));
}
