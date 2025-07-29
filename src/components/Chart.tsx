// "use client";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from 'recharts';

// export default function Chart() {
//   const data = [
//     { date: '2025-07-01', crude: 400, gas: 300, diesel: 200 },
//     { date: '2025-07-02', crude: 420, gas: 320, diesel: 180 },
//     { date: '2025-07-03', crude: 410, gas: 310, diesel: 190 },
//     { date: '2025-07-04', crude: 430, gas: 330, diesel: 170 },
//     { date: '2025-07-05', crude: 440, gas: 340, diesel: 160 },
//   ];

//   const keys = ['crude', 'gas', 'diesel'];
//   const colors = ['#1e3a8a', '#10b981', '#f59e0b']; // Blue, Green, Amber

//   return (
//     <div className="w-full h-[350px] p-4 bg-white rounded-xl shadow">
//       <h2 className="text-lg font-semibold mb-4">Production Breakdown</h2>
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
//           <defs>
//             {keys.map((key, index) => (
//               <linearGradient id={`color-${key}`} key={key} x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor={colors[index]} stopOpacity={0.8} />
//                 <stop offset="95%" stopColor={colors[index]} stopOpacity={0} />
//               </linearGradient>
//             ))}
//           </defs>

//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />

//           {keys.map((key, index) => (
//             <Area
//               key={key}
//               type="monotone"
//               dataKey={key}
//               stackId="1"
//               stroke={colors[index]}
//               fill={`url(#color-${key})`}
//             />
//           ))}
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// components/Chart.tsx
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function Chart() {
  const data = [
    { date: "Jan 1, 2024", totalInvoice: 55, openPayments: 28, closedPayments: 80 },
    { date: "Feb 1, 2024", totalInvoice: 65, openPayments: 58, closedPayments: 25 },
    { date: "Mar 1, 2024", totalInvoice: 60, openPayments: 15, closedPayments: 45 },
    { date: "Apr 1, 2024", totalInvoice: 25, openPayments: 60, closedPayments: 67 },
    { date: "May 1, 2024", totalInvoice: 70, openPayments: 42, closedPayments: 55 },
    { date: "Jun 1, 2024", totalInvoice: 40, openPayments: 27, closedPayments: 36 },
  ];

  const keys = ["totalInvoice", "openPayments", "closedPayments"];
  const legend = ["Total Invoice", "Open Payments", "Closed Payments"];
  const colors = ["#FC5119", "#94D82D", "#CC5DE8"];
  return (
    <div className="w-full overflow-x-auto p-4 scroll-red bg-white rounded-xl shadow">
      <h2 className="text-md font-semibold mb-4">Payment Monitoring Graph</h2>

      <div className="min-w-[700px] h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            barCategoryGap={10} // space between date groups
            barGap={8} // space between bars within a group
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" style={{ fontSize: "12px" }} />
            <YAxis style={{ fontSize: "12px" }} />
            <Tooltip />
            <Legend
              content={({ payload }) => (
                <ul className="flex gap-4 mt-2">
                  {payload?.map((entry, index) => (
                    <li
                      key={`item-${index}`}
                      style={{
                        color: "#1e293b", // Change to your desired color
                        fontSize: "12px", // Decrease font size
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: 10,
                          height: 10,
                          backgroundColor: entry.color,
                          borderRadius: "2px",
                          marginRight: 4,
                        }}
                      />
                      {legend[index] ?? entry.value}
                    </li>
                  ))}
                </ul>
              )}
            />
            {keys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                fill={colors[index]}
                barSize={10}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
