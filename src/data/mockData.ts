export type TipoManifestacao = "critica" | "sugestao" | "elogio" | "reclamacao" | "denuncia";
export type StatusManifestacao = "pendente" | "em_analise" | "resolvido" | "arquivado";

export interface Manifestacao {
  id: number;
  protocolo: string;
  tipo: TipoManifestacao;
  status: StatusManifestacao;
  data: string;
  autor: string;
  anonimo: boolean;
  titulo: string;
  descricao: string;
  resposta?: string;
  anexo?: string;
}

export const manifestacoes: Manifestacao[] = [
  {
    id: 1, protocolo: "#115", tipo: "critica", status: "em_analise",
    data: "27/03/2026", autor: "Anônimo", anonimo: true,
    titulo: "Problemas com a internet",
    descricao: "A internet em algumas salas e laboratórios caem com frequência, prejudicando as aulas e atividades online.",
  },
  {
    id: 2, protocolo: "#114", tipo: "sugestao", status: "resolvido",
    data: "26/03/2026", autor: "Maria Silva", anonimo: false,
    titulo: "Horário da biblioteca",
    descricao: "Sugiro que a biblioteca funcione também aos sábados pela manhã para apoiar os alunos nos estudos.",
    resposta: "Obrigado pela sugestão! Iremos avaliar a viabilidade de estender o horário.",
  },
  {
    id: 3, protocolo: "#113", tipo: "reclamacao", status: "pendente",
    data: "25/03/2026", autor: "Anônimo", anonimo: true,
    titulo: "Banheiros em condições precárias",
    descricao: "Os banheiros do bloco B estão em péssimas condições de higiene e manutenção.",
  },
  {
    id: 4, protocolo: "#112", tipo: "elogio", status: "resolvido",
    data: "24/03/2026", autor: "João Santos", anonimo: false,
    titulo: "Excelente aula de robótica",
    descricao: "Parabéns ao professor Carlos pela excelente aula de robótica! Os alunos ficaram muito motivados.",
    resposta: "Agradecemos o elogio! O professor Carlos ficou muito feliz com o reconhecimento.",
  },
  {
    id: 5, protocolo: "#111", tipo: "denuncia", status: "pendente",
    data: "23/03/2026", autor: "Anônimo", anonimo: true,
    titulo: "Bullying no intervalo",
    descricao: "Tenho presenciado casos de bullying no pátio durante o intervalo. Alguns alunos estão sendo intimidados.",
  },
  {
    id: 6, protocolo: "#110", tipo: "critica", status: "em_analise",
    data: "22/03/2026", autor: "Ana Oliveira", anonimo: false,
    titulo: "Falta de material didático",
    descricao: "Algumas disciplinas estão sem material didático atualizado, dificultando o aprendizado.",
  },
  {
    id: 7, protocolo: "#109", tipo: "sugestao", status: "pendente",
    data: "21/03/2026", autor: "Pedro Lima", anonimo: false,
    titulo: "Criar um grêmio estudantil",
    descricao: "Sugiro a criação de um grêmio estudantil para representar os alunos nas decisões da escola.",
  },
  {
    id: 8, protocolo: "#108", tipo: "reclamacao", status: "resolvido",
    data: "20/03/2026", autor: "Anônimo", anonimo: true,
    titulo: "Ar condicionado quebrado",
    descricao: "O ar condicionado da sala 205 está quebrado há duas semanas e as aulas ficam insuportáveis.",
    resposta: "O reparo foi realizado. Caso o problema persista, por favor nos avise novamente.",
  },
];

export const tipoLabels: Record<TipoManifestacao, string> = {
  critica: "Crítica",
  sugestao: "Sugestão",
  elogio: "Elogio",
  reclamacao: "Reclamação",
  denuncia: "Denúncia",
};

export const statusLabels: Record<StatusManifestacao, string> = {
  pendente: "Pendente",
  em_analise: "Em Análise",
  resolvido: "Resolvido",
  arquivado: "Arquivado",
};
