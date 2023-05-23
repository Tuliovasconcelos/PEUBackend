import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Atendimento from '../typeorm/entities/Atendimento';
import AtendimentoRepository from '../typeorm/repositories/AtendimentoRepository';

interface IRequest {
  idAtendimento: number;
  idPaciente?: number;
  idMedico?: number;
  idProntuario?: number;
  idClinica?: number;
  idTipoAgendamento?: number;
  idPrograma?: number;
  dataAtendimento?: Date;
  horaAtendimento?: string;
  conclusao?: string;
  status?: 'ativo' | 'inativo';
}

export default class UpdateAtendimentoService {
  public async execute({ idAtendimento, ...data }: IRequest): Promise<Atendimento | null> {
    const atendimentoRepository = getCustomRepository(AtendimentoRepository);
    const atendimento = await atendimentoRepository.findById(idAtendimento);

    if (!atendimento) {
      throw new AppError('Atendimento not found');
    }

    Object.assign(atendimento, data);

    await atendimentoRepository.save(atendimento);

    return atendimento;
  }
}
