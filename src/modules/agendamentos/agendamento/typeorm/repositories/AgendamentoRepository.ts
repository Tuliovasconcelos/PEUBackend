import { EntityRepository, Repository } from 'typeorm';
import Agendamento from '@modules/agendamentos/agendamento/typeorm/entities/Agendamento';

@EntityRepository(Agendamento)
export default class AgendamentoRepository extends Repository<Agendamento> {
  public async findById(idAgendamento: number): Promise<Agendamento | null> {
    const agendamento = await this.findOne({
      where: {
        idAgendamento,
      },
      relations: ['paciente', 'medico', 'clinica', 'agendamentoTipo'],
    });

    return agendamento || null;
  }

  public async findByIdMedico(idMedico: number): Promise<Agendamento | null> {
    const agendamento = await this.findOne({
      where: {
        idMedico,
      },
      relations: ['paciente', 'clinica', 'agendamentoTipo'],
    });

    return agendamento || null;
  }

  public async findByIdClinica(idClinica: number): Promise<Agendamento | null> {
    const agendamento = await this.findOne({
      where: {
        idClinica,
      },
      relations: ['paciente', 'medico', 'agendamentoTipo'],
    });

    return agendamento || null;
  }

  public async findByIdAgendamentoTipo(idAgendamentoTipo: number): Promise<Agendamento | null> {
    const agendamento = await this.findOne({
      where: {
        idAgendamentoTipo,
      },
      relations: ['paciente', 'medico', 'clinica'],
    });

    return agendamento || null;
  }
}
