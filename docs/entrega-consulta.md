# Entidade Consulta

## Finalidade

A entidade `Consulta` representa o atendimento agendado ou realizado entre paciente e profissional de saude, registrando identificacao, vinculos, horario, status e metadados de auditoria.

## Arquivos Relevantes

- `src/db/schema/consultas.ts`
- `src/db/schema/index.ts`
- `drizzle/0000_smart_tenebrous.sql`
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

## Relacionamentos Mantidos por Identificador

Os relacionamentos atuais foram mantidos por:

- `id_paciente`
- `id_usuario`

Essa decisao simplifica a modelagem inicial e evita acoplamento prematuro com chaves estrangeiras ainda nao consolidadas no restante da base.

## Situacao Atual dentro do Projeto

Hoje `Consulta` e o schema mais alinhado com a configuracao MySQL do repositorio:

- usa `mysql-core`
- ja possui migration gerada
- esta exportado no indice central de schemas

## Limites Atuais

- os relacionamentos ainda sao logicos, nao por foreign key real
- a integracao com `Paciente` e `Usuario` ainda depende da consolidacao dos outros schemas
- a camada de dominio ainda nao tem service, repository, controller ou route implementados
