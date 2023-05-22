import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioHistoricoSaudeRepository from '../typeorm/repositories/ProntuarioHistoricoSaudeRepository';

interface IRequest {
  idProntuarioHistoricoSaude: number;
}

export default class DeleteProntuarioHistoricoSaudeService {
  public async execute({ idProntuarioHistoricoSaude }: IRequest): Promise<void> {
    const historicoRepository = getCustomRepository(ProntuarioHistoricoSaudeRepository);

    const historico = await historicoRepository.findById(idProntuarioHistoricoSaude);

    if (!historico) {
      throw new AppError('Historico not found.');
    }

    await historicoRepository.deleteHistorico(idProntuarioHistoricoSaude);
  }
}
