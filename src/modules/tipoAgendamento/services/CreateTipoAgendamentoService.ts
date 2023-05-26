import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import TipoAgendamento from '../typeorm/entities/TipoAgendamento';
import TipoAgendamentoRepository from '../typeorm/repositories/TipoAgendamentoRepository';

interface IRequest {
  nome: string;
  status: 'A' | 'I';
}

export default class CreateTipoAgendamentoService {
  public async execute({ nome, status }: IRequest): Promise<TipoAgendamento> {
    const tipoAgendamentoRepository = getCustomRepository(TipoAgendamentoRepository);
    const tipoAgendamentoExists = await tipoAgendamentoRepository.findByName(nome);

    if (tipoAgendamentoExists) {
      throw new AppError('There is already a TipoAgendamento with this name');
    }

    const tipoAgendamento = tipoAgendamentoRepository.create({
      nome,
      status,
      dataAlteracao: new Date(),
    });

    await tipoAgendamentoRepository.save(tipoAgendamento);

    return tipoAgendamento;
  }
}
