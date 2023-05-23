import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioQueixaSaudeRepository from '../typeorm/repositories/ProntuarioQueixaSaudeRepository';

interface IRequest {
  idQueixaSaude: number;
}

export default class DeleteProntuarioQueixaSaudeService {
  public async execute({ idQueixaSaude }: IRequest): Promise<void> {
    const prontuarioQueixaSaudeRepository = getCustomRepository(ProntuarioQueixaSaudeRepository);
    const prontuarioQueixaSaude = await prontuarioQueixaSaudeRepository.findById(idQueixaSaude);

    if (!prontuarioQueixaSaude) {
      throw new AppError('Queixa de saúde not found.');
    }

    await prontuarioQueixaSaudeRepository.remove(prontuarioQueixaSaude);
  }
}
