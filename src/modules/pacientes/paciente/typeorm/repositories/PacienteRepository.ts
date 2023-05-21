import { EntityRepository, In, Repository } from 'typeorm';
import Paciente from '../entities/Paciente';

interface IFindPacientes {
  id: string;
}

@EntityRepository(Paciente)
export default class PacienteRepository extends Repository<Paciente> {
  public async findByName(name: string): Promise<Paciente | undefined> {
    const paciente = await this.findOne({
      where: {
        nome: name,
      },
    });

    return paciente;
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

