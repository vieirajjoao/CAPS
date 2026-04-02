# Entrega da Consulta

## Finalidade

A entidade `Consulta` representa o atendimento agendado ou realizado entre paciente e profissional de saude.

## Arquivos da Entrega

- `src/db/schema/consultas.ts`
- `src/db/schema/index.ts`

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
- a consulta exige paciente e usuario responsavel
- existe uma constraint unica em `id_usuario + data_hora`

## Relacionamentos

Nesta entrega, os relacionamentos foram mantidos por identificadores:

- `id_paciente`
- `id_usuario`

Isso evita invadir a parte de `Paciente` e `Usuario`, que pertencem a outros integrantes.

## Limites da Entrega

- nao implementa `Paciente`
- nao implementa `Usuario`
- nao implementa `Prontuario`
- nao cria controllers, services ou repositories
- nao cria regras de negocio fora do schema
