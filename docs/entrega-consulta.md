# Entidade Consulta

## Finalidade

A entidade `Consulta` representa o atendimento agendado ou realizado entre paciente e profissional de saude, registrando identificacao, vinculos, horario, status e metadados de auditoria.

## Arquivos Relevantes

- `src/db/schema/consultas.ts`
- `src/db/schema/pacientes.ts`
- `src/db/schema/usuarios.ts`
- `src/db/schema/relations.ts`
- `src/db/schema/index.ts`
- `src/modules/consultas/consultas.schemas.ts`
- `src/modules/consultas/repositories/consultas.repository.ts`
- `src/modules/consultas/services/consultas.service.ts`
- `src/modules/consultas/controllers/consultas.controller.ts`
- `src/modules/consultas/routes/consultas.routes.ts`
- `src/app.ts`
- `drizzle/0000_smart_tenebrous.sql`
- `drizzle/0001_cold_nuke.sql`
- `docs/modelo-de-dados.md`

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

Os relacionamentos deixaram de ser apenas logicos e passaram a ser garantidos no banco:

- `consultas.id_paciente -> pacientes.id_paciente`
- `consultas.id_usuario -> usuarios.id_usuario`

A configuracao usa:

- `ON DELETE RESTRICT`
- `ON UPDATE CASCADE`

## Situacao Atual dentro do Projeto

Hoje `Consulta` e o dominio mais maduro da base:

- usa `mysql-core`
- possui migration inicial e migration de consolidacao das FKs
- esta exportado no indice central de schemas
- possui relations tipadas com `Paciente` e `Usuario`
- possui schema Zod para entrada HTTP
- possui repository para leitura e escrita no banco
- possui service com validacao de paciente, medico e conflito de horario
- possui controller e rotas Express integradas em `app.ts`

## Endpoints Implementados

- `GET /consultas`
- `GET /consultas/:id`
- `POST /consultas`
- `PATCH /consultas/:id/status`

Os filtros atuais de listagem sao:

- `id_paciente`
- `id_usuario`
- `status`

## Validacao Realizada

- execucao de `npm run typecheck`
- execucao de `npm run build`
- execucao de `npm run check`
- execucao de `npm run db:generate`
- execucao de `npm run db:migrate`
- consulta em `information_schema.KEY_COLUMN_USAGE`
- teste transacional com insert valido e invalido para validar as FKs
- smoke test HTTP de criacao, leitura, conflito de horario, validacao de perfil, validacao de paciente e atualizacao de status
- revisao documental e registro em `docs/WORKLOG.md`

## Limites Atuais

- os dominios de `Paciente`, `Usuario` e `Prontuario` ainda nao possuem camada funcional equivalente
- o modulo de `Consulta` cobre o fluxo basico de agenda, mas ainda nao implementa cancelamento com remarcacao ou regras avancadas de disponibilidade
