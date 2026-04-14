import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import StatusBadge from "@/components/StatusBadge";
import TipoBadge from "@/components/TipoBadge";
import { manifestacoes, StatusManifestacao, TipoManifestacao, tipoLabels, statusLabels } from "@/data/mockData";

const Manifestacoes = () => {
  const [filtroStatus, setFiltroStatus] = useState<StatusManifestacao | "todos">("todos");
  const [filtroTipo, setFiltroTipo] = useState<TipoManifestacao | "todos">("todos");
  const [busca, setBusca] = useState("");

  const filtered = manifestacoes.filter((m) => {
    if (filtroStatus !== "todos" && m.status !== filtroStatus) return false;
    if (filtroTipo !== "todos" && m.tipo !== filtroTipo) return false;
    if (busca && !m.titulo.toLowerCase().includes(busca.toLowerCase()) && !m.descricao.toLowerCase().includes(busca.toLowerCase())) return false;
    return true;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold font-display animate-fade-in">Manifestações</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar manifestações..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition text-sm"
            />
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <select
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value as StatusManifestacao | "todos")}
                className="pl-9 pr-8 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="todos">Todos Status</option>
                {Object.entries(statusLabels).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>
            <select
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value as TipoManifestacao | "todos")}
              className="px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="todos">Todos Tipos</option>
              {Object.entries(tipoLabels).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-border/50 overflow-hidden animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50 border-b border-border/50">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Protocolo</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Data</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Título</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tipo</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ação</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m, i) => (
                  <tr
                    key={m.id}
                    className="border-b border-border/30 hover:bg-muted/30 transition animate-slide-in"
                    style={{ animationDelay: `${300 + i * 60}ms` }}
                  >
                    <td className="px-4 py-3 font-mono text-sm font-semibold text-primary">{m.protocolo}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{m.data}</td>
                    <td className="px-4 py-3 text-sm font-medium max-w-[200px] truncate">{m.titulo}</td>
                    <td className="px-4 py-3"><TipoBadge tipo={m.tipo} /></td>
                    <td className="px-4 py-3"><StatusBadge status={m.status} /></td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        to={`/manifestacao/${m.id}`}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Abrir
                      </Link>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-muted-foreground">
                      Nenhuma manifestação encontrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Manifestacoes;
