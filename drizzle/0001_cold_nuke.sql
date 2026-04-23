CREATE TABLE `pacientes` (
	`id_paciente` varchar(36) NOT NULL,
	`nome_paciente` varchar(255) NOT NULL,
	`data_nascimento_paciente` date NOT NULL,
	`endereco_paciente` varchar(255) NOT NULL,
	`telefone_paciente` varchar(11) NOT NULL,
	`convenio_medico_paciente` varchar(40) NOT NULL,
	`hf_paciente` text,
	`hs_paciente` text,
	CONSTRAINT `pacientes_id_paciente` PRIMARY KEY(`id_paciente`)
);
--> statement-breakpoint
CREATE TABLE `usuarios` (
	`id_usuario` varchar(11) NOT NULL,
	`nome_usuario` varchar(255) NOT NULL,
	`email_usuario` varchar(320) NOT NULL,
	`senha_usuario` varchar(255) NOT NULL,
	`perfil` enum('admin','medico','atendente') NOT NULL,
	`crm_usuario` varchar(20),
	CONSTRAINT `usuarios_id_usuario` PRIMARY KEY(`id_usuario`),
	CONSTRAINT `usuarios_email_unique` UNIQUE(`email_usuario`)
);
--> statement-breakpoint
CREATE TABLE `prontuario` (
	`id_prontuario` int AUTO_INCREMENT NOT NULL,
	`id_paciente` varchar(36) NOT NULL,
	`id_usuario` varchar(11) NOT NULL,
	`anamnese` text NOT NULL,
	`criado_em` timestamp NOT NULL DEFAULT (now()),
	`atualizado_em` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `prontuario_id_prontuario` PRIMARY KEY(`id_prontuario`)
);
--> statement-breakpoint
ALTER TABLE `consultas` MODIFY COLUMN `id_usuario` varchar(11) NOT NULL;--> statement-breakpoint
ALTER TABLE `prontuario` ADD CONSTRAINT `prontuario_id_paciente_pacientes_id_paciente_fk` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes`(`id_paciente`) ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `prontuario` ADD CONSTRAINT `prontuario_id_usuario_usuarios_id_usuario_fk` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX `pacientes_nome_idx` ON `pacientes` (`nome_paciente`);--> statement-breakpoint
CREATE INDEX `pacientes_telefone_idx` ON `pacientes` (`telefone_paciente`);--> statement-breakpoint
CREATE INDEX `usuarios_perfil_idx` ON `usuarios` (`perfil`);--> statement-breakpoint
CREATE INDEX `prontuario_paciente_idx` ON `prontuario` (`id_paciente`);--> statement-breakpoint
CREATE INDEX `prontuario_usuario_idx` ON `prontuario` (`id_usuario`);--> statement-breakpoint
ALTER TABLE `consultas` ADD CONSTRAINT `consultas_id_paciente_pacientes_id_paciente_fk` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes`(`id_paciente`) ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `consultas` ADD CONSTRAINT `consultas_id_usuario_usuarios_id_usuario_fk` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON DELETE restrict ON UPDATE cascade;