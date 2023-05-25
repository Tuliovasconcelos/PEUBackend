import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AgendamentoRepository from '../typeorm/repositories/AgendamentoRepository';

interface IRequest {
  idAgendamento: number;
}

export default class DeleteAgendamentoService {
  public async execute({ idAgendamento }: IRequest): Promise<void> {
    const agendamentoRepository = getCustomRepository(AgendamentoRepository);

    const agendamento = await agendamentoRepository.findById(idAgendamento);

    if (!agendamento) {
      throw new AppError('Agendamento not found');
    }

    await agendamentoRepository.remove(agendamento);
  }
}
