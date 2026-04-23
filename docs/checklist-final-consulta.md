# Checklist de Revisao da Consulta

## Schema

- [x] `src/db/schema/consultas.ts` existe
- [x] os campos obrigatorios da entidade foram definidos
- [x] o status foi modelado com enum
- [x] os timestamps foram definidos
- [x] ha indices para paciente, usuario e data
- [x] existe restricao de horario por medico

## Integracao Tecnica

- [x] o schema esta exportado em `src/db/schema/index.ts`
- [x] a migration inicial da tabela `consultas` existe em `drizzle/`
- [x] a migration `0001_cold_nuke.sql` consolida as tabelas relacionadas e as FKs
- [x] `consultas.id_paciente` referencia `pacientes.id_paciente`
- [x] `consultas.id_usuario` referencia `usuarios.id_usuario`
- [x] as relations do Drizzle foram declaradas em `src/db/schema/relations.ts`

## Documentacao Relacionada

- [x] README principal referencia a integridade referencial
- [x] `docs/modelo-de-dados.md` descreve os schemas e as FKs
- [x] `docs/entrega-consulta.md` descreve a finalidade e os limites
- [x] `docs/WORKLOG.md` registra as alteracoes historicas da entrega

## Validacao

- [x] `npm run check` executado
- [x] `npm run db:generate` executado
- [x] `npm run db:migrate` executado
- [x] constraints validadas em `information_schema.KEY_COLUMN_USAGE`
- [x] insert valido testado com sucesso
- [x] insert invalido bloqueado por FK

## Limites Conhecidos

- [ ] integracao funcional com os outros dominios ainda nao foi implementada
- [ ] a camada HTTP dos modulos ainda esta so com estrutura base
