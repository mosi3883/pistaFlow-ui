import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'آبان ۴',
    weight: 27562,
  },
  {
    name: 'آبان ۵',
    weight: 24362,
  },
  {
    name: 'آبان ۶',
    weight: 12750,
  },
  {
    name: 'آبان ۷',
    weight: 34152,
  },
  {
    name: 'آبان ۸',
    weight: 30856,
  },
  {
    name: 'آبان ۹',
    weight: 24850,
  },
  {
    name: 'آبان ۱۰',
    weight: 12750,
  },
  {
    name: 'آبان ۱۱',
    weight: 34152,
  },
  {
    name: 'آبان ۱۲',
    weight: 30856,
  },
  {
    name: 'آبان ۱۳',
    weight: 24850,
  },
];

// #endregion
function DashboardDeliveryChart() {
  return (
    <LineChart
      style={{ width: '100%', aspectRatio: 3, maxWidth: 768 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid strokeDasharray='5 5' />
      <Line type='monotone' dataKey='weight' strokeWidth={2} name='ورودی روز' />
      <XAxis dataKey='name' />
      <YAxis width='auto' label={{ value: 'وزن ورودی', position: 'insideLeft', angle: -90 }} />
      <Legend position='insideBottomRight' />
      <Tooltip />
      {/* <RechartsDevtools /> */}
    </LineChart>
  );
}
export default DashboardDeliveryChart;
