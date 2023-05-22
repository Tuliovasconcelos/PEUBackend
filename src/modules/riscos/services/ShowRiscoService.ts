import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Risco from '../typeorm/entities/Risco';
import RiscoRepository from '../typeorm/repositories/RiscoRepository';

interface IRequest {
  idRisco: number;
}

export default class ShowRiscoService {
  public async execute({ idRisco }: IRequest): Promise<Risco> {
    const riscoRepository = getCustomRepository(RiscoRepository);

    const risco = await riscoRepository.findById(idRisco);

    if (!risco) {
      throw new AppError('Risco not found');
    }

    return risco;
  }
}

