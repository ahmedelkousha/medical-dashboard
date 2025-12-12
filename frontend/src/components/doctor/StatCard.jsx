export default function StatCard({ title, value, color, icon: Icon }) {
  const colorMap = {
    purple: "bg-[#7a6efe]",
    pink: "bg-[#ff5363]",
    orange: "bg-[#ffa901]",
    blue: "bg-[#24a8fa]",
  };

  return (
    <div className={`${colorMap[color]} rounded-2xl p-6 text-white`}>
      <div className="flex items-center gap-5">
        <div className="p-3 bg-white/20 rounded-full">
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <p className="text-3xl font-bold">{value}</p>
          <p className="text-sm opacity-90 font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
}
