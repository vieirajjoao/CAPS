# CAPS

API academica para gestao clinica com Node.js, Express, TypeScript, MySQL e Drizzle ORM.

## Visao Geral

O CAPS organiza o backend de uma clinica medica em torno de quatro dominios:

- usuarios
- pacientes
- consultas
- prontuarios

O projeto ja possui uma base executavel, configuracao de ambiente, estrutura modular, middlewares globais, conexao com banco e schemas iniciais. A documentacao deste repositorio acompanha o estado real do codigo e registra os pontos que ainda precisam de alinhamento tecnico.

## Estado Atual do Projeto

Hoje o repositorio contem:

- bootstrap HTTP com `app.ts` e `server.ts`
- validacao de ambiente com Zod em `src/config/env.ts`
- conexao com MySQL e Drizzle em `src/db/index.ts`
- schema e migration inicial de `Consulta`
- schemas iniciais para `Usuario`, `Paciente` e `Prontuario`
- estrutura modular pronta para controllers, services, repositories e routes
- documentacao tecnica, operacional e de rastreabilidade

## Pontos de Atencao Tecnicos

- `drizzle.config.ts` e `src/db/index.ts` estao configurados para MySQL
- `src/db/schema/consultas.ts` usa `mysql-core`, coerente com a configuracao atual
- `src/db/schema/usuarios.ts`, `src/db/schema/pacientes.ts` e `src/db/schema/prontuario.ts` ainda usam `pg-core`
- a migration em `drizzle/` hoje reflete apenas a tabela `consultas`
- as pastas em `src/modules/` ja existem, mas ainda estao so com estrutura base

Esses pontos nao impedem leitura, build e organizacao do projeto, mas precisam ser considerados antes de uma consolidacao completa do banco em MySQL.

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

5. Gere migrations com o Drizzle, se necessario:

```bash
npm run db:generate
```

6. Rode em desenvolvimento:

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
- `npm run start`: executa a build compilada
- `npm run typecheck`: valida a tipagem sem gerar artefatos
- `npm run db:generate`: gera migrations com Drizzle Kit
- `npm run db:migrate`: executa migrations
- `npm run db:studio`: abre o Drizzle Studio

## Estrutura do Projeto

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
|   |       |-- usuarios.ts
|   |       `-- index.ts
|   |-- modules/
|   |   |-- consultas/
|   |   |-- pacientes/
|   |   |-- prontuarios/
|   |   `-- usuarios/
|   `-- server.ts
|-- .env.example
|-- drizzle.config.ts
|-- package.json
`-- tsconfig.json
```

## Validacao Local

Hoje a base permite validar com:

- `npm run typecheck`
- `npm run build`
- `npm run check`

Quando o servidor sobe corretamente:

- `GET /` retorna `200`
- `GET /health` retorna `200`
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
3. trabalhar apenas no proprio escopo
4. revisar o diff localmente
5. validar o que o projeto suporta
6. atualizar a documentacao e o `WORKLOG`, quando aplicavel
7. abrir Pull Request para `develop`
