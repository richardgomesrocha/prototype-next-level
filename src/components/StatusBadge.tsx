import { StatusManifestacao, statusLabels } from "@/data/mockData";

const statusStyles: Record<StatusManifestacao, string> = {
  pendente: "bg-warning/15 text-warning border-warning/30",
  em_analise: "bg-info/15 text-info border-info/30",
  resolvido: "bg-success/15 text-success border-success/30",
  arquivado: "bg-muted text-muted-foreground border-border",
};

const StatusBadge = ({ status }: { status: StatusManifestacao }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${statusStyles[status]}`}>
    {statusLabels[status]}
  </span>
);

export default StatusBadge;
