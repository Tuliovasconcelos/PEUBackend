import { getCustomRepository } from 'typeorm';
import Risco from '../typeorm/entities/Risco';
import RiscoRepository from '../typeorm/repositories/RiscoRepository';

interface IRequest {
  descricao: string;
  status: string;
}

export default class CreateRiscoService {
  public async execute({ descricao, status }: IRequest): Promise<Risco> {
    const riscoRepository = getCustomRepository(RiscoRepository);

    const risco = riscoRepository.create({
      descricao,
      status,
    });

    await riscoRepository.save(risco);

    return risco;
  }
}

