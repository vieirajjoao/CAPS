# Modelo de Dados

## Objetivo

Conectar a modelagem conceitual do projeto com o que esta efetivamente implementado no banco via Drizzle.

## Leitura Correta deste Documento

- este documento descreve o que existe no codigo hoje
- quando houver divergencia entre expectativa da disciplina e implementacao atual, o documento prioriza o estado real do repositorio
- schema, migration e banco devem ser interpretados em conjunto

## Estado Atual dos Schemas

### Consulta

Arquivo: `src/db/schema/consultas.ts`

| Campo | Tipo | Obrigatorio | Observacao |
| --- | --- | --- | --- |
| `id_consulta` | `varchar(36)` | sim | chave primaria |
| `id_paciente` | `varchar(36)` | sim | FK para `pacientes.id_paciente` |
| `id_usuario` | `varchar(11)` | sim | FK para `usuarios.id_usuario` |
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
- foreign key para `pacientes.id_paciente`
- foreign key para `usuarios.id_usuario`

### Paciente

Arquivo: `src/db/schema/pacientes.ts`

| Campo | Tipo | Obrigatorio | Observacao |
| --- | --- | --- | --- |
| `id_paciente` | `varchar(36)` | sim | chave primaria |
| `nome_paciente` | `varchar(255)` | sim | nome do paciente |
| `data_nascimento_paciente` | `date` | sim | data de nascimento |
| `endereco_paciente` | `varchar(255)` | sim | endereco |
| `telefone_paciente` | `varchar(11)` | sim | telefone |
| `convenio_medico_paciente` | `varchar(40)` | sim | convenio |
| `hf_paciente` | `text` | nao | historico familiar |
| `hs_paciente` | `text` | nao | historico social |

Dialeto atual: `mysql-core`

#### Indices

- indice por `nome_paciente`
- indice por `telefone_paciente`

### Usuario

Arquivo: `src/db/schema/usuarios.ts`

| Campo | Tipo | Obrigatorio | Observacao |
| --- | --- | --- | --- |
| `id_usuario` | `varchar(11)` | sim | chave primaria |
| `nome_usuario` | `varchar(255)` | sim | nome do usuario |
| `email_usuario` | `varchar(320)` | sim | unico |
| `senha_usuario` | `varchar(255)` | sim | senha |
| `perfil` | `enum` | sim | `admin`, `medico`, `atendente` |
| `crm_usuario` | `varchar(20)` | nao | CRM quando aplicavel |

Dialeto atual: `mysql-core`

#### Indices e Restricoes

- `uniqueIndex` em `email_usuario`
- indice por `perfil`

### Prontuario

Arquivo: `src/db/schema/prontuario.ts`

| Campo | Tipo | Obrigatorio | Observacao |
| --- | --- | --- | --- |
| `id_prontuario` | `int` | sim | chave primaria auto incremento |
| `id_paciente` | `varchar(36)` | sim | FK para `pacientes.id_paciente` |
| `id_usuario` | `varchar(11)` | sim | FK para `usuarios.id_usuario` |
| `anamnese` | `text` | sim | conteudo clinico |
| `criado_em` | `timestamp` | sim | default `now()` |
| `atualizado_em` | `timestamp` | sim | default `now()` com atualizacao automatica |

Dialeto atual: `mysql-core`

#### Indices e Restricoes

- indice por `id_paciente`
- indice por `id_usuario`
- foreign key para `pacientes.id_paciente`
- foreign key para `usuarios.id_usuario`

## Relacionamentos Atuais

- `consultas.id_paciente -> pacientes.id_paciente`
- `consultas.id_usuario -> usuarios.id_usuario`
- `prontuario.id_paciente -> pacientes.id_paciente`
- `prontuario.id_usuario -> usuarios.id_usuario`

As constraints usam:

- `ON DELETE RESTRICT`
- `ON UPDATE CASCADE`

## Relations do Drizzle

Arquivo: `src/db/schema/relations.ts`

O projeto agora expoe relacoes tipadas para:

- `usuarios -> consultas`
- `usuarios -> prontuario`
- `pacientes -> consultas`
- `pacientes -> prontuario`
- `consultas -> paciente`
- `consultas -> usuario`
- `prontuario -> paciente`
- `prontuario -> usuario`

## Migrations

Arquivos atuais:

- `drizzle/0000_smart_tenebrous.sql`
- `drizzle/0001_cold_nuke.sql`
- `drizzle/meta/0000_snapshot.json`
- `drizzle/meta/0001_snapshot.json`
- `drizzle/meta/_journal.json`

No estado atual:

- `0000` cria a tabela `consultas`
- `0001` cria `pacientes`, `usuarios` e `prontuario`, ajusta `consultas.id_usuario` e adiciona as foreign keys reais

## Validacao de Integridade

A integridade referencial foi validada com:

- `npm run db:generate`
- `npm run db:migrate`
- consulta em `information_schema.KEY_COLUMN_USAGE`
- inserts validos em transacao
- inserts invalidos bloqueados com `ER_NO_REFERENCED_ROW_2`
