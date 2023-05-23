import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import TipoAgendamentoRepository from '../typeorm/repositories/TipoAgendamentoRepository';

interface IRequest {
  idTipoAgendamento: number;
}

export default class DeleteTipoAgendamentoService {
  public async execute({ idTipoAgendamento }: IRequest): Promise<void> {
    const tipoAgendamentoRepository = getCustomRepository(TipoAgendamentoRepository);
    const tipoAgendamento = await tipoAgendamentoRepository.findById(idTipoAgendamento);

    if (!tipoAgendamento) {
      throw new AppError('TipoAgendamento not found');
    }

    await tipoAgendamentoRepository.remove(tipoAgendamento);
  }
}
