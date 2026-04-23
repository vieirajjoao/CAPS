import { and, asc, eq, ne } from "drizzle-orm";
import { db } from "../../../db";
import { consultas, type Consulta, type NovaConsulta, pacientes, type Paciente, usuarios, type Usuario } from "../../../db/schema";

export type ConsultaFilters = {
  id_paciente?: string;
  id_usuario?: string;
  status?: Consulta["status"];
};

export type ConsultaComRelacoes = Consulta & {
  paciente: Paciente | null;
  usuario: Usuario | null;
};

// O repo so fala com banco. Regra de negocio fica no service.
export const consultasRepository = {
  async list(filters: ConsultaFilters): Promise<ConsultaComRelacoes[]> {
    return db.query.consultas.findMany({
      where: and(
        filters.id_paciente ? eq(consultas.id_paciente, filters.id_paciente) : undefined,
        filters.id_usuario ? eq(consultas.id_usuario, filters.id_usuario) : undefined,
        filters.status ? eq(consultas.status, filters.status) : undefined,
      ),
      with: {
        paciente: true,
        usuario: true,
      },
      orderBy: [asc(consultas.data_hora)],
    });
  },

  async findById(id: string): Promise<ConsultaComRelacoes | undefined> {
    return db.query.consultas.findFirst({
      where: eq(consultas.id_consulta, id),
      with: {
        paciente: true,
        usuario: true,
      },
    });
  },

  async findPatientById(id: string): Promise<Paciente | undefined> {
    return db.query.pacientes.findFirst({
      where: eq(pacientes.id_paciente, id),
    });
  },

  async findUserById(id: string): Promise<Usuario | undefined> {
    return db.query.usuarios.findFirst({
      where: eq(usuarios.id_usuario, id),
    });
  },

  async findScheduleConflict(
    idUsuario: string,
    dataHora: Date,
    ignoredConsultaId?: string,
  ): Promise<Consulta | undefined> {
    return db.query.consultas.findFirst({
      where: and(
        eq(consultas.id_usuario, idUsuario),
        eq(consultas.data_hora, dataHora),
        ignoredConsultaId ? ne(consultas.id_consulta, ignoredConsultaId) : undefined,
      ),
    });
  },

  async create(data: NovaConsulta): Promise<ConsultaComRelacoes> {
    await db.insert(consultas).values(data);

    const createdConsulta = await this.findById(data.id_consulta);

    if (!createdConsulta) {
      throw new Error("Consulta criada, mas nao encontrada na leitura de retorno.");
    }

    return createdConsulta;
  },

  async updateStatus(
    id: string,
    input: { status: Consulta["status"]; obs?: string },
  ): Promise<ConsultaComRelacoes | undefined> {
    const values: { status: Consulta["status"]; obs?: string } = {
      status: input.status,
    };

    if (input.obs !== undefined) {
      values.obs = input.obs;
    }

    await db
      .update(consultas)
      .set(values)
      .where(eq(consultas.id_consulta, id));

    return this.findById(id);
  },
};
