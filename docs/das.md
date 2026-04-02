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
src/
|-- config/
|   `-- env.ts
|-- core/
|   |-- errors/
|   `-- middlewares/
|-- db/
|   |-- index.ts
|   `-- schema/
|       |-- consultas.ts
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
- `server.ts`: bootstrap HTTP da aplicacao

## Decisoes Tecnicas Desta Branch

- o bootstrap do servidor foi mantido minimo para garantir validacao rapida
- a conexao Drizzle foi centralizada em `src/db/index.ts`
- o schema de `Consulta` permanece isolado para respeitar o escopo do integrante responsavel
- os modulos de outros dominios foram preparados apenas com estrutura, sem implementacao de negocio

## Riscos e Limites Atuais

- ainda nao existem controllers, services, repositories e routes implementados
- so o schema de `Consulta` foi modelado nesta branch
- migracoes ainda nao foram geradas
- a integracao com banco depende da configuracao local do `.env`
