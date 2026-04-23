# CAPS Flow

## Objetivo

Definir um fluxo previsivel de branches, commits e pull requests para que cada integrante trabalhe sem sobrescrever a entrega dos outros.

## Estrutura de Branches

- `main`: ramo estavel e protegido
- `develop`: ramo de integracao
- `feature/*`: ramo individual por tarefa

## Regras Obrigatorias

- nao trabalhar diretamente em `main`
- preferir sair sempre de `develop`
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

## Regra para Integracao

- `main` e `develop` devem ser tratados como ramos protegidos
- o merge final deve passar por revisao
- se o projeto exigir comentarios obrigatorios em PR, eles devem ser uteis e tecnicos
