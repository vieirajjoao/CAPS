# Arquitetura da Branch Consulta

## Objetivo

Documentar a estrutura adotada na branch `feature/consulta-slurkronox`, deixando explicito o que e base compartilhada do projeto e o que e entrega funcional da responsabilidade de `Consulta`.

## Escopo Tecnico

Esta branch contem:

- bootstrap minimo da aplicacao com Express
- configuracao de ambiente com Zod
- conexao base com MySQL e Drizzle
- separacao entre inicializacao HTTP e definicao da aplicacao
- middlewares centrais de erro e rota nao encontrada
- estrutura de pastas por modulo e camadas
- schema da entidade `Consulta`
- documentacao tecnica, operacional e de PR

## Estrutura Relevante

```text
feature/consulta-slurkronox
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

## Decisoes de Arquitetura

- a base do projeto foi organizada antes de qualquer ampliacao funcional
- o bootstrap do servidor foi mantido pequeno para facilitar validacao e revisao
- a aplicacao Express foi separada de `src/server.ts` para reduzir acoplamento
- a configuracao de ambiente foi centralizada em `src/config/env.ts`
- a conexao com banco foi centralizada em `src/db/index.ts`
- `Consulta` permaneceu como a unica entidade de dominio implementada
- os demais modulos ficaram apenas preparados estruturalmente

## Decisoes de Modelagem

- `Consulta` foi relacionada a `Paciente` e `Usuario` por identificadores
- o controle de status foi feito com `mysqlEnum`
- a regra de conflito de horario por medico foi refletida com `uniqueIndex`

## Limites Deliberados

- `Paciente`, `Usuario` e `Prontuario` nao receberam schema funcional nesta branch
- nao foram implementados controllers, services, repositories ou routes
- nao foram geradas migracoes
- o alvo de integracao continua sendo `develop`, nunca `main`

## Beneficios da Organizacao Atual

- repositorio executavel e validavel localmente
- base clara para os demais integrantes continuarem
- menor ambiguidade entre escopo funcional e estrutura compartilhada
- PR mais facil de revisar tecnicamente
