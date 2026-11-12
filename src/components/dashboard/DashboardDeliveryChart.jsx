import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'آبان ۴',
    uv: 27562,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'آبان ۵',
    uv: 24362,
    pv: 4567,
    amt: 2400,
  },
  {
    name: 'آبان ۶',
    uv: 12750,
    pv: 1398,
    amt: 2400,
  },
  {
    name: 'آبان ۷',
    uv: 34152,
    pv: 9800,
    amt: 2400,
  },
  {
    name: 'آبان ۸',
    uv: 30856,
    pv: 3908,
    amt: 2400,
  },
  {
    name: 'آبان ۹',
    uv: 24850,
    pv: 4800,
    amt: 2400,
  },
];

// #endregion
function DashboardDeliveryChart() {
  return (
    <LineChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
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
      <Line type='monotone' dataKey='uv' strokeWidth={2} name='My data series name' />
      <XAxis dataKey='name' />
      <YAxis width='auto' label={{ value: 'UV', position: 'insideLeft', angle: -90 }} />
      <Legend position='insideBottomRight' />
      <Tooltip />
      {/* <RechartsDevtools /> */}
    </LineChart>
  );
}
export default DashboardDeliveryChart;
