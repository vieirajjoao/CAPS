# Entrega da Consulta

## Finalidade

A entidade `Consulta` representa o atendimento agendado ou realizado entre um paciente e um profissional de saude, registrando identificacao, vinculos, horario, status e metadados de auditoria.

## Arquivos Principais da Entrega

- `src/db/schema/consultas.ts`
- `src/db/schema/pacientes.ts`
- `src/db/schema/usuarios.ts`
- `src/db/schema/index.ts`
- `src/db/schema/relations.ts`
- `drizzle/0001_cold_nuke.sql`
- `docs/modelo-de-dados.md`
- `docs/checklist-final-consulta.md`
- `docs/pull-request-consulta.md`

## Campos Implementados

- `id_consulta`
- `id_paciente`
- `id_usuario`
- `data_hora`
- `status`
- `obs`
- `criado_em`
- `atualizado_em`

## Regras Refletidas no Schema

- o status aceita `agendada`, `concluida` e `cancelada`
- toda consulta exige paciente e profissional responsavel
- ha indices para busca por paciente, usuario e data
- existe `uniqueIndex` em `id_usuario + data_hora`
- existe foreign key para `pacientes.id_paciente`
- existe foreign key para `usuarios.id_usuario`

## Relacionamentos Implementados

Nesta entrega, os relacionamentos deixaram de ser apenas logicos e passaram a ser garantidos no banco:

- `consultas.id_paciente -> pacientes.id_paciente`
- `consultas.id_usuario -> usuarios.id_usuario`

A configuracao usa:

- `ON DELETE RESTRICT`
- `ON UPDATE CASCADE`

## Validacao Realizada

- execucao de `npm run typecheck`
- execucao de `npm run build`
- execucao de `npm run db:generate`
- execucao de `npm run db:migrate` com MySQL local
- consulta em `information_schema.KEY_COLUMN_USAGE`
- teste de insercao valida e invalida em transacao
- execucao de `npm run check`
- revisao documental e registro em `docs/WORKLOG.md`

## Limites Deliberados

- nao adiciona regra de negocio fora do schema
- nao cria camadas funcionais completas dos modulos
- o foco desta entrega continua sendo a integridade relacional da modelagem, nao os fluxos de negocio
