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
|-- 0001_cold_nuke.sql
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
|       |-- relations.ts
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
- `db`: conexao com banco, schemas, relations e migrations
- `modules`: organizacao por dominio e responsabilidade funcional
- `app.ts`: composicao da aplicacao Express
- `server.ts`: bootstrap HTTP da aplicacao

## Decisoes Tecnicas Atuais

- o bootstrap do servidor foi mantido minimo para garantir validacao rapida
- a conexao Drizzle foi centralizada em `src/db/index.ts`
- a configuracao de ambiente foi centralizada em `src/config/env.ts`
- os modulos foram preparados por dominio, mesmo sem implementacao funcional completa
- os schemas do banco foram alinhados ao dialeto MySQL
- as relacoes entre tabelas passaram a usar foreign keys reais
- `relations.ts` foi adicionado para consultas relacionais tipadas no Drizzle

## Estado Atual da Persistencia

- `consultas` referencia `pacientes` e `usuarios`
- `prontuario` referencia `pacientes` e `usuarios`
- a migration `0001_cold_nuke.sql` consolida as tabelas faltantes e as FKs
- o journal e o snapshot do Drizzle refletem o estado atual do schema
- a integridade foi validada em MySQL com inserts validos e invalidos

## Riscos e Pontos de Atencao

- ainda nao existem controllers, services, repositories e routes implementados
- a validacao do banco local depende da configuracao de ambiente do desenvolvedor
- qualquer mudanca futura de schema precisa manter sincronismo entre codigo, migration, docs e wiki

## Diretriz de Evolucao

- manter todos os schemas no mesmo dialeto antes de ampliar a modelagem
- gerar migration sempre que houver mudanca estrutural no banco
- revisar README, `docs/modelo-de-dados.md` e `docs/WORKLOG.md` junto com cada alteracao estrutural
- preservar o fluxo `feature/* -> PR -> develop` para evitar mistura de escopo
