# Documento de Arquitetura de Software

## Visao Geral

O CAPS adota uma arquitetura de monolito modular em camadas para manter o projeto simples para a disciplina, mas suficientemente organizado para trabalho em equipe.

## Objetivos Arquiteturais

- separar responsabilidades por camada
- permitir evolucao incremental por entidade
- reduzir conflito entre integrantes
- garantir rastreabilidade tecnica via documentacao e PR

## Stack Tecnologica

- linguagem: TypeScript
- runtime: Node.js
- framework web: Express.js
- banco de dados: MySQL
- acesso a dados: Drizzle ORM
- validacao: Zod

## Estrutura Base

```text
drizzle/
|-- 0000_smart_tenebrous.sql
`-- meta/
src/
|-- app.ts
|-- config/
|   `-- env.ts
|-- core/
|   |-- errors/
|   |   `-- app-error.ts
|   `-- middlewares/
|       |-- error-handler.ts
|       `-- not-found-handler.ts
|-- db/
|   |-- index.ts
|   `-- schema/
|       |-- consultas.ts
|       |-- pacientes.ts
|       |-- prontuario.ts
|       |-- usuarios.ts
|       `-- index.ts
|-- modules/
|   |-- consultas/
|   |-- pacientes/
|   |-- prontuarios/
|   `-- usuarios/
`-- server.ts
```

## Camadas do Projeto

- `config`: configuracoes compartilhadas e leitura segura de ambiente
- `core`: erros e middlewares reutilizaveis
- `db`: conexao com banco e schemas Drizzle
- `modules`: organizacao por dominio e responsabilidade funcional
- `app.ts`: composicao da aplicacao Express
- `server.ts`: bootstrap HTTP da aplicacao

## Decisoes Tecnicas Atuais

- o bootstrap do servidor foi mantido minimo para garantir validacao rapida
- a conexao Drizzle foi centralizada em `src/db/index.ts`
- a configuracao de ambiente foi centralizada em `src/config/env.ts`
- os modulos foram preparados por dominio, mesmo sem implementacao funcional completa
- a primeira migration gerada no projeto cobre apenas a tabela `consultas`

## Estado Atual da Implementacao

- `src/app.ts` e `src/server.ts` deixam a base executavel localmente
- `src/db/schema/consultas.ts` esta alinhado com `mysql-core`
- `src/db/schema/usuarios.ts`, `src/db/schema/pacientes.ts` e `src/db/schema/prontuario.ts` ainda usam `pg-core`
- `src/modules/` ja esta organizado por dominio, mas sem controllers, services, repositories e routes implementados

## Riscos e Pontos de Atencao

- ainda nao existem controllers, services, repositories e routes implementados
- a base esta configurada para MySQL, mas tres schemas ainda nao acompanham esse dialeto
- a migration existente em `drizzle/` cobre apenas `Consulta`
- a integracao com banco depende da configuracao local do `.env`

## Diretriz de Evolucao

- alinhar todos os schemas ao mesmo dialeto antes de consolidar novas migrations
- manter a documentacao sincronizada com a base real, inclusive quando houver pendencias tecnicas
- preservar o fluxo `feature/* -> PR -> develop` para evitar mistura de escopo
