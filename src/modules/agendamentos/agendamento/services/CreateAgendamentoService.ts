import { getCustomRepository } from 'typeorm';
import Agendamento from '../typeorm/entities/Agendamento';
import AgendamentoRepository from '../typeorm/repositories/AgendamentoRepository';

interface IRequest {
  idPaciente: number;
  idMedico: number;
  idClinica: number;
  idAgendamentoTipo: number;
  dataAgendamento: Date;
  horaAgendamento: string;
  status: 'ativo' | 'inativo';
}

export default class CreateAgendamentoService {
  public async execute({
    idPaciente,
    idMedico,
    idClinica,
    idAgendamentoTipo,
    dataAgendamento,
    horaAgendamento,
    status,
  }: IRequest): Promise<Agendamento> {
    const agendamentoRepository = getCustomRepository(AgendamentoRepository);

    const agendamento = agendamentoRepository.create({
      idPaciente,
      idMedico,
      idClinica,
      idAgendamentoTipo,
      dataAgendamento,
      horaAgendamento,
      status,
      dataAlteracao: new Date(),
    });

    await agendamentoRepository.save(agendamento);

    return agendamento;
  }
}
