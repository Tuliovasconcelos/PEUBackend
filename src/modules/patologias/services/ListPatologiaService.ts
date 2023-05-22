import { getCustomRepository } from 'typeorm';
import Patologia from '../typeorm/entities/Patologia';
import PatologiaRepository from '../typeorm/repositories/PatologiaRepository';

export default class ListPatologiaService {
  public async execute(): Promise<Patologia[]> {
    const patologiaRepository = getCustomRepository(PatologiaRepository);

    const patologia = await patologiaRepository.find();

    return patologia;
  }
}

