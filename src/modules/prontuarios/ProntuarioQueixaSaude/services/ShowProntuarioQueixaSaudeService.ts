import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioQueixaSaude from '../typeorm/entities/ProntuarioQueixaSaude';
import ProntuarioQueixaSaudeRepository from '../typeorm/repositories/ProntuarioQueixaSaudeRepository';

interface IRequest {
  idQueixaSaude: number;
}

export default class ShowProntuarioQueixaSaudeService {
  public async execute({ idQueixaSaude }: IRequest): Promise<ProntuarioQueixaSaude> {
    const prontuarioQueixaSaudeRepository = getCustomRepository(ProntuarioQueixaSaudeRepository);
    const prontuarioQueixaSaude = await prontuarioQueixaSaudeRepository.findById(idQueixaSaude);

    if (!prontuarioQueixaSaude) {
      throw new AppError('Queixa de saúde not found.');
    }

    return prontuarioQueixaSaude;
  }
}
