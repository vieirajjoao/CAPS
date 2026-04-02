# Arquitetura da Branch Consulta

## Objetivo

Documentar a estrutura e as decisoes adotadas especificamente na branch `feature/consulta-slurkronox`.

## Escopo Tecnico

Esta branch contem apenas:

- schema da entidade `Consulta`
- export do schema em `src/db/schema/index.ts`
- documentacao da entrega e da organizacao da branch

## Estrutura Relevante

```text
feature/consulta-slurkronox
|-- README.md
|-- docs/
|   |-- README.md
|   |-- WORKLOG.md
|   |-- arquitetura-da-branch.md
|   |-- caps-flow.md
|   |-- checklist-equipe.md
|   |-- checklist-final-consulta.md
|   |-- entrega-consulta.md
|   |-- modelagem-e-requisitos.md
|   `-- pull-request-consulta.md
`-- src/
    `-- db/
        `-- schema/
            |-- consultas.ts
            `-- index.ts
```

## Decisoes de Arquitetura

- a branch foi mantida isolada para o escopo `Consulta`
- os relacionamentos foram representados por `id_paciente` e `id_usuario`
- nao foram implementados schemas de outros dominios
- nao foram criados controllers, services, routes ou repositories
- a regra de conflito de horario foi refletida no schema por `uniqueIndex`

## Limites Deliberados

- `Paciente`, `Usuario` e `Prontuario` permanecem fora do escopo desta branch
- nao houve refatoracao estrutural dos demais modulos do projeto
- nao foi feito merge para `main`; o fluxo previsto continua sendo `feature/* -> develop`

## Beneficios Desta Organizacao

- diff pequeno e revisavel
- escopo claro para avaliacao
- menor risco de conflito com outros integrantes
- documentacao suficiente para abrir PR com contexto tecnico
