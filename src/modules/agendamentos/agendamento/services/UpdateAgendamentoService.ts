import { getCustomRepository } from 'typeorm';
import Agendamento from '../typeorm/entities/Agendamento';
import AgendamentoRepository from '../typeorm/repositories/AgendamentoRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idAgendamento: number;
  idPaciente?: number;
  idMedico?: number;
  idClinica?: number;
  idAgendamentoTipo?: number;
  dataAgendamento?: Date;
  horaAgendamento?: string;
  status?: 'A' | 'I';
}

export default class UpdateAgendamentoService {
  public async execute({
    idAgendamento,
    idPaciente,
    idMedico,
    idClinica,
    idAgendamentoTipo,
    dataAgendamento,
    horaAgendamento,
    status,
  }: IRequest): Promise<Agendamento> {
    const agendamentoRepository = getCustomRepository(AgendamentoRepository);

    const agendamento = await agendamentoRepository.findById(idAgendamento);

    if (!agendamento) {
      throw new AppError('Agendamento not found');
    }

    if (idPaciente) {
      agendamento.idPaciente = idPaciente;
    }
    if (idMedico) {
      agendamento.idMedico = idMedico;
    }
    if (idClinica) {
      agendamento.idClinica = idClinica;
    }
    if (idAgendamentoTipo) {
      agendamento.idAgendamentoTipo = idAgendamentoTipo;
    }
    if (dataAgendamento) {
      agendamento.dataAgendamento = dataAgendamento;
    }
    if (horaAgendamento) {
      agendamento.horaAgendamento = horaAgendamento;
    }
    if (status) {
      agendamento.status = status;
    }

    agendamento.dataAlteracao = new Date();

    await agendamentoRepository.save(agendamento);

    return agendamento;
  }
}
