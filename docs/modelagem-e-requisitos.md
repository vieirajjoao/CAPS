# Modelagem e Levantamento de Requisitos

## Objetivo do Sistema

O CAPS visa automatizar a gestao de uma clinica medica por meio de uma API backend, organizando usuarios, pacientes, consultas e prontuarios em uma base unica e coerente.

## Dominios Principais

- Usuario
- Paciente
- Consulta
- Prontuario

## Requisitos Funcionais

| ID | Titulo | Descricao |
| --- | --- | --- |
| RF001 | Gestao de Usuarios | Permitir cadastro e gerenciamento de usuarios com perfis diferentes |
| RF002 | Cadastro de Pacientes | Permitir registro de pacientes e historico basico |
| RF003 | Agenda do Medico | Permitir visualizacao dos atendimentos do dia |
| RF004 | Agendamento | Vincular paciente, medico e horario em uma consulta |
| RF005 | Prontuario Eletronico | Registrar atendimento clinico durante a consulta |
| RF006 | Relatorio de Gestao | Gerar relatorios de atendimentos por periodo |

## Requisitos Nao Funcionais

- RNF001: o backend deve usar Node.js com Express
- RNF002: a modelagem deve ser feita com TypeScript e Drizzle ORM
- RNF003: a estrutura precisa permitir colaboracao por branch sem mistura de escopo
- RNF004: o projeto deve manter rastreabilidade tecnica por README, documentos e WORKLOG

## Regras de Negocio

- um medico pode atender em uma clinica e ser paciente em outra
- nao e permitido agendar dois pacientes para o mesmo medico no mesmo horario
- prontuarios so podem ser editados pelo medico responsavel pelo atendimento

## Entidades Previstas

### Usuario

- `id_usuario` ou `CPF`
- `perfil`
- `senha_usuario`
- `nome_usuario`
- `email_usuario`
- `CRM_usuario`

### Paciente

- `nome_paciente`
- `data_nascimento_paciente`
- `id_paciente`
- `endereco_paciente`
- `telefone_paciente`
- `consultas_paciente`
- `prontuarios_existentes_paciente`
- `convenio_medico_paciente`
- `hf`
- `hs`

### Consulta

- `id_consulta`
- `id_paciente`
- `id_usuario`
- `data_hora`
- `status`
- `obs`
- `criado_em`
- `atualizado_em`

### Prontuario

- `id_produto`
- `nome`
- `medico`
- `idade do paciente`
- `anamnese`

## Responsabilidades por Integrante

| Entidade | Responsavel |
| --- | --- |
| Usuario | Thalles Resende Marques |
| Paciente | Lucas Moura Nunes de Oliveira |
| Consulta | Savio de Brito Oliveira Filho |
| Prontuario | Felipe Moreira Barcelos |
| Revisao geral | Murilo |

## Estado Atual de Cobertura

No codigo atual:

- `Consulta` possui schema em `mysql-core`, migration inicial e documentacao especifica
- `Usuario`, `Paciente` e `Prontuario` possuem arquivos de schema no repositorio, mas ainda precisam de alinhamento tecnico com a configuracao MySQL adotada no projeto
- a estrutura de modulos existe para os quatro dominios, mas ainda sem implementacao funcional completa

## Observacoes Importantes

- a modelagem conceitual do projeto continua valida para os quatro dominios
- a implementacao tecnica ainda esta em consolidacao
- toda documentacao deve refletir o estado real do codigo, mesmo quando houver pendencias entre modelagem e implementacao
