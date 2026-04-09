# Guia de Contribuicao

## Objetivo

Padronizar a forma de contribuir no CAPS para reduzir conflito de branch, codigo e documentacao.

## Fluxo de Trabalho

1. atualizar `develop`
2. criar ou usar a branch `feature/*` correta
3. trabalhar apenas no proprio escopo
4. revisar o diff localmente
5. registrar a atividade em `docs/WORKLOG.md`
6. enviar a branch para o remoto
7. abrir PR para `develop`

## Convencoes de Commit

- `feat(...)`: novas funcionalidades
- `fix(...)`: correcoes
- `refactor(...)`: reorganizacao sem alterar regra funcional
- `docs(...)`: documentacao
- `chore(...)`: ajustes de infraestrutura e tooling

## Padroes de Codigo

- nao usar `any`
- manter tipagem explicita
- preferir nomes descritivos
- evitar misturar portugues e ingles sem criterio
- nao implementar escopo de outro integrante

## Regra de Escopo

- cada participante implementa apenas a propria responsabilidade
- integrar atualizacoes vindas de `develop` nao significa assumir a manutencao do dominio de outro integrante
- se um arquivo de outro dominio vier de `develop`, ele deve ser apenas preservado ou integrado no minimo necessario para compatibilidade

## Padroes de Revisao

Antes do push:

- conferir a branch atual
- revisar `git diff`
- validar build e typecheck quando aplicavel
- confirmar que o README e o WORKLOG refletem o estado real da branch

## Registro Obrigatorio

Toda alteracao relevante deve ser registrada em `docs/WORKLOG.md` com:

- integrante responsavel
- responsabilidade
- branch usada
- arquivos alterados
- linhas adicionadas
- linhas removidas
- descricao objetiva
- commit
- status do push
