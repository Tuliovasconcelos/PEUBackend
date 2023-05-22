import { getCustomRepository } from 'typeorm';
import Patologia from '../typeorm/entities/Patologia';
import PatologiaRepository from '../typeorm/repositories/PatologiaRepository';

interface IRequest {
  descricao: string;
  status: string;
}

export default class CreatePatologiaService {
  public async execute({ descricao, status }: IRequest): Promise<Patologia> {
    const patologiaRepository = getCustomRepository(PatologiaRepository);

    const patologia = patologiaRepository.create({
      descricao,
      status,
    });

    await patologiaRepository.save(patologia);

    return patologia;
  }
}

