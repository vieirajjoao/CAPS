# Pull Request da Consulta

## Titulo Sugerido

`feat(consulta): add consulta schema and branch documentation`

## Resumo

Esta branch entrega a modelagem da entidade `Consulta` e organiza a documentacao necessaria para revisao da contribuicao.

## O que foi feito

- criacao do schema `Consulta` em `src/db/schema/consultas.ts`
- export do schema em `src/db/schema/index.ts`
- definicao dos campos obrigatorios da entidade
- adicao de indices para busca e organizacao do schema
- adicao de restricao unica para impedir conflito de horario por medico
- ampliacao da documentacao da branch e da entrega

## Arquivos Principais

- `src/db/schema/consultas.ts`
- `src/db/schema/index.ts`
- `README.md`
- `docs/README.md`
- `docs/entrega-consulta.md`
- `docs/arquitetura-da-branch.md`
- `docs/checklist-final-consulta.md`
- `docs/WORKLOG.md`

## Impacto Tecnico

- estrutura a base da entidade `Consulta` para o projeto CAPS
- prepara a branch para revisao com escopo bem definido
- melhora a rastreabilidade tecnica da entrega

## Limites da Entrega

- nao implementa `Paciente`
- nao implementa `Usuario`
- nao implementa `Prontuario`
- nao inclui controllers, services, routes ou repositories

## Validacao Realizada

- revisao do diff da branch
- verificacao de escopo contra `develop`
- conferencia do `WORKLOG.md`
- confirmacao de que apenas a branch correta foi utilizada

## Observacoes

- os relacionamentos da consulta foram mantidos por identificadores `id_paciente` e `id_usuario`
- a branch foi mantida isolada para evitar conflito com a entrega de outros integrantes
