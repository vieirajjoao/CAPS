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

## Branch da Entrega Atual

- nome: `feature/consulta-slurkronox`
- responsavel: `Savio de Brito Oliveira Filho`
- entrega funcional: schema de `Consulta`
- entrega estrutural: organizacao profissional da base do projeto

## Padrao de Commit

- `feat(consulta): ...`
- `docs(project): ...`
- `docs(worklog): ...`
- `chore(setup): ...`
- `refactor(structure): ...`

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
- executar `npm run typecheck`
- executar `npm run build`
- conferir README, docs e WORKLOG
