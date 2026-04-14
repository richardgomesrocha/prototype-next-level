import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Citrus } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState<"gestor" | "aluno">("gestor");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "gestor") {
      navigate("/dashboard");
    } else {
      navigate("/aluno");
    }
  };

  return (
    <div className="min-h-screen gradient-login flex flex-col items-center justify-center px-4">
      {/* Avatar */}
      <div className="mb-2">
        <div className="w-28 h-28 rounded-full border-4 border-foreground/20 flex items-center justify-center bg-primary/20">
          <User className="w-16 h-16 text-foreground/80" strokeWidth={1.5} />
        </div>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-1 mb-1">
        <h1 className="text-4xl font-bold font-display tracking-tight text-primary-foreground">
          SO
        </h1>
        <Citrus className="w-9 h-9 text-secondary -mx-0.5" />
        <h1 className="text-4xl font-bold font-display tracking-tight text-primary-foreground">
          A
        </h1>
      </div>
      <p className="text-primary-foreground/70 text-lg font-display mb-8">
        Sistema de Ouvidoria
      </p>

      {/* Role selector */}
      <div className="flex gap-2 mb-6 bg-primary-foreground/10 rounded-full p-1">
        <button
          onClick={() => setRole("gestor")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            role === "gestor"
              ? "bg-primary-foreground text-primary shadow-md"
              : "text-primary-foreground/70 hover:text-primary-foreground"
          }`}
        >
          Gestor
        </button>
        <button
          onClick={() => setRole("aluno")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            role === "aluno"
              ? "bg-primary-foreground text-primary shadow-md"
              : "text-primary-foreground/70 hover:text-primary-foreground"
          }`}
        >
          Aluno
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-foreground text-background font-medium placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-foreground text-background font-medium placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-xl bg-primary-foreground text-primary font-bold text-lg font-display tracking-wide hover:opacity-90 transition shadow-lg"
        >
          ENTRAR
        </button>
      </form>

      <button className="mt-6 text-primary-foreground/60 hover:text-primary-foreground text-sm underline underline-offset-4 transition">
        Esqueci minha senha
      </button>
    </div>
  );
};

export default Login;
