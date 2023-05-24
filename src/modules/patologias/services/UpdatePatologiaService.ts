import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Patologia from '../typeorm/entities/Patologia';
import PatologiaRepository from '../typeorm/repositories/PatologiaRepository';

interface IRequest {
  idPatologia: number;
  descricao: string;
  status: string;
}

export default class UpdatePatologiaService {
  public async execute({ idPatologia, descricao, status }: IRequest): Promise<Patologia> {
    const patologiaRepository = getCustomRepository(PatologiaRepository);

    const patologia = await patologiaRepository.findById(idPatologia);

    if (!patologia) {
      throw new AppError('Patologia not found');
    }

    patologia.descricao = descricao;
    patologia.status = status;

    await patologiaRepository.save(patologia);

    return patologia;
  }
}

