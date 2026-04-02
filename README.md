# CAPS

Repositorio academico para desenvolvimento de uma API de gestao clinica.

## Visao Geral

O projeto CAPS organiza o backend de uma clinica com foco em:

- usuarios
- pacientes
- consultas
- prontuarios

Nesta branch, a entrega implementada e documentada corresponde ao escopo de `Consulta`.

## Branch Atual

- Branch de trabalho: `feature/consulta-slurkronox`
- Responsavel: `Savio de Brito Oliveira Filho`
- Escopo: `schema Consulta`

## Estrutura Atual

```text
CAPS/
|-- docs/
|   |-- README.md
|   |-- WORKLOG.md
|   |-- caps-flow.md
|   |-- checklist-equipe.md
|   |-- entrega-consulta.md
|   `-- modelagem-e-requisitos.md
`-- src/
    |-- db/
    |   `-- schema/
    |       |-- consultas.ts
    |       `-- index.ts
    `-- ...
```

## Documentacao

- [docs/README.md](docs/README.md)
- [docs/modelagem-e-requisitos.md](docs/modelagem-e-requisitos.md)
- [docs/caps-flow.md](docs/caps-flow.md)
- [docs/checklist-equipe.md](docs/checklist-equipe.md)
- [docs/entrega-consulta.md](docs/entrega-consulta.md)
- [docs/WORKLOG.md](docs/WORKLOG.md)

## Entrega de Consulta

O schema de `Consulta` foi criado em [src/db/schema/consultas.ts](src/db/schema/consultas.ts) com:

- identificador da consulta
- relacao por `id_paciente`
- relacao por `id_usuario`
- data e hora do atendimento
- status da consulta
- observacoes
- timestamps de criacao e atualizacao
- restricao unica para impedir dois agendamentos do mesmo medico no mesmo horario

## Fluxo Git

1. Atualizar `develop`
2. Criar branch `feature/*`
3. Trabalhar apenas no proprio escopo
4. Revisar o diff
5. Registrar em `docs/WORKLOG.md`
6. Abrir Pull Request para `develop`
