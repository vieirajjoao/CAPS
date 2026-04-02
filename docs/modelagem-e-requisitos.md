# Modelagem e Levantamento de Requisitos

## Objetivo do Sistema

O CAPS visa automatizar a gestao de uma clinica medica por meio de uma API backend.

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

## Regras de Negocio

- um medico pode atender em uma clinica e ser paciente em outra
- nao e permitido agendar dois pacientes para o mesmo medico no mesmo horario
- prontuarios so podem ser editados pelo medico responsavel pelo atendimento

## Entidades e Responsabilidades

| Entidade | Responsavel |
| --- | --- |
| Usuario | Thalles Resende Marques |
| Paciente | Lucas Moura Nunes de Oliveira |
| Consulta | Savio de Brito Oliveira Filho |
| Prontuario | Felipe Moreira Barcelos |

## Escopo Desta Branch

Esta branch concentra apenas a entrega de `Consulta`, sem implementar o escopo dos outros integrantes.
