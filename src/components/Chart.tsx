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
    { date: "Jan 1, 2025", totalInvoice: 55, openPayments: 28, closedPayments: 80 },
    { date: "Feb 1, 2025", totalInvoice: 65, openPayments: 58, closedPayments: 25 },
    { date: "Mar 1, 2025", totalInvoice: 60, openPayments: 15, closedPayments: 45 },
    { date: "Apr 1, 2025", totalInvoice: 25, openPayments: 60, closedPayments: 67 },
    { date: "May 1, 2025", totalInvoice: 70, openPayments: 42, closedPayments: 55 },
    { date: "Jun 1, 2025", totalInvoice: 40, openPayments: 27, closedPayments: 36 },
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
            barCategoryGap={10}
            barGap={8}
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
                        color: "#1e293b", 
                        fontSize: "12px",
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
