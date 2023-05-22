import { getCustomRepository } from 'typeorm';
import ProntuarioHistoricoSaude from '../typeorm/entities/ProntuarioHistoricoSaude';
import ProntuarioHistoricoSaudeRepository from '../typeorm/repositories/ProntuarioHistoricoSaudeRepository';

interface IRequest {
  idProntuario: number;
}

export default class ListProntuarioHistoricoSaudeService {
  public async execute({ idProntuario }: IRequest): Promise<ProntuarioHistoricoSaude[]> {
    const historicoRepository = getCustomRepository(ProntuarioHistoricoSaudeRepository);

    const historicos = await historicoRepository.findAllByProntuario(idProntuario);

    return historicos;
  }
}
