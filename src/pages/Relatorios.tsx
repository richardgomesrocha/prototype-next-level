import DashboardLayout from "@/components/DashboardLayout";
import { manifestacoes, tipoLabels, TipoManifestacao } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const CHART_COLORS = [
  "hsl(0, 72%, 51%)",
  "hsl(225, 100%, 50%)",
  "hsl(145, 60%, 45%)",
  "hsl(38, 92%, 50%)",
  "hsl(0, 72%, 40%)",
];

const Relatorios = () => {
  // Data by type
  const tipoCount = Object.keys(tipoLabels).map((key, i) => ({
    name: tipoLabels[key as TipoManifestacao],
    quantidade: manifestacoes.filter((m) => m.tipo === key).length,
    fill: CHART_COLORS[i],
  }));

  // Data by status
  const statusData = [
    { name: "Pendente", value: manifestacoes.filter((m) => m.status === "pendente").length, color: "hsl(38, 92%, 50%)" },
    { name: "Em Análise", value: manifestacoes.filter((m) => m.status === "em_analise").length, color: "hsl(225, 100%, 50%)" },
    { name: "Resolvido", value: manifestacoes.filter((m) => m.status === "resolvido").length, color: "hsl(145, 60%, 45%)" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold font-display animate-fade-in">Relatórios</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar chart */}
          <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h2 className="text-lg font-bold font-display mb-4">Por Tipo</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={tipoCount}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 20%)" />
                <XAxis dataKey="name" tick={{ fill: "hsl(220, 10%, 60%)", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(220, 10%, 60%)", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(220, 25%, 12%)",
                    border: "1px solid hsl(220, 20%, 20%)",
                    borderRadius: "8px",
                    color: "hsl(0, 0%, 98%)",
                  }}
                />
                <Bar dataKey="quantidade" radius={[6, 6, 0, 0]}>
                  {tipoCount.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie chart */}
          <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-lg font-bold font-display mb-4">Por Status</h2>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {statusData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "hsl(220, 25%, 12%)",
                    border: "1px solid hsl(220, 20%, 20%)",
                    borderRadius: "8px",
                    color: "hsl(0, 0%, 98%)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur p-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h2 className="text-lg font-bold font-display mb-4">Resumo Geral</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold font-display text-primary">{manifestacoes.length}</p>
              <p className="text-sm text-muted-foreground mt-1">Total</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-display text-success">
                {Math.round((manifestacoes.filter((m) => m.status === "resolvido").length / manifestacoes.length) * 100)}%
              </p>
              <p className="text-sm text-muted-foreground mt-1">Taxa de Resolução</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-display text-warning">
                {manifestacoes.filter((m) => m.anonimo).length}
              </p>
              <p className="text-sm text-muted-foreground mt-1">Anônimas</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-display text-info">
                {manifestacoes.filter((m) => !m.anonimo).length}
              </p>
              <p className="text-sm text-muted-foreground mt-1">Identificadas</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Relatorios;
