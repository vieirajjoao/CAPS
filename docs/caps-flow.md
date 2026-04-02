# CAPS Flow

## Objetivo

Definir uma forma previsivel de trabalhar com branches, commits e pull requests sem misturar entregas.

## Branches do Projeto

- `main`
  branch estavel
- `develop`
  branch de integracao
- `feature/*`
  branches individuais por tarefa

## Branches Ativas Relevantes

- `develop`
- `feature/consulta-slurkronox`
- `main`

## Regra de Organizacao

- nao trabalhar diretamente em `main`
- evitar criar branch nova sem necessidade
- manter uma branch por escopo
- revisar o diff antes do commit
- abrir PR sempre para `develop`

## Branch da Consulta

- nome: `feature/consulta-slurkronox`
- responsavel: `Savio de Brito Oliveira Filho`
- escopo: `schema Consulta` e documentacao relacionada a essa entrega

## Padrao de Commit

- `feat(consulta): ...`
- `docs(...): ...`
- `refactor(...): ...`

## Fluxo Operacional

```bash
git checkout develop
git pull origin develop
git checkout -b feature/minha-tarefa
git add .
git commit -m "feat: minha entrega"
git push origin feature/minha-tarefa
```
