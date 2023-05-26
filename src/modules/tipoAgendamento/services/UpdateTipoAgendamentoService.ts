import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import TipoAgendamento from '../typeorm/entities/TipoAgendamento';
import TipoAgendamentoRepository from '../typeorm/repositories/TipoAgendamentoRepository';

interface IRequest {
  idTipoAgendamento: number;
  nome?: string;
  status?: 'A' | 'I';
}

export default class UpdateTipoAgendamentoService {
  public async execute({ idTipoAgendamento, nome, status }: IRequest): Promise<TipoAgendamento> {
    const tipoAgendamentoRepository = getCustomRepository(TipoAgendamentoRepository);
    const tipoAgendamento = await tipoAgendamentoRepository.findById(idTipoAgendamento);

    if (!tipoAgendamento) {
      throw new AppError('TipoAgendamento not found');
    }

    if (nome) {
      tipoAgendamento.nome = nome;
    }

    if (status) {
      tipoAgendamento.status = status;
    }

    tipoAgendamento.dataAlteracao = new Date();

    await tipoAgendamentoRepository.save(tipoAgendamento);

    return tipoAgendamento;
  }
}
