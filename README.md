# CAPS

API academica para gestao clinica com Node.js, Express, MySQL, Drizzle ORM e TypeScript.

## Objetivo

O projeto CAPS organiza o backend de uma clinica medica em torno de quatro dominios principais:

- usuarios
- pacientes
- consultas
- prontuarios

Nesta branch, a implementacao de dominio entregue continua restrita a `Consulta`, mas a base do repositorio foi organizada para ficar executavel, validavel e pronta para evolucao em equipe.

## Estado Atual da Branch

- Branch de trabalho: `feature/consulta-slurkronox`
- Responsavel: `Savio de Brito Oliveira Filho`
- Escopo funcional entregue: `schema Consulta`
- Escopo estrutural adicional: bootstrap do projeto, configuracao TypeScript, ambiente, conexao Drizzle e organizacao documental

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

4. Valide os tipos:

```bash
npm run typecheck
```

5. Gere a build:

```bash
npm run build
```

6. Rode em desenvolvimento:

```bash
npm run dev
```

## Scripts Disponiveis

- `npm run dev`: sobe o servidor em modo de desenvolvimento com `tsx`
- `npm run build`: compila o projeto para `dist/`
- `npm run start`: executa a build compilada
- `npm run typecheck`: valida a tipagem sem gerar artefatos
- `npm run db:generate`: gera arquivos do Drizzle Kit
- `npm run db:migrate`: executa migracoes do Drizzle Kit
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
|-- src/
|   |-- config/
|   |   `-- env.ts
|   |-- core/
|   |   |-- errors/
|   |   `-- middlewares/
|   |-- db/
|   |   |-- index.ts
|   |   `-- schema/
|   |       |-- consultas.ts
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

## Entrega Tecnica Desta Branch

O schema de `Consulta` foi implementado em [src/db/schema/consultas.ts](src/db/schema/consultas.ts) com:

- identificador unico da consulta
- referencia ao paciente por `id_paciente`
- referencia ao usuario responsavel por `id_usuario`
- data e hora do atendimento
- status controlado por enum
- observacoes livres
- timestamps de criacao e atualizacao
- `uniqueIndex` para impedir dois agendamentos do mesmo medico no mesmo horario

Os demais dominios nao foram implementados nesta branch para evitar invasao do escopo de outros integrantes.

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
2. criar ou usar a branch `feature/*` correta
3. trabalhar apenas no proprio escopo
4. revisar o diff
5. registrar o trabalho em `docs/WORKLOG.md`
6. abrir Pull Request para `develop`
