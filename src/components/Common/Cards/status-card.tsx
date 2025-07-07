type StatCardProps = {
  iconClass: string;
  value: string | number;
  label: string;
};

export const StatCard = ({ iconClass, value, label }: StatCardProps) => (
  <div className="md:flex items-center  mx-2 ">
    <i className={`${iconClass} text-5xl text-white-900`}></i>
    <div>
      <p className="text-xl font-bold text-white-900">{value}</p>
      <p className="text-sm text-white-700 hidden md:block">{label}</p>
    </div>
  </div>
);
