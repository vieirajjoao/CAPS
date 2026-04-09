CREATE TABLE `consultas` (
	`id_consulta` varchar(36) NOT NULL,
	`id_paciente` varchar(36) NOT NULL,
	`id_usuario` varchar(14) NOT NULL,
	`data_hora` datetime NOT NULL,
	`status` enum('agendada','concluida','cancelada') NOT NULL DEFAULT 'agendada',
	`obs` text,
	`criado_em` timestamp NOT NULL DEFAULT (now()),
	`atualizado_em` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `consultas_id_consulta` PRIMARY KEY(`id_consulta`),
	CONSTRAINT `consultas_usuario_data_hora_unique` UNIQUE(`id_usuario`,`data_hora`)
);
--> statement-breakpoint
CREATE INDEX `consultas_paciente_idx` ON `consultas` (`id_paciente`);--> statement-breakpoint
CREATE INDEX `consultas_usuario_idx` ON `consultas` (`id_usuario`);--> statement-breakpoint
CREATE INDEX `consultas_data_hora_idx` ON `consultas` (`data_hora`);