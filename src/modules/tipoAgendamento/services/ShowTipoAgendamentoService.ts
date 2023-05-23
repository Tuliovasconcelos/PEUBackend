import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import TipoAgendamento from '../typeorm/entities/TipoAgendamento';
import TipoAgendamentoRepository from '../typeorm/repositories/TipoAgendamentoRepository';

interface IRequest {
  idTipoAgendamento: number;
}

export default class ShowTipoAgendamentoService {
  public async execute({ idTipoAgendamento }: IRequest): Promise<TipoAgendamento> {
    const tipoAgendamentoRepository = getCustomRepository(TipoAgendamentoRepository);
    const tipoAgendamento = await tipoAgendamentoRepository.findById(idTipoAgendamento);

    if (!tipoAgendamento) {
      throw new AppError('TipoAgendamento not found');
    }

    return tipoAgendamento;
  }
}
