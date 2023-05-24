import { getCustomRepository } from 'typeorm';
import ProntuarioHistoricoSaude from '../typeorm/entities/ProntuarioHistoricoSaude';
import ProntuarioHistoricoSaudeRepository from '../typeorm/repositories/ProntuarioHistoricoSaudeRepository';

export default class ListProntuarioHistoricoSaudeService {
  public async execute(): Promise<ProntuarioHistoricoSaude[]> {
    const historicoRepository = getCustomRepository(ProntuarioHistoricoSaudeRepository);

    const historicos = await historicoRepository.find();

    return historicos;
  }
}
