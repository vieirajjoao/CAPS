# Checklist da Equipe

## Checklist Geral do Projeto

- ler a documentacao principal antes de codar
- confirmar a branch correta antes de alterar arquivos
- manter o trabalho restrito ao proprio escopo funcional
- revisar o diff antes de commitar
- registrar as alteracoes em `docs/WORKLOG.md`
- validar o que for possivel com comandos locais
- revisar a wiki quando a mudanca mexer em contexto, arquitetura ou fluxo
- abrir PR para `develop`

## Definicao de Pronto

Uma entrega esta pronta quando:

- o escopo funcional da pessoa foi concluido
- o repositorio continua coerente e sem quebra de estrutura
- o diff foi revisado
- a documentacao relevante foi atualizada
- o `WORKLOG.md` reflete os commits enviados
- a branch e o push estao corretos

## Savio de Brito Oliveira Filho

- implementar o schema `Consulta`
- garantir `id_consulta`, `id_paciente`, `id_usuario`, `data_hora`, `status`, `obs`, `criado_em` e `atualizado_em`
- refletir a regra de conflito de horario por medico
- manter os relacionamentos de `Consulta` por identificador sem invadir os outros dominios
- deixar a branch pronta para revisao e PR

## Thalles Resende Marques

- implementar o schema `Usuario`
- definir perfil, credenciais e identificacao do profissional
- validar campos especificos de medico como `CRM_usuario`

## Lucas Moura Nunes de Oliveira

- implementar o schema `Paciente`
- garantir dados pessoais, historicos e referencias de atendimento
- revisar coerencia de nomes e campos do dominio

## Felipe Moreira Barcelos

- implementar o schema `Prontuario`
- validar os campos oficiais do dominio antes de fechar a modelagem
- evitar assumir silenciosamente inconsistencias como `id_produto`

## Murilo

- revisar consistencia geral do projeto
- validar padroes de branch, commit e PR
- revisar conflitos de nomenclatura e de arquitetura
- conferir se a documentacao acompanha o estado real do codigo
