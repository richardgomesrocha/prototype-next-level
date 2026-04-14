import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Citrus, Paperclip, Send, User, LogOut, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { TipoManifestacao, tipoLabels } from "@/data/mockData";

const AlunoForm = () => {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState<TipoManifestacao>("sugestao");
  const [descricao, setDescricao] = useState("");
  const [anonimo, setAnonimo] = useState(true);
  const [arquivo, setArquivo] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!descricao.trim()) {
      toast.error("Por favor, escreva sua manifestação.");
      return;
    }
    toast.success("Manifestação enviada com sucesso! Protocolo: #116");
    setDescricao("");
    setArquivo(null);
  };

  return (
    <div className="min-h-screen gradient-dashboard">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold font-display text-gradient-brand">SO</span>
            <Citrus className="w-6 h-6 text-secondary -mx-0.5" />
            <span className="text-2xl font-bold font-display text-gradient-brand">A</span>
          </div>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          {/* Welcome */}
          <div className="flex items-center gap-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full border-2 border-primary/30 bg-muted flex items-center justify-center">
              <User className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display">
                Olá, <span className="text-gradient-brand">Aluno!</span>
              </h1>
              <p className="text-sm text-muted-foreground">Envie sua manifestação de forma segura</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Type selector */}
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Tipo da Manifestação</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(Object.entries(tipoLabels) as [TipoManifestacao, string][]).map(([key, label]) => (
                  <button
                    type="button"
                    key={key}
                    onClick={() => setTipo(key)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                      tipo === key
                        ? "bg-primary/15 border-primary/50 text-primary"
                        : "bg-muted border-border text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Sua Manifestação</label>
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Escreva sua manifestação aqui..."
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition"
              />
            </div>

            {/* Options */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              {/* Anonymous toggle */}
              <button
                type="button"
                onClick={() => setAnonimo(!anonimo)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all flex-1 ${
                  anonimo
                    ? "bg-primary/10 border-primary/40 text-primary"
                    : "bg-muted border-border text-muted-foreground"
                }`}
              >
                {anonimo ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                <span className="text-sm font-medium">
                  {anonimo ? "Envio Anônimo ativo" : "Envio Identificado"}
                </span>
              </button>

              {/* File upload */}
              <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-muted text-muted-foreground hover:border-primary/30 cursor-pointer transition flex-1">
                <Paperclip className="w-5 h-5" />
                <span className="text-sm font-medium truncate">
                  {arquivo ? arquivo.name : "Anexar Arquivo (Máx 6MB)"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setArquivo(e.target.files?.[0] || null)}
                />
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg font-display hover:opacity-90 transition shadow-lg animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <Send className="w-5 h-5" />
              Enviar Manifestação
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AlunoForm;
