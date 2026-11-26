import entries from '../components/deliveries/entries';

export const todayDate = new Date();
export const yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);
function formatDateToString(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');
}
export const todayDateString = formatDateToString(todayDate);
export const yesterdayDateString = formatDateToString(yesterdayDate);

export function getDeliveriesByDate(dateString = todayDateString) {
  return entries.filter((delivery) => delivery.dateString === dateString);
}

// export function getCustomerEntries(userId) {
//   return entries.filter((e) => (e.userId = userId));
// }

export const totalSeasonNetWeight = entries.reduce((acc, delivery) => acc + (delivery.netWeight ?? 0), 0);
// gets date strings and returns sum of weights in that date
export function getTotalNetWeightByDate(dateString) {
  return getDeliveriesByDate(dateString).reduce((total, delivery) => total + (delivery.netWeight ?? 0), 0);
}

export const customerNetWeightTotals = Object.values(
  entries.reduce((acc, delivery) => {
    const { userId, customerName, netWeight } = delivery;

    if (!acc[userId]) {
      acc[userId] = {
        userId,
        customerName,
        totalSeasonNetWeight: 0,
      };
    }

    acc[userId].totalSeasonNetWeight += netWeight ?? 0;

    return acc;
  }, {}),
);
// returns number
export function getTodayWeightChangePercent() {
  const todayWeights = getTotalNetWeightByDate(todayDateString);
  const yesterdayWeights = getTotalNetWeightByDate(yesterdayDateString);
  return yesterdayWeights === 0
    ? null
    : Number((((todayWeights - yesterdayWeights) / yesterdayWeights) * 100).toFixed(2));
}
