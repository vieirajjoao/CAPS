# Modelo de Dados

## Objetivo

Conectar a modelagem conceitual do projeto com o que esta efetivamente implementado no banco via Drizzle.

## Schema Implementado Nesta Branch

### Consulta

Arquivo: `src/db/schema/consultas.ts`

| Campo | Tipo | Obrigatorio | Observacao |
| --- | --- | --- | --- |
| `id_consulta` | `varchar(36)` | sim | chave primaria |
| `id_paciente` | `varchar(36)` | sim | referencia logica ao paciente |
| `id_usuario` | `varchar(14)` | sim | referencia logica ao profissional responsavel |
| `data_hora` | `datetime` | sim | data e hora da consulta |
| `status` | `enum` | sim | `agendada`, `concluida`, `cancelada` |
| `obs` | `text` | nao | observacoes livres |
| `criado_em` | `timestamp` | sim | default `now()` |
| `atualizado_em` | `timestamp` | sim | default `now()` com atualizacao automatica |

## Indices e Restricoes

- indice por `id_paciente`
- indice por `id_usuario`
- indice por `data_hora`
- `uniqueIndex` em `id_usuario + data_hora`

## Relacionamentos Mantidos por Identificador

Nesta branch, `Consulta` se relaciona logicamente com:

- `Paciente` por `id_paciente`
- `Usuario` por `id_usuario`

As tabelas desses dominios nao foram implementadas aqui para preservar o escopo do time.

## Pendencias Intencionais

- schema de `Usuario`
- schema de `Paciente`
- schema de `Prontuario`
- definicao final de chaves estrangeiras reais entre tabelas
