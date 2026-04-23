# Modelo de Dados

## Objetivo

Conectar a modelagem conceitual do projeto com o que esta efetivamente implementado no banco via Drizzle.

## Leitura Correta deste Documento

- a coluna "implementacao atual" descreve o que existe no codigo hoje
- a coluna "ponto de atencao" destaca diferencas entre o estado real da base e o alvo arquitetural do projeto
- quando houver divergencia entre modelagem e implementacao, este documento prioriza o estado real do repositorio

## Estado Atual dos Schemas

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

Dialeto atual: `mysql-core`

#### Indices e Restricoes

- indice por `id_paciente`
- indice por `id_usuario`
- indice por `data_hora`
- `uniqueIndex` em `id_usuario + data_hora`

#### Relacionamentos Mantidos por Identificador

`Consulta` se relaciona logicamente com:

- `Paciente` por `id_paciente`
- `Usuario` por `id_usuario`

### Usuario

Arquivo: `src/db/schema/usuarios.ts`

Campos atuais:

- `id_usuario`
- `nome_usuario`
- `email_usuario`
- `senha_usuario`
- `perfil`
- `crm_usuario`

Dialeto atual: `pg-core`

Pontos de atencao:

- o projeto esta configurado para MySQL, mas esse schema ainda esta em `pg-core`
- o valor `medico` no enum precisa de revisao de codificacao no arquivo atual

### Paciente

Arquivo: `src/db/schema/pacientes.ts`

Campos atuais:

- `nome_paciente`
- `data_nascimento_paciente`
- `id_paciente`
- `endereco_paciente`
- `telefone_paciente`
- `convenio_medico_paciente`
- `hf_paciente`
- `hs_paciente`

Dialeto atual: `pg-core`

Pontos de atencao:

- o schema existe no codigo, mas ainda nao acompanha o dialeto MySQL usado na configuracao do projeto

### Prontuario

Arquivo: `src/db/schema/prontuario.ts`

Campos atuais:

- `id_prontuario`
- `id_paciente`
- `id_usuario`
- `anamnese`
- `criado_em`
- `atualizado_em`

Dialeto atual: `pg-core`

Pontos de atencao:

- o schema existe no codigo, mas ainda nao acompanha o dialeto MySQL usado na configuracao do projeto
- a nomenclatura atual do arquivo esta em singular: `prontuario.ts`

## Migration Atual

O repositorio ja possui:

- `drizzle/0000_smart_tenebrous.sql`
- `drizzle/meta/0000_snapshot.json`
- `drizzle/meta/_journal.json`

No estado atual, essa migration representa apenas a tabela `consultas`.

## Ponto Central de Alinhamento

Hoje existe uma diferenca entre:

- a configuracao do projeto, que esta voltada para MySQL
- os schemas de `usuarios`, `pacientes` e `prontuario`, que ainda usam `pg-core`

Essa diferenca precisa ser resolvida antes de consolidar novas migrations de banco para todos os dominios.
