import { getCustomRepository } from 'typeorm';
import Risco from '../typeorm/entities/Risco';
import RiscoRepository from '../typeorm/repositories/RiscoRepository';

export default class ListRiscoService {
  public async execute(): Promise<Risco[]> {
    const riscoRepository = getCustomRepository(RiscoRepository);

    const risco = await riscoRepository.find();

    return risco;
  }
}

