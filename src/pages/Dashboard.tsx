import { Link } from "react-router-dom";
import { Clock, CheckCircle, Search, AlertTriangle, ChevronRight, TrendingUp } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import StatusBadge from "@/components/StatusBadge";
import TipoBadge from "@/components/TipoBadge";
import { manifestacoes } from "@/data/mockData";

const Dashboard = () => {
  const pendentes = manifestacoes.filter((m) => m.status === "pendente").length;
  const resolvidos = manifestacoes.filter((m) => m.status === "resolvido").length;
  const emAnalise = manifestacoes.filter((m) => m.status === "em_analise").length;
  const total = manifestacoes.length;

  const recentes = manifestacoes.slice(0, 5);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold font-display">
            Bem-vindo, <span className="text-gradient-brand">Gestor!</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            Escola Estadual CDE — Painel de Ouvidoria
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total" value={total} icon={TrendingUp} color="primary" delay={0} />
          <StatCard label="Pendentes" value={pendentes} icon={Clock} color="warning" delay={100} />
          <StatCard label="Em Análise" value={emAnalise} icon={Search} color="info" delay={200} />
          <StatCard label="Resolvidos" value={resolvidos} icon={CheckCircle} color="success" delay={300} />
        </div>

        {/* Recent */}
        <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold font-display">Últimas Manifestações</h2>
            <Link
              to="/manifestacoes"
              className="flex items-center gap-1 text-sm text-primary hover:underline font-medium"
            >
              Ver todas
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentes.map((m, i) => (
              <Link
                key={m.id}
                to={`/manifestacao/${m.id}`}
                className="block rounded-xl border border-border/50 bg-card/50 backdrop-blur p-4 hover:bg-card/80 hover:border-primary/30 transition-all group animate-slide-in"
                style={{ animationDelay: `${500 + i * 80}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="hidden sm:flex w-10 h-10 rounded-lg bg-muted items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold truncate group-hover:text-primary transition">
                        {m.protocolo} — {m.titulo}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {m.data} · {m.anonimo ? "Anônimo" : m.autor}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <TipoBadge tipo={m.tipo} />
                    <StatusBadge status={m.status} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
