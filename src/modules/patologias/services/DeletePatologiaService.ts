import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PatologiaRepository from '../typeorm/repositories/PatologiaRepository';

interface IRequest {
  idPatologia: number;
}

export default class DeletePatologiaService {
  public async execute({ idPatologia }: IRequest): Promise<void> {
    const patologiaRepository = getCustomRepository(PatologiaRepository);

    const patologia = await patologiaRepository.findById(idPatologia);

    if (!patologia) {
      throw new AppError('Patologia not found');
    }

    await patologiaRepository.remove(patologia);
  }
}
