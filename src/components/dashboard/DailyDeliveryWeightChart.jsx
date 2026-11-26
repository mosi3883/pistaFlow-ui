import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const dailyDeliveryWeightData = [
  {
    dateLabel: 'آبان ۴',
    netWeight: 27562,
  },
  {
    dateLabel: 'آبان ۵',
    netWeight: 24362,
  },
  {
    dateLabel: 'آبان ۶',
    netWeight: 12750,
  },
  {
    dateLabel: 'آبان ۷',
    netWeight: 34152,
  },
  {
    dateLabel: 'آبان ۸',
    netWeight: 30856,
  },
  {
    dateLabel: 'آبان ۹',
    netWeight: 24850,
  },
  {
    dateLabel: 'آبان ۱۰',
    netWeight: 12750,
  },
  {
    dateLabel: 'آبان ۱۱',
    netWeight: 34152,
  },
  {
    dateLabel: 'آبان ۱۲',
    netWeight: 30856,
  },
  {
    dateLabel: 'آبان ۱۳',
    netWeight: 24850,
  },
];

// #endregion
function DailyDeliveryWeightChart() {
  return (
    <LineChart
      style={{ width: '100%', aspectRatio: 3, maxWidth: 768 }}
      responsive
      data={dailyDeliveryWeightData}
      margin={{
        top: 20,
        right: 20,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid strokeDasharray='5 5' />
      <Line type='monotone' dataKey='netWeight' strokeWidth={2} name='ورودی روز' />
      <XAxis dataKey='dateLabel' />
      <YAxis width='auto' label={{ value: 'وزن ورودی', position: 'insideLeft', angle: -90 }} />
      <Legend position='insideBottomRight' />
      <Tooltip />
      {/* <RechartsDevtools /> */}
    </LineChart>
  );
}
export default DailyDeliveryWeightChart;
