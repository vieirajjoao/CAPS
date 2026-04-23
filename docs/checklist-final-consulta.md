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
- [x] a configuracao do projeto para MySQL acompanha esse schema

## Documentacao Relacionada

- [x] README principal referencia a entidade
- [x] `docs/modelo-de-dados.md` descreve o schema
- [x] `docs/entrega-consulta.md` descreve a finalidade e os limites
- [x] `docs/WORKLOG.md` registra as alteracoes historicas da entrega

## Validacao

- [x] `npm run check` esta disponivel como validacao principal da base
- [x] `GET /health` e `GET /` existem na base
- [x] a API responde `404` em JSON para rotas inexistentes

## Limites Conhecidos

- [ ] relacionamento por foreign key real ainda nao foi consolidado
- [ ] integracao funcional com os outros dominios ainda nao foi implementada
