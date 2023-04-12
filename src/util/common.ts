export function timeFormat(day: string) {
  let [date, time] = day.split('T');
  time = time.split(':').slice(0, 2).join(':');
  return [date, ' ', time];
}