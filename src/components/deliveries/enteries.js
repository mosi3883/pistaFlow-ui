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

const pistaTypes = ['فندقی', 'اکبری', 'احمدآقایی', 'کله‌قوچی'];

const entries = Array.from({ length: 200 }, (_, index) => {
  const id = index + 1;
  const userId = (index % 20) + 1;
  const grossWeight = 5200 + ((id * 137) % 3100);

  const tareWeight = id % 9 === 0 || id % 17 === 0 ? null : 1800 + ((id * 71) % 1100);

  return {
    id,
    userId,
    customerName: customers[userId - 1],
    code: 100 + ((id * 47) % 901),
    pistaType: pistaTypes[index % 4],
    date: `1405/07/${String((index % 30) + 1).padStart(2, '0')}`,
    grossWeight,
    tareWeight,
    netWeight: tareWeight === null ? null : grossWeight - tareWeight,
  };
});
export default entries;
