import { getCustomRepository } from 'typeorm';
import Agendamento from '../typeorm/entities/Agendamento';
import AgendamentoRepository from '../typeorm/repositories/AgendamentoRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idAgendamento: number;
}

export default class ShowAgendamentoService {
  public async execute({ idAgendamento }: IRequest): Promise<Agendamento> {
    const agendamentoRepository = getCustomRepository(AgendamentoRepository);

    const agendamento = await agendamentoRepository.findById(idAgendamento);

    if (!agendamento) {
      throw new AppError('Agendamento not found');
    }

    return agendamento;
  }
}
