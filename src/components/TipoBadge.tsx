import { TipoManifestacao, tipoLabels } from "@/data/mockData";

const tipoStyles: Record<TipoManifestacao, string> = {
  critica: "bg-destructive/15 text-destructive border-destructive/30",
  sugestao: "bg-info/15 text-info border-info/30",
  elogio: "bg-success/15 text-success border-success/30",
  reclamacao: "bg-warning/15 text-warning border-warning/30",
  denuncia: "bg-destructive/20 text-destructive border-destructive/40",
};

const TipoBadge = ({ tipo }: { tipo: TipoManifestacao }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${tipoStyles[tipo]}`}>
    {tipoLabels[tipo]}
  </span>
);

export default TipoBadge;
