import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AgendamentoTipoRepository from '../typeorm/repositories/AgendamentoTipoRepository';

interface IRequest {
  idAgendamentoTipo: number;
}

export default class DeleteAgendamentoTipoService {
  public async execute({ idAgendamentoTipo }: IRequest): Promise<void> {
    const agendamentoTipoRepository = getCustomRepository(AgendamentoTipoRepository);
    const agendamentoTipo = await agendamentoTipoRepository.findByidAgendamentoTipo(idAgendamentoTipo);

    if (!agendamentoTipo) {
      throw new AppError('AgendamentoTipo not found');
    }

    await agendamentoTipoRepository.remove(agendamentoTipo);
  }
}
