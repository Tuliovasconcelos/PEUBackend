import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Risco from '../typeorm/entities/Risco';
import RiscoRepository from '../typeorm/repositories/RiscoRepository';

interface IRequest {
  idRisco: number;
  descricao: string;
  status: string;
}

export default class UpdateRiscoService {
  public async execute({ idRisco, descricao, status }: IRequest): Promise<Risco> {
    const riscoRepository = getCustomRepository(RiscoRepository);

    const risco = await riscoRepository.findById(idRisco);

    if (!risco) {
      throw new AppError('Risco not found');
    }

    risco.descricao = descricao;
    risco.status = status;

    await riscoRepository.save(risco);

    return risco;
  }
}

