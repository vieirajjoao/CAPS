# Pull Request da Consulta

## Titulo Sugerido

`feat(consulta): add consulta schema and professional project bootstrap`

## Resumo

Esta branch entrega o schema da entidade `Consulta` e organiza o repositorio CAPS para um nivel mais profissional, com base executavel, configuracao do ambiente, conexao Drizzle, documentacao tecnica e material de PR.

## O que foi feito

- criacao do schema `Consulta` em `src/db/schema/consultas.ts`
- export do schema em `src/db/schema/index.ts`
- configuracao do projeto com `package.json`, `tsconfig.json` e `.env.example`
- adicao do bootstrap minimo do servidor em `src/server.ts`
- separacao da aplicacao HTTP em `src/app.ts`
- adicao de `src/config/env.ts` para leitura tipada do ambiente
- adicao de `src/db/index.ts` para conexao MySQL + Drizzle
- adicao de middlewares centrais para `404` e tratamento de erro
- criacao do `drizzle.config.ts`
- organizacao da estrutura modular em `src/modules/`
- limpeza de placeholders antigos
- ampliacao da documentacao tecnica, operacional e de PR

## Arquivos Principais

- `package.json`
- `tsconfig.json`
- `.env.example`
- `drizzle.config.ts`
- `src/config/env.ts`
- `src/db/index.ts`
- `src/app.ts`
- `src/db/schema/consultas.ts`
- `src/db/schema/index.ts`
- `src/server.ts`
- `docs/`

## Impacto Tecnico

- transforma a branch em uma base executavel e validavel
- estrutura a entidade `Consulta` com indices e restricao de agendamento
- deixa o projeto mais claro para os demais integrantes continuarem
- melhora a rastreabilidade por README, guias, checklist e WORKLOG

## Limites da Entrega

- nao implementa o dominio funcional de `Paciente`
- nao implementa o dominio funcional de `Usuario`
- nao implementa o dominio funcional de `Prontuario`
- nao adiciona controllers, services, routes ou repositories funcionais

## Validacao Realizada

- `npm install`
- `npm run check`
- `npm run typecheck`
- `npm run build`
- revisao do diff contra `caps/develop`
- conferencia do `WORKLOG.md`

## Observacoes

- os relacionamentos da consulta foram mantidos por identificadores `id_paciente` e `id_usuario`
- a branch correta foi mantida sem criar branch extra
- o alvo de merge continua sendo `develop`
