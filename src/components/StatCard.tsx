import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  color: "primary" | "success" | "warning" | "info" | "destructive";
  delay?: number;
}

const colorMap = {
  primary: "bg-primary/15 text-primary border-primary/20",
  success: "bg-success/15 text-success border-success/20",
  warning: "bg-warning/15 text-warning border-warning/20",
  info: "bg-info/15 text-info border-info/20",
  destructive: "bg-destructive/15 text-destructive border-destructive/20",
};

const iconBgMap = {
  primary: "bg-primary/20",
  success: "bg-success/20",
  warning: "bg-warning/20",
  info: "bg-info/20",
  destructive: "bg-destructive/20",
};

const StatCard = ({ label, value, icon: Icon, color, delay = 0 }: StatCardProps) => {
  return (
    <div
      className={`rounded-xl border p-6 ${colorMap[color]} gradient-card animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium opacity-80">{label}</span>
        <div className={`w-10 h-10 rounded-lg ${iconBgMap[color]} flex items-center justify-center`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <p
        className="text-4xl font-bold font-display animate-count-up"
        style={{ animationDelay: `${delay + 200}ms` }}
      >
        {value}
      </p>
    </div>
  );
};

export default StatCard;
