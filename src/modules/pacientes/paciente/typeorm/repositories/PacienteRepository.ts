import { EntityRepository, In, Repository } from 'typeorm';
import Paciente from '../entities/Paciente';

interface IFindPacientes {
  id: number;
}

@EntityRepository(Paciente)
export default class PacienteRepository extends Repository<Paciente> {

  public async findById(id: number): Promise<Paciente | null> {
    const paciente = await this.findOne({
      where: {
        idPaciente: id,
      },
    });

    return paciente || null;
  }

  public async findByName(name: string): Promise<Paciente | null> {
    const paciente = await this.findOne({
      where: {
        nome: name,
      },
    });

    return paciente || null;
  }

  public async findAllByIds(pacientes: IFindPacientes[]): Promise<Paciente[]> {
    const pacienteIds = pacientes.map(paciente => paciente.id);

    const existentPacientes = await this.find({
      where: {
        idPaciente: In(pacienteIds),
      },
    });

    return existentPacientes;
  }
}
