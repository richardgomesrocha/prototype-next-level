import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, User, Calendar, Tag } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import StatusBadge from "@/components/StatusBadge";
import TipoBadge from "@/components/TipoBadge";
import { manifestacoes, StatusManifestacao, statusLabels } from "@/data/mockData";
import { toast } from "sonner";

const ManifestacaoDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const manifestacao = manifestacoes.find((m) => m.id === Number(id));

  const [resposta, setResposta] = useState(manifestacao?.resposta || "");
  const [status, setStatus] = useState<StatusManifestacao>(manifestacao?.status || "pendente");

  if (!manifestacao) {
    return (
      <DashboardLayout>
        <p className="text-muted-foreground">Manifestação não encontrada.</p>
      </DashboardLayout>
    );
  }

  const handleSalvar = () => {
    toast.success("Resposta salva e enviada com sucesso!");
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a lista
        </button>

        {/* Header */}
        <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur p-6 space-y-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold font-display">
                Chamado {manifestacao.protocolo}
              </h1>
              <p className="text-lg font-medium mt-1">{manifestacao.titulo}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <TipoBadge tipo={manifestacao.tipo} />
              <StatusBadge status={manifestacao.status} />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {manifestacao.data}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {manifestacao.anonimo ? "Anônimo" : manifestacao.autor}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              {manifestacao.protocolo}
            </span>
          </div>

          <div className="pt-4 border-t border-border/50">
            <p className="text-foreground/90 leading-relaxed italic">
              "{manifestacao.descricao}"
            </p>
          </div>
        </div>

        {/* Response */}
        <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur p-6 space-y-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h2 className="text-lg font-bold font-display">Resposta</h2>

          <div className="space-y-3">
            <label className="text-sm font-medium text-muted-foreground">Alterar Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as StatusManifestacao)}
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {Object.entries(statusLabels).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-muted-foreground">Resposta ao Manifestante</label>
            <textarea
              value={resposta}
              onChange={(e) => setResposta(e.target.value)}
              placeholder="Escreva sua resposta aqui..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>

          <button
            onClick={handleSalvar}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold font-display hover:opacity-90 transition shadow-lg"
          >
            <Send className="w-4 h-4" />
            Salvar e Enviar
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManifestacaoDetalhe;
