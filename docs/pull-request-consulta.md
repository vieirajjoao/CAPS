# Guia de Pull Request

## Objetivo

Servir como roteiro para PRs tecnicos do CAPS, especialmente quando a entrega envolve modelagem, documentacao, refinamento estrutural ou sincronizacao entre repositorio e wiki.

## Estrutura Recomendada

### Titulo

Usar titulo claro e semantico, por exemplo:

- `docs(project): refine repository documentation and sync wiki`
- `feat(consulta): update consulta schema and related docs`
- `refactor(structure): align project base with current implementation`

### Resumo

Explicar em poucas linhas:

- o que foi alterado
- por que foi alterado
- se o foco foi codigo, documentacao, arquitetura ou integracao

### Alteracoes Principais

Listar os arquivos ou grupos de arquivos mais relevantes.

### Validacao

Registrar o que foi executado, por exemplo:

- `npm run check`
- revisao de `git diff`
- validacao de README, docs e wiki
- smoke test dos endpoints basicos, quando aplicavel

### Impacto Tecnico

Esclarecer se o PR:

- altera estrutura
- atualiza modelagem
- corrige documentacao
- melhora rastreabilidade
- expone algum ponto de atencao tecnico

### Observacoes

Usar este bloco para:

- inconsistencias conhecidas
- limites do escopo
- dependencias de validacao do time

## Regras para um PR Bom

- manter escopo objetivo
- nao misturar dominios sem necessidade
- nao abrir PR com documentacao desalinhada do codigo
- nao omitir pendencias tecnicas relevantes
- manter o alvo em `develop`, salvo excecao explicitamente combinada
