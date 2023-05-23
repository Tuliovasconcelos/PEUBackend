import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioHabitoVida from '../typeorm/entities/ProntuarioHabitoVida';
import ProntuarioHabitoVidaRepository from '../typeorm/repositories/ProntuarioHabitoVidaRepository';

interface IRequest {
  idProntuario: number;
  dataRegistro: Date;
  descricao: string;
  status: 'ativo' | 'inativo';
}

export default class CreateProntuarioHabitoVidaService {
  public async execute({
    idProntuario,
    dataRegistro,
    descricao,
    status,
  }: IRequest): Promise<ProntuarioHabitoVida> {
    const prontuarioHabitoVidaRepository = getCustomRepository(ProntuarioHabitoVidaRepository);

    const prontuarioHabitoVida = prontuarioHabitoVidaRepository.create({
      idProntuario,
      dataRegistro,
      descricao,
      status,
    });

    await prontuarioHabitoVidaRepository.save(prontuarioHabitoVida);

    return prontuarioHabitoVida;
  }
}
