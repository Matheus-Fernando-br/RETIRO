# ⛪ Retiro VOLTEMOS 2027 — Sistema de Inscrições

Sistema web para gestão de inscrições e pagamentos do Retiro Anual da Igreja Centro Internacional de Avivamento Primavera. Conta com fluxo de inscrição em 3 etapas para os participantes e um painel administrativo protegido para a organização.

---

## 🛠️ Tecnologias & Deploy

- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS, Lucide React → **[Vercel](https://retirovoltemos.vercel.app/)**
- **Backend:** Python, FastAPI, Pydantic, PyJWT, Uvicorn → **[Render](https://retiro-p2w8.onrender.com)**
- **Banco de Dados:** PostgreSQL → **Supabase**

---

## 🔄 Arquitetura do Sistema

```text
[ Next.js (Frontend) ] ──( REST API )──> [ FastAPI (Backend) ] ──( Supabase SDK )──> [ PostgreSQL (Database) ]

luxos Principais
Participante: Home → Etapa 1 (Dados) → Etapa 2 (Retiro) → Etapa 3 (Pagamento: PIX/Cartão) → Sucesso.

Administrador: Login /admin/login → Autenticação JWT → Painel /admin → Gestão de Inscrições e Pagamentos.

📁 Estrutura Simplificada

RETIRO/
├── frontend/             # Aplicação Next.js (Páginas, componentes e assets)
│   ├── app/
│   │   ├── admin/        # Login e Dashboard
│   │   └── inscricao/    # Fluxo em etapas (1, 2, 3 e Sucesso)
│   └── public/           # Imagens e assets estáticos
└── backend/              # API FastAPI (Rotas, Schemas e Serviços)
    └── app/
        ├── db/           # Conexão Supabase
        ├── routes/       # Endpoints de inscrições e admin
        └── main.py       # Ponto de entrada da aplicação
```

⚙️ Variáveis de Ambiente
Frontend (frontend/.env.local)
NEXT_PUBLIC_API_URL=http://localhost:8000

# Produção: [https://retiro-p2w8.onrender.com](https://retiro-p2w8.onrender.com)

Backend (backend/.env)
SUPABASE_URL=[https://SEU-PROJETO.supabase.co](https://SEU-PROJETO.supabase.co)
SUPABASE_KEY=SUA_CHAVE_SUPABASE
FRONTEND_URL=[https://retirovoltemos.vercel.app](https://retirovoltemos.vercel.app)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=sua_senha_admin
ADMIN_JWT_SECRET=sua_chave_jwt_secreta
💻 Executando Localmente

1. Backend
   cd backend
   source venv/bin/activate
   uvicorn app.main:app --reload
   Acesse em: http://localhost:8000 | Swagger: http://localhost:8000/docs

2. Frontend
   cd frontend
   npm install
   npm run dev
   Acesse em: http://localhost:3000
