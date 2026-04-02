# Checklist Final da Consulta

## Escopo

- [x] trabalhar apenas na branch `feature/consulta-slurkronox`
- [x] manter o foco somente na entidade `Consulta`
- [x] evitar alterar entidades de outros integrantes

## Schema

- [x] criar `src/db/schema/consultas.ts`
- [x] definir `id_consulta`
- [x] definir `id_paciente`
- [x] definir `id_usuario`
- [x] definir `data_hora`
- [x] definir `status`
- [x] definir `obs`
- [x] definir `criado_em`
- [x] definir `atualizado_em`
- [x] adicionar indice por paciente
- [x] adicionar indice por usuario
- [x] adicionar indice por data/hora
- [x] adicionar restricao unica para medico e horario

## Organizacao

- [x] exportar o schema em `src/db/schema/index.ts`
- [x] documentar a entrega em `docs/entrega-consulta.md`
- [x] documentar fluxo e branch em `docs/caps-flow.md`
- [x] registrar a execucao em `docs/WORKLOG.md`
- [x] manter o `README.md` coerente com a branch

## Git

- [x] revisar o diff da branch
- [x] manter a branch correta sem criar branch extra desnecessaria
- [x] fazer commits semanticos
- [x] realizar push para `origin/feature/consulta-slurkronox`

## Revisao Final

- [x] confirmar que o diff relevante contra `develop` pertence ao escopo de Consulta
- [x] preparar material para PR profissional
- [x] manter a branch local sincronizada com a remota
