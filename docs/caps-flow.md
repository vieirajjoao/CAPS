# CAPS Flow

## Objetivo

Definir um fluxo previsivel de branches, commits e pull requests para que cada integrante trabalhe sem sobrescrever a entrega dos outros.

## Estrutura de Branches

- `main`: ramo estavel e protegido
- `develop`: ramo de integracao
- `feature/*`: ramo individual por tarefa

## Regras Obrigatorias

- nao trabalhar diretamente em `main`
- nao trabalhar diretamente em `develop`
- sair sempre de `develop`
- manter uma branch por escopo real de trabalho
- revisar `git diff` antes de commitar
- registrar alteracoes relevantes em `docs/WORKLOG.md`
- abrir PR sempre para `develop`

## Padrao de Commit

- `feat(modulo): ...`
- `fix(modulo): ...`
- `docs(area): ...`
- `chore(area): ...`
- `refactor(area): ...`

## Fluxo Operacional Recomendado

```bash
git checkout develop
git pull caps develop
git checkout -b feature/minha-entrega
git add .
git commit -m "feat(minha-entrega): descricao objetiva"
git push caps feature/minha-entrega
```

## Antes de Abrir o PR

- confirmar a branch correta
- revisar o diff completo
- executar `npm run check`
- conferir README, docs e WORKLOG
- conferir se a wiki precisa acompanhar a mudanca
- integrar `develop` se o PR estiver defasado

## Regras para PR

- manter escopo objetivo
- descrever causa raiz, solucao e validacao quando houver correcao tecnica
- nao abrir PR com documentacao desalinhada do codigo
- incluir pelo menos 2 comentarios uteis quando essa regra estiver ativa para o time
- fechar ou alinhar PRs antigos quando forem substituidos ou perderem contexto
