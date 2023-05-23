import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioHabitoVida from '../typeorm/entities/ProntuarioHabitoVida';
import ProntuarioHabitoVidaRepository from '../typeorm/repositories/ProntuarioHabitoVidaRepository';

interface IRequest {
  idHabitoVida: number;
  dataRegistro: Date;
  descricao: string;
  status: 'ativo' | 'inativo';
}

export default class UpdateProntuarioHabitoVidaService {
  public async execute({
    idHabitoVida,
    dataRegistro,
    descricao,
    status,
  }: IRequest): Promise<ProntuarioHabitoVida> {
    const prontuarioHabitoVidaRepository = getCustomRepository(ProntuarioHabitoVidaRepository);
    const prontuarioHabitoVida = await prontuarioHabitoVidaRepository.findById(idHabitoVida);

    if (!prontuarioHabitoVida) {
      throw new AppError('Queixa de saúde not found.');
    }

    prontuarioHabitoVida.dataRegistro = dataRegistro;
    prontuarioHabitoVida.descricao = descricao;
    prontuarioHabitoVida.status = status;

    await prontuarioHabitoVidaRepository.save(prontuarioHabitoVida);

    return prontuarioHabitoVida;
  }
}
