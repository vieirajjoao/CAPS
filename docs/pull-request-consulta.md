# Guia de Pull Request

## Objetivo

Servir como roteiro para PRs tecnicos do CAPS, especialmente quando a entrega envolve modelagem, migration, documentacao, refinamento estrutural ou sincronizacao com `develop`.

## Estrutura Recomendada

### Titulo

Usar titulo claro e semantico, por exemplo:

- `feat(db): enforce foreign keys across clinical schemas`
- `docs(project): refine repository documentation`
- `refactor(structure): align backend base with current implementation`

### Resumo

Explicar em poucas linhas:

- o que foi alterado
- por que foi alterado
- qual era a causa raiz, quando se tratar de correcao

### Alteracoes Principais

Listar os arquivos ou grupos de arquivos mais relevantes.

### Validacao

Registrar o que foi executado, por exemplo:

- `npm run check`
- `npm run db:generate`
- `npm run db:migrate`
- revisao de `git diff`
- consulta em `information_schema`, quando houver alteracao de banco
- smoke test dos endpoints basicos, quando aplicavel

### Impacto Tecnico

Esclarecer se o PR:

- altera estrutura
- atualiza modelagem
- cria ou ajusta migrations
- corrige documentacao
- melhora rastreabilidade

### Observacoes

Usar este bloco para:

- inconsistencias conhecidas
- limites do escopo
- dependencias de validacao do time
- overrides locais usados apenas para teste, quando houver

## Regras para um PR Bom

- manter escopo objetivo
- nao misturar dominios sem necessidade
- nao abrir PR com documentacao desalinhada do codigo
- nao omitir pendencias tecnicas relevantes
- manter o alvo em `develop`, salvo excecao explicitamente combinada
- se houver regra do time, incluir pelo menos 2 comentarios uteis no PR
