# Entrega da Consulta

## Finalidade

A entidade `Consulta` representa o atendimento agendado ou realizado entre um paciente e um profissional de saude, registrando identificacao, vinculos, horario, status e metadados de auditoria.

## Arquivos Principais da Entrega

- `src/db/schema/consultas.ts`
- `src/db/schema/index.ts`
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

## Relacionamentos Mantidos por Identificador

Nesta entrega, os relacionamentos foram mantidos por:

- `id_paciente`
- `id_usuario`

Essa decisao evita implementar `Paciente` e `Usuario` nesta branch e preserva o escopo dos outros integrantes.

## Validacao Realizada

- validacao estrutural da arquitetura base da branch
- leitura e revisao do diff contra `develop`
- execucao de `npm run check`
- validacao de tipagem com `npm run typecheck`
- validacao de build com `npm run build`
- revisao documental e registro em `docs/WORKLOG.md`

## Limites Deliberados

- nao implementa `Paciente`
- nao implementa `Usuario`
- nao implementa `Prontuario`
- nao adiciona regra de negocio fora do schema
- nao cria camadas funcionais completas dos outros dominios
- nao assume desenvolvimento funcional da parte de outro participante, mesmo quando a branch e atualizada com `develop`
