import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AgendamentoTipo from '../typeorm/entities/agendamentoTipo';
import AgendamentoTipoRepository from '../typeorm/repositories/AgendamentoTipoRepository';

interface IRequest {
  idAgendamentoTipo: number;
}

export default class ShowAgendamentoTipoService {
  public async execute({ idAgendamentoTipo }: IRequest): Promise<AgendamentoTipo> {
    const agendamentoTipoRepository = getCustomRepository(AgendamentoTipoRepository);
    const agendamentoTipo = await agendamentoTipoRepository.findByidAgendamentoTipo(idAgendamentoTipo);

    if (!agendamentoTipo) {
      throw new AppError('AgendamentoTipo not found');
    }

    return agendamentoTipo;
  }
}
