import { getCustomRepository } from 'typeorm';
import ProntuarioQueixaSaude from '../typeorm/entities/ProntuarioQueixaSaude';
import ProntuarioQueixaSaudeRepository from '../typeorm/repositories/ProntuarioQueixaSaudeRepository';

export default class ListProntuarioQueixaSaudeService {
  public async execute(): Promise<ProntuarioQueixaSaude[]> {
    const prontuarioQueixaSaudeRepository = getCustomRepository(ProntuarioQueixaSaudeRepository);

    const prontuariosQueixaSaude = await prontuarioQueixaSaudeRepository.find();

    return prontuariosQueixaSaude;
  }
}
