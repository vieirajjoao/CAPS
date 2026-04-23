# Estado Atual da Base

## Objetivo

Documentar o estado real da implementacao atual do CAPS, deixando claro o que ja existe no codigo, o que esta apenas estruturado e quais pontos ainda precisam de alinhamento tecnico.

## O Que Ja Esta Pronto

- bootstrap minimo da API com Express
- separacao entre `app.ts` e `server.ts`
- leitura e validacao de ambiente com Zod
- conexao centralizada com MySQL e Drizzle
- tratamento global de erro e `404`
- estrutura modular por dominio em `src/modules/`
- schema e migration inicial da entidade `Consulta`
- schemas iniciais para `Usuario`, `Paciente` e `Prontuario`

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

## Pontos de Atencao

- a configuracao geral do projeto usa MySQL
- o schema de `Consulta` acompanha esse dialeto com `mysql-core`
- os schemas de `Usuario`, `Paciente` e `Prontuario` ainda usam `pg-core`
- a migration em `drizzle/` cobre apenas a tabela `consultas`

## Leitura Correta do Estado Atual

Hoje o projeto nao esta "parado so em Consulta". O que existe e:

- um dominio `Consulta` mais maduro dentro da base
- tres outros schemas iniciais ja presentes no repositorio
- uma base comum pronta para evolucao

Isso significa que a documentacao precisa mostrar ao mesmo tempo:

- o que ja esta implementado
- o que ainda esta inconsistente
- o que ainda falta para consolidacao do backend
