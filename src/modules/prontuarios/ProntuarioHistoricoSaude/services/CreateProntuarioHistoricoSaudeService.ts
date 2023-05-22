import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioHistoricoSaude from '../typeorm/entities/ProntuarioHistoricoSaude';
import ProntuarioHistoricoSaudeRepository from '../typeorm/repositories/ProntuarioHistoricoSaudeRepository';

interface IRequest {
  idProntuario: number;
  dataRegistro: Date;
  descricao: string;
  status: 'ativo' | 'inativo';
}

export default class CreateProntuarioHistoricoSaudeService {
  public async execute({
    idProntuario,
    dataRegistro,
    descricao,
    status,
  }: IRequest): Promise<ProntuarioHistoricoSaude> {
    const historicoRepository = getCustomRepository(ProntuarioHistoricoSaudeRepository);

    const historico = historicoRepository.create({
      idProntuario,
      dataRegistro,
      descricao,
      status,
      dataAlteracao: new Date(),
    });

    await historicoRepository.save(historico);

    return historico;
  }
}
