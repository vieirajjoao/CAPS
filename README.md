# CAPS

API academica para gestao clinica com Node.js, Express, TypeScript, MySQL e Drizzle ORM.

## Visao Geral

O CAPS organiza o backend de uma clinica medica em torno de quatro dominios:

- usuarios
- pacientes
- consultas
- prontuario

O repositorio ja possui uma base executavel, configuracao de ambiente, middlewares globais, conexao com banco, schemas Drizzle e migrations versionadas. A documentacao foi ajustada para refletir o estado real do codigo e do banco, sem prometer implementacoes que ainda nao existem.

## Estado Atual do Projeto

Hoje o projeto contem:

- bootstrap HTTP com `app.ts` e `server.ts`
- validacao de ambiente com Zod em `src/config/env.ts`
- conexao com MySQL e Drizzle em `src/db/index.ts`
- 4 tabelas modeladas no Drizzle com dialeto MySQL
- migrations versionadas em `drizzle/`
- foreign keys reais entre `consultas` e `pacientes`/`usuarios`
- foreign keys reais entre `prontuario` e `pacientes`/`usuarios`
- modulo funcional de `Consulta` com routes, controller, service e repository
- estrutura modular pronta para evolucao dos outros dominios

## Stack

- TypeScript
- Node.js
- Express.js
- MySQL
- Drizzle ORM
- Zod

## Como Executar

1. Copie `.env.example` para `.env`.
2. Ajuste as variaveis de ambiente do banco.
3. Instale as dependencias:

```bash
npm install
```

4. Valide a base:

```bash
npm run check
```

5. Gere migrations com o Drizzle, quando necessario:

```bash
npm run db:generate
```

6. Aplique migrations:

```bash
npm run db:migrate
```

7. Rode em desenvolvimento:

```bash
npm run dev
```

## Variaveis de Ambiente

Exemplo base:

```env
APP_PORT=3333
NODE_ENV=development
DATABASE_URL=mysql://root:@localhost:3307/caps
DB_HOST=localhost
DB_PORT=3307
DB_USER=root
DB_PASSWORD=
DB_NAME=caps
```

## Scripts Disponiveis

- `npm run dev`: sobe o servidor com `tsx`
- `npm run build`: compila o projeto para `dist/`
- `npm run check`: executa `typecheck` e `build`
- `npm run start`: executa o servidor compilado
- `npm run typecheck`: valida a tipagem sem gerar artefatos
- `npm run db:generate`: gera migrations com Drizzle Kit
- `npm run db:migrate`: executa migrations
- `npm run db:studio`: abre o Drizzle Studio

## Estrutura Relevante

```text
CAPS/
|-- .github/
|   `-- PULL_REQUEST_TEMPLATE.md
|-- docs/
|   |-- README.md
|   |-- WORKLOG.md
|   |-- arquitetura-da-branch.md
|   |-- caps-flow.md
|   |-- checklist-equipe.md
|   |-- checklist-final-consulta.md
|   |-- das.md
|   |-- entrega-consulta.md
|   |-- guia-de-contribuicao.md
|   |-- modelagem-e-requisitos.md
|   |-- modelo-de-dados.md
|   `-- pull-request-consulta.md
|-- drizzle/
|   |-- 0000_smart_tenebrous.sql
|   |-- 0001_cold_nuke.sql
|   `-- meta/
|-- src/
|   |-- app.ts
|   |-- config/
|   |   `-- env.ts
|   |-- core/
|   |   |-- errors/
|   |   |   `-- app-error.ts
|   |   `-- middlewares/
|   |       |-- error-handler.ts
|   |       `-- not-found-handler.ts
|   |-- db/
|   |   |-- index.ts
|   |   `-- schema/
|   |       |-- consultas.ts
|   |       |-- pacientes.ts
|   |       |-- prontuario.ts
|   |       |-- relations.ts
|   |       |-- usuarios.ts
|   |       `-- index.ts
|   |-- modules/
|   |   |-- consultas/
|   |   |   |-- consultas.schemas.ts
|   |   |   |-- controllers/
|   |   |   |-- repositories/
|   |   |   |-- routes/
|   |   |   `-- services/
|   |   |-- pacientes/
|   |   |-- prontuarios/
|   |   `-- usuarios/
|   `-- server.ts
|-- .env.example
|-- drizzle.config.ts
|-- package.json
`-- tsconfig.json
```

## Integridade Referencial

As chaves estrangeiras implementadas hoje sao:

- `consultas.id_paciente -> pacientes.id_paciente`
- `consultas.id_usuario -> usuarios.id_usuario`
- `prontuario.id_paciente -> pacientes.id_paciente`
- `prontuario.id_usuario -> usuarios.id_usuario`

As constraints usam:

- `ON DELETE RESTRICT`
- `ON UPDATE CASCADE`

## Validacao Local

Hoje a base permite validar com:

- `npm run typecheck`
- `npm run build`
- `npm run check`
- `npm run db:generate`
- `npm run db:migrate`

Quando o servidor sobe corretamente:

- `GET /` retorna `200`
- `GET /health` retorna `200`
- `GET /consultas` lista consultas e aceita filtros simples
- `POST /consultas` cria consulta com validacao de paciente, medico e horario
- `GET /consultas/:id` busca uma consulta especifica
- `PATCH /consultas/:id/status` atualiza o status do atendimento
- rotas inexistentes retornam `404` em JSON

## Documentacao

- [docs/README.md](docs/README.md)
- [docs/modelagem-e-requisitos.md](docs/modelagem-e-requisitos.md)
- [docs/das.md](docs/das.md)
- [docs/modelo-de-dados.md](docs/modelo-de-dados.md)
- [docs/guia-de-contribuicao.md](docs/guia-de-contribuicao.md)
- [docs/arquitetura-da-branch.md](docs/arquitetura-da-branch.md)
- [docs/caps-flow.md](docs/caps-flow.md)
- [docs/checklist-equipe.md](docs/checklist-equipe.md)
- [docs/checklist-final-consulta.md](docs/checklist-final-consulta.md)
- [docs/entrega-consulta.md](docs/entrega-consulta.md)
- [docs/pull-request-consulta.md](docs/pull-request-consulta.md)
- [docs/WORKLOG.md](docs/WORKLOG.md)

## Fluxo de Branches

1. atualizar `develop`
2. criar uma branch `feature/*` para a tarefa
3. revisar o diff localmente
4. validar o que o projeto suporta
5. atualizar a documentacao e o `WORKLOG`, quando aplicavel
6. abrir Pull Request para `develop`
