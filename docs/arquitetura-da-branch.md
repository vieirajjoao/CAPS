# Estado Atual da Base

## Objetivo

Documentar o estado real da implementacao atual do CAPS, deixando claro o que ja existe no codigo, o que esta apenas estruturado e quais pontos ainda precisam de evolucao.

## O Que Ja Esta Pronto

- bootstrap minimo da API com Express
- separacao entre `app.ts` e `server.ts`
- leitura e validacao de ambiente com Zod
- conexao centralizada com MySQL e Drizzle
- tratamento global de erro e `404`
- estrutura modular por dominio em `src/modules/`
- schemas de `Consulta`, `Paciente`, `Usuario` e `Prontuario`
- relations tipadas em `src/db/schema/relations.ts`
- migrations versionadas em `drizzle/`
- foreign keys reais entre `consultas`/`prontuario` e `pacientes`/`usuarios`

## O Que Esta So Estruturado

- controllers
- services
- repositories
- routes
- integracao funcional completa entre os dominios

## Arquitetura Relevante Hoje

```text
src/
|-- app.ts
|-- server.ts
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
`-- modules/
    |-- consultas/
    |-- pacientes/
    |-- prontuarios/
    `-- usuarios/
```

## Decisoes Tecnicas Consolidadas

- a aplicacao Express foi separada do bootstrap HTTP para facilitar manutencao
- o ambiente foi centralizado em um unico arquivo tipado
- a conexao com banco foi centralizada em `src/db/index.ts`
- a pasta `src/modules/` ja prepara a evolucao por dominio sem misturar camadas
- a modelagem do banco foi consolidada em MySQL
- a integridade referencial passou a ser garantida no banco, nao apenas no codigo

## Pontos de Atencao

- a validacao do banco local depende da configuracao de ambiente de cada desenvolvedor
- o projeto ainda nao possui camadas HTTP/servico/repositorio implementadas
- qualquer alteracao em schema precisa manter sincronismo com migration, README e WORKLOG

## Leitura Correta do Estado Atual

Hoje o projeto nao esta limitado a `Consulta` isolada. O que existe e:

- um backend base executavel
- quatro schemas modelados
- relacoes reais entre os principais dominios clinicos
- uma base comum pronta para evolucao funcional

Isso significa que a documentacao precisa mostrar ao mesmo tempo:

- o que ja esta implementado
- o que foi validado de verdade
- o que ainda falta para consolidacao completa do backend
