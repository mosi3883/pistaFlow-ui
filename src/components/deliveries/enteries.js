const customers = [
  'علی احمدی',
  'محمد رضایی',
  'حسین کریمی',
  'رضا محمدی',
  'مهدی حسینی',
  'احمد مرادی',
  'امیر جعفری',
  'محسن اکبری',
  'سعید قاسمی',
  'مجید حیدری',
  'حمید رحیمی',
  'علی‌رضا موسوی',
  'محمدعلی صادقی',
  'عباس نوری',
  'جواد رستمی',
  'فرهاد شریفی',
  'یاسر محمودی',
  'بهنام کاظمی',
  'وحید عباسی',
  'حسن زمانی',
];
const startDate = new Date(2026, 10, 23);
const endDate = new Date(2026, 12, 22);

const pistaTypes = ['فندقی', 'اکبری', 'احمدآقایی', 'کله‌قوچی'];

const entries = Array.from({ length: 200 }, (_, index) => {
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  const id = index + 1;
  const userId = (index % 20) + 1;
  const grossWeight = 5200 + ((id * 137) % 3100);

  const tareWeight = id % 9 === 0 || id % 17 === 0 ? null : 1800 + ((id * 71) % 1100);
  const date = randomDate.toISOString().split('T')[0];
  return {
    id,
    userId,
    customerName: customers[userId - 1],
    code: 100 + ((id * 47) % 901),
    pistaType: pistaTypes[index % 4],
    date,
    grossWeight,
    tareWeight,
    netWeight: tareWeight === null ? null : grossWeight - tareWeight,
  };
});
console.log(entries);
export default entries;
