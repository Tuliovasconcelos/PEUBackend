import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import RiscoRepository from '../typeorm/repositories/RiscoRepository';


interface IRequest {
  idRisco: number;
}

export default class DeleteRiscoService {
  public async execute({ idRisco }: IRequest): Promise<void> {
    const riscoRepository = getCustomRepository(RiscoRepository);

    const risco = await riscoRepository.findById(idRisco);

    if (!risco) {
      throw new AppError('Risco not found');
    }

    await riscoRepository.remove(risco);
  }
}
