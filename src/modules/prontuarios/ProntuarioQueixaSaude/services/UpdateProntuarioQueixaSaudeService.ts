import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioQueixaSaude from '../typeorm/entities/ProntuarioQueixaSaude';
import ProntuarioQueixaSaudeRepository from '../typeorm/repositories/ProntuarioQueixaSaudeRepository';

interface IRequest {
  idQueixaSaude: number;
  dataRegistro: Date;
  descricao: string;
  status: 'A' | 'I';
}

export default class UpdateProntuarioQueixaSaudeService {
  public async execute({
    idQueixaSaude,
    dataRegistro,
    descricao,
    status,
  }: IRequest): Promise<ProntuarioQueixaSaude> {
    const prontuarioQueixaSaudeRepository = getCustomRepository(ProntuarioQueixaSaudeRepository);
    const prontuarioQueixaSaude = await prontuarioQueixaSaudeRepository.findById(idQueixaSaude);

    if (!prontuarioQueixaSaude) {
      throw new AppError('Queixa de saúde not found.');
    }

    prontuarioQueixaSaude.dataRegistro = dataRegistro;
    prontuarioQueixaSaude.descricao = descricao;
    prontuarioQueixaSaude.status = status;

    await prontuarioQueixaSaudeRepository.save(prontuarioQueixaSaude);

    return prontuarioQueixaSaude;
  }
}
