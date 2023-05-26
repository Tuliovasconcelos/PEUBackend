import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import AgendamentoTipo from '../typeorm/entities/agendamentoTipo';
import AgendamentoTipoRepository from '../typeorm/repositories/AgendamentoTipoRepository';

interface IRequest {
  idAgendamentoTipo: number;
  nome?: string;
  status?: 'A' | 'I';
}

export default class UpdateAgendamentoTipoService {
  public async execute({ idAgendamentoTipo, nome, status }: IRequest): Promise<AgendamentoTipo> {
    const agendamentoTipoRepository = getCustomRepository(AgendamentoTipoRepository);
    const agendamentoTipo = await agendamentoTipoRepository.findByidAgendamentoTipo(idAgendamentoTipo);

    if (!agendamentoTipo) {
      throw new AppError('AgendamentoTipo not found');
    }

    if (nome) {
      const agendamentoTipoExists = await agendamentoTipoRepository.findByName(nome);

      if (agendamentoTipoExists && agendamentoTipoExists.idAgendamentoTipo !== idAgendamentoTipo) {
        throw new AppError('There is already an AgendamentoTipo with this name');
      }

      agendamentoTipo.nome = nome;
    }

    if (status) {
      agendamentoTipo.status = status;
    }

    agendamentoTipo.dataAlteracao = new Date();

    await agendamentoTipoRepository.save(agendamentoTipo);

    return agendamentoTipo;
  }
}
