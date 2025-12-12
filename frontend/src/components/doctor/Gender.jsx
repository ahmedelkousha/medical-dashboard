import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Male", value: 45 },
    { name: "Female", value: 30 },
    { name: "Child", value: 25 },
];

const COLORS = ["#FFA500", "#8A63FF", "#2DB8FF"];

export default function Gender() {
  return (
    <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center w-full">
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((e, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="transparent"
            />
          ))}
        </Pie>
      </PieChart>

      <div className="flex justify-center gap-6 mt-5 text-sm">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[i] }}
              />
              <span>{item.name}</span>
            </div>
            <p className="text-gray-500">{item.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
