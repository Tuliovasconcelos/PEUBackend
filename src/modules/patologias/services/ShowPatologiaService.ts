import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Patologia from '../typeorm/entities/Patologia';
import PatologiaRepository from '../typeorm/repositories/PatologiaRepository';


interface IRequest {
  idPatologia: number;
}

export default class ShowPatologiaService {
  public async execute({ idPatologia }: IRequest): Promise<Patologia> {
    const patologiaRepository = getCustomRepository(PatologiaRepository);

    const patologia = await patologiaRepository.findById(idPatologia);

    if (!patologia) {
      throw new AppError('Especialidade not found');
    }

    return patologia;
  }
}

