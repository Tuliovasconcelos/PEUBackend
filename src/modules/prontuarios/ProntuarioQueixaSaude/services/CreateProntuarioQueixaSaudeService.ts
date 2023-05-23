import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioQueixaSaude from '../typeorm/entities/ProntuarioQueixaSaude';
import ProntuarioQueixaSaudeRepository from '../typeorm/repositories/ProntuarioQueixaSaudeRepository';

interface IRequest {
  idProntuario: number;
  dataRegistro: Date;
  descricao: string;
  status: 'ativo' | 'inativo';
}

export default class CreateProntuarioQueixaSaudeService {
  public async execute({
    idProntuario,
    dataRegistro,
    descricao,
    status,
  }: IRequest): Promise<ProntuarioQueixaSaude> {
    const prontuarioQueixaSaudeRepository = getCustomRepository(ProntuarioQueixaSaudeRepository);

    const prontuarioQueixaSaude = prontuarioQueixaSaudeRepository.create({
      idProntuario,
      dataRegistro,
      descricao,
      status,
    });

    await prontuarioQueixaSaudeRepository.save(prontuarioQueixaSaude);

    return prontuarioQueixaSaude;
  }
}
