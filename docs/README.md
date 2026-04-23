# Documentacao do Projeto

Este diretorio concentra os documentos tecnicos, organizacionais e operacionais do CAPS.

O objetivo desta pasta e manter o repositorio compreensivel por leitura, alinhado com o codigo real, sincronizado com a wiki quando necessario e coerente com o estado do banco e das migrations.

## Ordem Recomendada de Leitura

1. `modelagem-e-requisitos.md`
2. `das.md`
3. `modelo-de-dados.md`
4. `arquitetura-da-branch.md`
5. `guia-de-contribuicao.md`
6. `caps-flow.md`
7. `checklist-equipe.md`
8. `entrega-consulta.md`
9. `pull-request-consulta.md`
10. `checklist-final-consulta.md`
11. `WORKLOG.md`

## Visao por Categoria

### Produto e Requisitos

- `modelagem-e-requisitos.md`
- `modelo-de-dados.md`

### Arquitetura e Estado Atual

- `das.md`
- `arquitetura-da-branch.md`

### Processo e Colaboracao

- `guia-de-contribuicao.md`
- `caps-flow.md`
- `checklist-equipe.md`
- `pull-request-consulta.md`

### Dominio e Entregas

- `entrega-consulta.md`
- `checklist-final-consulta.md`

### Rastreabilidade

- `WORKLOG.md`

## O que Cada Documento Faz

- `modelagem-e-requisitos.md`: resume objetivo, requisitos, regras e responsabilidades
- `das.md`: documenta a arquitetura adotada e os pontos de atencao tecnicos
- `modelo-de-dados.md`: mostra como os schemas atuais, migrations e FKs se conectam com a modelagem
- `arquitetura-da-branch.md`: descreve o estado atual da base e os limites conhecidos
- `guia-de-contribuicao.md`: define como contribuir sem misturar escopos
- `caps-flow.md`: resume o fluxo de branches, commits e PRs
- `checklist-equipe.md`: ajuda a revisar entregas por integrante
- `entrega-consulta.md`: detalha o estado atual da entidade `Consulta`
- `pull-request-consulta.md`: serve como roteiro para PRs tecnicos do projeto
- `checklist-final-consulta.md`: funciona como checklist de revisao da modelagem de `Consulta`
- `WORKLOG.md`: e o registro tecnico oficial das alteracoes

## Regras de Manutencao

- manter o conteudo coerente com o estado real do codigo
- evitar prometer implementacoes que ainda nao existem
- registrar alteracoes relevantes em `WORKLOG.md`
- revisar links, nomes e estrutura antes de cada commit
- manter schema, migration e documentacao sincronizados quando houver mudanca estrutural no banco
- revisar a wiki quando uma mudanca afetar arquitetura, modelagem, fluxo ou estado da implementacao
