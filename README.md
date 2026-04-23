# CAPS

API academica para gestao clinica com Node.js, Express, MySQL, Drizzle ORM e TypeScript.

## Objetivo

O projeto organiza o backend de uma clinica medica em torno de quatro dominios:

- usuarios
- pacientes
- consultas
- prontuario

## Estado Atual do Banco

O projeto agora possui:

- 4 tabelas modeladas no Drizzle com dialeto MySQL
- migrations versionadas em `drizzle/`
- foreign keys reais entre `consultas` e `pacientes`/`usuarios`
- foreign keys reais entre `prontuario` e `pacientes`/`usuarios`
- integridade validada em banco MySQL local com inserts validos e invalidos

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
3. Instale as dependencias com `npm install`.
4. Valide a base com `npm run check`.
5. Gere migrations com `npm run db:generate`, quando necessario.
6. Aplique migrations com `npm run db:migrate`.
7. Rode em desenvolvimento com `npm run dev`.

## Scripts Disponiveis

- `npm run dev`: sobe o servidor em modo de desenvolvimento com `tsx`
- `npm run build`: compila o projeto para `dist/`
- `npm run check`: executa `typecheck` e `build` em sequencia
- `npm run start`: executa o script de inicializacao da API
- `npm run typecheck`: valida a tipagem sem gerar artefatos
- `npm run db:generate`: gera arquivos do Drizzle Kit
- `npm run db:migrate`: executa migracoes do Drizzle Kit
- `npm run db:studio`: abre o Drizzle Studio

## Estrutura Relevante

```text
CAPS/
|-- docs/
|-- drizzle/
|   |-- 0000_smart_tenebrous.sql
|   `-- 0001_cold_nuke.sql
|-- src/
|   |-- app.ts
|   |-- config/
|   |   `-- env.ts
|   |-- core/
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

As constraints foram configuradas com:

- `ON DELETE RESTRICT`
- `ON UPDATE CASCADE`

## Documentacao

- [docs/README.md](docs/README.md)
- [docs/modelagem-e-requisitos.md](docs/modelagem-e-requisitos.md)
- [docs/das.md](docs/das.md)
- [docs/modelo-de-dados.md](docs/modelo-de-dados.md)
- [docs/entrega-consulta.md](docs/entrega-consulta.md)
- [docs/WORKLOG.md](docs/WORKLOG.md)

## Fluxo de Branches

1. atualizar `develop`
2. criar uma branch `feature/*` para a tarefa
3. revisar o diff antes de commitar
4. validar o que foi alterado
5. registrar o trabalho em `docs/WORKLOG.md`
6. abrir Pull Request para `develop`
