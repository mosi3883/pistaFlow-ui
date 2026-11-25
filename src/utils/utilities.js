import entries from '../components/deliveries/entries';

export const today = new Date();

export const todayString = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, '0'),
  String(today.getDate()).padStart(2, '0'),
].join('-');
export const yesterdayString = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, '0'),
  String(today.getDate() - 1).padStart(2, '0'),
].join('-');

export function getEntriesByDate(date = todayString) {
  return entries.filter((entry) => entry.date === date);
}

// export function getCustomerEntries(userId) {
//   return entries.filter((e) => (e.userId = userId));
// }

export const sumTotalEntriesWeight = entries.reduce((acc, cur) => {
  return acc + cur.netWeight;
}, 0);

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
