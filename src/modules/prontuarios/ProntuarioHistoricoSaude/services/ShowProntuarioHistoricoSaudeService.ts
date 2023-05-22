import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioHistoricoSaude from '../typeorm/entities/ProntuarioHistoricoSaude';
import ProntuarioHistoricoSaudeRepository from '../typeorm/repositories/ProntuarioHistoricoSaudeRepository';

interface IRequest {
  idProntuarioHistoricoSaude: number;
}

export default class ShowProntuarioHistoricoSaudeService {
  public async execute({ idProntuarioHistoricoSaude }: IRequest): Promise<ProntuarioHistoricoSaude> {
    const historicoRepository = getCustomRepository(ProntuarioHistoricoSaudeRepository);

    const historico = await historicoRepository.findById(idProntuarioHistoricoSaude);

    if (!historico) {
      throw new AppError('Historico not found.');
    }

    return historico;
  }
}
