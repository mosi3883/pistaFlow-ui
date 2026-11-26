import entries from '../components/deliveries/entries';

export const today = new Date();
export const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
function getDateString(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');
}
export const todayString = getDateString(today);
export const yesterdayString = getDateString(yesterday);

export function getEntriesByDate(date = todayString) {
  return entries.filter((entry) => entry.date === date);
}

// export function getCustomerEntries(userId) {
//   return entries.filter((e) => (e.userId = userId));
// }

export const sumTotalEntriesWeight = entries.reduce((acc, cur) => {
  return acc + cur.netWeight;
}, 0);
// gets date strings and returns sum of weights in that date
export function totalWeightInDate(dateStr) {
  return getEntriesByDate(dateStr).reduce((total, entry) => total + (entry.netWeight ?? 0), 0);
}

export const customerWeights = Object.values(
  entries.reduce((acc, entry) => {
    const { userId, customerName, netWeight } = entry;

    if (!acc[userId]) {
      acc[userId] = {
        userId,
        customerName,
        totalWeight: 0,
      };
    }

    acc[userId].totalWeight += netWeight ?? 0;

    return acc;
  }, {}),
);
// returns number
export function getTodayChange() {
  const todayWeights = totalWeightInDate(todayString);
  const yesterdayWeights = totalWeightInDate(yesterdayString);
  console.log(todayWeights, yesterdayWeights);
  if (yesterdayWeights === 0) {
    return 0;
  } else {
    return Number(((todayWeights - yesterdayWeights) / yesterdayWeights) * 100).toFixed(2);
  }
}
