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

## Regras Criticas

- nunca fazer push direto em `main`
- nunca fazer push direto em `develop`
- toda tarefa deve sair de `develop` para uma branch `feature/*`
- toda integracao deve ocorrer por Pull Request

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
- verificar se a wiki precisa ser atualizada junto com a documentacao do repositorio

## Padroes para Pull Request

Todo PR deve:

- ter titulo objetivo e semantico
- explicar claramente escopo, impacto tecnico e validacoes executadas
- apontar o destino correto, normalmente `develop`
- evitar misturar entregas de dominios diferentes
- incluir pelo menos 2 comentarios uteis quando essa regra estiver ativa para o time

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

## Sincronizacao entre Docs e Wiki

Quando uma mudanca afetar contexto, arquitetura, fluxo de contribuicao, modelagem ou estado da implementacao:

- atualizar os documentos do repositorio
- revisar as paginas equivalentes da wiki
- evitar divergencia entre os dois lados
